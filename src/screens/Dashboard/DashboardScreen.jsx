import { useState, useEffect, useContext } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";

import AuthContext from "../../context/AuthContext";
import LoadingContext from "../../context/LoadingContext";

import AndroidSafeView from "../../components/AndroidSafeView";

// https://www.npmjs.com/package/react-native-chart-kit
import { LineChart } from "react-native-chart-kit";

export default function DashboardScreen({}) {
  const { currentUser, setCurrentUser, ipAddress, setIpAddress } =
    useContext(AuthContext);
  const { setLoading } = useContext(LoadingContext);
  const [viewWidth, setViewWidth] = useState(0); // Initialize with 0

  const [data, setData] = useState({
    wattsConsumed: 0.0,
    accountBalanceInRupees: 0.0,
    shouldGetService: false,
    previousVoltageReading: 0.0,
    previousCurrentReading: 0.0,
  });

  const onLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setViewWidth(width); // Set the width in state
  };

  const Box = ({ color, heading, text }) => {
    return (
      <View className={`flex-grow h-24 ${color} m-1 p-2`}>
        <Text className="font-quantico font-light text-sm">{heading}</Text>
        <Text className="font-poppins font-bold text-xl">{text}</Text>
      </View>
    );
  };

  const handleLogout = () => {
    setCurrentUser({
      email: undefined,
      name: undefined,
      nicNumber: undefined,
      accessToken: undefined,
      isAuthenticated: false,
      hasSeenWelcome: false,
    });
    setIpAddress(undefined);
  };

  const handleHadinaClick = () => {
    ToastAndroid.show("Developed by Hadina", 200);
  };

  async function fetchCustomer() {
    try {
      setLoading(true);

      const headers = new Headers();
      headers.append("accept", "application/json");
      headers.append("Authorization", `Bearer ${currentUser.accessToken}`);

      const resp = await fetch(`${ipAddress}/customers/me`, {
        method: "GET",
        headers,
      });
      const response = await resp.json();
      if (resp.status !== 200) throw new Error(response?.detail);

      setCurrentUser((prev) => ({
        ...prev,
        name: response.name,
        email: response.email,
        nicNumber: response.customer.nic_number,
      }));
    } catch (err) {
      ToastAndroid.show(`${err?.message || "Something went wrong"}`, 100);
    } finally {
      setLoading(false);
    }
  }

  async function fetchData() {
    try {
      const headers = new Headers();
      headers.append("accept", "application/json");
      headers.append("Authorization", `Bearer ${currentUser.accessToken}`);

      const resp = await fetch(`${ipAddress}/customers/me`, {
        method: "GET",
        headers,
      });
      const response = await resp.json();
      if (resp.status !== 200) throw new Error(response?.detail);

      setData((prev) => ({
        ...prev,
        wattsConsumed: response.customer.watts_consumed,
        accountBalanceInRupees: response.customer.account_balance_in_rupees,
        shouldGetService: response.customer.should_get_service,
        previousVoltageReading: response.customer.previous_voltage_reading,
        previousCurrentReading: response.customer.previous_current_reading,
      }));
    } catch (err) {
      ToastAndroid.show(`${err?.message || "Something went wrong"}`, 100);
    }
  }

  useEffect(() => {
    if (!currentUser?.name || !currentUser?.email || !currentUser?.nicNumber) {
      fetchCustomer();
    }

    // Set up a timer to call fetchData every 7 seconds (7000 milliseconds)
    const timerId = setInterval(fetchData, 10000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timerId);
  }, []);

  return (
    <AndroidSafeView>
      <View className="w-screen min-h-screen">
        <View className="h-screen bg-white">
          <ScrollView showsVerticalScrollIndicator={false}>
            <View className="px-10 py-5">
              {/* Top welcome */}
              <View className="text-black mb-4">
                <Text className="font-quantico text-lg uppercase">Welcome</Text>
                <Text className="font-poppins font-bold text-xl">
                  {currentUser.name}
                </Text>
                <Text className="font-poppins font-thin text-xs">
                  {currentUser.email}
                </Text>
                <Text className="font-poppins font-thin text-xs border-b-2 border-darkgreen">
                  {currentUser.nicNumber}
                </Text>
              </View>
              {/* Top total consumed */}
              <View className="text-black gap-2">
                <Text className="font-quantico font-semibold text-xl">
                  Total Consumed
                </Text>
                <View className="flex flex-row">
                  <Text className="font-poppins font-bold text-5xl mr-2">
                    {data.wattsConsumed}
                  </Text>
                  <Text className="font-poppins font-light text-base uppercase bg-">
                    Watts
                  </Text>
                </View>
              </View>
              {/* Boxes */}
              <View className="flex flex-row justify-between">
                <Box
                  color="bg-[#98C9B9]"
                  heading="Voltage"
                  text={`${data.previousVoltageReading}v`}
                />
                <Box
                  color="bg-[#B8DBCF]"
                  heading="Current"
                  text={`${data.previousCurrentReading}mA`}
                />
                <Box
                  color="bg-[#DAEDE7]"
                  heading="Power"
                  text={`${
                    data.previousVoltageReading * data.previousCurrentReading
                  }w`}
                />
              </View>
              {/* Chart */}
              <View onLayout={onLayout} className="mt-8 -mb-5">
                <LineChart
                  data={{
                    labels: [
                      "Value 1",
                      "Value 2",
                      "Value 3",
                      "Value 4",
                      "Value 5",
                    ],
                    datasets: [
                      {
                        data: [
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                        ],
                      },
                    ],
                  }}
                  width={viewWidth} // from react-native
                  height={200}
                  yAxisSuffix=" w"
                  yAxisInterval={1} // optional, defaults to 1
                  withShadow={true}
                  withInnerLines={true}
                  withOuterLines={false}
                  withHorizontalLabels={true}
                  withVerticalLabels={false}
                  chartConfig={{
                    backgroundGradientFrom: "#ffffff",
                    backgroundGradientTo: "#ffffff",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    propsForDots: {
                      r: "4",
                      strokeWidth: "1",
                      stroke: "#000000",
                    },
                  }}
                  bezier
                />
              </View>
            </View>
            {/* Bottom Buttons */}
            <View className="w-full pb-4">
              <TouchableOpacity
                className={`h-20 flex items-center justify-center ${
                  data.shouldGetService ? "bg-green-100" : "bg-red-100"
                }`}
              >
                <Text className="font-quantico text-xl text-center uppercase">
                  Service: {data.shouldGetService ? "Active" : "Inactive"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="h-20 bg-slate-400 flex items-center justify-center"
                onPress={handleHadinaClick}
              >
                <Text className="font-quantico text-xl text-center uppercase">
                  Balance: {data.accountBalanceInRupees.toFixed(2)}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="h-20 bg-slate-600 flex items-center justify-center"
                onPress={handleLogout}
              >
                <Text className="font-quantico text-xl text-white text-center uppercase">
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </AndroidSafeView>
  );
}

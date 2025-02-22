// import { View, Text } from 'react-native';

// export default function ScanScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Scan Fungi Here</Text>
//     </View>
//   );
// }

// import React, { useState, useRef, useEffect } from 'react';
// import { View, Text, Button, StyleSheet, Alert } from 'react-native';
// import { Camera } from 'expo-camera';

// export default function ScanScreen() {
//   const [hasPermission, setHasPermission] = useState<boolean | null>(null);
// const [type, setType] = useState(Camera.Constants.Type.back); // Default to back camera
//   const [photo, setPhoto] = useState(null);
//   const cameraRef = useRef(null);

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return (
//       <View>
//         <Text>Requesting camera permission...</Text>
//       </View>
//     );
//   }

//   if (hasPermission === false) {
//     return (
//       <View>
//         <Text>No access to camera</Text>
//       </View>
//     );
//   }

//   // Function to take a picture
//   const takePicture = async () => {
//     if (cameraRef.current) {
//       const data = await cameraRef.current.takePictureAsync();
//       setPhoto(data.uri); // Save the captured image URI
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Scan Fungi Here</Text>

//       {/* Camera view */}
//       <Camera style={styles.camera} type={type} ref={cameraRef}>
//         <View style={styles.buttonContainer}>
//           <Button
//             title="Flip Camera"
//             onPress={() =>
//               setType(
//                 type === Camera.Constants.Type.back
//                   ? Camera.Constants.Type.front
//                   : Camera.Constants.Type.back
//               )
//             }
//           />
//         </View>
//       </Camera>

//       {/* Capture Button */}
//       <View style={styles.captureContainer}>
//         <Button title="Take Picture" onPress={takePicture} />
//       </View>

//       {/* Display the captured photo */}
//       {photo && <Image source={{ uri: photo }} style={styles.capturedImage} />}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'black',
//   },
//   camera: {
//     flex: 1,
//     width: '100%',
//   },
//   buttonContainer: {
//     flex: 0.1,
//     justifyContent: 'flex-end',
//     marginBottom: 30,
//   },
//   captureContainer: {
//     marginTop: 20,
//   },
//   capturedImage: {
//     marginTop: 20,
//     width: 300,
//     height: 400,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 20,
//   },
// });

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ScanScreen() {
  const [type, setType] = useState('back'); // Use simple strings for camera type

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan Fungi Here</Text>

      {/* Placeholder for camera */}
      <View style={styles.cameraPlaceholder}>
        <Text style={styles.cameraText}>Camera Placeholder</Text>
      </View>

      {/* Button to flip the camera */}
      <Button
        title="Flip Camera"
        onPress={() => setType(type === 'back' ? 'front' : 'back')} // Toggle between back and front cameras
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  cameraPlaceholder: {
    width: 300,
    height: 400,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
  },
  cameraText: {
    color: '#888',
    fontSize: 18,
  },
});

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
// TouchableOpacity adalah pilihan efek/feedback/umpan balik memudar ketika mengklik Button yang ditampilkan kepada user

const Button = ({ onPress, children }) => { // onPress yang ada di dalam kurung adalah props yang dilempar dari file AlbumDetail
                                  // sama dengan onPress={() => console.log(title)}
  const { buttonStyle, textStyle } = styles;
  // setiap ada event diharap testnya dengan console.log dahulu
  // <TouchableOpacity onPress={() => console.log('pressed!')} style={buttonStyle}>
  // dan ketika sudah muncul di console hanya perlu menghapusnya untuk menjalankan console.log di parent
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center', // agar text berada di tengah
    color: '#007aff', // warna
    fontSize: 16, // ukuran
    fontWeight: '600', // ketebalan
    paddingTop: 10, // jarak atas
    paddingBottom: 10 // jarak bawah
  },
  buttonStyle: {
    flex: 1, // mengikuti aturan flex ini 1 perluas ke konten
    alignSelf: 'stretch', // garis
    backgroundColor: '#fff', // warna
    borderRadius: 5, // border/batasan
    borderWidth: 1, // ketebalan border
    borderColor: '#007aff', // warna biru map
    marginLeft: 5, // jarak kiri dari border
    marginRight: 5 // jarak kanan dari border
  }
};

export { Button };

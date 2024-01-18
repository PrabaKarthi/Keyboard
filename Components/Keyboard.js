import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View, Text, Button  } from "react-native";
import { hsize, wsize } from '../library/Scale' 

import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Keyboard() {
    return (
        <View style={styles.button}>
            <TouchableOpacity style={styles.margin}>
            <FontAwesome5  style={styles.box} name="microphone-alt" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>F1</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>F2</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>F3</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>F4</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box1}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Feather style={styles.box1} name="delete" size={30} color="black" />
            </TouchableOpacity>
                {/* Next Row (2) */}
            <TouchableOpacity style={styles.margin}>
                <Entypo style={styles.box} name="align-right" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>F5</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>F6</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>F7</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>F8</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box1}>End</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>Ins</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>Del</Text>
            </TouchableOpacity>
                {/* Next Row (3) */}
                <TouchableOpacity style={styles.margin}>
                <Text style={styles.box}>Ctrl</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>F9</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>F10</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>F11</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>F12</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box1}>PgUp</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons style={styles.box1} name="return-down-back" size={24} color="black" />
            </TouchableOpacity>
                {/* Next Row (4) */}
                <TouchableOpacity style={styles.margin}>
                    <Feather style={styles.box} name="chevrons-up" size={24} color="black" />
                </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>SyRq</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>ScrL</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>Brk</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>NumL</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>,</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box1}>PgDn</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign style={styles.box} name="upcircleo" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Feather style={styles.box} name="chevrons-up" size={24} color="black" />
            </TouchableOpacity>

                {/* Next Row (5) */}
                <TouchableOpacity style={styles.margin}>
                <Text style={styles.box}>Esc</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome5 style={styles.box} name="smile" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>Alt</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box2}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>Fn</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.box}>O</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign style={styles.box} name="leftcircleo" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign style={styles.box} name="downcircleo" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign style={styles.box} name="rightcircleo" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 140,    
    },
    box: {
        height: hsize(35),
        width: wsize(45),
        borderWidth: 2,
        borderRadius: 7,
        borderColor: '#d3d3d3',
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 7,
        marginLeft: 10,
        backgroundColor: '#FFFFFF',
        color: 'gray',
        opacity: 1.0
    },
    box1: {
        height: hsize(35),
        width: wsize(108),
        borderWidth: 2,
        borderRadius: 7,
        borderColor: '#d3d3d3',
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 7,
        backgroundColor: '#FFFFFF',
        color: 'gray',
        opacity: 1.0

    },
    box2: {
        height: hsize(35),
        width: wsize(288),
        borderWidth: 2,
        borderRadius: 7,
        borderColor: '#d3d3d3',
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 7,
        backgroundColor: '#FFFFFF',
        color: 'gray',
        opacity: 1.0
    },

})
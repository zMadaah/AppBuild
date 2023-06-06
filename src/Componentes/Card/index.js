import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Card() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.TextBox}>Saúde</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25, }}>

                    <TouchableOpacity>
                        <View style={{ alignSelf: 'center' }}>
                         <MaterialIcons name="local-hospital" size={55} color={"#0b5394"} />
                        </View>
                        <Text style={styles.text}> Exames </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ alignSelf: 'center' }}>
                         <FontAwesome name="stethoscope" size={55} color={"#0b5394"} />
                        </View>
                        <Text style={styles.text}> Consulta </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ alignSelf: 'center' }}>
                            <FontAwesome name="phone" size={55} color={"#0b5394"} />
                        </View>
                        <Text style={styles.text}> Telemedicina </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ alignSelf: 'center' }}>
                        <Entypo name="heart" size={55} color={"#0b5394"} />
                        </View>
                        <Text style={styles.text}> Seguro de vida </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>

                    <TouchableOpacity>
                        <View style={{ alignSelf: 'center' }}>
                            <Entypo name="location" size={55} color={"#0b5394"} />
                        </View>
                        <Text style={styles.text}>Redes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ alignSelf: 'center' }}>
                            <Entypo name="credit" size={55} color={"#0b5394"} />
                        </View>
                        <Text style={styles.text}>Planos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ alignSelf: 'center' }}>
                        <FontAwesome name="vcard" size={55} color={"#0b5394"} />
                        </View>
                        <Text style={styles.text}>Carteirinha</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ alignSelf: 'center' }}>
                        <MaterialCommunityIcons name="key" size={55} color={"#0b5394"} />
                        </View>
                        <Text style={styles.text}> Token </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 13,
        color: "#000000",
    },
    box: {
        width: 375,
        height: 300,
        backgroundColor: "#ffffff",
        borderRadius: 17,
        padding: 10,
        marginTop: 8,

    },
    TextBox: {
        color: "#0b5394",
        alignSelf: 'center',
    
        width: '100%',
        fontSize: 20,
        fontWeight:'300',
    },
})
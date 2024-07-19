// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Text, Card, Paragraph } from 'react-native-paper';

export default function LoginPage({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.LoginContainer}>
                <Card>
                    <Card.Title title="TALLER MECANICO APP" />
                    <Card.Content>
                        <TextInput
                            label="Email"
                            value={email}
                            onChangeText={text => setEmail(text)}
                            style={styles.EmailTextInput}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <TextInput
                            label="Password"
                            value={password}
                            style={styles.PasswordTextInput}
                            onChangeText={text => setPassword(text)}
                            secureTextEntry
                        />
                        <Button mode="contained" onPress={() => { alert("LOGIN COMPLETED") }}>
                            Login
                        </Button>
                    </Card.Content>
                </Card>
            </View>
            <View style={styles.AppInfoContainer}>
                <Card>
                    <Card.Title title="Información del App" />
                    <Card.Content>
                        <Paragraph>
                            Bienvenido a la aplicación del Taller Mecánico. Aquí podrás gestionar tus citas, recibir notificaciones sobre el estado de tu vehículo y mucho más. Nuestro objetivo es proporcionar un servicio eficiente y de calidad para todos nuestros clientes.
                        </Paragraph>
                        <Paragraph>
                            Características principales:
                        </Paragraph>
                        <Paragraph>
                            - Gestión de citas.
                        </Paragraph>
                        <Paragraph>
                            - Notificaciones en tiempo real.
                        </Paragraph>
                        <Paragraph>
                            - Historial de servicios.
                        </Paragraph>
                        <Paragraph>
                            ¡Gracias por confiar en nosotros!
                        </Paragraph>
                    </Card.Content>
                </Card>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    EmailTextInput: {
        marginBottom: 25
    },
    PasswordTextInput: {
        marginBottom: 25
    },
    LoginContainer: {
        marginTop: 75,
        padding: 20
    },
    AppInfoContainer: {
        marginTop: 20,
        padding: 20
    },

});


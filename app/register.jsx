import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { router } from 'expo-router';


const RegisterStep3 = ({ onSubmit, onPrevious, initialData }) => {
    const [why, setWhy] = useState(initialData?.why || []);

    const toggleWhy = (reason) => {
        if (why.includes(reason)) {
            setWhy(why.filter((item) => item !== reason));
        } else {
            setWhy([...why, reason]);
        }
    };

    const handleProceed = () => {
        // onSubmit({ why });
        // alert('Navigating to Home Screen (Simulated)');
        router.push("/home")
    };

    return (
        <ScrollView contentContainerStyle={styles3.container}>
            <Text style={styles3.title}>Set up your account</Text>
            <Text style={styles3.subtitle}>
                We ask you this to tailor your experience and give you the right support
                and content to get your cold on.
            </Text>
            <Text style={styles3.step}>STEP 3/3</Text>
            <View style={styles3.progressBar}>
                <View style={[styles3.progress, { width: '100%' }]} />
            </View>

            <Text style={styles3.question}>What's your why?</Text>
            <Text style={styles3.subQuestion}>You can select more than one...</Text>

            <TouchableOpacity
                style={[styles3.whyOption, why.includes('sport') && styles3.selectedWhy]}
                onPress={() => toggleWhy('sport')}
            >
                <Text style={styles3.whyLabel}>SPORT & TRAINING RECOVERY PURPOSES</Text>
                <Text style={styles3.whySubLabel}>"To wake up, change state or enhance mood"</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles3.whyOption, why.includes('wellbeing') && styles3.selectedWhy]}
                onPress={() => toggleWhy('wellbeing')}
            >
                <Text style={styles3.whyLabel}>WELLBEING & LONGEVITY</Text>
                <Text style={styles3.whySubLabel}>"The challenge helps me feel strong and manage stress"</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles3.whyOption, why.includes('sleep') && styles3.selectedWhy]}
                onPress={() => toggleWhy('sleep')}
            >
                <Text style={styles3.whyLabel}>IMPROVE SLEEP</Text>
                <Text style={styles3.whySubLabel}>"Boost circulation, metabolism, and immune system"</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles3.whyOption, why.includes('focus') && styles3.selectedWhy]}
                onPress={() => toggleWhy('focus')}
            >
                <Text style={styles3.whyLabel}>IMPROVE FOCUS</Text>
                <Text style={styles3.whySubLabel}>"Accelerate post-exercise healing and restoration"</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles3.whyOption, why.includes('energy') && styles3.selectedWhy]}
                onPress={() => toggleWhy('energy')}
            >
                <Text style={styles3.whyLabel}>INCREASE ENERGY</Text>
                <Text style={styles3.whySubLabel}>"Using the cold water to help quiet my mind and body"</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles3.button} onPress={handleProceed}>
                <Text style={styles3.buttonText}>Proceed</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles3.secondaryButton} onPress={onPrevious}>
                <Text style={styles3.secondaryButtonText}>Previous</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};


const RegisterStep2 = ({ onNext, onPrevious, initialData }) => {
    const [experience, setExperience] = useState(initialData?.experience || '');

    const handleProceed = () => {
        if (experience) {
            onNext({ experience });
        } else {
            alert('Please select your experience level.');
        }
    };

    return (
        <View style={styles2.container}>
            <Text style={styles2.title}>Set up your account</Text>
            <Text style={styles2.subtitle}>
                We ask you this to tailor your experience and give you the right support
                and content to get your cold on.
            </Text>
            <Text style={styles2.step}>STEP 2/3</Text>
            <View style={styles2.progressBar}>
                <View style={[styles2.progress, { width: '66.66%' }]} />
            </View>

            <Text style={styles2.question}>How experienced are you in cold water immersion?</Text>

            <View style={styles2.radioContainer}>
                <TouchableOpacity style={styles2.radioOption} onPress={() => setExperience('never')}>
                    <RadioButton value="never" status={experience === 'never' ? 'checked' : 'unchecked'} onPress={() => setExperience('never')} />
                    <View>
                        <Text style={styles2.radioLabel}>NEVER HAD A BATH</Text>
                        <Text style={styles2.radioSubLabel}>"New to it but excited to get started"</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles2.radioOption} onPress={() => setExperience('occasional')}>
                    <RadioButton value="occasional" status={experience === 'occasional' ? 'checked' : 'unchecked'} onPress={() => setExperience('occasional')} />
                    <View>
                        <Text style={styles2.radioLabel}>DONE OCCASSIONAL ICE BATHS</Text>
                        <Text style={styles2.radioSubLabel}>"Dabble in cold dips when the mood strikes"</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles2.radioOption} onPress={() => setExperience('routine')}>
                    <RadioButton value="routine" status={experience === 'routine' ? 'checked' : 'unchecked'} onPress={() => setExperience('routine')} />
                    <View>
                        <Text style={styles2.radioLabel}>DO ICE BATH AS PART OF DAILY ROUTINE</Text>
                        <Text style={styles2.radioSubLabel}>"Regularly enjoy cold water as part of my routine"</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles2.radioOption} onPress={() => setExperience('expert')}>
                    <RadioButton value="expert" status={experience === 'expert' ? 'checked' : 'unchecked'} onPress={() => setExperience('expert')} />
                    <View>
                        <Text style={styles2.radioLabel}>ICE BATH EXPERT</Text>
                        <Text style={styles2.radioSubLabel}>"A lot of experience getting in cold water"</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles2.button} onPress={handleProceed}>
                <Text style={styles2.buttonText}>Proceed</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles2.secondaryButton} onPress={onPrevious}>
                <Text style={styles2.secondaryButtonText}>Previous</Text>
            </TouchableOpacity>
        </View>
    );
};


const RegisterStep1 = ({ onNext }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleProceed = () => {
        if (firstName && lastName && email && password && password === confirmPassword) {
            onNext({ firstName, lastName, email, password });
        } else {
            alert('Please fill all fields correctly and ensure passwords match.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Set up your account</Text>
            <Text style={styles.step}>STEP 1/3</Text>
            <View style={styles3.progressBar}>
                <View style={[styles3.progress, { width: '10%' }]} />
            </View>
            <Text style={styles.label}>First Name</Text>
            <TextInput style={styles.input} placeholder="Abdurrazzaq" value={firstName} onChangeText={setFirstName}/>

            <Text style={styles.label}>Last Name</Text>
            <TextInput style={styles.input} placeholder="Abdulmuhsin" value={lastName} onChangeText={setLastName}/>

            <Text style={styles.label}>Email Address</Text>
            <TextInput style={styles.input} placeholder="abdurrazzaqabdulmuhsin7@gmail.com" keyboardType="email-address" value={email} onChangeText={setEmail}/>

            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
                <TextInput style={styles.passwordInput} placeholder="********" secureTextEntry={!showPassword} value={password} onChangeText={setPassword} />
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => setShowPassword(!showPassword)}
                >
                    <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={24} color="gray" />
                </TouchableOpacity>
            </View>

            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="********"
                    secureTextEntry={!showConfirmPassword}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                    <Ionicons name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'} size={24} color="gray" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleProceed}>
                <Text style={styles.buttonText}>Proceed</Text>
            </TouchableOpacity>

            <View style={styles.signInContainer}>
                <Text style={styles.signInText}>Already have an account?</Text>
                <TouchableOpacity>
                    <Text style={styles.signInLink}> Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const Register = () => {
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState({});

    const handleNextStep = (data) => {
        setUserData({ ...userData, ...data });
        setStep(step + 1);
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = (data) => {
        setUserData({ ...userData, ...data });
        console.log('Final user data:', userData);
        alert('Navigating to Home Screen (Simulated)');
        // In a real application, you would navigate to your home screen here
    };

    switch (step) {
        case 1:
            return <RegisterStep1 onNext={handleNextStep} />;
        case 2:
            return (
                <RegisterStep2
                    onNext={handleNextStep}
                    onPrevious={handlePreviousStep}
                    initialData={userData}
                />
            );
        case 3:
            return (
                <RegisterStep3
                    onSubmit={handleSubmit}
                    onPrevious={handlePreviousStep}
                    initialData={userData}
                />
            );
        default:
            return null;
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
        textAlign: 'center',
    },
    step: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 20,
        textAlign: 'left',
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
        textAlign: 'left',
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#f9f9f9',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#f9f9f9',
    },
    passwordInput: {
        flex: 1,
    },
    icon: {
        paddingLeft: 10,
    },
    button: {
        backgroundColor: '#333',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signInContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    signInText: {
        color: 'gray',
        fontSize: 16,
    },
    signInLink: {
        color: '#007bff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 20,
        textAlign: 'center',
        lineHeight: 20,
    },
    step: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 8,
        textAlign: 'left',
    },
    progressBar: {
        height: 5,
        backgroundColor: '#ddd',
        borderRadius: 2.5,
        marginBottom: 20,
    },
    progress: {
        height: '100%',
        backgroundColor: '#333',
        borderRadius: 2.5,
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'left',
    },
    radioContainer: {
        marginBottom: 30,
    },
    radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    radioLabel: {
        fontSize: 16,
        color: '#333',
        marginLeft: 10,
        fontWeight: 'bold',
    },
    radioSubLabel: {
        fontSize: 14,
        color: 'gray',
        marginLeft: 10,
    },
    button: {
        backgroundColor: '#333',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    secondaryButton: {
        backgroundColor: 'transparent',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#333',
    },
    secondaryButtonText: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

const styles3 = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        paddingVertical:50,
        // justifyContent: 'flex-start',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 20,
        textAlign: 'center',
        lineHeight: 20,
    },
    step: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 8,
        textAlign: 'left',
    },
    progressBar: {
        height: 5,
        backgroundColor: '#ddd',
        borderRadius: 2.5,
        marginBottom: 20,
    },
    progress: {
        height: '100%',
        backgroundColor: '#333',
        borderRadius: 2.5,
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'left',
    },
    subQuestion: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 20,
        textAlign: 'left',
    },
    whyOption: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
    },
    selectedWhy: {
        borderColor: '#333',
        backgroundColor: '#f0f0f0',
    },
    whyLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    whySubLabel: {
        fontSize: 14,
        color: 'gray',
    },
    button: {
        backgroundColor: '#333',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    secondaryButton: {
        backgroundColor: 'transparent',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#333',
    },
    secondaryButtonText: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Register;
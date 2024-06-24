<template lang="">
    <div id="parent">
        <form @submit.prevent="formSubmit">
            <!-- Using v-model to save data in properties -->
             <label>Email: </label>
             <input type="emai" required v-model="email">
             <label>Password: </label>
             <input type="password" required v-model="password">

             <label>Role: </label>
             <!-- Select box -->
             <select v-model="role">
                <!-- default option -->
                <option value="developer">Web Developer</option>
                <option value="designer">Web Designer</option>
                <option value="">Select a role:</option>
             </select>
             <label>languages: </label>
             <input type="text" v-model="currentLanguage" @keydown="keyfinder" @keyup.enter.alt="addLanguage()">
             <button type="submit">Submit</button>
             <div v-for="lang,index in languages" :key="index+1">
                <p id="para" @click="deleteLang(lang)">
                    {{ index+1 }}:{{ lang }}
                </p>
             </div>
             <div class="terms">
                <!-- isn't it insane?, you can use v-model on a checkbox and when checked, it can register a boolean value as true -->
                 <input type="checkbox" required v-model="terms">
                 <label>Accept Terms and Conditions</label>
             </div>
             <h4>People wanted in your team:</h4>
             <div>
                <input type="checkbox" value="Mario" v-model="names">
                <label>Mario</label>
             </div>
             <div>
                <input type="checkbox" value="Dean" v-model="names">
                <label>Dean</label>
             </div>
             <div>
                <input type="checkbox" value="Luigi" v-model="names">
                <label>Luigi</label>
             </div>
        </form>
        <!-- showing stored information in data function -->
         <div>
            <p>Email: {{ email }}</p>
            <p>Password: {{ password }}</p>
            <p>role: {{ role }}</p>
            <p>Terms: {{ terms }}</p>
            <p>People: {{ people }}</p>
            <p>Current language: {{ currentlanguage }}</p>
            <p>Language: {{ language }}</p>
         </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: '',
            // If you want default value to be checked then change boolean to true
            terms: false,
            names: [],
            currentLanguage: '',
            languages: ['something', 'nothing']
        }
    },
    methods: {
        keyfinder(event) {
            console.log(event);
        },
        deleteLang(lang) {
            this.languages = this.languages.filter(item => item != lang)

        },
        formSubmit() {
            console.log('The page has refreshed'),
            this.email = ''
            this.password = ''
            this.terms = false
            this.currentLanguage = ''
            this.role = ''
        },
        addLanguage() {
            if (!this.languages.includes(this.currentLanguage)) {
                this.languages.push(this.currentLanguage)
            }
        }
    }
}
</script>
<style>
    #parent {
        display: flex;
        justify-content: space-evenly;
    }
    form {
        display: grid;
        gap: .3em;
    }
</style>
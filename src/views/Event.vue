<template>
    <div>
        <v-container fluid>
            <v-layout row>
                <v-flex xs8 offset-xs2>
                    <h1 class="headline">Hochzeit Maybritt</h1>
                    <a @click="$router.go(-1)">Zurück</a> <br/> <br/>
                    <p>Lua Pauline</p>
                    <p>
                        <b>Die Kunden wünschen sich ein extra Mikrophon</b>
                    </p>
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs4>
                                <p>
                                    <span class="subheading">Aufbau</span><br /><span>Bari</span><br /> Di, 25.7.18<br /> 18:00-24:00
                                </p>
                            </v-flex>
                            <v-flex xs4>
                                <p>
                                    <span class="subheading">DJ</span><br /><span>DJ Tobi</span><br /> Di, 25.7.18<br /> 18:00-24:00 <br />
                                    <b>Mikrophon mitnehmen</b>
                                </p>
                            </v-flex>
                            <v-flex xs4>
                                <p>
                                    <span class="subheading">Abbau</span><br /><span>Marc</span><br /> Di, 25.7.18<br /> 18:00-24:00
                                </p>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <h2 class="subheading">Technik</h2>
                    <div>
                        <v-container fluid grid-list-lg>
                            <v-layout row>
                                <v-flex xs3>
                                    <h3 class="body-2">Name</h3>
                                </v-flex>
                                <v-flex xs1>
                                    <h3 class="body-2">Bild</h3>
                                </v-flex>
                                <v-flex xs1>
                                    <h3 class="body-2">Ort</h3>
                                </v-flex>
                                <v-flex xs3 offset-xs1>
                                    <h3 class="body-2">Andere orte</h3>
                                </v-flex>
                                <v-flex xs1 offset-xs1>
                                    <h3 class="body-2">Aufgebaut</h3>
                                </v-flex>
                                <v-flex xs1>
                                    <h3 class="body-2">Zurück gebracht</h3>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs3>
                                    <h3 class="body-2">DJM 500</h3>
                                    <ul>
                                        <li>Mischpult</li>
                                        <li>Stromkable</li>
                                    </ul>
                                </v-flex>
                                <v-flex xs1>
                                    <img src="../assets/djm 500.png" alt="Bidl" style="width: 100%;">
                                </v-flex>
                                <v-flex xs1>
                                    <img src="../assets/lager.jpg" alt="Bidl" style="width: 100%;">
                                </v-flex>
                                <v-flex xs3 offset-xs1>
                                    <span>Vorher bei</span> <br />
                                    <router-link to="/event/asdf">Geburtstag Merkel</router-link><br />
                                    <span>Anschließend</span> <br />
                                    <span>
                                        <b>Ins Lager</b>
                                    </span><br />
                                </v-flex>
                                <v-flex xs1 offset-xs1>
                                    <v-checkbox></v-checkbox>
                                </v-flex>
                                <v-flex xs1>
                                    <v-checkbox></v-checkbox>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs3>
                                    <h3 class="body-2">iColor</h3>
                                    <ul>
                                        <li>iColor</li>
                                        <li>Stativ</li>
                                    </ul>
                                </v-flex>
                                <v-flex xs1>
                                    <img src="../assets/iColor.jpg" alt="Bidl" style="width: 100%;">
                                </v-flex>
                                <v-flex xs1>
                                    <img src="../assets/lager 2.jpg" alt="Bidl" style="width: 100%;">
                                </v-flex>
                                <v-flex xs3 offset-xs1>
                                    <span>Vorher bei</span> <br />
                                    <router-link to="/event/asdf">Geburtstag Schmachtenberg</router-link><br />
                                    <span>Anschließend</span> <br />
                                    <span>
                                        <b>Ins Lager</b>
                                    </span><br />
                                </v-flex>
                                <v-flex xs1 offset-xs1>
                                    <v-checkbox></v-checkbox>
                                </v-flex>
                                <v-flex xs1>
                                    <v-checkbox></v-checkbox>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs3>
                                    <h3 class="body-2">Mikrophon</h3>
                                    <ul>
                                        <li>Funk Mikrophon</li>
                                        <li>Empfänger</li>
                                        <li>Kabel</li>
                                        <li>8 Batterien</li>
                                    </ul>
                                </v-flex>
                                <v-flex xs1>
                                    <img src="../assets/Sennheiser XS Wireless.jpg" alt="Bidl" style="width: 100%;">
                                </v-flex>
                                <v-flex xs1>
                                    <img src="../assets/lager 2.jpg" alt="Bidl" style="width: 100%;">
                                </v-flex>
                                <v-flex xs3 offset-xs1>
                                    <span>Vorher bei</span> <br />
                                    <router-link to="/event/asdf">Geburtstag Müller</router-link><br />
                                    <span>Anschließend</span> <br />
                                    <span>
                                        <b>Ins Lager</b>
                                    </span><br />
                                </v-flex>
                                <v-flex xs1 offset-xs1>
                                    <v-checkbox></v-checkbox>
                                </v-flex>
                                <v-flex xs1>
                                    <v-checkbox></v-checkbox>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs3>
                                    <h3 class="body-2">Mackie</h3>
                                    <ul>
                                        <li>2 Boxen</li>
                                        <li>6 XLR Kabel</li>
                                        <li>2 Stative</li>
                                    </ul>
                                </v-flex>
                                <v-flex xs1>
                                    <img src="../assets/mackie.jpg" alt="Bidl" style="width: 100%;">
                                </v-flex>
                                <v-flex xs1>
                                    <img src="../assets/lager.jpg" alt="Bidl" style="width: 100%;">
                                </v-flex>
                                <v-flex xs3 offset-xs1>
                                    <span>Vorher bei</span> <br />
                                    <router-link to="/event/asdf">Geburtstag Müller</router-link><br />
                                    <span>Anschließend</span> <br />
                                    <span>
                                        <b>Ins Lager</b>
                                    </span><br />
                                </v-flex>
                                <v-flex xs1 offset-xs1>
                                    <v-checkbox></v-checkbox>
                                </v-flex>
                                <v-flex xs1>
                                    <v-checkbox></v-checkbox>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'event',
    data() {
        return {};
    },
    methods: {
    },
}
</script>

<style scoped>
</style>

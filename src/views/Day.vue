<template>
    <div>
        <v-container fluid>
            <v-layout row wrap>
                <v-flex xs12 md2 order-lg2 @drop="drop($event, 'sidebar')" @dragover="allowDrop" class="sidebar">
                    <v-chip draggable="true" @dragstart="drag($event, 'sidebar', i)" class="chip" v-for="(chip, i) in chips.sidebar" :key="i" :color="`${chip.color} lighten-4`">{{chip.text}}</v-chip>
                </v-flex>
                <v-flex lg10>
                    <v-container fluid grid-list-lg>
                        <v-layout row wrap>
                            <v-flex xs4 v-for="event in events" :key="event.id">
                                <v-card @drop="drop($event, event.id)" @dragover="allowDrop">
                                    <v-card-text class="dragTarget" @click="$router.push('/event/idasdf')">
                                        <p class="headline">{{event.title}}</p>
                                        <p>{{event.text}}</p>
                                        <v-layout row>
                                            <v-flex xs4>
                                                <p><b>Aufbau</b><br />
                                                Di, 25.7.18<br />
                                                18:00-24:00</p>
                                            </v-flex>
                                            <v-flex xs4>
                                                <p><b>DJ Tobi</b><br />
                                                Di, 25.7.18<br />
                                                18:00-24:00</p>
                                            </v-flex>
                                            <v-flex xs4>
                                                <p><b>Abbau</b><br />
                                                Di, 25.7.18<br />
                                                18:00-24:00</p>
                                            </v-flex>
                                        </v-layout>
                                        <v-chip draggable="true" @dragstart="drag($event, event.id, i)" class="chip" v-for="(chip, i) in chips[event.id]" :key="i" :color="`${chip.color} lighten-4`">{{chip.text}}</v-chip>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'day',
    data() {
        const res = {
            chips: {
                ev1: [{ text: 'Mackie 1', color: 'yellow' }, { text: 'Sub', color: 'yellow' }, { text: 'Behringer', color: 'red' }],
                ev2: [{ text: 'Mackie 2', color: 'yellow' }, { text: 'DJM 500', color: 'red' }, { text: 'iColor 1', color: 'blue' }],
                ev3: [{ text: 'Vidoleinwand', color: 'green' }, { text: 'Beamer', color: 'green' }, { text: 'Vidoleinwand-Stativ', color: 'green' }, { text: 'Mackie 3', color: 'yellow' }, { text: 'Sub 2', color: 'yellow' }, { text: 'DJM 250', color: 'red' }],
                ev4: [], ev5: [], ev6: [], ev7: [], ev8: [], ev9: [], ev10: [],
                sidebar: [
                    { text: 'Mackie 4', color: 'yellow' },
                    { text: 'Mackie 5', color: 'yellow' },
                    { text: 'Mackie 6', color: 'yellow' },
                    { text: 'iColor 2', color: 'blue' },
                    { text: 'iColor 3', color: 'blue' },
                    { text: 'DJM 250', color: 'red' },
                    { text: 'DJM 250', color: 'red' },
                    { text: 'DJM 500', color: 'red' }
                ],
            },
            events: [
                { id: 'ev1', title: 'Hochzeit Maybritt', text: 'Lua Pauline' },
                { id: 'ev2', title: 'Hochzeit Kapsers', text: 'Marschiertor' },
                { id: 'ev3', title: 'Firmenfeier Lindt', text: 'Lindt' },
                { id: 'ev4', title: 'Geburtstag Rainer', text: 'Paulaner Weg 12' },
                // { id: 'ev5', title: 'Geburtstag Rainer', text: '18:00, Paulaner Weg 12' },
                // { id: 'ev6', title: 'Geburtstag Rainer', text: '18:00, Paulaner Weg 12' },
                // { id: 'ev7', title: 'Geburtstag Rainer', text: '18:00, Paulaner Weg 12' },
                // { id: 'ev8', title: 'Geburtstag Rainer', text: '18:00, Paulaner Weg 12' },
                // { id: 'ev9', title: 'Geburtstag Rainer', text: '18:00, Paulaner Weg 12' },
                { id: 'ev10', title: 'Geburtstag Meier', text: 'Senfter Weg 12' },
            ],
        };
        Object.keys(res.chips).forEach((key) => {
            res.chips[key].sort(function (a, b) {
                // Compare the 2 dates
                if (a.color < b.color) return -1;
                if (a.color > b.color) return 1;
                if (a.text < b.text) return -1;
                if (a.text > b.text) return 1;
                return 0;
            });
        });
        return res;
    },
    methods: {
        allowDrop(ev) {
            ev.preventDefault();
        },
        drag(ev, key, i) {
            ev.dataTransfer.setData("text", JSON.stringify({ id: i, key: key }));
        },
        drop(ev, key) {
            ev.preventDefault();
            const data = JSON.parse(ev.dataTransfer.getData("text"));
            const obj = this.chips[data.key][data.id];
            this.chips[key].push(obj);
            this.chips[data.key].splice(data.id, 1)
            this.chips[key].sort(function (a, b) {
                // Compare the 2 dates
                if (a.color < b.color) return -1;
                if (a.color > b.color) return 1;
                if (a.text < b.text) return -1;
                if (a.text > b.text) return 1;
                return 0;
            });
        },
    },
}
</script>

<style scoped>
.sidebar {
  border-left: 1px solid gray;
}
.sidebar > .chip {
  display: block;
}
</style>

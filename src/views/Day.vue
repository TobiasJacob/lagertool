<template>
    <div>
        <v-container fluid>
            <v-layout row wrap>
                <v-flex xs12 md2 order-lg2 @drop="drop($event, 'sidebar')" @dragover="allowDrop" class="sidebar">
                    <v-chip draggable="true" @dragstart="drag($event, 'sidebar', i)" class="chip" v-for="(eq, i) in equipment" :key="i" :color="`${eq.color} lighten-4`">{{eq.name}}</v-chip>
                </v-flex>
                <v-flex lg10>
                    <v-container fluid grid-list-lg>
                        <v-layout row wrap>
                            <v-flex xs4 v-for="event in events" :key="event.id">
                                <v-card @drop="drop($event, event.id)" @dragover="allowDrop">
                                    <v-card-text class="dragTarget" @click="$router.push('/event/event1')">
                                        <p class="headline">
                                            {{event.title}}
                                        </p>
                                        <p>{{event.text}}</p>
                                        <v-layout row>
                                            <v-flex xs4>
                                                <p>
                                                    <b>Aufbau</b><br /> Di, 25.7.18<br /> 18:00-24:00
                                                </p>
                                            </v-flex>
                                            <v-flex xs4>
                                                <p>
                                                    <b>DJ Tobi</b><br /> Di, 25.7.18<br /> 18:00-24:00
                                                </p>
                                            </v-flex>
                                            <v-flex xs4>
                                                <p>
                                                    <b>Abbau</b><br /> Di, 25.7.18<br /> 18:00-24:00
                                                </p>
                                            </v-flex>
                                        </v-layout>
                                        <v-chip draggable="true" @dragstart="drag($event, event.id, i)" class="chip" v-for="(chip, i) in event.equipment" :key="i" :color="`${chip.color} lighten-4`">{{chip}}</v-chip>
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
            },
        };
        return res;
    },
    computed: {
        events() {
            return this.$store.state.eventsModule.events;
        },
        equipment() {
            console.log(this.$store.state.equipmentModule.equipment);
            return this.$store.state.equipmentModule.equipment;
        },
    },
    methods: {
        allowDrop(ev) {
            ev.preventDefault();
        },
        drag(ev, key, i) {
            ev.dataTransfer.setData("text", JSON.stringify({ id: i, key }));
        },
        drop(ev, key) {
            ev.preventDefault();
            const data = JSON.parse(ev.dataTransfer.getData("text"));
            const obj = this.chips[data.key][data.id];
            this.chips[key].push(obj);
            this.chips[data.key].splice(data.id, 1)
            this.chips[key].sort((a, b) => {
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

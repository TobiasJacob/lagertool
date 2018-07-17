<template>
  <div>
    <table>
      <thead>
        <tr>
          <td>MO</td>
          <td>DI</td>
          <td>MI</td>
          <td>DO</td>
          <td>FR</td>
          <td>SA</td>
          <td>SO</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="week in days" v-bind:key="week[0].toDateString()">
          <CalendarDay :CalendarDay="CalendarDay" v-for="day in week" v-bind:key="day.toDateString()" v-bind:day="day" :dayData="dayData" />
        </tr>
      </tbody>
    </table>
    <v-btn @click="addWeek">
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
import CalendarDay from './CalendarDay.vue';

const scrollOffset = 900;

/* eslint-disable no-mixed-operators */
/* eslint-disable max-len */
function getMonday() {
  const d = new Date();
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
  d.setDate(diff);
  return d;
}

export default {
  name: 'Calendar',
  components: {
    CalendarDay,
  },
  props: ['dayData', 'CalendarDay'],
  data: () => {
    const pivot = getMonday();
    const days = [];
    const weeks = 52;

    for (let week = 0; week < weeks; week += 1) {
      const weekDays = [];
      for (let day = 0; day < 7; day += 1) {
        weekDays.push(new Date(pivot));
        pivot.setDate(pivot.getDate() + 1);
      }
      days.push(weekDays);
    }
    return {
      days,
      pivot,
      bottom: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible();
    });
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.addWeek();
      }
    },
  },
  methods: {
    addWeek() {
      const { pivot } = this;
      for (let week = 0; week < 4; week += 1) {
        const weekDays = [];
        for (let day = 0; day < 7; day += 1) {
          weekDays.push(new Date(pivot));
          pivot.setDate(pivot.getDate() + 1);
        }
        this.days.push(weekDays);
      }
      this.bottom = false;
    },
    bottomVisible() {
      const { scrollY } = window;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight - scrollOffset;
      return bottomOfPage || pageHeight < visible;
    },
  },
};
</script>

<style scoped>
table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
}
</style>

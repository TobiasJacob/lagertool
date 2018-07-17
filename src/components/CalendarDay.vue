<template>
  <td>
    <div :id="`${day.getDate()}-${day.getMonth()}-${day.getFullYear()}`" @click="click">
      <span class="date" v-bind:class="{dateFirst: isFirstDayOfMonth}">{{dayString}}</span>
      <span class="dateYear" v-bind:class="{dateFirst: isFirstDayOfMonth}">{{yearString}}</span>
    </div>
  </td>
</template>

<script>

export default {
  name: 'CalendarDay',
  data() {
    const v = this;
    window.addEventListener('resize', () => {
      v.bigScreen = window.innerWidth >= 800;
    });
    return {
      bigScreen: window.innerWidth >= 800,
    };
  },
  props: ['day', 'CalendarDay'],
  computed: {
    dayString: function dayString() {
      if (!this.day) return '';
      const dayIndex = this.day.getDate();
      const monthIndex = this.day.getMonth() + 1;
      const yearIndex = this.day.getFullYear();
      if (dayIndex === 1) {
        if (this.bigScreen) return `${dayIndex}.${monthIndex}.${yearIndex}`;
        return `${dayIndex}.${monthIndex}`;
      }
      return `${dayIndex}`;
    },
    yearString: function dayString() {
      if (!this.day) return '';
      const dayIndex = this.day.getDate();
      const yearIndex = this.day.getFullYear();
      if (dayIndex === 1) {
        if (this.bigScreen) return '';
        return yearIndex;
      }
      return '';
    },
    isFirstDayOfMonth: function isFirstDayOfMonth() {
      if (!this.day) return false;
      const dayIndex = this.day.getDate();
      if (dayIndex === 1) return true;
      return false;
    },
    weekdayString: function weekdayString() {
      if (!this.day) return '';
      const days = ['SO', 'MO', 'DI', 'MI', 'DO', 'FR', 'SA'];
      const dayIndex = this.day.getDay();

      return days[dayIndex];
    },
  },
  methods: {
    click(event) {
      event.preventDefault();
      if (!this.day) return;
      const dayIndex = this.day.getDate();
      const monthIndex = this.day.getMonth() + 1;
      const yearIndex = this.day.getFullYear();
      this.$router.push(`day/${dayIndex}/${monthIndex}/${yearIndex}`);
    },
  },
};
</script>

<style scoped>
td {
  border: solid gray 1px;
  margin: 0;
  padding: 0;
  height: 12em;
  text-align: left;
}

div {
  height: 100%;
  width: 100%;
  position: relative;
}

.date {
  position: absolute;
  right: 0.3em;
  z-index: 1;
}
.dateYear {
  position: absolute;
  top: 1em;
  right: 0.3em;
  z-index: 1;
}

.dateFirst {
  font-weight: bold;
  font-size: 1.15em;
}

.weekday {
  position: absolute;
  left: 0.3em;
  z-index: 1;
  font-weight: bold;
}
</style>

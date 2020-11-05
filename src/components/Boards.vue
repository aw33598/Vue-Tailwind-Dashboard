<template>
  <!-- four column board layout starts here -->
  <div
    class="grid grid-cols-1 lg:grid-cols-4 lg:col-gap-6 row-gap-10 lg:row-gap-0"
  >
    <Board v-for="board in boards" :key="board.name" :board="board"></Board>
  </div>
  <!-- four column board layout ends here -->
</template>

<script>
import Board from "./Board";
export default {
  name: "Boards",
  components: {
    Board,
  },
  data() {
    return {
      boards: [
        {
          name: "Backlog",
          tasks: [
            {
              category: "Landing Page",
              name: "Revisit Homepage Wickrpark.io",
              files: [{ name: "Resume" }, { name: "Logo" }],
              comments: [{ comment: "cool" }],
              peoples: [{ name: "boy" }, { name: "boy-1" }],
              number: 2,
            },
            {
              category: "Dashboard",
              name: "Revise Feedback Analytics Page Wednesday.io",
              files: [{ name: "Resume" }],
              comments: [
                { comment: "cool" },
                { comment: "awesome" },
                { comment: "wow" },
                { comment: "great" },
                { comment: "lit" },
                { comment: "fire" },
                { comment: "great" },
              ],
              peoples: [{ name: "boy-2" }],
              number: 3,
            },
            {
              category: "Design Critique",
              name: "Weekly Design Critique : Magician Mobile App",
              files: [{ name: "Resume" }],
              comments: [{ comment: "cool" }, { comment: "awesome" }],
              peoples: [{ name: "boy-1" }, { name: "boy-2" }],
              number: 1,
            },
          ],
        },
        {
          name: "In Progress",
          tasks: [
            {
              category: "Landing Page",
              name: "Design Mindtree Profile Page",
              files: [{ name: "Resume" }, { name: "Logo" }],
              comments: [{ comment: "cool" }],
              peoples: [{ name: "boy" }, { name: "boy-1" }],
              number: 3,
            },
            {
              category: "Illustration",
              name: "Sending Message Illustration for Mindtree App",
              image: "illustration",
              files: [{ name: "Resume" }],
              comments: [{ comment: "cool" }, { comment: "awesome" }],
              peoples: [{ name: "girl-1" }],
              number: 1,
            },
            {
              category: "Dashboard",
              name: "Revise Feedback Sales Page Wednesday.io",
              files: [{ name: "Resume" }],
              comments: [
                { comment: "cool" },
                { comment: "awesome" },
                { comment: "great" },
              ],
              peoples: [{ name: "boy-2" }],
              number: 2,
            },
          ],
        },
        {
          name: "In Review",
          tasks: [
            {
              category: "Mobile App",
              name: "Covid App Dribble Preview",
              image: "covid-app",
              files: [{ name: "Resume" }],
              comments: [{ comment: "cool" }, { comment: "great" }],
              peoples: [{ name: "boy" }],
              number: 1,
            },
            {
              category: "Dashboard",
              name: "Revise Feedback Product Page Wednesday.io",
              files: [{ name: "Resume" }],
              comments: [
                { comment: "cool" },
                { comment: "awesome" },
                { comment: "wow" },
                { comment: "great" },
                { comment: "lit" },
                { comment: "fire" },
              ],
              peoples: [{ name: "boy-2" }],
              number: 2,
            },
          ],
        },
        {
          name: "Done",
          tasks: [
            {
              category: "Dashboard",
              name: "Revise Feedback Product Page Wednesday.io",
              files: [{ name: "Resume" }],
              comments: [
                { comment: "cool" },
                { comment: "awesome" },
                { comment: "wow" },
                { comment: "great" },
                { comment: "lit" },
                { comment: "fire" },
              ],
              peoples: [{ name: "boy-2" }],
              number: 2,
            },
            {
              category: "Dashboard",
              name: "Colors Dashboard Exploration Preview",
              image: "dashboard",
              files: [{ name: "Resume" }],
              comments: [{ comment: "cool" }, { comment: "great" }],
              peoples: [{ name: "girl-1" }],
              number: 1,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
</style>
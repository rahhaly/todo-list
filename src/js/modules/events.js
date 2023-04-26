import { DOM } from './dom';
import { taskManager } from './app';

export const initializeListeners = () => {
  DOM.selectors.filterButtons.forEach((filterBtn) =>
    filterBtn.addEventListener('click', () => {
      DOM.clearCurrentFocus();
      DOM.setCurrentFocus(filterBtn);
      if ((filterBtn.id = 'sidebar__today-btn')) {
        const todayTasks = taskManager.getTodayTasksFunc();
        DOM.appendTasksList(todayTasks);
      } else if ((filterBtn.id = 'sidebar__week-btn')) {
        const weekTasks = taskManager.getThisWeekTasksFunc();
        DOM.appendTasksList(weekTasks);
      } else if ((filterBtn.id = 'sidebar__completed-btn')) {
        const completedTasks = taskManager.getCompletedTasksFunc();
        DOM.appendTasksList(completedTasks);
      }
    })
  );
};
# Challenge 5: Work Day Schedule

A simple calendar app for scheduling your work day. It allows you to add important events to a daily planner, helping you manage your time effectively.

## Table of Contents
- [Features](#features)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features
- Displays the current day at the top of the calendar.
- Presents time blocks for standard business hours (9am to 5pm).
- Color-codes each time block to indicate whether it is in the past, present, or future.
- Allows entering events by clicking on a time block.
- Saves the entered events in local storage when the save button is clicked.
- Persists the saved events even after page refresh.

## Usage

![alt-text](./assets/images/Screenshot%202023-08-14%20at%209.27.30%20PM.png)

1. Open the `index.html` file in a web browser.
2. The current date will be displayed at the top of the calendar.
3. Scroll down to view the time blocks for the day.
4. Each time block will be color-coded based on whether it is in the past, present, or future.
5. Click on a time block to enter an event in the textarea.
6. Click the save button in the respective time block to save the event.
7. The saved events will be stored in the browser's local storage and will persist even after refreshing the page.

## Dependencies
- [jQuery](https://jquery.com/): JavaScript library used for DOM manipulation.
- [Day.js](https://day.js.org/): JavaScript date library for parsing, validating, manipulating, and formatting dates.

## Contributing
Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please open an issue or a pull request.

## License
This project is licensed under the [MIT License](LICENSE).
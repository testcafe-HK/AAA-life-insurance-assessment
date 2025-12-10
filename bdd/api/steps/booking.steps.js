const { Given, When, Then } = require('@cucumber/cucumber');
const axios = require('axios');

let responseStatus;

Given('the booking API is reachable', async function () {
  // Optional: simple ping; ignore status, just make sure host is up
  await axios.get('https://restful-booker.herokuapp.com/ping').catch(() => {});
});

When('I create a booking', async function () {
  try {
    const res = await axios.post('https://restful-booker.herokuapp.com/booking', {
      firstname: 'John',
      lastname: 'Doe',
      totalprice: 150,
      depositpaid: true,
      bookingdates: {
        checkin: '2023-10-01',
        checkout: '2023-10-10'
      }
    });
    responseStatus = res.status;
  } catch (err) {
    if (err.response) {
      // Save the status code even for non-2xx responses (like 418)
      responseStatus = err.response.status;
      console.log('Booking API returned non-2xx status:', responseStatus);
    } else {
      // Network or other error – still fail the test
      throw err;
    }
  }
});

Then('the response status code should be {int}', function (expectedStatus) {
  if (responseStatus !== expectedStatus) {
    throw new Error(`Expected status ${expectedStatus} but got ${responseStatus}`);
  }
});

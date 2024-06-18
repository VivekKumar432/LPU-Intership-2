const cron = require('node-cron');
const User = require('../models/User');

cron.schedule('0 0 * * *', async () => {
  const sixtyDaysAgo = new Date(Date.now() - 60 * 24 * 60 * 60 * 1000);
  try {
    await User.updateMany(
      {
        lastActive: { $lt: sixtyDaysAgo },
        role: { $ne: 'admin' }
      },
      {
        isActive: false,
      }
    );
    console.log('Inactive users deactivated (excluding admins)');
  } catch (err) {
    console.error('Error deactivating inactive users', err);
  }
});

module.exports = async ({ core, header, body }) => {
  await core.summary.addHeading('hihi', '2');

  await core.summary.write({ overwrite: true });
};
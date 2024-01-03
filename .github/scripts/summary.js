module.exports = async ({ core, header, body }) => {
  await core.summary.addHeading(header, '2');
  await core.summary.addRaw(body);

  await core.summary.write({ overwrite: true });
};
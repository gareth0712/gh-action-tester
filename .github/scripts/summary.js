module.exports = async ({ core, header, body }) => {
  await core.summary.addHeading(header, '2');
  body.replace('`', '|');
  await core.summary.addRaw(body, true);

  await core.summary.write({ overwrite: true });
};
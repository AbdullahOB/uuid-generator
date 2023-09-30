import getMAC from "getmac";

/**
 * Generates a Version 1 UUID.
 * @returns {string} A Version 1 UUID.
 */
function v1() {
  try {
    // Get the current timestamp
    const now = Date.now();

    // Get the process ID and parent process ID
    const pid = process.pid;
    const ppid = process.ppid;

    // Get the MAC address
    const mac = getMAC();

    // Generate a random UUID pattern
    const uuid = "xxxxxxxx-xxxx-1xxx-xxxx-xxxxxxxxxxxx".replace(
      /[x]/g,
      function () {
        // Define a random number multiplied by 16, truncate the decimal number
        const random = (Math.random() * 16) | 0;
        return random.toString(16);
      }
    );

    // Convert timestamp to hex and insert it into the UUID
    const timestampHex = (now / 10000 + 0x0162029816880000).toString(16);
    const uuidWithTimestamp = uuid.replace(/1xxx/, timestampHex);

    // Convert process IDs to hex and insert them into the UUID
    const pidHex = pid.toString(16);
    const ppidHex = ppid.toString(16);
    const uuidWithProcessIDs = uuidWithTimestamp.replace(
      /xxxx-xxxxxxxxxxxx/,
      `${ppidHex}-${pidHex}`
    );

    // Convert the MAC address to hex and insert it into the UUID
    const macHex = mac.replace(/:/g, ""); // Remove colons from the MAC address
    const uuidWithMAC = uuidWithProcessIDs.replace(/xxxxxxxxxxxx/, macHex);

    return uuidWithMAC;
  } catch (error) {
    console.error("Error generating UUID:", error);
    return null; // Handle the error gracefully by returning null
  }
}

export { v1 };

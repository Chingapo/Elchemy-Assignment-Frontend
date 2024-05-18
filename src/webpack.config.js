module.exports = {
  // ... other configurations (if any)
  resolve: {
    fallback: {
      "http": require.resolve("stream-http")
    }
  }
};

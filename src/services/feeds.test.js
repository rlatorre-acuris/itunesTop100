import getFeeds from "./feeds";

beforeAll(() => {
  jest.spyOn(window, "fetch");
  jest.spyOn(console, "error").mockImplementation(() => null);
});

afterAll(() => {
  jest.restoreAllMocks();
});

beforeEach(() => {
  jest.clearAllMocks();
});

test("calls the right endpoint", async () => {
  window.fetch.mockResolvedValueOnce({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve({ ok: true }),
  });
  await getFeeds("albums");
  expect(window.fetch).toHaveBeenCalledWith(
    "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
  );
  window.fetch.mockResolvedValueOnce({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve({ ok: true }),
  });
  await getFeeds("songs");
  expect(window.fetch).toHaveBeenCalledWith(
    "https://itunes.apple.com/us/rss/topsongs/limit=100/json"
  );
});

test("returns the expected object", async () => {
  window.fetch.mockResolvedValueOnce({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve({ ok: true }),
  });
  expect(await getFeeds("albums")).toEqual({ ok: true });
});

test("handles a server error as expected", async () => {
  window.fetch.mockResolvedValueOnce({
    ok: false,
    status: 404,
    statusText: "Not Found",
  });
  await expect(getFeeds("albums")).rejects.toThrow("HTTP error 404: Not Found");
});

test("handles an app error as expected", async () => {
  window.fetch.mockResolvedValueOnce({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.reject(new Error("malformed json")),
  });
  await expect(getFeeds("albums")).rejects.toThrow("malformed json");
});

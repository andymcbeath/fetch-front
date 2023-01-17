import jest from "@jest/globals";

const axiosMock = jest.genMockFromModule("axios");
axiosMock.get = jest.fn();
axiosMock.post = jest.fn();

export default axiosMock;

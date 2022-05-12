import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing'; // eslint-disable-line import/no-extraneous-dependencies
//import '../gft-data-manager.js';
import { GftDataManagerService } from '../src/GftDataManagerService';
import {
  MOCK_RESP_BGADP,
  MOCK_ACOUNTS_FILTER,
  MOCK_ACOUNTS_NO_ALIAS,
} from './mocksPruebas';
import sinon from 'sinon';

suite('GftDataManager', () => {
  let stub;
  let service = new GftDataManagerService();

  teardown(() => fixtureCleanup());

  setup(async () => {
    stub = sinon.stub(service, '_metodoBgadp');
  });

  test('The response from my products is equal to my response from the filtered server', async () => {
    stub.returns(Promise.resolve(MOCK_RESP_BGADP));

    const resultService = await service.getInstanceRespuesta();
    /* console.log(resultService, 'service');
    console.log(MOCK_ACOUNTS_FILTER, 'Mocks'); */
    assert.deepEqual(resultService, MOCK_ACOUNTS_FILTER);
    stub.restore();
  });

  test('response without aliases', async () => {
    stub.returns(Promise.resolve(MOCK_RESP_BGADP));

    const resultService = await service.getInstanceRespuesta();
    assert.notEqual(resultService, MOCK_ACOUNTS_NO_ALIAS);
    stub.restore();
  });

  test('The response from my data provider is equal to my response from the server', async () => {
    stub.returns(Promise.resolve(MOCK_RESP_BGADP));

    const resultService = await service._metodoBgadp();
    assert.deepEqual(resultService, MOCK_RESP_BGADP);
    stub.restore();
  }); 
  
});

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTriggerMaster = /* GraphQL */ `
  query GetTriggerMaster($key: Int!) {
    getTriggerMaster(key: $key) {
      key
      name
      category
    }
  }
`;
export const listTriggerMasters = /* GraphQL */ `
  query ListTriggerMasters(
    $filter: TableTriggerMasterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTriggerMasters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        key
        name
        category
      }
      nextToken
    }
  }
`;

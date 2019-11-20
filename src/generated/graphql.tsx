
      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "UNION",
        "name": "Entity",
        "possibleTypes": [
          {
            "name": "Image"
          },
          {
            "name": "Text"
          },
          {
            "name": "Link"
          }
        ]
      }
    ]
  }
};
      export default result;
    
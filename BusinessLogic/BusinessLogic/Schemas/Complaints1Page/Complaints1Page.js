define("Complaints1Page", [], function() {
	return {
		entitySchemaName: "Complaints",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "LOOKUP32b7eae8-90e8-4983-94bd-edd1ab081489",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Tabef5af4cdTabLabelGridLayouta33e2e1b"
					},
					"bindTo": "SurveyResponse",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tabef5af4cdTabLabelGridLayouta33e2e1b",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "merge",
				"name": "Tab90ec2658TabLabel",
				"values": {
					"order": 5
				}
			},
			{
				"operation": "move",
				"name": "BOOLEAN54116f5f-3a0d-4e8d-9b0e-d4022fb1ace3",
				"parentName": "Tabfb971faaTabLabelGridLayout322c0469",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "move",
				"name": "LOOKUP95eaffc5-881c-4afb-a822-d830af580a8e",
				"parentName": "Tabfb971faaTabLabelGridLayout322c0469",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_DIFF*/
	};
});

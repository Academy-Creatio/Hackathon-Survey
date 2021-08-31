define("Training1Page", [], function() {
	return {
		entitySchemaName: "Training",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{
			"Indicator0128e0f3-8545-4144-ae3c-3da3452df9dd": {
				"moduleId": "Indicator0128e0f3-8545-4144-ae3c-3da3452df9dd",
				"moduleName": "CardWidgetModule",
				"config": {
					"parameters": {
						"viewModelConfig": {
							"widgetKey": "Indicator0128e0f3-8545-4144-ae3c-3da3452df9dd",
							"recordId": "42d20d10-4a1c-46eb-8a3d-cff60539349d",
							"primaryColumnValue": {
								"getValueMethod": "getPrimaryColumnValue"
							}
						}
					}
				}
			},
			"Indicator5e9c8756-5e9b-4c9b-b591-4c5db9f6fe8c": {
				"moduleId": "Indicator5e9c8756-5e9b-4c9b-b591-4c5db9f6fe8c",
				"moduleName": "CardWidgetModule",
				"config": {
					"parameters": {
						"viewModelConfig": {
							"widgetKey": "Indicator5e9c8756-5e9b-4c9b-b591-4c5db9f6fe8c",
							"recordId": "42d20d10-4a1c-46eb-8a3d-cff60539349d",
							"primaryColumnValue": {
								"getValueMethod": "getPrimaryColumnValue"
							}
						}
					}
				}
			}
		}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "TrainingFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "Training"
				}
			},
			"Schema4ce7b269Detaile0d3e08d": {
				"schemaName": "Schema4ce7b269Detail",
				"entitySchemaName": "TrainingParticipants",
				"filter": {
					"detailColumn": "Training",
					"masterColumn": "Id"
				}
			},
			"SurveyResponseDetailb56dc9bf": {
				"schemaName": "SurveyResponseDetail",
				"entitySchemaName": "SurveyResponse",
				"filter": {
					"detailColumn": "RecordId",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "Nameec9ac20c-e52b-45f0-8dd2-ee7404ace508",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Name"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Trainer62c34786-df07-4316-82f8-695fc8ef3ea8",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Trainer"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "StartDatef8c1dc6e-128c-434c-9479-aa1265f7ee54",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "StartDate"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tab4eabb1c8TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4eabb1c8TabLabelTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Schema4ce7b269Detaile0d3e08d",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab4eabb1c8TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab28344169TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab28344169TabLabelTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab28344169TabLabelGroupc591c95d",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab28344169TabLabelGroupc591c95dGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab28344169TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab28344169TabLabelGridLayoutabca3da7",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab28344169TabLabelGroupc591c95d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Indicator0128e0f3-8545-4144-ae3c-3da3452df9dd",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 4,
						"column": 0,
						"row": 0,
						"layoutName": "Tab28344169TabLabelGridLayoutabca3da7",
						"useFixedColumnHeight": true
					},
					"itemType": 4,
					"classes": {
						"wrapClassName": [
							"card-widget-grid-layout-item"
						]
					}
				},
				"parentName": "Tab28344169TabLabelGridLayoutabca3da7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Indicator5e9c8756-5e9b-4c9b-b591-4c5db9f6fe8c",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 4,
						"column": 6,
						"row": 0,
						"layoutName": "Tab28344169TabLabelGridLayoutabca3da7",
						"useFixedColumnHeight": true
					},
					"itemType": 4,
					"classes": {
						"wrapClassName": [
							"card-widget-grid-layout-item"
						]
					}
				},
				"parentName": "Tab28344169TabLabelGridLayoutabca3da7",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SurveyResponseDetailb56dc9bf",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab28344169TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 2
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "Notes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 3
				}
			}
		]/**SCHEMA_DIFF*/
	};
});

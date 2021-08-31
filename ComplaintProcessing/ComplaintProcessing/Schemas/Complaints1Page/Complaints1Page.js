define("Complaints1Page", [], function() {
	return {
		entitySchemaName: "Complaints",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "ComplaintsFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "Complaints"
				}
			},
			"ActivityDetailV205b00ef8": {
				"schemaName": "ActivityDetailV2",
				"entitySchemaName": "Activity",
				"filter": {
					"detailColumn": "Complaints",
					"masterColumn": "Id"
				}
			},
			"Schema49f0872bDetail8527d5a3": {
				"schemaName": "Schema49f0872bDetail",
				"entitySchemaName": "ComplaintLifecycle",
				"filter": {
					"detailColumn": "Complaint",
					"masterColumn": "Id"
				}
			},
			"VisaDetailV2eae64ac5": {
				"schemaName": "VisaDetailV2",
				"entitySchemaName": "ComplaintsVisa",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "Complaints"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"ClosedOn": {
				"c7323698-e5b6-45b6-ba73-2ef4a5d7ab61": {
					"uId": "c7323698-e5b6-45b6-ba73-2ef4a5d7ab61",
					"enabled": true,
					"removed": true,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 6,
							"formula": {
								"type": 2,
								"dataType": 7,
								"code": "GETDATE",
								"arguments": []
							}
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "86e0f9f5-a794-40e1-a8ad-2eaa52a49d16",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"ResolutionDate": {
				"72ea0545-2832-4fee-bd44-1d26cd6e592b": {
					"uId": "72ea0545-2832-4fee-bd44-1d26cd6e592b",
					"enabled": true,
					"removed": true,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 6,
							"formula": {
								"type": 2,
								"dataType": 7,
								"code": "GETDATE",
								"arguments": []
							}
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "8528792b-edad-4545-8ab7-bc3daca60ca4",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"Assignee": {
				"8ffa2478-831d-4712-b621-17aea4107725": {
					"uId": "8ffa2478-831d-4712-b621-17aea4107725",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "Type",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 0,
					"value": "60733efc-f36b-1410-a883-16d83cab0980",
					"dataValueType": 10
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "Named7bf31a4-9136-4b71-bdb9-d544d0872768",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Name",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP829ca401-dac8-4165-bd47-d2335033d0d6",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Contact",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DATETIME8f6b085f-5704-483b-9969-28c188619d8b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "RegistrationDate",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DATETIME8f159787-6c6d-4b6c-8058-523f1ee79be2",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ResolutionDate",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DATETIME2d864ec3-608f-4fe1-ac59-ad40e1330c29",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ClosedOn",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUPbbcc78f2-714c-40bf-bb22-d3b2113845bd",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Assignee",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Tabef5af4cdTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabef5af4cdTabLabelTabCaption"
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
				"name": "Tabef5af4cdTabLabelGroup53ff7aeb",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabef5af4cdTabLabelGroup53ff7aebGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabef5af4cdTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabef5af4cdTabLabelGridLayouta33e2e1b",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabef5af4cdTabLabelGroup53ff7aeb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING7eccad55-527b-493c-a166-3685e2eba9e7",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabef5af4cdTabLabelGridLayouta33e2e1b"
					},
					"bindTo": "Subject",
					"enabled": true
				},
				"parentName": "Tabef5af4cdTabLabelGridLayouta33e2e1b",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING990aa093-ab7d-4b06-9b7f-c17611dba17e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 2,
						"column": 0,
						"row": 1,
						"layoutName": "Tabef5af4cdTabLabelGridLayouta33e2e1b"
					},
					"bindTo": "Description",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Tabef5af4cdTabLabelGridLayouta33e2e1b",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP773cde3c-f38a-4704-83f7-548b3ddf493a",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Tabef5af4cdTabLabelGridLayouta33e2e1b"
					},
					"bindTo": "Source",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tabef5af4cdTabLabelGridLayouta33e2e1b",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Schema49f0872bDetail8527d5a3",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabef5af4cdTabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tabfb971faaTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabfb971faaTabLabelTabCaption"
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
				"name": "Tabfb971faaTabLabelGroup26ecb9d8",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabfb971faaTabLabelGroup26ecb9d8GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabfb971faaTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabfb971faaTabLabelGridLayout322c0469",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabfb971faaTabLabelGroup26ecb9d8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP1dea8436-dee4-4cef-9737-f42cf2be4f2b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabfb971faaTabLabelGridLayout322c0469"
					},
					"bindTo": "ResolutionResult",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tabfb971faaTabLabelGridLayout322c0469",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ResolutionDateb6084668-ee62-4d7d-969c-719ff3ef2d7f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabfb971faaTabLabelGridLayout322c0469"
					},
					"bindTo": "ResolutionDate"
				},
				"parentName": "Tabfb971faaTabLabelGridLayout322c0469",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING80716908-361e-429b-a17d-5a555e250536",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 2,
						"column": 0,
						"row": 2,
						"layoutName": "Tabfb971faaTabLabelGridLayout322c0469"
					},
					"bindTo": "ResolutionComment",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Tabfb971faaTabLabelGridLayout322c0469",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "BOOLEAN54116f5f-3a0d-4e8d-9b0e-d4022fb1ace3",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tabfb971faaTabLabelGridLayout322c0469"
					},
					"bindTo": "SuccessfulResolution",
					"enabled": false
				},
				"parentName": "Tabfb971faaTabLabelGridLayout322c0469",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUP95eaffc5-881c-4afb-a822-d830af580a8e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tabfb971faaTabLabelGridLayout322c0469"
					},
					"bindTo": "ResolvedBy",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tabfb971faaTabLabelGridLayout322c0469",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Tab88d573dcTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab88d573dcTabLabelTabCaption"
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
				"name": "ActivityDetailV205b00ef8",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab88d573dcTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 3
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 3
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
					"order": 4
				}
			},
			{
				"operation": "insert",
				"propertyName": "tabs",
				"parentName": "Tabs",
				"name": "Tab90ec2658TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabVisaCaption"
					},
					"items": []
				}
			},
			{
				"operation": "insert",
				"propertyName": "items",
				"parentName": "Tab90ec2658TabLabel",
				"name": "VisaDetailV2eae64ac5",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				}
			}
		]/**SCHEMA_DIFF*/
	};
});

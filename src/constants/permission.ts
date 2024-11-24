const permissions = [{
    "menuPermissionId": 1,
    "menuId": 2,
    "menuCode": "PERMISSION_MANAGEMENT",
    "permissionCode": "VIEW_USER_GROUP",
    "permissionName": "View User Group",
    "status": "Y",
    "description": "View User Group list and detail page",
    "dependPermissionCode": null
},
{
    "menuPermissionId": 2,
    "menuId": 2,
    "menuCode": "PERMISSION_MANAGEMENT",
    "permissionCode": "WRITE_USER_GROUP",
    "permissionName": "Create/Edit User Group",
    "status": "Y",
    "description": "Create and Edit User Group",
    "dependPermissionCode": null
},
{
    "menuPermissionId": 3,
    "menuId": 2,
    "menuCode":
        "PERMISSION_MANAGEMENT",
    "permissionCode":
        "DELETE_USER_GROUP",
    "permissionName":
        "Delete User Group",
    "status": "Y",
    "description":
        "Delete User Group",
    "dependPermissionCode":
        null
},
{
    "menuPermissionId": 4,
    "menuId": 2,
    "menuCode":
        "PERMISSION_MANAGEMENT",
    "permissionCode":
        "VIEW_ROLE",
    "permissionName":
        "View Role",
    "status": "Y",
    "description":
        "View role and detail page",
},
{
    "menuPermissionId": 5,
    "menuId": 2,
    "menuCode":
        "PERMISSION_MANAGEMENT",
    "permissionCode":
        "WRITE_ROLE",
    "permissionName":
        "Create/Edit Role",
    "status": "Y",
    "description":
        "Create and edit Edit Role",
    "dependPermissionCode": {
        2: [4, 6],
        3: [7],
        5: [9, 10]
    }
},
{
    "menuPermissionId": 6,
    "menuId": 2,
    "menuCode":
        "PERMISSION_MANAGEMENT",
    "permissionCode":
        "DELETE_ROLE",
    "permissionName":
        "Delete Role",
    "status": "Y",
    "description":
        "Delete Role",
    "dependPermissionCode":
        null
},
{
    "menuPermissionId": 7,
    "menuId": 3,
    "menuCode": "AUDIT_LOG",
    "permissionCode": "VIEW_AUDITLOG",
    "permissionName": "View Audit Log",
    "status": "Y",
    "description": "View Audit Log and download",
    "dependPermissionCode": null
},
{
    "menuPermissionId": 8,
    "menuId": 5,
    "menuCode": "HASHTAG",
    "permissionCode": "VIEW_HASHTAG",
    "permissionName": "View Hashtag",
    "status": "Y",
    "description": "View Hashtag List Page and detail Hastag",
    "dependPermissionCode": null
},
{
    "menuPermissionId": 9,
    "menuId": 5,
    "menuCode":
        "HASHTAG",
    "permissionCode":
        "WRITE_HASHTAG",
    "permissionName":
        "Create/Edit Hashtag",
    "status": "Y",
    "description":
        "Create and edit Hashtag",
    "dependPermissionCode":
        null
},
{
    "menuPermissionId": 10,
    "menuId": 5,
    "menuCode":
        "HASHTAG",
    "permissionCode":
        "DELETE_HASHTAG",
    "permissionName":
        "Delete Hashtag",
    "status": "Y",
    "description":
        "Delete Hashtag",
    "dependPermissionCode":
        null
}, {
    "menuPermissionId": 11,
    "menuId": 6,
    "menuCode":
        "CONTENT_MANAGEMENT",
    "permissionCode":
        "VIEW_CONTENT",
    "permissionName":
        "View Content",
    "status": "Y",
    "description":
        "List page, detail page, history version",
    "dependPermissionCode":
        null
},
{
    "menuPermissionId": 12,
    "menuId": 6,
    "menuCode":
        "CONTENT_MANAGEMENT",
    "permissionCode":
        "WRITE_CONTENT",
    "permissionName":
        "Create/Edit Content",
    "status": "Y",
    "description":
        "Create, edit, restore, request publish, cancel",
    "dependPermissionCode":
        null
},
{
    "menuPermissionId": 13,
    "menuId": 6,
    "menuCode":
        "CONTENT_MANAGEMENT",
    "permissionCode":
        "DELETE_CONTENT",
    "permissionName":
        "Delete Content",
    "status": "Y",
    "description":
        "Delete content",
    "dependPermissionCode":
        null
},
{
    "menuPermissionId": 14,
    "menuId": 8,
    "menuCode":
        "APPROVAL_LIST",
    "permissionCode":
        "APPROVAL_REJECT_CONTENT",
    "permissionName":
        "Approve/Reject Content",
    "status": "Y",
    "description":
        "Aprrove/Reject Content list",
    "dependPermissionCode":
        null
},
{
    "menuPermissionId": 15,
    "menuId": 8,
    "menuCode":
        "APPROVAL_LIST",
    "permissionCode":
        "VIEW_APPROVAL_LIST",
    "permissionName":
        "View Approval List",
    "status": "Y",
    "description":
        "View approval list ",
    "dependPermissionCode":
        null
},
{
    "menuPermissionId": 16,
    "menuId": 9,
    "menuCode":
        "REQUESTED_LIST",
    "permissionCode": "VIEW_REQUESTED_LIST",
    "permissionName":
        "View Requested List",
    "status": "Y",
    "description":
        "View requested list ",
    "dependPermissionCode":
        null
},
{
    "menuPermissionId": 17,
    "menuId": 10,
    "menuCode":
        "REPORT",
    "permissionCode":
        "VIEW_REPORT",
    "permissionName":
        "View Report",
    "status": "Y",
    "description":
        "View report and download",
    "dependPermissionCode":
        null
},
{
    "menuPermissionId": 18,
    "menuId": 11,
    "menuCode": "IGURATION_MANAGEMENT",
    "permissionCode":
        "VIEW_CONFIG",
    "permissionName":
        "View Config Management",
    "status": "Y",
    "description":
        "View Common config and content attribute",
    "dependPermissionCode":
        null
},
{
    "menuPermissionId": 19,
    "menuId": 11,
    "menuCode": "CONF IGURATION_MANAGEMENT",
    "permissionCode": "WRITE_CONFIG",
    "permissionName":
        "Create/Edit Config Management",
    "status": "Y",
    "description":
        "Add and edit common config and content attribute",
    "dependPermissionCode": null
}
]

export {
    permissions
}
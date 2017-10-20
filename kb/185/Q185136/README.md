---
layout: page
title: "Q185136: XCLN: Synchronization Codes For Offline Storage Folders"
permalink: /kb/185/Q185136/
---

## Q185136: XCLN: Synchronization Codes For Offline Storage Folders

{% raw %}

	Article: Q185136
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,8.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use an offline storage folder in a Microsoft Exchange or Outlook
	client, the synchronization may not complete successfully. After the
	synchronization, any error codes are logged in a message in the Deleted Items
	folder. The subject line of this message is Synchronization Log. Following are
	error codes and their definitions. The first 8 digits are the actual error
	message and will give you an indication of the problem occurring during the
	synchronization. The last four or five digits are an indicator to the point in
	the code where the error occurred.
	
	MORE INFORMATION
	================
	
	Error Number            Description
	============            ===========
	00040203    1515        CdoW_NO_SERVICE
	00040380    1896        CdoW_ERRORS_RETURNED
	00040481    2153        CdoW_POSITION_CHANGED
	00040482    2154        CdoW_APPROX_COUNT
	00040580    2408        CdoW_CANCEL_MESSAGE
	00040680    2664        CdoW_PARTIAL_COMPLETION
	80004002    17386       CdoE_INTERFACE_NOT_SUPPORTED
	80004005    17389       CdoE_CALL_FAILED
	80040102    1258        CdoE_NO_SUPPORT
	80040103    1259        CdoE_BAD_CHARWIDTH
	80040105    1261        CdoE_STRING_TOO_LONG
	80040106    1262        CdoE_UNKNOWN_FLAGS
	80040107    1263        CdoE_INVALID_ENTRYID
	80040108    1264        CdoE_INVALID_OBJECT
	80040109    1265        CdoE_OBJECT_CHANGED
	8004010A    1266        CdoE_OBJECT_DELETED
	8004010B    1267        CdoE_BUSY
	8004010D    1269        CdoE_NOT_ENOUGH_DISK
	8004010E    1270        CdoE_NOT_ENOUGH_RESOURCES
	8004010F    1271        CdoE_NOT_FOUND
	80040110    1272        CdoE_VERSION
	80040111    1273        CdoE_LOGON_FAILED
	80040112    1274        CdoE_SESSION_LIMIT
	80040113    1275        CdoE_USER_CANCEL
	80040114    1276        CdoE_UNABLE_TO_ABORT
	80040115    1277        CdoE_NETWORK_ERROR
	80040116    1278        CdoE_DISK_ERROR
	80040117    1279        CdoE_TOO_COMPLEX
	80040118    1280        CdoE_BAD_COLUMN
	80040119    1281        CdoE_EXTENDED_ERROR
	8004011A    1282        CdoE_COMPUTED
	8004011B    1283        CdoE_CORRUPT_DATA
	8004011C    1284        CdoE_UNCONFIGURED
	8004011D    1285        CdoE_FAILONEPROVIDER
	8004011E    1286        CdoE_UNKNOWN_CPID
	8004011F    1287        CdoE_UNKNOWN_LCID
	80040120    1288        CdoE_PASSWORD_CHANGE_REQUIRED
	80040121    1289        CdoE_PASSWORD_EXPIRED
	80040122    1290        CdoE_INVALID_WORKSTATION_ACCOUNT
	80040123    1291        CdoE_INVALID_ACCESS_TIME
	80040124    1292        CdoE_ACCOUNT_DISABLED
	80040200    1512        CdoE_END_OF_SESSION
	80040201    1513        CdoE_UNKNOWN_ENTRYID
	80040202    1514        CdoE_MISSING_REQUIRED_COLUMN
	80040301    1769        CdoE_BAD_VALUE
	80040302    1770        CdoE_INVALID_TYPE
	80040303    1771        CdoE_TYPE_NO_SUPPORT
	80040304    1772        CdoE_UNEXPECTED_TYPE
	80040305    1773        CdoE_TOO_BIG
	80040306    1774        CdoE_DECLINE_COPY
	80040307    1775        CdoE_UNEXPECTED_ID
	80040400    2024        CdoE_UNABLE_TO_COMPLETE
	80040401    2025        CdoE_TIMEOUT
	80040402    2026        CdoE_TABLE_EMPTY
	80040403    2027        CdoE_TABLE_TOO_BIG
	80040405    2029        CdoE_INVALID_BOOKMARK
	80040500    2280        CdoE_WAIT
	80040501    2281        CdoE_CANCEL
	80040502    2282        CdoE_NOT_ME
	80040600    2536        CdoE_CORRUPT_STORE
	80040601    2537        CdoE_NOT_IN_QUEUE
	80040602    2538        CdoE_NO_SUPPRESS
	80040604    2540        CdoE_COLLISION
	80040605    2541        CdoE_NOT_INITIALIZED
	80040606    2542        CdoE_NON_STANDARD
	80040607    2543        CdoE_NO_RECIPIENTS
	80040608    2544        CdoE_SUBMITTED
	80040609    2545        CdoE_HAS_FOLDERS
	8004060A    2546        CdoE_HAS_MESSAGES
	8004060B    2547        CdoE_FOLDER_CYCLE
	80040700    2792        CdoE_AMBIGUOUS_RECIP
	80070005    1005        CdoE_NO_ACCESS
	8007000E    1014        CdoE_NOT_ENOUGH_MEMORY
	80070057    1087        CdoE_INVALID_PARAMETER
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,8.0; :8.0,8.01,8.02,8.03
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}

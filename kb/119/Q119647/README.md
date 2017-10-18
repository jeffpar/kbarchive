---
layout: page
title: "Q119647: PC MAPI: List of MAPI Error Codes"
permalink: kb/119/Q119647/
---

## Q119647: PC MAPI: List of MAPI Error Codes

	Article: Q119647
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	While a MAPI application is running, it may return a numeric error code such
	as:
	
	  Application failed with MAPI Error #3
	
	The following are the actual MAPI result codes (from the MAPI.H file) and the
	numbers they will return:
	
	   Error                                 Number
	  --------------------------------------------
	
	  SUCCESS_SUCCESS                         0
	  MAPI_USER_ABORT                         1
	  MAPI_E_FAILURE                          2
	  MAPI_E_LOGIN_FAILURE                    3
	  MAPI_E_DISK_FULL                        4
	  MAPI_E_INSUFFICIENT_MEMORY              5
	  MAPI_E_ACCESS_DENIED                    6
	  MAPI_E_TOO_MANY_SESSIONS                8
	  MAPI_E_TOO_MANY_FILES                   9
	  MAPI_E_TOO_MANY_RECIPIENTS             10
	  MAPI_E_ATTACHMENT_NOT_FOUND            11
	  MAPI_E_ATTACHMENT_OPEN_FAILURE         12
	  MAPI_E_ATTACHMENT_WRITE_FAILURE        13
	  MAPI_E_UNKNOWN_RECIPIENT               14
	  MAPI_E_BAD_RECIPTYPE                   15
	  MAPI_E_NO_MESSAGES                     16
	  MAPI_E_INVALID_MESSAGE                 17
	  MAPI_E_TEXT_TOO_LARGE                  18
	  MAPI_E_INVALID_SESSION                 19
	  MAPI_E_TYPE_NOT_SUPPORTED              20
	  MAPI_E_AMBIGUOUS_RECIPIENT             21
	  MAPI_E_MESSAGE_IN_USE                  22
	  MAPI_E_NETWORK_FAILURE                 23
	  MAPI_E_INVALID_EDITFIELDS              24
	  MAPI_E_INVALID_RECIPS                  25
	  MAPI_E_NOT_SUPPORTED                   26
	
	Additional query words: 3.00 3.00b 3.20 MAPI Errors
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

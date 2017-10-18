---
layout: page
title: "Q102572: Changes Between Win 3.1 and WFW 3.1 Versions of DDEML"
permalink: kb/102/Q102572/
---

## Q102572: Changes Between Win 3.1 and WFW 3.1 Versions of DDEML

	Article: Q102572
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following changes have been made from the Windows 3.1 version of DDEML to
	the version that shipped with Windows for Workgroups (WFW) version 3.1:
	
	- The default shutdown timeout was changed from 3,000 milliseconds to 30,000
	  milliseconds.
	
	- DdeQueryConvInfo() added support for the new hwnd and hwndPartner fields.
	
	- DdeQueryConvInfo() added more robust handling for improper setting of the
	  CONVINFO structure's cb field when called.
	
	- Rewrote DdePostAdvise() to supply the correct count of remaining transactions
	  to be processed on the same topic!item!format name set for the XTYP_ADVREQ
	  transaction.
	
	- Disallow synchronous calls if the application is shutting down, or if already
	  in the middle of a synchronous transaction.
	
	- DdeUninitialize() was fixed to defer processing if called while in the middle
	  of a synchronous transaction.
	
	- DdeUninitialize() was fixed to dispatch any pending DDE messages and to make
	  necessary callbacks before quitting.
	
	- Added call to DdeUninitialize() from within DdeClientTransaction() when in
	  the middle of a synchronous transaction and DdeUninitialize() had been
	  called.
	
	- Allow any instance to call DdeCreateStringHandle().
	
	- Have DdeAbandonTransaction() only mark abandoned transactions, rather than
	  trying to remove the transaction from internal structures.
	
	- Alter PostMessage() overflow queuing to queue based on target instead of on
	  the same task, so that one target queue overflow does not bog down all
	  PostMessage() calls.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

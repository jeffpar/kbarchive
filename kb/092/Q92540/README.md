---
layout: page
title: "Q92540: Is DdePostAdvise Synchronous?"
permalink: /kb/092/Q92540/
---

## Q92540: Is DdePostAdvise Synchronous?

	Article: Q92540
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The server's callback function will have received XTYP_ADVREQ for each existing
	advise loop that was started without a XTYPF_ACKREQ flag, by the time
	DdePostAdvise returns. So DdePostAdvise is synchronous except for advise loops
	started with the XTYPF_ACKREQ flag.
	
	MORE INFORMATION
	================
	
	The DdePostAdvise function causes the Dynamic Data Exchange Management Library
	(DDEML) to send a XTYP_ADVREQ transaction to the calling (server) application's
	DDEML callback function for each client that has an advise loop active on the
	specified topic or item name pair. A server application calls this function
	whenever the data associated with the topic or item name pair changes.
	
	DDEML will have sent XTYP_ADVREQ for each advise loop that was started without a
	XTYPF_ACKREQ when DdePostAdvise returns.
	
	If an advise loop was started with the XTYPF_ACKREQ flag, the server will have to
	wait until the client acknowledges that it received the previous data item.
	Consequently, if the client did not acknowledge the previous data item,
	DdePostAdvise will set a flag for the advise loop indicating the data change and
	XTYP_ADVREQ will be sent by DDEML only after the client acknowledges the
	previous data item. The cAdvReq parameter of XTYP_ADVREQ for the slow client
	will contain CADV_LATEACK instead of the remaining advise loops to be
	processed.
	
	This means that DdePostAdvise can return before the server callback receives the
	XTYP_ADVREQ corresponding to a XTYPF_ACKREQ advise loop. This is not a problem
	because when the client used XTYPF_ACKREQ, it was willing to miss some of the
	data transitions in order to prevent the server from sending it data faster than
	could be processed. The server can send the slow client the latest data when it
	finally receives the XTYPF_ADVREQ with cAdvReq set to CADV_LATEACK.
	
	Additional query words: 3.00 3.10 call back
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

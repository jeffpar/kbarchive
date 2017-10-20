---
layout: page
title: "Q110664: BUG: DDEML Fails to Free Item Name HSZ on a LATEACK"
permalink: /kb/110/Q110664/
---

## Q110664: BUG: DDEML Fails to Free Item Name HSZ on a LATEACK

{% raw %}

	Article: Q110664
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On an advise loop started with the XTYPF_ACKREQ flag, the item name string is
	mistakenly removed from the global atom table after a certain period of time
	causing a subsequent call to DdePostAdvise() on that item name string to fail.
	
	CAUSE
	=====
	
	For an advise loop started with the XTYPF_ACKREQ flag, DDEML sends the server
	application an XTYP_ADVREQ with the LOWORD(dwData1) set to CADV_LATEACK when the
	server application calls DdePostAdvise() before the ACK for the previous update
	has been received.
	
	When the server's callback returns from processing this specific transaction,
	DDEML fails to free the item name string handle. This causes the item name's
	atom reference count (a WORD value) to increment indefinitely. When the maximum
	number of transactions (65535 for a WORD value) of this type occur, the
	reference count will be incremented (wrapped) to zero and the item name's atom
	ultimately is deleted from the global atom table. Subsequent calls to
	DdePostAdvise() on this item name string fail because the item name is no longer
	valid.
	
	RESOLUTION
	==========
	
	To work around this problem, modify your 16-bit server code as described below,
	freeing the string handle appropriately before returning from the XTYP_ADVREQ
	transaction:
	
	     case XTYP_ADVREQ:
	     ....  // Application specific processing here.
	
	     if (WIN16APP &&  (GetDDEMLVer() <= 0x00030011))
	     {
	        if (CADV_LATEACK == LOWORD(dwData1)
	            DdeFreeStringHandle(idInst, hsz2);
	     }
	
	     ...  // Return appropriate data handle or NULL here.
	
	The function GetDDEMLVer() could be written to return the dwFileVersionMS member
	of the VS_FIXEDFILEINFO structure. Refer to the VERSTAMP sample that shipped
	with the Microsoft Windows 3.1 SDK and/or Microsoft Visual C++ for further
	details about extracting version information.
	
	WIN16APP can be #defined to TRUE if this is a 16-bit version of your application;
	FALSE otherwise.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft Windows version 3.1.
	
	NOTE: This is not a problem in the 32-bit version of DDEML, that is, the version
	that comes with Microsoft Windows NT and Windows 95.
	
	Additional query words: 3.10 buglist3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}

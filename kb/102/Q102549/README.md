---
layout: page
title: "Q102549: BUG: DDESPY GP Faults Upon Return of CBR_BLOCK"
permalink: /kb/102/Q102549/
---

## Q102549: BUG: DDESPY GP Faults Upon Return of CBR_BLOCK

	Article: Q102549
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	DDESPY GP faults when a DDEML server application's dynamic data exchange (DDE)
	callback function returns CBR_BLOCK from a transaction of XCLASS_DATA class.
	
	CAUSE
	=====
	
	Expecting to always obtain a valid data handle from transactions of XCLASS_DATA
	class, DDESPY calls DdeAccessData() on the hData it receives in an attempt to
	dump the data to its output window. Internally, DDEML's DdeAccessData()
	translates to a GlobalLock() call. Consequently, a return value of CBR_BLOCK
	(defined in WINDOWS.H as -1) would mean calling GlobalLock() on an invalid hData
	== -1, and thus results in a general protection (GP) fault.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the version of DDESPY that comes
	with the Windows 3.1 SDK. With the improved parameter validation in Windows NT,
	this problem should be corrected in the Windows NT version.
	
	
	MORE INFORMATION
	================
	
	In DDEML, transactions of XCLASS_DATA class are typically expected to return a
	data handle. (Among the DDEML transactions of this class are XTYP_REQUEST,
	XTYP_ADVREQ, and XTYP_WILDCONNECT.) However, in situations where such
	transactions require lengthy processing (such as a server gathering data from a
	network), thereby making it impossible to return a data handle immediately, an
	application may choose to return CBR_BLOCK from its DDE callback function. This
	allows the server application to gather data "asynchronously," as DDEML queues
	up further transactions on the current conversation.
	
	Using DDEPSY to monitor this type of activity in the system results in a GP
	fault, because DDESPY calls DdeAccessData() on an invalid hData (== -1), as
	described in the CAUSE section above.
	
	More information on DDEML transaction classes can be found in Section 5.8.7 of
	the Windows 3.1 SDK "Programmer's Reference, Volume 1: Overview." More
	information on returning CBR_BLOCK to suspend DDEML transactions may be found in
	Section 5.8.6 of the Windows 3.1 SDK "Programmer's Reference, Volume 1:
	Overview," or by searching on the following words in the Microsoft Knowledge
	Base:
	
	  " DDEML and CBR_BLOCK " (without the quotation marks)
	
	
	Additional query words: 3.10 GPF gp-fault buglist3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

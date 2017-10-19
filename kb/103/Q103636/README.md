---
layout: page
title: "Q103636: BUG: EV_RLSDS Event Does Not Indicate Current RLSD State"
permalink: /kb/103/Q103636/
---

## Q103636: BUG: EV_RLSDS Event Does Not Indicate Current RLSD State

	Article: Q103636
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The EV_RLSDS communications event is documented as indicating the current state
	of the RLSD (receive-line-signal-detect or carrier detect). However, this event
	is never set.
	
	SYMPTOMS
	========
	
	If SetCommEventMask() is used to enable the EV_RLSDS event, when
	GetCommEventMask() is called, the EV_RLSDS bit will always be 0 (zero).
	
	RESOLUTION
	==========
	
	To get the absolute state of RLSD, use the MSRshadow. For more information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q101417 Accessing the Modem Status Register (MSR) in Windows
	
	STATUS
	======
	
	This will not be fixed in the Windows 3.1 COMM.DRV.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

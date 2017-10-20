---
layout: page
title: "Q175778: Invalid Page Fault in Wappc32.dll Using WinAPPCSetBlockingHook"
permalink: /kb/175/Q175778/
---

## Q175778: Invalid Page Fault in Wappc32.dll Using WinAPPCSetBlockingHook

{% raw %}

	Article: Q175778
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A 32-bit APPC application that initiates multiple conversations and uses the
	WinAPPCSetBlockingHook() call causes a general protection fault (GP fault) in
	Wappc32.dll on a computer running Windows 95 and using the SNA Server Client for
	Windows 95. The GP fault will be similar to the following:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	  <Program Name> caused an invalid page fault in module WAPPC32.DLL at
	  <memory location>.
	
	  Registers:
	
	  ..data omitted..
	
	
	CAUSE
	=====
	
	The 32-bit APPC library does not correctly handle the case where the
	WinAPPCSetBlockingHook() call returns FALSE on multiple threads.
	
	
	WORKAROUND
	==========
	
	If the WinAPPCSetBlockingHook() call is being used to cancel one conversation
	when the MC_ALLOCATE() takes too long. The application should call
	WinAPPCCancelBlockingCall() from within the WinAPPCSetBlockingHook() call. If
	this is done, the WinAPPCSetBlockingHook() call would continue to return TRUE
	instead of FALSE.
	
	
	Another alternative is to have the application use the Asynchronous APPC API and
	the WinAPPCCancelAsyncRequest() call.
	
	Please refer to the SNA Server "APPC Programmer's Guide" for more details on the
	APPC functions mentioned in this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11, 2.11
	Service Pack 1, 2.11 Service Pack 2, 3.0, 3.0 Service Pack 1, 3.0 Service Pack
	2.
	
	The 32-bit APPC library has been updated to correctly handle cases where a
	WinAPPCSetBlockingHook() call returns FALSE. The updated module is Wappc32.dll.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	A supported fix for SNA Server version 2.11 is now available, but has not been
	fully regression tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	
	Additional query words: Application Exception AE
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

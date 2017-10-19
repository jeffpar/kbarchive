---
layout: page
title: "Q140526: WinRUICleanup Sets Incorrect Return Code"
permalink: /kb/140/Q140526/
---

## Q140526: WinRUICleanup Sets Incorrect Return Code

	Article: Q140526
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	WinRUICleanup function returns a value of zero, regardless of the success or
	failure of the function. As a result, the application is not notified that it is
	successfully deregistered.
	
	CAUSE
	=====
	
	The WinRUICleanup function incorrectly always returns a value of zero.
	
	RESOLUTION
	==========
	
	Microsoft has updated the following files to correct this problem:
	
	  Windows NT: <snaroot>\SYSTEM\WINRUI32.DLL
	  Windows 3.x: <winroot>\SYSTEM\WINRUI.DLL
	
	With this update applied,the WinRUICleanup function returns the correct value. If
	the value is not 0, the application is successfully deregistered. If the value
	is 0, the application is not deregistered.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

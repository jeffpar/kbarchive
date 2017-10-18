---
layout: page
title: "Q184239: FIX: Service Control Manager (Services.exe) Fails"
permalink: kb/184/Q184239/
---

## Q184239: FIX: Service Control Manager (Services.exe) Fails

	Article: Q184239
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an application that makes a high number of API calls, Service
	Control Manager could crash causing termination of all services. The system
	becomes unstable and both log off and shutdown do not work.
	
	
	CAUSE
	=====
	
	This problem is caused by committed memory not being returned to the system when
	the program terminates.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the following fix by contacting Microsoft
	Technical Support or wait for the next Windows NT service pack.
	
	This fix should have the following time stamp:
	
	  01/19/98  06:52               51,472 eventlog.dll (Intel)
	  01/19/98  06:49               84,240 eventlog.dll (Alpha)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: crash fail dr watson stop
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

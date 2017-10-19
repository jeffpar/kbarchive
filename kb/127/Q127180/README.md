---
layout: page
title: "Q127180: XCOPY /? Shows Incorrect Date Format"
permalink: /kb/127/Q127180/
---

## Q127180: XCOPY /? Shows Incorrect Date Format

	Article: Q127180
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	When you run XCOPY /? it shows /D:M-D-Y as an optional switch. If you use
	the M-D-Y syntax with the /D switch, the following error message appears:
	
	  The syntax of the command is incorrect.
	
	The correct format for XCOPY /D is:
	
	  xcopy /d:m/d/y
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We
	are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt 1.51 date change
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

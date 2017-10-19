---
layout: page
title: "Q128930: Err Msg: NTVDM.EXE Has Encountered a System Error"
permalink: /kb/128/Q128930/
---

## Q128930: Err Msg: NTVDM.EXE Has Encountered a System Error

	Article: Q128930
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
	
	SUMMARY
	=======
	
	When you start the first 16-bit application after installing Windows NT version
	3.5 Service Pack 2, the following error message may appear:
	
	  NTVDM.EXE has encountered a system error The handle is invalid.
	
	  Choose Close to terminate the application or Ignore.
	
	If you choose Ignore, the 16-bit application continues to run correctly. In
	addition, when you shut down Windows NT, the following message appears:
	
	  NTVDM is Busy Choose end task or wait.
	
	
	WORKAROUND
	==========
	
	To work around this problem, expand VGA.SY_ and VIDEOPRT.SY_ from the Windows NT
	Server or Workstation version 3.5 installation media to the
	%systemroot%\SYSTEM32\DRIVERs subdirectory as VGA.SYS and VIDEOPRT.SYS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt display
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

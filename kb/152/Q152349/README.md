---
layout: page
title: "Q152349: XCOPY Date Switch Fails on 29th in Leap Year"
permalink: kb/152/Q152349/
---

## Q152349: XCOPY Date Switch Fails on 29th in Leap Year

	Article: Q152349
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you specify a date of the 29th of any month in a leap year (using the
	/D:mm-29-yy switch), the XCOPY command fails with an incorrect parameter error.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods:
	
	- Copy Xcopy32.exe from a Windows 95 computer and use it on your Windows NT
	  computer instead of xcopy.exe. -or-
	
	- Upgrade to Windows NT version 4.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in Windows NT 4.0.
	
	
	Additional query words: XCOPY Date leap year 3.10 3.31 95
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50 3.51
	
	=============================================================================
	

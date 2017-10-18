---
layout: page
title: "Q221762: Error Message Using the CALL Command in Windows NT Logon Script"
permalink: kb/221/Q221762/
---

## Q221762: Error Message Using the CALL Command in Windows NT Logon Script

	Article: Q221762
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the call command in a Windows NT logon script, you may receive the
	following error message on some Windows 95-based computers during the logon
	process:
	
	  Bad command or filename
	
	This problem does not occur if you run the call command after you log on, or if
	you map a drive to the Netlogon share and run a batch file that uses the call
	command.
	
	WORKAROUND
	==========
	
	To work around this behavior, you can modify the logon script so that it does
	not use the call command. For example, assume that you want to use the following
	sample script:
	
	  echo on
	  call \\server1\share1\script1.bat
	
	Instead, use the following method:
	
	  echo on
	  net use x: \\server1\share1
	  x:\script1.bat
	  net use x:/d
	
	This script does not use the call command but achieves the same result.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool win95 
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTS400xsearch kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

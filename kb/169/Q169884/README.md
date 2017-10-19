---
layout: page
title: "Q169884: FIX: Unattended Setup Is Unable to Invoke External Program"
permalink: /kb/169/Q169884/
---

## Q169884: FIX: Unattended Setup Is Unable to Invoke External Program

	Article: Q169884
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBK
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the /e switch to automatically run a program at the end of Windows
	NT Setup, you may receive the following error message at the end of the Setup
	process:
	
	  One or more minor errors occurred installing Windows NT. The errors will not
	  prevent Windows NT from running.
	
	  After Windows NT starts, you can check the Setup log file
	  (%SystemRoot%\setuplog.txt) for more information.
	
	  Would you like to view the log file now?
	
	The Setuplog.txt file contains the following text:
	
	  Warning:
	  Setup was unable to invoke external program
	  <drive>:\<directory>\<program> because of the following
	  error: CreateProcess returned error 3.
	
	CAUSE
	=====
	
	This behavior occurs if the drive letter you specified with the /e switch was
	mapped to a network drive. The network drive no longer exists after Windows NT
	Setup reboots your computer during the Setup process.
	
	RESOLUTION
	==========
	
	To correct this problem, specify a local drive letter from which to run the
	external program.
	
	STATUS
	======
	
	
	
	MORE INFORMATION
	================
	
	The Windows NT Workstation Deployment Guide to Automating Windows NT Setup cites
	the following command line on page 121 as an example of using the /e switch to
	install a Service Pack automatically after an unattended Setup:
	
	  WINNT.EXE /U:UNATTEND.TXT /S:X:\ /E:"X:\SP\UPDATE.EXE /U /Z"
	
	However, it does not specify that the "X:" following the /E switch must represent
	a local drive and cannot be a network drive. In this example, the Service Pack
	would need to be copied to the local hard drive prior to using the command, and
	the "X:" must be replaced with the local drive letter.
	
	The Windows NT Workstation Deployment Guide to Automating Windows NT Setup is
	available for download from the following location:
	
	  http://www.microsoft.com/ntworkstation/info/deployguide.htm
	
	Additional query words: automate Unattended Setup
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

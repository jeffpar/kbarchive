---
layout: page
title: "Q171940: MS-DOS Application I/O Operations Cause Floppy Drive Access"
permalink: /kb/171/Q171940/
---

## Q171940: MS-DOS Application I/O Operations Cause Floppy Drive Access

	Article: Q171940
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Service Pack 3 for Windows NT 4.0, MS-DOS applications may
	attempt to access the floppy disk drive when performing I/O operations such as
	File Open or File Save. The floppy disk drive light stays lit for a period of a
	few seconds up to a few minutes.
	
	
	
	CAUSE
	=====
	
	With Windows NT Service Pack 3, the NTVDM subsystem has been updated to keep in
	synchronization with Win32. So, when the MS-DOS application changes the default
	drive, Windows NT verifies the current directory for the new default drive.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 Service
	Pack 3. This problem was first corrected in Windows NT 4.0 Service Pack 4.0 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	
	Additional query words: prodnt 4.0 disk drive A: A drive saving opening edit edit.com servicepack sp sp3
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

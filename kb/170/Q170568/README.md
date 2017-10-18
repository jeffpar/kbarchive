---
layout: page
title: "Q170568: Seagate Tape Drive Light Stays Lit After Exiting NTBACKUP"
permalink: kb/170/Q170568/
---

## Q170568: Seagate Tape Drive Light Stays Lit After Exiting NTBACKUP

	Article: Q170568
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
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
	
	On Seagate CTT8000-A (ATAPI) tape drives, when you start Ntbackup.exe, the LED
	activity indicator light on the tape drive lights up and stays continuously lit,
	even after exiting NTBACKUP. The LED will remain lit even if there is no
	activity from the drive. The LED will only go out if you eject the tape and
	re-insert it. The symptom will show up each time you execute Ntbackup.exe.
	
	CAUSE
	=====
	
	When NTBACKUP exits, it issues a REWIND IMMEDIATE, which ATAPI drives do not
	support.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

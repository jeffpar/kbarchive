---
layout: page
title: "Q194749: SP4 Periodic Disk Access Interferes with Power Management"
permalink: kb/194/Q194749/
---

## Q194749: SP4 Periodic Disk Access Interferes with Power Management

	Article: Q194749
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP4 
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT version 4.0 Service Pack 4 (SP4) systems access the hard disk
	approximately every five minutes. This access interferes with Power Management.
	For example, if your hard disk spins-down after a few minutes of inactivity, the
	hard disk will spin-up every five minutes.
	
	CAUSE
	=====
	
	The Event Log service in Service Pack 4 maintains a time stamp on the hard disk.
	This time stamp is used to approximate system shutdown time whenever Windows NT
	is not properly shut down. By default, the time stamp is updated every five
	minutes. This feature was intended to operate only on Windows NT Server systems.
	Unfortunately, it is also enabled by default on Windows NT Workstation systems.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 Service Pack 4.
	This problem was first corrected in Windows NT 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	This hotfix adds the following to the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Reliability
	
	with the following value:
	
	  Value Name: TimeStampInterval
	  Data Type:  REG_DWORD
	  Value:      0
	
	Additional query words: 4.00 sp4 disk access writes
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

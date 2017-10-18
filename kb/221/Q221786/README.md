---
layout: page
title: "Q221786: Looping Menu Function Call Causes Automatic Reboot"
permalink: kb/221/Q221786/
---

## Q221786: Looping Menu Function Call Causes Automatic Reboot

	Article: Q221786
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbProgramming kbui kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the AppendMenu() and InsertMenu() functions to create a looping
	submenu pointing back to the original (parent) menu, a stack fault may occur in
	Windows NT and result in an automatic reboot of the computer without a warning
	message or error.
	
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
	Keywords          : kbProgramming kbui kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

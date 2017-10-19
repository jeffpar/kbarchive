---
layout: page
title: "Q165814: Stop: 0x0000001E When Opening My Computer"
permalink: /kb/165/Q165814/
---

## Q165814: Stop: 0x0000001E When Opening My Computer

	Article: Q165814
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may experience the following blue screen when you double-click My Computer
	or Network Neighborhood and you are using McAfee's NetShield or VirusScan:
	
	  STOP: 0x0000001E (0xC0000005,0x801113F7,0x000000000,0x00000008)
	
	The second parameter in the Stop code may be different depending on your system
	configuration.
	
	CAUSE
	=====
	
	A problem with the Windows NT 4.0 system file Fs_rec.sys can cause Windows NT to
	try to load the CD file system (CDFS) when it is already loaded. This in turn
	causes the virus scan program to initialize another instance of internal
	structures, which cause Windows NT to blue screen with the above error when
	called.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodnt 0x01E ntoskrnl.exe
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	

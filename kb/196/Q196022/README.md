---
layout: page
title: "Q196022: Cheyenne Backup Agent for Open Files Causes STOP 0x44"
permalink: kb/196/Q196022/
---

## Q196022: Cheyenne Backup Agent for Open Files Causes STOP 0x44

	Article: Q196022
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft BackOffice Small Business Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have Cheyenne's Backup Agent for Open Files for Windows NT installed on
	a computer running Windows NT 4.0, the following blue screen error message may
	be displayed:
	
	  STOP 0x00000044 (0x804ea6a8, 0x00000000, 0x00000000, 0x00000000)
	
	NOTE: The second, third, and fourth parameters vary depending on system
	configurations. No blue screen information will be written into the event log.
	
	CAUSE
	=====
	
	This problem is caused by using out-dated versions of Cheyenne Backup Agent for
	Open Files driver, Ofant.sys. Please note that this driver may be installed by
	many other software packages, not just Cheyenne ArcServ.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, do either of the following:
	
	- The latest build of Cheyennes Open Files Agent should resolve this issue.
	  Contact Cheyenne for the availability of the latest build.
	
	  -or-
	
	- Remove Cheyenne's Open Files Agent version from your Windows NT 4.0
	  installation.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbSBServSearch kbSBServ400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

---
layout: page
title: "Q161510: Floppy Not Detected on Ascentia 910N Laptop"
permalink: kb/161/Q161510/
---

## Q161510: Floppy Not Detected on Ascentia 910N Laptop

	Article: Q161510
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT on an AST Ascentia 910N laptop computer, the floppy
	drive is no longer detected. If you run Control Panel and choose Devices, the
	system indicates that the floppy disk driver is not started. If you attempt to
	start the driver, the following error is returned:
	
	  Error 0121
	  Could not start floppy service,
	  the semiphore timeout period has expired.
	
	CAUSE
	=====
	
	This problem occurs if you attempt to run the Ascentia 910N from battery power
	rather than AC power. Power management is not supported in Windows NT, thus when
	Windows NT is booted with the system running on battery power, the floppy disk
	is not recognized.
	
	RESOLUTION
	==========
	
	According to AST Technical Support, upgrading the BIOS to revision 2.5 should
	alleviate the problem. If the problem still occurs after upgrading the BIOS to
	2.5, download the file Set4nt.exe from the AST Web page. This file is a
	self-extracting executable that contains the Set4nt.com utility as well as a
	readme file. This utility was used to correct the problem on computers with BIOS
	earlier than 2.5.
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by AST Computer, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: Ascentia
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

---
layout: page
title: "Q246423: How to Identify Your Interix CD-ROM and Subsystem Version"
permalink: kb/246/Q246423/
---

## Q246423: How to Identify Your Interix CD-ROM and Subsystem Version

	Article: Q246423
	Product(s): Microsoft Windows NT
	Version(s): 2.2.1,2.2.2,2.2.3,2.2.4
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Interix versions 2.2.1, 2.2.2, 2.2.3, 2.2.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to identify your CD-ROM and subsystem version in
	Interix.
	
	MORE INFORMATION
	================
	
	You can use either of the following methods to identify an Interix subsystem
	release:
	
	- If you have the Interix 2.2 CD-ROM, put it in the CD-ROM drive and view the
	  CD-ROM from Microsoft Windows NT Explorer or My Computer to see the CD-ROM
	  label.
	
	- In Windows NT Explorer, locate the Interix subsystem (Psxss.exe) in the
	  %WinDir%\System32 folder. To view the version information, on the File menu,
	  click Properties, and then click the Version tab.
	
	If the CD-ROM label lists Interix 2.2.3 or later, you already have a system that
	works with Microsoft Windows NT 4.0 Service Pack 4 (SP4). If the Psxss.exe file
	version is 2.2.203 or later, Windows NT 4.0 SP4 does not cause Interix to stop
	working. If the version is 2.2.202 or earlier, you must install Interix 2.2
	Service Pack 1 or a patch to correct the issue.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbInterixSearch kbUNIXSearch kbInterix221 kbInterix222 kbInterix223 kbInterix224
	Version           : :2.2.1,2.2.2,2.2.3,2.2.4
	Issue type        : kbinfo
	
	=============================================================================
	

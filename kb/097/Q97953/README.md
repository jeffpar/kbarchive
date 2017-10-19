---
layout: page
title: "Q97953: Anti-Virus for Windows Doesn't Scan Due to Insufficient Memory"
permalink: /kb/097/Q97953/
---

## Q97953: Anti-Virus for Windows Doesn't Scan Due to Insufficient Memory

	Article: Q97953
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Anti-Virus for Windows (MWAV) may report either of the following error
	messages:
	
	- Insufficient DOS Memory
	
	- Insufficient MS-DOS Memory
	
	- Not Enough Memory
	
	This problem can occur in both standard and 386 enhanced modes.
	
	CAUSE
	=====
	
	This problem can be caused by incompatible terminate-and-stay-resident (TSR)
	programs or by third-party video drivers.
	
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. Use the Interactive Startup feature to start your computer without
	
	loading unnecessary TSRs. For more information on Interactive Startup, see the
	"Configuring Your System" chapter in the "User's Guide."
	2. Run Microsoft Windows Anti-Virus right after you start Microsoft Windows
	  (that is, before you run other applications).
	
	3. Try using a video driver provided with Microsoft Windows 3.1 or 3.11, such as
	  the standard VGA video driver.
	
	MORE INFORMATION
	================
	
	When Microsoft Anti-Virus requests this memory, the program has to share the
	640-kilobyte (K) conventional MS-DOS memory with the Windows kernel and any
	other terminate-and-stay-resident (TSR) programs loaded prior to running
	Windows. Windows drivers and other Windows-based applications also use
	conventional memory. These Windows-based applications, when closed, should free
	this conventional memory however, some do not.
	
	Additional query words: 6.22 6.00 6.20 6.21 antivirus anti virus hp newwave 3.10 3.11 newtextwin4
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	
	=============================================================================
	

---
layout: page
title: "Q155364: OSR2 Hangs After Booting Previous Operating System"
permalink: kb/155/Q155364/
---

## Q155364: OSR2 Hangs After Booting Previous Operating System

	Article: Q155364
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2.0,95
	Operating System(s): 
	Keyword(s): kbenv win95
	Last Modified: 15-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After starting your previous operating system (by pressing F4 when you see the
	"Starting Windows 95" message, or by choosing Previous Operating System from the
	Startup menu), when you exit the previous operating system session, your
	computer stops responding (hangs) when you restart the computer.
	
	CAUSE
	=====
	
	This problem occurs with Windows 95 OEM Service Release 2 (OSR2). Windows 95
	OSR2 is designed to be preinstalled on new computers only, and cannot boot back
	into Windows 95 from a previous operating system.
	
	RESOLUTION
	==========
	
	To enable the computer to boot Windows 95 OSR2 again, the boot drive must be
	made bootable with the Windows 95 OSR2 Emergency Boot Diskette. To do this,
	follow these steps:
	
	1. Insert the Emergency Boot Diskette in drive A and restart the computer.
	
	2. At the command prompt, type the following line:
	
	  "sys c:" (without the quotation marks)
	
	3. Remove the boot disk and restart the computer.
	
	MORE INFORMATION
	================
	
	Because OSR2 is preinstalled on new hard disks, there is no option to start the
	previous operating system on the Startup menu. However, if you format the hard
	disk, install MS-DOS and then Windows 95 OSR2, and then boot the previous
	operating system, you experience the problem described in this article. Booting
	a previous operating system is unsupported in OSR2.
	
	If you need to reformat the hard disk for any reason, use the Emergency Boot
	Diskette.
	
	Additional query words: hang stop
	
	======================================================================
	Keywords          : kbenv win95 
	Technology        : kbWin3xSearch kbWin95search kbOPKSearch
	Version           : :2.0,95
	
	=============================================================================
	

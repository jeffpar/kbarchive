---
layout: page
title: "Q134708: Missing Operating System After Setup Restarts Your Computer"
permalink: /kb/134/Q134708/
---

## Q134708: Missing Operating System After Setup Restarts Your Computer

	Article: Q134708
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbhw win95 kbHardware
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Windows 95, you may receive one of the following error
	messages the first time Setup restarts your computer:
	
	  - Missing Operating System
	
	  - Invalid System Disk
	
	When you receive one of these error messages, the computer no longer boots from
	the hard disk.
	
	CAUSE
	=====
	
	There is an incorrect value in the Partition Boot Record (PBR) on the hard disk.
	Any computer with a mis-match in the number of read/write heads reported by the
	Partition Boot Record and the system BIOS will likely have this problem.
	
	If there is a mismatch in the reported number of read/write heads, the
	C:\Setuplog.txt file contains unequal numbers on the following line:
	
	  FSLog: BIOS Heads=:64:, BootPart Heads=:64:
	
	RESOLUTION
	==========
	
	To correct this problem, follow these steps:
	
	1. Restart your computer using the Emergency Startup Disk.
	
	2. Use the SYS command to transfer system files to the hard disk. For example,
	  if the Emergency Startup Disk is in drive A, type sys c:.
	
	3. Remove the Emergency Startup Disk from the floppy disk drive and then restart
	  your computer. Setup should continue.
	
	If you do not have an Emergency Startup Disk and cannot obtain one, start your
	computer using a Startup disk from your previous operating system (such as
	MS-DOS). Use the SYS command to transfer the system files to the hard disk,
	restart the computer, and then run Windows 95 Setup again.
	
	MORE INFORMATION
	================
	
	This issue is known to occur on Leading Edge Fortiva 5000 computers. The PBR on
	Leading Edge Fortiva 5000 computers returns a hexadecimal value of 40 heads. The
	actual value is 20.
	
	For additional information about the "Invalid system disk" error message, see the
	following article in the Microsoft Knowledge Base:
	
	Error Message "Invalid System Disk" After Setup Reboots
	
	
	======================================================================
	Keywords          : kbenv kberrmsg kbhw win95 kbHardware 
	Technology        : kbWin95search kbWin95
	Version           : WINDOWS:95
	
	=============================================================================
	

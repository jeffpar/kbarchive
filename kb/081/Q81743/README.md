---
layout: page
title: "Q81743: Norton Antivirus Drivers Hang SMARTDRV.EXE"
permalink: kb/081/Q81743/
---

## Q81743: Norton Antivirus Drivers Hang SMARTDRV.EXE

	Article: Q81743
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Norton Antivirus for Windows and MS-DOS has two drivers that load in the
	CONFIG.SYS: NAV_.SYS and NAV&.SYS. These drivers can conflict with Microsoft
	Windows 3.1's SMARTDRV.EXE version 4.0.
	
	MORE INFORMATION
	================
	
	The conflict between the drivers can cause the system to stop responding (hang)
	during startup or can cause the scanning process to fail. The following are the
	conditions for conflict.
	
	System Hangs During Boot Process
	--------------------------------
	
	Both the Norton drivers and SMARTDRV.EXE file automatically load into the UMB
	area between 640K and 1024K, where they conflict with each other.
	
	There are two solutions to this problem:
	
	1. Modify the AUTOEXEC.BAT file's SMARTDRV.EXE line and add a /L parameter to
	  force SMARTDRV.EXE to load low, as follows
	
	  C:\WINDOWS\SMARTDRV.EXE /L xxxx yyyy
	
	  where xxxx is size and yyyy is winsize.
	
	2. Modify the CONFIG.SYS file and add a /B to the NAV&.SYS line:
	
	  DEVICE=C:\NORTON\NAV&.SYS /B
	
	Scanning Process Fails
	----------------------
	
	Norton Antivirus may give the following error message on a low-memory machine
	running SMARTDRV.EXE:
	
	  Not Enough Memory to Scan Application
	
	To solve this problem:
	
	- Free additional memory by not loading other drivers or
	  terminate-and-stay-resident (TSR) programs.
	
	  -or-
	
	- Disable SMARTDRV.EXE.
	
	Norton Driver Descriptions
	--------------------------
	
	NAV_.SYS is used to scan for viruses whenever an application is launched or a
	file is copied, and detects boot-sector and partition- table viruses. It takes
	up more memory and is faster than NAV&.SYS.
	
	NAV&.SYS is used to scan when applications are launched and detects
	boot-sector viruses on floppy drives. It is more compact than NAV_.SYS, and uses
	overlays. The /B causes NAV&.SYS to use more memory and bypass the conflict
	in the UMB area.
	
	The Norton products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.10 3.1 3.11 norbert smartdrive win31 3rdparty 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

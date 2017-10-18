---
layout: page
title: "Q172912: Windows NT May Appear to Hang When a Mirrored IDE Drive Fails"
permalink: kb/172/Q172912/
---

## Q172912: Windows NT May Appear to Hang When a Mirrored IDE Drive Fails

	Article: Q172912
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform Windows NT mirroring on a computer using IDE drives and the
	master drive on the Primary channel fails, the system may appear to stop
	responding. You may also experience very erratic mouse movement. This can happen
	even if the system drive is configured as master on the primary EIDE controller
	and shadow drive is configured as master on the secondary EIDE controller.
	
	CAUSE
	=====
	
	When your computer is running Windows NT, the ATAPI device driver continues to
	request communication to the primary EIDE device on the master channel. This
	process will eventually timeout and Windows NT will then continue to run by
	using the primary (shadow) drive on the secondary channel. The length of this
	timeout delay depends on the processes running and the specific hardware in use.
	
	RESOLUTION
	==========
	
	Because of the nature of IDE architecture, the system may appear to stop
	responding or erratic mouse movement may occur. This behavior is expected when a
	mirrored IDE drive fails.
	
	If an instantaneous switchover from the primary drive to the shadow drive of the
	mirror set is desired, then switching to a SCSI-based disk subsystem is
	recommended.
	
	
	MORE INFORMATION
	================
	
	When the original system or boot drive fails, you will have to use a Windows NT
	boot floppy disk to start from the shadow partition or reconfigure the shadow
	disk drive as the master disk drive on the primary controller.
	
	If the drives are not the same geometry, then you may still not be able to boot
	off the shadow drive even when moved to the primary drive's position on the IDE
	channel.
	
	For additional information, please see the following articles with related topics
	in the Microsoft Knowledge Base:
	
	  Q141702 How to Recover Mirroring Windows NT Using IDE devices
	
	  Q119467 Creating a Boot Disk for an NTFS or FAT Partition
	
	  Q114779 Overview of Disk Mirroring (RAID Level 1) in Windows NT
	
	  Q128630 How to Recover From a STOP 0x00000058 FTDISK_INTERNAL_ERROR
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	
	=============================================================================
	

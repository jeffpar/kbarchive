---
layout: page
title: "Q135461: If Your MS-DOS or Windows NT Operating System Does Not Boot"
permalink: /kb/135/Q135461/
---

## Q135461: If Your MS-DOS or Windows NT Operating System Does Not Boot

{% raw %}

	Article: Q135461
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): MS-DOS:2.11,3.1,4.0,5.0,6.0,6.2,6.21,6.22; WINDOWS:3.11; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft MS-DOS operating system versions 2.11, 3.1, 4.0, 5.0, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to boot your computer running Windows NT or MS-DOS, the operating
	system does not boot and you receive one of the following messages:
	
	  NO ROM BASIC : SYSTEM HALTED
	
	  -or-
	
	  Press a key to reboot
	
	If you press a key to reboot, the message appears again.
	
	NOTE: Depending on the manufacturer of the CMOS or BIOS the message text may
	vary.
	
	CAUSE
	=====
	
	The CMOS or BIOS of your computer displays this message on your screen if drive
	C, the primary partition on the first physical hard disk, is no longer marked as
	the active boot partition.
	
	RESOLUTION
	==========
	
	To resolve this problem, mark the primary partition active.
	
	Your Computer Runs Windows NT
	-----------------------------
	
	To mark the primary partition active, boot your computer with a Windows NT boot
	disk and run Disk Administrator. You cannot use the Emergency Repair Disk (ERD),
	because it does not mark the partition active.
	
	If you do not have a Windows NT boot disk, you need another computer on which you
	can create a Windows NT boot disk:
	
	- If you run Windows NT 3.1 on your computer and you have another computer
	  available that runs Windows NT 3.1, please see the following article in the
	  Microsoft Knowledge Base:
	
	  Q101668 How To Guard Against Boot Failure with a Windows NT Boot Disk
	
	- If you run Windows NT 3.5 on your computer, and you have another computer
	  available that runs Windows NT 3.5, please see the following article in the
	  Microsoft Knowledge Base:
	
	  Q119467 Creating a Boot Disk for an NTFS Partition
	
	- If you only have another computer available that runs MS-DOS, follow the
	  instructions under Your Computer Runs MS-DOS below.
	
	Your Computer Runs MS-DOS
	-------------------------
	
	To mark the primary partition active:
	
	1. On a computer running MS-DOS, create a bootable floppy disk.
	
	2. Copy the file FDISK.EXE from that computer's DOS directory to the floppy
	  disk.
	
	3. On your problem computer, boot from the floppy disk.
	
	4. Run FDISK.EXE to mark the primary partition active.
	
	5. Remove the floppy disk from the drive.
	
	6. Reboot your computer to boot the operating system on drive C.
	
	Additional query words: prodnt 2.11 3.10 4.00 5.00 6.00 6.20 6.21 6.22 1.3 2.0 2.1 2.2 3.11 wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311 kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS211
	Version           : MS-DOS:2.11,3.1,4.0,5.0,6.0,6.2,6.21,6.22; WINDOWS:3.11; winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}

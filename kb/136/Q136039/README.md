---
layout: page
title: "Q136039: Installing Windows NT on a Hard Disk Configured with EZ-Drive"
permalink: /kb/136/Q136039/
---

## Q136039: Installing Windows NT on a Hard Disk Configured with EZ-Drive

	Article: Q136039
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Windows NT on a Conner hard drive configured with the EZ-Drive
	utility, one of the following error messages appear:
	
	  Hard drives are not usable by NT
	
	  -or-
	
	  NT cannot access the partitions prepared by DOS
	
	CAUSE
	=====
	
	This problem occurs if the Windows NT Compatibility Mode (also called Floppy
	Boot Protection in later versions of EZ-Drive) is not enabled for a computer
	using a hard drive that does not have logical block addressing (LBA) capability.
	If the system has LBA capability, then the EZ-Drive Overlay Manager does not
	need to be used.
	
	RESOLUTION
	==========
	
	To correct this problem, enable the Windows NT Compatibility Mode. To enable the
	mode, do the following:
	
	1. Backup the contents of your hard disk.
	
	2. Insert the EZ-Drive disk in the floppy drive and type "EZ" (without the
	  quotation marks).
	
	3. From the menu list, select Windows NT Compatibility Mode.
	
	4. Save and exit the EZ-Drive utility.
	
	5. Reboot the computer. You do not need to repartition or reformat the hard
	  disk. If you wish to remove the EZ-Drive Overlay Manager once it has been
	  installed and the LBA options enabled in the CMOS, type the following at the
	  MS-DOS prompt:
	
	  FDISK /MBR
	
	For more information, contact Micro House Technical Support at (303) 443-3389.
	
	Additional query words: 3.5 3.51 drive CFS1275A
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	

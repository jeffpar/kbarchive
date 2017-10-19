---
layout: page
title: "Q117131: Master Boot Record Not Written to Mirrored Shadow Partition"
permalink: /kb/117/Q117131/
---

## Q117131: Master Boot Record Not Written to Mirrored Shadow Partition

	Article: Q117131
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you make the previously shadowed partition of a mirrored system partition
	into the primary partition, when you restart your computer, it stops responding
	(hangs). Only the initial system and peripheral BIOS startup text is displayed
	on the monitor.
	
	CAUSE
	=====
	
	Windisk is the utility that manages disk partitioning in Windows NT Server. When
	it establishes a mirrored partition on a previously unused disk, it does not
	check for the existence of valid boot code in the Master Boot Record. At
	startup, the system BIOS of an Intel 80x86-based computer expects the Master
	Boot Record to contain executable code which is responsible for locating and
	passing control to the boot sector on the active partition. When this code is
	not present, the processor attempts to execute random memory and the computer
	hangs.
	
	NOTE: If the disk used to hold the shadow of the mirrored system partition was
	previously partitioned, either by Windows NT Server, MS-DOS, or any other
	operating system which uses the same partitioning scheme, the Master Boot Record
	will already contain valid boot code and the system will boot successfully when
	started from the former shadow partition. Only when the secondary disk was not
	previously partitioned will this result in your computer hanging.
	
	
	WORKAROUND
	==========
	
	Through the use of a Windows NT "boot floppy", the operating system can still be
	initialized. For information on how to create such a floppy, see pages 161 and
	162 of the "Windows NT Advanced Server Concepts and Planning Guide," or see the
	following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q119467
	  TITLE : Creating a Boot Disk for an NTFS or FAT Partition
	
	
	It is possible to initialize the boot code in the Master Boot Record by using
	WINDISK.EXE to modify the disk partition structure. When you manually make and
	format a primary partition Windisk.exe will initialize the master Boot Records
	boot code.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodnt repair tshoot fdisk mbr
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : :3.1,3.5,3.51
	
	=============================================================================
	

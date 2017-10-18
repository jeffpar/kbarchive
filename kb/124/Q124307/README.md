---
layout: page
title: "Q124307: Installing Windows NT on Large IDE Hard Disk Drives"
permalink: kb/124/Q124307/
---

## Q124307: Installing Windows NT on Large IDE Hard Disk Drives

	Article: Q124307
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may be unable to install Windows NT on a IDE drive larger than 504 megabytes
	(MB) or an IDE drive using more than 1024 cylinders (as configured in the CMOS
	settings). You may receive messages such as "STOP 0x0000007B
	INACCESSIBLE_BOOT_DEVICE" when NT reboots and starts the graphical user
	interface (GUI) portion of setup. If you are installing Windows NT from floppy
	disk, the problem occurs on Disk 9.
	
	If you do get Windows NT installed, Windows NT may:
	
	- Not recognize the drive as the correct size. For example, it may see 500 MB
	  free on a 504 MB drive.
	
	- Not recognize the drive even though it is recognized by other operating
	  systems (such as MS-DOS).
	
	- See the full drive while other operating systems (such as MS-DOS) see only
	  500 MB of the drive.
	
	CAUSE
	=====
	
	This problem occurs when Windows NT Setup truncates the drive parameters to 1024
	cylinders to support interrupt 13 compatibility. Interrupt 13 compatibility is
	required so the master boot record (MBR) can locate the boot sector. The boot
	sector then finds and loads the NT boot loader (NTLDR) and continues to load the
	operating system. NT uses interrupt 13 calls until a disk driver is loaded.
	
	Historically, interrupt 13 compatibility has a limitation of 1024 cylinders.
	Secondary drives not containing the boot partition may not be limited to 1024
	cylinders depending on the translation scheme used by the controller and drive.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	- Update your AMI BIOS to a version dated at 07/25/94 or later. These BIOS'
	  support logical block addressing (LBA).
	
	- Purchase and install an IDE controller that has a built in translating BIOS.
	  For example, the IDE controllers made by Buslogic and Promise provide
	  translation functions so you don't need an updated BIOS. These are sometimes
	  referred to as enhanced IDE controllers. Since the controller operates in
	  place of the system BIOS it should work with any IDE drive currently
	  available.
	
	- Partition the drive into partitions smaller than 500 Mb with MS-DOS FDISK and
	  then install Windows NT on one of these partitions. The partitions must not
	  exceed 1024 cylinders.
	
	  NOTE: The above workarounds require you change CMOS settings and reformat your
	  hard drive before you install Windows NT. Backup any data from your hard disk
	  drive before making these changes.
	
	
	- Use Ontrack Disk Manager to partition and format the large IDE hard disk
	  drive.
	
	  For information on using Ontrack Disk Manager to do this, please see the
	  following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q124910
	  TITLE : Using Ontrack Disk Manager to Support Large IDE Drives
	
	MORE INFORMATION
	================
	
	LBA allows the CMOS to provide sector translation so that the drive's physical
	parameters are hidden from the operating system. LBA does this by translating
	the drive's physical parameters into logical parameters, and then storing them
	in an enhanced parameter table. The value for the number of cylinders is set at
	the MS-DOS limit of 1024, and the value for the number of heads is increased.
	For example, a drive having 2048 cylinders, 16 heads, and 63 sectors per track
	could be reported as having 1024 cylinders, 32 heads, and 63 Sectors per track.
	
	LBA uses the following algorithm for determining the level of translation to
	use:
	
	  If the total number of sectors is less than 1032192 (FC000 hex), the
	  drive is less than or equal to 528 MB; translation usually isn't needed.
	
	  If the total number of sectors is less than or equal to 2164531 (210733
	  hex), the drive is greater than 528 MB but less than or equal to 1056.9
	  MB; the number of heads is set at 32.
	
	  If the total number of sectors is less than or equal to 4329267 (420f33
	  hex), the drive is greater than 1056.9 MB but less than or equal to
	  2113.9 MB;  the number of heads is set at 64.
	
	  If the total number of sectors is less than or equal to 86558534 (841e66
	  hex), the drive is greater than 2113.9 MB but less than or equal to
	  4227.8 MB; the number of heads is set at 128.
	
	  If the total number of sectors is greater than 8658534 (841e66 hex), the
	  drive is greater than 4227.8 MB; the number of heads is set at 255.
	
	
	AMI technical support can be reached at (404) 263-8181.
	
	You may purchase an updated BIOS by calling UniCore Software Inc. at (800)
	800-2467. If you are using AMI BIOS, please provide, when calling, the
	information that appears in the bottom left corner of your screen when you boot
	your computer. This information identifies the core chipset.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt large winnt howto hrdwr 540
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

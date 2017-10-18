---
layout: page
title: "Q51978: Order in Which MS-DOS and Windows Assign Drive Letters"
permalink: kb/051/Q51978/
---

## Q51978: Order in Which MS-DOS and Windows Assign Drive Letters

	Article: Q51978
	Product(s): Microsoft Disk Operating System
	Version(s): 3.1,3.2,3.21,3.3,3.3a,4.0,4.01,5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): msdos win95 win98
	Last Modified: 28-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft MS-DOS assigns drive letters to the first two physical floppy disk
	drives and hard disk drives it finds at boot time in a fixed sequence, including
	multiple partitions and logical drives on the hard disks. You cannot change this
	sequence.
	
	The drive letters assigned to additional drives installed using DRIVER.SYS and
	other installable device drivers is dependent upon the order in which the
	drivers are loaded in the CONFIG.SYS file. These drive letter assignments can be
	influenced by changing the order of the CONFIG.SYS statements or loading "dummy"
	drives to "use up" drive letters.
	
	Drive letter assignments can change when you upgrade from one Microsoft MS-DOS
	version to another or from an original equipment manufacturer (OEM) version of
	MS-DOS to another version that assigns drive letters differently. (The order in
	which drive letters are assigned was modified by OEMs in earlier versions of
	MS-DOS.) This article describes how MS-DOS assigns drive letters; it does not
	explain how particular OEM MS-DOS versions assign drive letters.
	
	MORE INFORMATION
	================
	
	The following occurs at startup:
	
	1. MS-DOS checks all installed disk devices, assigning the drive letter A to the
	  first physical floppy disk drive that is found.
	
	2. If a second physical floppy disk drive is present, it is assigned drive
	  letter B. If it is not present, a logical drive B is created that uses the
	  first physical floppy disk drive.
	
	3. Regardless of whether a second floppy disk drive is present, MS-DOS then
	  assigns the drive letter C to the primary MS-DOS partition on the first
	  physical hard disk, and then goes on to check for a second hard disk.
	
	4. If a second physical hard disk is found, and a primary partition exists on
	  the second physical drive, the primary MS-DOS partition on the second
	  physical hard drive is assigned the letter D. MS-DOS version 5.0, which
	  supports up to eight physical drives, will continue to search for more
	  physical hard disk drives at this point. For example, if a third physical
	  hard disk is found, and a primary partition exists on the third physical
	  drive, the primary MS-DOS partition on the third physical hard drive is
	  assigned the letter E.
	
	5. MS-DOS returns to the first physical hard disk drive and assigns drive
	  letters to any additional logical drives (in extended MS-DOS partitions) on
	  that drive in sequence.
	
	6. MS-DOS repeats this process for the second physical hard disk drive, if
	  present. MS-DOS 5.0 will repeat this process for up to eight physical hard
	  drives, if present. After all logical drives (in extended MS-DOS partitions)
	  have been assigned drive letters, MS-DOS 5.0 returns to the first physical
	  drive and assigns drive letters to any other primary MS-DOS partitions that
	  exist, then searches other physical drives for additional primary MS-DOS
	  partitions. This support for multiple primary MS-DOS partitions was added to
	  version 5.0 for backward compatibility with the previous OEM MS-DOS versions
	  that support multiple primary partitions.
	
	7. After all logical drives on the hard disk(s) have been assigned drive
	  letters, drive letters are assigned to drives installed using DRIVER.SYS or
	  created using RAMDRIVE.SYS in the order in which the drivers are loaded in
	  the CONFIG.SYS file. Which drive letters are assigned to which devices can be
	  influenced by changing the order of the device drivers or, if necessary, by
	  creating "dummy" drive letters with DRIVER.SYS.
	
	The MS-DOS utility SUBST, networks and programs such as the CD-ROM Extensions
	which use the MS-DOS network interface can request a specific drive letter be
	assigned to a block device.
	
	Example 1
	---------
	
	Consider as an example a system with one floppy disk drive and one hard disk
	drive, with two MS-DOS partitions (a primary partition and an extended partition
	containing a single logical drive) on the hard disk. In this configuration,
	MS-DOS will assign the floppy disk drive as drives A and B, the primary
	partition on the hard disk drive as drive C, and the logical drive in the
	extended partition as drive D.
	
	Example 2
	---------
	
	Consider another system with three floppy disk drives, the third drive being
	installed using DRIVER.SYS, and two hard disk drives, with a primary and an
	extended partition on each hard disk drive. The extended partition on the first
	hard disk drive contains two logical drives, and the extended MS-DOS partition
	on the second hard disk drive contains one logical drive. A RAM disk is also
	created using RAMDRIVE.SYS.
	
	In this configuration, MS-DOS will assign the first two floppy disk drives as
	drives A and B, then assign the primary partitions on the first and second
	physical hard disk drives as drives C and D, respectively. MS-DOS will then
	assign the drive letters E and F to the two logical drives in the extended
	partition on the first physical drive, and G to the logical drive in the
	extended partition on the second physical drive.
	
	The third floppy disk drive, installed using DRIVER.SYS, and the RAM disk created
	using RAMDRIVE.SYS, will be assigned the letters H and I in the order in which
	the DEVICE= statements appear in the CONFIG.SYS file.
	
	Partitioning Schemes
	--------------------
	
	Listed below are some sample partitioning schemes for two 40-megabyte (MB) hard
	disk drives and their resulting drive letter assignments:
	
	- Drive 1:
	  C: 20 MB primary MS-DOS partition
	  E: 20 MB logical drive 1 in extended MS-DOS partition
	
	  Drive 2:
	  D: 20 MB primary MS-DOS partition
	  F: 20 MB logical drive 1 in extended MS-DOS partition
	
	- Drive 1:
	  C: 20 MB primary MS-DOS partition
	  D: 20 MB logical drive 1 in extended MS-DOS partition
	
	  Drive 2:
	  E: 20 MB logical drive 1 in extended MS-DOS partition
	  F: 20 MB logical drive 2 in extended MS-DOS partition
	
	- Drive 1:
	  C: 10 MB primary MS-DOS partition
	  E: 10 MB logical drive 1 in extended MS-DOS partition
	  F: 10 MB logical drive 2 in extended MS-DOS partition
	  G: 10 MB logical drive 3 in extended MS-DOS partition
	
	  Drive 2:
	  D: 10 MB primary MS-DOS partition
	  H: 10 MB logical drive 1 in extended MS-DOS partition
	  I: 10 MB logical drive 2 in extended MS-DOS partition
	  J: 10 MB logical drive 3 in extended MS-DOS partition
	
	Additional query words: 6.22 3.20 3.30 3.30a 4.00 4.00a 5.00 5.00a 6.00 6.20 setup upgrade fdisk msdos
	
	======================================================================
	Keywords          : msdos win95 win98 
	Technology        : kbWinMEsearch kbWin95search kbWin98search kbZNotKeyword3 kbWin98 kbWinME kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : :3.1,3.2,3.21,3.3,3.3a,4.0,4.01,5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	

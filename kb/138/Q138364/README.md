---
layout: page
title: "Q138364: Windows NT Partitioning Rules During Setup"
permalink: kb/138/Q138364/
---

## Q138364: Windows NT Partitioning Rules During Setup

	Article: Q138364
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft BackOffice Small Business Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During the installation of Windows NT, Setup determines the best partitioning
	scheme to use based on the existing partition table entries and where you choose
	to install Windows NT. Windows NT Setup restraints restrict the boot partition
	of up to 4 GB. The limit may be smaller depending on disk geometry. The actual
	value that is used as the limit is whatever Setup believes to be 1024 cylinders
	worth of disk space. Sometimes this is 1 GB, 2 GB, or 4 GB, but can be some
	other value depending on the make, model, and configuration of the hard disk
	adapter in use. This is the amount of space with which the text-mode portion of
	the installation can work. From this amount, you can create partitions that do
	not exceed 4 GB because the partition must first be formatted FAT and this file
	system has a limit to 4 GB.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q119497 Boot Partition Created During Setup Limited to 4 Gigabytes
	
	  Q224526 Windows NT 4.0 Supports Maximum of 7.8-GB System Partition
	
	These articles explains rules you should consider before installing Windows NT on
	computers that contain large hardware RAID-5 drive arrays if you want to use the
	full contiguous capacity of these large arrays after Windows NT is installed.
	
	MORE INFORMATION
	================
	
	When you use a Hardware RAID-5 configuration, it is very important to understand
	how Windows NT partitions your drive during Setup in order to maintain maximum
	contiguous capacity of the large Array for user data after Windows NT is
	installed. Setup follows these rules:
	
	Rule 1
	------
	
	If no partitions pre-exist on the drive, Setup makes the primary partition the
	size you specify for Windows NT (up to 4GB).
	
	Rule 2
	------
	
	If a primary partition already exists, and you choose to install Windows NT in an
	unformatted free space, you are prompted for the size of the partition to create
	(up to 4 GB). After you choose the partition size, Setup creates the largest
	extended partition possible (up to 7.8 GB if using a 63 sectors/track, 255
	tracks/cylinder translation scheme) and creates a logical drive within the
	extended partition of the size you choose. After Windows NT is installed, the
	unused extended partition space can be used for additional logical drives.
	
	Rule 3
	------
	
	If a primary and extended partition already exist and free space in the extended
	partition is selected, Windows NT creates a new logical drive of the size
	specified by you.
	
	Rule 4
	------
	
	If a primary and extended partition already exist and free space is available and
	selected outside of the extended partition, Windows NT creates another primary
	partition of the size the you choose (up to 4GB) for Windows NT to be installed
	in.
	
	There are two possible workarounds:
	
	- Prior to installing Windows NT, use MS-DOS FDISK to create an extended
	  partition of 250 MB, then create a logical drive of 250 MB within the
	  extended partition. When you install Windows NT, select this partition as the
	  target to install Windows NT in.
	
	  -or-
	
	- Install Windows NT into the first primary MS-DOS FAT partition. After Windows
	  NT is installed, run Disk Administrator and create a second primary partition
	  of 250 MB. Re-install Windows NT into this second primary partition and then
	  delete the first Windows NT installation from the first primary MS-DOS
	  partition.
	
	EXAMPLE
	-------
	
	You have four 2-GB drives configured in a hardware RAID-5 configuration for a
	total capacity of 6 GB and want a 5.5-GB NTFS partition for user data after
	Windows NT is installed. You have MS-DOS pre-installed on a 250-MB primary
	partition prior to installing Windows NT and want to keep this intact. You
	decide to install Windows NT into a separate NTFS partition and create a 250-MB
	partition from free space during Windows NT Setup.
	
	Using rule 3 above, Windows NT creates an extended partition of 4 GB, then
	creates a 250-MB logical drive within to install Windows NT on. After Windows NT
	is installed, Disk Administrator shows the following:
	
	  C:   250   MB FAT
	  D:   250   MB NTFS (logical drive)
	     3.750   GB extended partition space (free)
	     1.750   GB Free space
	     -----
	     6.0     GB total usable space in hardware raid-5 configuration.
	
	The problem is that the 2 free spaces cannot be combined to equal the 5.5-GB
	partition space wanted for user data.
	
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbSBServSearch kbWinAdvServSearch
	Version           : :2000,3.1,3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

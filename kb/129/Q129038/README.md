---
layout: page
title: "Q129038: Summary of Windows NT NTFS and FTDisk Data Recovery"
permalink: /kb/129/Q129038/
---

## Q129038: Summary of Windows NT NTFS and FTDisk Data Recovery

	Article: Q129038
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
	
	SUMMARY
	=======
	
	FtDisk, the Windows NT fault tolerant driver, provides the mechanisms for
	redundant data storage, volume management, and dynamic data recovery.
	
	MORE INFORMATION
	================
	
	Dynamic data recovery is only available on SCSI drives. FtDisk works between the
	physical disk drivers and the file system drivers, and works with all the
	supported files systems (FAT, HPFS, and NTFS). Windows NT file system (NTFS) is
	the only file system with built-in data recovery mechanisms.
	
	The table below lists the data recovery options available when you have FtDisk
	installed on an NTFS drive.
	
	         SCSI Drive with       Non-SCSI drive or      Any type of
	         spare sectors         no spare sectors       disk drive
	
	--------------------------------------------------------------------------
	
	Fault     1. FtDisk can         1. FtDisk can          N/A
	Tolerant     recover data          recover data
	Volume    2. FtDisk uses        2. FtDisk sends data
	            sector sparing        and a bad-sector
	            (replaces sector)     error to the file
	                                  system
	         3. File system is     3. NTFS performs
	            unaware of            cluster remapping
	            the error
	
	Non-Fault 1. FtDisk cannot      1. FtDisk cannot       1. Disk driver
	Tolerant     recover data          recover data           returns bad
	Volume                                                    sector error
	                                                         to file system
	
	         2. FtDisk sends       2. FtDisk sends        2. NTFS performs
	            bad-sector error      bad-sector error       cluster remapping
	            to file system        to file system
	         3. NTFS performs      3. NTFS performs
	            cluster remapping     cluster remapping
	            DATA IS LOST          DATA IS LOST        DATA IS LOST
	---------------------------------------------------------------------------
	
	Fault tolerant volumes include mirror sets (RAID 1) and stripe sets with parity
	(RAID 5).
	
	Note: If FtDisk finds a bad sector on a fault tolerant volume, and the physical
	disk supports spare sectors, and has spare sectors available, FtDisk replaces
	the sector. This is true for all tree supported file systems (FAT, HPFS, and
	NTFS); the file system remains unaware of this mechanism.
	
	For more information on NTFS, see "Inside the Windows NT File System" by Helen
	Custer.
	
	Additional query words: prodnt ft ntfaqset
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

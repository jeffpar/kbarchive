---
layout: page
title: "Q96741: How Fault Tolerance Is Implemented"
permalink: kb/096/Q96741/
---

## Q96741: How Fault Tolerance Is Implemented

	Article: Q96741
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Fault tolerance is implemented (and detected by its utilities) by three types of
	disk changes: added lines in the CONFIG.SYS file, hidden/system files, and
	modifications to the partition tables.
	
	MORE INFORMATION
	================
	
	These changes are explained below, but before you read about them, keep in mind
	two system aspects that are important to fault tolerance:
	
	First, FDISKPM presents the view that there is only one extended partition and
	one or more logical drives in it, but, each logical drive is in fact an extended
	partition with its own partition table.
	
	Second, when a drive is mirrored, a partition is created whose system type is
	unknown to most of the OS/2 system. It does not receive a drive letter, and is
	virtually inaccessible to the user. For instance, if a mirrored drive does not
	take up the whole extended area of its disk, FDISKPM honors the allocation of
	the mirrored partition, but does not display a logical drive. When asked to
	create a logical drive, the space available is reduced to account for the
	mirrored partition.
	
	Means of Fault Tolerance Implementation
	---------------------------------------
	
	- Two lines in CONFIG.SYS:
	
	     device=c:\<lanman>\netprog\diskft.sys
	     run=c:\<lanman>\netprog\ftmonit.exe
	
	  where <lanman> is the LAN Manager directory (default: LANMAN)
	
	- A hidden/system file (FTCFG.DRV) in the root directory on each fault tolerant
	  drive that contains fault tolerance information about that drive.
	
	- A hidden/system file (FTCFG.SYS) in the root directory of the boot volume
	  that contains system-wide configuration information.
	
	- FTPEND.SYS, FTPENDF.SYS, and FTPENDCP.SYS, which contain hold information
	  about drives pending mirroring.
	
	Mirrored Partitions
	-------------------
	
	The mirror partitions are created when mirroring is done.
	
	Mirrored partitions appear as one partition to HPFS. For example, HPFS does not
	know whether it is hotfixing a master or duplicate partition--a hotfix is made
	on both the master and duplicate partitions.
	
	Mirroring is not done on the file level. It is done on the sector level on a
	partition basis. Some other operating systems, by contrast, mirror on a sector
	level on a physical disk basis.
	
	LAN Man Files Involved in Fault Tolerance
	-----------------------------------------
	
	- For LAN Manager 2.0: DISK01.SYS (and DISK02.SYS for ABIOS machines) or a
	  driver supplied by the OEM.
	
	- For LAN Manager 2.1 and later: FT.VSD (a LADDR system module) provides
	  device-independent support. For every LADDR system disk I/O request, FT.VSD
	  calls DISKFT.SYS to see if the request should be mirrored, and submits the
	  requests to the proper board interface driver (.BID) for a mirrored write.
	  When the .BID completes the request, FT.VSD reports to DISKFT, which checks
	  the request's error status field. DISKFT keeps track of the mirror
	  configurations and statuses, monitors errors on all system drives, and
	  supplies memory for duplicated requests (not memory for request data, only
	  for request headers).
	
	Other Fault Tolerance Files and Programs
	----------------------------------------
	
	- FTSETUP detects the condition of fault tolerance by looking at the
	  hidden/system files and at the partition tables.
	
	- FTADMIN uses the hidden/system configuration files to track errors and does
	  not rely as heavily as FTSETUP does on the partition tables.
	
	- The TABLES.EXE program displays partition table information. You can find it
	  on Utilities Disk 2 of the "LAN Manager Resource Kit."
	
	Additional query words: 2.10 2.10a 2.20 2.1 2.1a 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

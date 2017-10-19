---
layout: page
title: "Q152160: Disk Administrator Cannot Always Save Disk Configuration"
permalink: /kb/152/Q152160/
---

## Q152160: Disk Administrator Cannot Always Save Disk Configuration

	Article: Q152160
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.10,3.50,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Disk Administrator allows you to save configuration information about currently
	defined drive letters, volume sets, stripe sets with parity, and mirror sets to
	a floppy disk that can be restored if Windows NT needs to be reinstalled or the
	drive sets need to be moved to another system.
	
	This is accomplished by running Disk Administrator and selecting the partition,
	configuration, save or restore options.
	
	Disk Administrator prompts you to insert a formatted disk into A: and copies the
	SYSTEM registry hive containing the configuration information onto the disk. If
	the SYSTEM registry hive is too large to fit on the disk the following error is
	displayed.
	
	  ERROR: There is not enough space on the disk.
	
	If you try the operation again using the same disk another error occurs:
	
	  ERROR: The configuration registry database is corrupt.
	
	CAUSE
	=====
	
	Disk Administrator does not compress the SYSTEM registry hive prior to copying
	it to the disk. Even though it reports that there is not enough space on the
	disk to store the information, it still makes a zero byte SYSTEM. File on the
	disk. If you try the save operation again using the same disk, the SYSTEM. file
	is first read by Disk Administrator and is considered to be corrupt because it
	is zero bytes in size and doesn't contain valid registry information.
	
	RESOLUTION
	==========
	
	Use the Rdisk.exe utility to "UPDATE REPAIR INFO" and make a current emergency
	repair disk (ERD). This ERD will contain the disk configuration information that
	can be used during a restore at a later time.
	
	NOTE: The repair disk created during initial Windows NT Setup will not contain
	the disk configuration information--you must use an ERD that has been updated
	using the Rdisk.exe utility as stated above.
	
	If you try to use the ERD directly to restore configuration information, Disk
	Administrator will report the following:
	
	  ERROR: The system cannot find the file specified.
	
	This is because Disk Administrator does not know how to read the compressed
	SYSTEM._ hive on the ERD.
	
	To use the ERD to restore configuration information, perform the following
	steps:
	
	1. Make a directory structure on any local drive as follows:
	
	  Winnterd\System32\Config
	
	2. Restore from backup the SYSTEM hive file or Copy the SYSTEM._ file from the
	  emergency repair disk (ERD) to the Config directory you made in step 1.
	
	3. If copied from the ERD - Use the expand utility to expand the compressed
	  system._ file.
	
	  Type expand.exe system._ system
	
	4. Open Disk administrator and select partition, configuration, search.
	
	5. Disk administrator will search all the local drives for a valid registry file
	  to restore the disk configuration information from. Select the entry that
	  corresponds to the directory you made in step 1:
	
	  C:\WINNTERD
	
	6. Make sure that the device Ftdisk is configured to start at boot time in the
	  Control Panel\Devices tool. This is disabled by default on newly installed
	  systems that don't have fault tolerant devices configured. This driver is
	  necessary to support fault tolerant configurations.
	
	7. After you perform a normal shutdown and restart, all of the previously
	  unknown partitions and volumes should be intact and accessible.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.x We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WinNT:3.10,3.50,3.51
	
	=============================================================================
	

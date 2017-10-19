---
layout: page
title: "Q224087: Error Message Running Emergency Repair Process"
permalink: /kb/224/Q224087/
---

## Q224087: Error Message Running Emergency Repair Process

	Article: Q224087
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbhw kbsetup kbHardware
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Emergency Repair process for Windows NT, the process may seem
	to finish very quickly, or you may receive the following error message:
	
	  Setup has determined that drive <X>: is corrupt beyond repair.
	
	  Setup cannot continue. Press F3 to exit.
	
	Rebooting and choosing to repair the boot sector without using the Emergency
	Repair Disk generates the following message:
	
	  Windows NT Workstation Setup
	
	  Setup could not find a Windows NT installation to repair. Unless you provide
	  the Emergency Repair Disk for the installation which you want to repair,
	  Setup will not be able to repair it.
	
	   - If you have the Emergency Repair Disk, or if you want Setup to retry the
	  search of existing Windows NT installations, press ENTER.
	
	   - If you want to quit Setup, press F3.
	
	CAUSE
	=====
	
	This situation is most likely to occur when the following conditions exist:
	
	- The hard disk is an IDE hard disk that is larger than 8.4 gigabytes (GB).
	
	- The computer dual-boots multiple operating systems.
	
	- Windows NT is installed on a logical MS-DOS drive, in an extended MS-DOS
	  partition.
	
	- There is another operating system installed on the first logical MS-DOS drive
	  in an extended MS-DOS partition that has an unrecognized file system, such as
	  the FAT32 file system.
	
	The Microsoft-supplied generic IDE driver (Atapi.sys) may not be fully compatible
	with drives larger than 8 GB. This issue affects only IDE-based drives that are
	8 GB in size or larger.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Download the Atapi.exe file from the following Microsoft FTP server:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-unsup-ed/fixes/nt40/atapi/ATAPI.EXE
	
	2. Copy the Atapi.exe file to a blank floppy disk. Run Atapi.exe on the disk.
	  The new Atapi.sys file is extracted to the disk.
	
	3. Copy the updated Atapi.sys file to disk 3 of the Windows NT Setup disk,
	  choosing Yes to overwrite the existing version of the file.
	
	  NOTE: If you have access to the Windows NT 4.0 Service Pack 4 CD-ROM, you can
	  copy the updated Atapi.sys file from the appropriate platform folder to disk
	  3 of the Windows NT Setup disks.
	
	4. Boot from the Setup disks supplied with the Windows NT installation media.
	
	5. When you reach the following screen just after inserting and running disk 3,
	  press ESC:
	
	  Windows NT Workstation Setup
	
	  Setup needs to know if you have the Emergency Repair Disk for the Windows NT
	  version 4.0 installation you want to repair. NOTE: Setup can only repair
	  Windows NT version 4.0 installation.
	
	Setup should then correctly identify and repair the installation.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Windows NT 4.0 Service Pack 4 (SP4) has a new Atapi.sys file that allows drives
	to be formatted during Windows NT Setup. the SP4 versioni of the Atapi.sys file
	can also gain access to space beyond 8 GB on these IDE drives.
	
	NOTE: The system partition containing the Ntldr, Boot.ini, Ntdetect.com,
	Ntbootdd.sys, and Bootsect.dos files is still limited to 7.8 GB whether or not
	the updated version of the Atapi.sys file is installed. For additional
	information, please see the following article in the Microsoft Knowledge Base:
	
	  Q114841 Windows NT Boot Process and Hard Disk Constraints
	
	Note that the computer's BIOS must support and recognize drives larger than 8 GB
	for Windows NT to be able to use entire drive. You can verify this ability by
	running the computer's BIOS configuration routine or by contacting your
	computer's manufacturer.
	
	For information about related issues, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q177257 STOP 0x0000000A or Difficulty Recognizing IDE CD-ROM Drives
	
	  Q183654 IBM DTTA-351010 10.1 GB Drive Capacity Is Inaccurate
	
	  Q197667 Installing Windows NT Server on a Large IDE Hard Disk
	
	
	Additional query words: ERD corrupt FAT-32
	
	======================================================================
	Keywords          : kbenv kberrmsg kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

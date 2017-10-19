---
layout: page
title: "Q317050: Error Message: Disk I/O Error: Status = 00000001"
permalink: /kb/317/Q317050/
---

## Q317050: Error Message: Disk I/O Error: Status = 00000001

	Article: Q317050
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your Windows NT-based computer, you may receive the following
	error message:
	
	  Disk I/O Error: Status 00000001
	
	  Windows NT could not start because the following file is missing or corrupt:
	  %SystemRoot%\System32\Ntoskrnl.exe.
	
	  Please reinstall a copy of this file.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- You install Windows on a partition that is larger than 7.8 gigabytes (GB).
	  This condition can occur if you use a third-party disk partitioning utility
	  to expand the size of the partition.
	
	  -and-
	
	- You apply either a service pack or another update that replaces Windows
	  system files, and the files that are required to start Windows (such as
	  Ntldr, Ntdetect.com, and Boot.ini) are placed outside the first 7.8 GB of the
	  hard disk.
	
	For additional information about the 7.8-GB system partition limit in Windows NT,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q224526 Windows NT 4.0 Supports Maximum of 7.8-GB System Partition
	
	RESOLUTION
	==========
	
	To resolve this behavior:
	
	1. Repartition the system partition so that it is less than 7.8 GB.
	
	2. Perform a clean installation of the operating system.
	
	3. Restore the data from a backup file if necessary.
	
	WORKAROUND
	==========
	
	If you need to gain access to the computer to back up the data before you
	repartition the system partition, follow these steps:
	
	1. Use the Windows 2000 versions of Ntldr and Ntdetect.com to create a boot disk
	  to gain access to the computer and to back up the data.
	
	2. Insert the boot disk into the computer's floppy disk drive, and then restart
	  the computer.
	
	3. Follow the procedure that is described in the "Resolution" section of this
	  article.
	
	For additional information about how to create a Windows NT boot disk, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q301680 HOW TO: Create a Boot Disk for an NTFS or FAT Partition
	
	MORE INFORMATION
	================
	
	The behavior that is described in the "Symptoms" section of this article can
	also occur if either one of the following conditions are true:
	
	- The Default value in the [Boot Loader] section of the Boot.ini file is either
	  missing or invalid.
	
	  -or-
	
	- Windows NT is not installed in the location that is specified in the Boot.ini
	  file.
	
	For additional information about how to troubleshoot the error message described
	in the Symptoms section of this article, click the article numbers below to view
	the articles in the Microsoft Knowledge Base:
	
	  Q124550 Err Msg: Windows NT Could Not Start...Ntoskrnl.exe
	
	  Q270862 OFF2000: Error Message: OS Loader V4.01 Disk I/O Error Stats=00000001
	
	For additional information about disk partitioning and limitations, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q114841 Windows NT Boot Process and Hard Disk Constraints
	
	  Q197295 Windows NT Does Not Boot to a Partition That Starts More Than 4 GB
	  into Disk
	
	  Q119497 Boot Partition Created During Setup Limited to 4 Gigabytes
	
	  Q154052 Explanation of X86 Boot Drive Limitations
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

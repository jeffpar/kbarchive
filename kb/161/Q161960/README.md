---
layout: page
title: "Q161960: STOP 0x0000007B On Windows NT 4.0 After SP2 Applied"
permalink: /kb/161/Q161960/
---

## Q161960: STOP 0x0000007B On Windows NT 4.0 After SP2 Applied

	Article: Q161960
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP2
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP2 
	- Microsoft Windows NT Server version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Windows NT 4.0 Service Pack 2 on a computer with IDE hard disks,
	you may receive the following blue-screen STOP message when you restart your
	computer:
	
	  STOP 0x0000007B
	  Inaccessible_Boot_Device
	
	CAUSE
	=====
	
	The updated version of Atapi.sys included with Service Pack 2 causes this STOP
	message to occur. This error should only occur if the boot or system partitions
	(startup file or operating system files) reside on an IDE drive. Windows NT
	operating system files installed on a SCSI hard disk do not experience this
	problem.
	
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- If Windows NT is installed on a FAT partition, replace Atapi.sys in the
	  %SystemRoot%\System32\Drivers folder with the Atapi.sys file in the I386
	  folder of the Windows NT 4.0 CD-ROM.
	
	  -or-
	
	- Start your computer with the Emergency Repair Disk (ERD) created prior to the
	  application of Service Pack 2, select Verify Windows NT System Files only,
	  and then repair the Atapi.sys file.
	
	  NOTE: If the computer was using Atdisk.sys instead of Atapi.sys, replace both
	  Atapi.sys and Atdisk.sys.
	
	  For more information on the Emergency Repair process, please see the following
	  article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q129037
	  TITLE : Windows NT 3.5x and 4.0 Emergency Repair Process Screens
	
	  -or-
	
	- If Windows NT is installed on an NTFS partition, re-install Windows NT to a
	  separate folder. Log on to this parallel installation and replace Atapi.sys
	  in the %SystemRoot%\System32\Drivers folder of the original Windows NT
	  installation with the Atapi.sys file in the I386 folder of the Windows NT 4.0
	  CD-ROM.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt sp2
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp2 kbWinNTSsearch kbWinNTS400sp2 kbWinNTS400search
	Version           : :4.0 SP2
	Issue type        : kbbug
	
	=============================================================================
	

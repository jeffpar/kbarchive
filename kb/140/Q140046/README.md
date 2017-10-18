---
layout: page
title: "Q140046: Master Boot Record Virus Prevents Windows NT From Installing"
permalink: kb/140/Q140046/
---

## Q140046: Master Boot Record Virus Prevents Windows NT From Installing

	Article: Q140046
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a virus is present in the master boot record, the following message appears
	after selecting the partition to install Windows NT to during setup:
	
	  The hard disk containing the partition or free space you chose is not
	  accessible to your computer's startup program. Setup cannot install Windows
	  NT on this hard disk.
	
	On x86-based computers, this message may indicate a problem with the computer's
	CMOS hard disk type settings. Consult your computer or hard disk controller
	documentation for more information.
	
	NOTE: This message does not necessarily indicate an error condition. The hard
	disks typically accessible to a computer's startup program are those whose
	installation in your computer were anticipated by the computer manufacturer.
	
	For example, disks attached to a SCSI adapter not installed by your computer
	manufacturer, or to a secondary hard disk controller, are typically not visible
	to the startup program unless special software is added to your computer.
	Contact your computer or hard disk controller manufacturer for more information.
	
	MORE INFORMATION
	================
	
	The message is referencing a translation/configuration problem between Windows
	NT and the hard disk you are trying to install Windows NT to. A computer virus
	that is part of the Master Boot Record of a hard drive can also cause the same
	message to appear during setup. (If the problem is caused by the NYB virus, you
	can remove the virus with the lastest version of McAfee's antivirus program.)
	
	If the message appears during setup right after you have selected the partition
	to install Windows NT to you need to do the following:
	
	1. Use a well known virus application such as McAfee SCAN.EXE and verify the
	  entire drive. Not all Master Boot Record viruses can be eliminated with a
	  FDISK /MBR. Drives without a partition still have Master Boot Records and
	  have to be checked also.
	
	2. Ensure that the BIOS drive type for IDE and EIDE drives are correct. You may
	  need to change the CMOS drive type from AUTO to the manufacture
	  specifications.
	
	3. Verify adapter and drive options for SCSI devices to include termination and
	  SCSI cables.
	
	4. If all hardware has been verified for configuration you may need to run a
	  hardware diagnostics on the system to verify that the hard disk controller
	  and hard drive are functioning properly.
	
	
	Additional query words: 3.51 prodnt 3.50 4.00 mcaffee
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51,4.0
	
	=============================================================================
	

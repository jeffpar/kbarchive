---
layout: page
title: "Q130801: Common Causes of STOP Messages 0x00000077 and 0x0000007A"
permalink: /kb/130/Q130801/
---

## Q130801: Common Causes of STOP Messages 0x00000077 and 0x0000007A

	Article: Q130801
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	STOP Messages 0x00000077 and 0x0000007A are related kernel traps that are caused
	when the operating system attempts to load a page into memory from the paging
	file on the hard drive, but is unable to access the page, due to either a
	software or hardware failure.
	
	MORE INFORMATION
	================
	
	The following are all common causes of STOP Messages 0x00000077 and 0x0000007A:
	
	- The paging file contained a bad block.
	
	- If the page file is on a SCSI device, the trap could have been caused by
	  improper termination.
	
	- Bad cabling from hard drive to controller.
	
	- An error on the disk controller.
	
	- Running out of non-paged pool resources on the server.
	
	Frequently, the cause of these traps can be determined from the second of the 4
	hexadecimal parameters included in the first line of the STOP Message.
	
	Value        Meaning
	----------   -------
	0xC0000008   STATUS_INVALID_HANDLE , an invalid HANDLE was specified.
	
	0xC000009A   STATUS_INSUFFICIENT_RESOURCES, caused by lack of non-paged
	            pool.
	
	0xC000009C   STATUS_DEVICE_DATA_ERROR, generally due to bad block on the
	            drive.
	
	0xC000009D   STATUS_DEVICE_NOT_CONNECTED, bad or loose cabling,
	            termination, or controller not seeing drive.
	
	0xC000016A   STATUS_DISK_OPERATION_FAILED, also caused by bad block
	            on the drive.
	
	0xC0000185   STATUS_IO_DEVICE_ERROR, caused by improper termination or bad
	            cabling on SCSI devices.
	
	These codes are the most common and the ones for which specific causes have been
	determined. For information about other possible status codes that may be
	returned, see the NTSTATUS.H file, which is included in the MSDN Development
	Platform DDK.
	
	
	Additional query words: prodnt 0x7a 0x77
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51,4.0
	
	=============================================================================
	

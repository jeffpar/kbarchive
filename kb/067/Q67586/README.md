---
layout: page
title: "Q67586: Action Taken on Abort, Retry, Ignore, Fail"
permalink: kb/067/Q67586/
---

## Q67586: Action Taken on Abort, Retry, Ignore, Fail

	Article: Q67586
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains the actions that MS-DOS takes when a critical error
	happens during a disk access. MS-DOS takes specific actions for each of the four
	possible Critical Error (Interrupt 24h) responses: Ignore, Abort, Retry, or
	Fail.
	
	MORE INFORMATION
	================
	
	According to the "MS-DOS Encyclopedia," MS-DOS takes the following actions for
	each possible critical error response.
	
	  Error     Action
	  ----------------
	
	  Ignore    The MS-DOS function call returns to the application
	            program as if the function had completed successfully.
	            For example, if the program is trying to read from the
	            disk, MS-DOS tells the program that all is well. This
	            can result in corrupted data in your disk file or
	            in data returned to your application.
	
	  Retry     The critical error handler signals MS-DOS to reissue the
	            last function call made to the device that caused the
	            critical error.
	
	  Abort     The current application is terminated immediately.
	            Unwritten disk buffers are NOT written to disk, the
	            directory information is not updated, and modified
	            interrupt vectors are not reset. Choosing this option can
	            leave the system in a very unstable state.
	
	  Fail      This causes MS-DOS to return to the application software>
	            with an error condition. In programming terms, the carry
	            flag is set upon exit from the INT 21h DOS function call.
	            This allows the application program to handle the error
	            itself and take appropriate action, rather than letting
	            MS-DOS do it.
	
	The MS-DOS kernel and device drivers do not mark a FAT entry as being bad when a
	critical error occurs, or at any other time. This task must be done by a
	separate utility. The RECOVER utility provided with MS-DOS can do this, but only
	if the bad sector exists within a file's allocated clusters -- free bad clusters
	are not checked by RECOVER. The FORMAT utility is typically the best solution,
	since it scans all areas of the disk for bad sectors. The disadvantage is that
	FORMAT also destroys any data on the drive.
	
	Some third-party disk utilities provide disk-scanning features that examine the
	entire disk data area for bad sectors, and then mark them as bad in the FAT
	(without disturbing other data on the disk).
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30a 4.00 4.01 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

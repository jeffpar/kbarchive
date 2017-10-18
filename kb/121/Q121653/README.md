---
layout: page
title: "Q121653: SCANDSKW Err Msg: This Program Requires Microsoft Windows"
permalink: kb/121/Q121653/
---

## Q121653: SCANDSKW Err Msg: This Program Requires Microsoft Windows

	Article: Q121653
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to run the Windows 95 ScanDisk Disk Checking and Repair Tool
	(SCANDSKW.EXE) from an MS-DOS command prompt with the current drive locked, you
	receive the following error message:
	
	  This program requires Microsoft Windows.
	
	
	CAUSE
	=====
	
	ScanDisk cannot run on a drive that has been locked in an MS-DOS window.
	
	WORKAROUND
	==========
	
	If you unlock the drive, you can run ScanDisk. To do this:
	
	1. Use the COMMAND.COM Unlock switch as follows:
	
	  UNLOCK <drive>:
	
	2. Run SCANDSKW again.
	
	MORE INFORMATION
	================
	
	ScanDisk for Windows 95 does not run on locked drives. This behavior is by
	design. You must unlock the drive before ScanDisk can be used.
	
	If you try to run SCANDSKW from an MS-DOS command prompt on a locked drive, but
	the current drive is not locked, you receive the following error message:
	
	  The ScanDisk operation cannot be performed now. It may work at a later time
	  or if you shut down applications that are accessing the drive.
	
	For example, if drive C is the current drive and drive D is locked, you receive
	the above error when you run SCANDSKW D: from the C: drive.
	
	If you start the ScanDisk graphical user interface first and then select a drive
	that has been locked, you also receive the above error message. If you choose OK
	and then choose to start the ScanDisk operation anyway, you receive the
	following error message:
	
	  The ScanDisk operation failed to complete because the ScanDisk operation is
	  not supported on this drive. Note that this may be caused by the drive being
	  locked by another application or the system.
	
	For more information about Exclusive Volume Locking and the Windows 95 Lock and
	Unlock commands, query on the following words in the Microsoft Knowledge Base:
	
	  exclusive and volume and lock
	
	Additional query words: windisk fixdrive.exe err msg
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

---
layout: page
title: "Q128960: Disk Defragmenter Err Msg: Error Defragmenting Drive C"
permalink: kb/128/Q128960/
---

## Q128960: Disk Defragmenter Err Msg: Error Defragmenting Drive C

	Article: Q128960
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): diskmem win95 defrag kbDefrag kbDiskMemory
	Last Modified: 01-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Windows 95 Disk Defragmenter tool on drive C, you may receive
	the following error message:
	
	  Error Defragmenting Drive C
	
	  Windows cannot defragment this drive now because it has been locked by a disk
	  utility. Quit any utilities that may have locked this drive, and then try
	  defragmenting the drive again.
	
	CAUSE
	=====
	
	This error can occur if all the following conditions are met:
	
	- Drive C is attached to an IDE controller.
	
	- There is an Adaptec AHA-1542C SCSI controller with another hard disk attached
	  to it in your computer.
	
	- The ID for the SCSI hard disk is set to 0 (zero).
	
	RESOLUTION
	==========
	
	To correct this problem, set the ID of the SCSI hard disk to anything except 0.
	For information about how to change the ID setting, please refer to the Adaptec
	controller documentation.
	
	MORE INFORMATION
	================
	
	Note that this error can also occur if the boot sector of the hard disk is
	infected with a computer virus.
	
	======================================================================
	Keywords          : diskmem win95 defrag kbDefrag kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

---
layout: page
title: "Q99071: Err Msg Copying Files to a RAMDrive: Cannot Make Directory..."
permalink: kb/099/Q99071/
---

## Q99071: Err Msg Copying Files to a RAMDrive: Cannot Make Directory...

	Article: Q99071
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you copy files to a RAMDrive, you may receive the following error message:
	
	  Cannot make directory entry - <filename>
	
	where <filename> is the name of a file you are attempting to copy.
	
	CAUSE
	=====
	
	This error occurs when the number of files copied to the root directory of the
	RAMDrive exceeds the preset limit.
	
	If no value is specified on the RAMDRIVE.SYS command line in the CONFIG.SYS file,
	the default number of entries is 64.
	
	WORKAROUND
	==========
	
	To correct this situation, do the following:
	
	- Create a subdirectory on the RAMDrive and copy your files to the
	  subdirectory.
	
	-or-
	
	- Increase the value for [NumEntries] on the RAMDRIVE.SYS line in the
	  CONFIG.SYS file. Note: The maximum value you can use is 1024.
	
	Refer to the following for information on the correct syntax:
	
	"User's Guide and Reference," for MS-DOS version 5.0, pages 614-616
	"MS-DOS 6 Technical Reference," pages 307-309
	MS-DOS 6 Help
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

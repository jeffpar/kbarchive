---
layout: page
title: "Q73843: Files and Buffers Memory Usage"
permalink: kb/073/Q73843/
---

## Q73843: Files and Buffers Memory Usage

	Article: Q73843
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following article explains MS-DOS version 5.x and later files and buffers
	memory usage.
	
	MORE INFORMATION
	================
	
	Buffers
	-------
	
	The version 5.0 "Microsoft MS-DOS User's Guide and Reference" states on page 376
	that buffers are automatically loaded into the high memory area (HMA) when the
	DOS=HIGH statement is used in the CONFIG.SYS file.
	
	The required 512 bytes (200h) is always loaded in conventional memory. This
	number remains constant regardless of the number of buffers specified.
	
	If DOS=LOW, or no DOS= line exists in the CONFIG.SYS file, buffers are allocated
	in conventional memory. Each buffer uses approximately 532 bytes of memory.
	
	Files
	-----
	
	The memory consumed by the FILES= statement in the CONFIG.SYS file is always
	allocated in conventional memory, regardless of the DOS= statement in the
	CONFIG.SYS file.
	
	There is no constant number for the amount of memory used by each allocated file
	in the FILES= statement. As the number of files allocated increases, the amount
	of memory required for each file increases also. A chart of commonly used
	amounts follows:
	
	  # Files in       Bytes used         Bytes used
	  CONFIG.SYS       in Decimal           in Hex
	  ----------------------------------------------
	
	    Default            192                 C0
	       10              496                130
	       15              608                260
	       20              896                380
	       25             1200                4B0
	       30             1488                5D0
	       35             1776                6F0
	       40             2080                820
	       45             2368                940
	       50             2672                A70
	       55             2960                B90
	       60             3260                CC0
	       65             3552                DE0
	       70             3856                F10
	       75             4144               1030
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

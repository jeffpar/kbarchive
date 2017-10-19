---
layout: page
title: "Q141278: Err Msg: Incompatible Parameters: Sector Size Adjusted"
permalink: /kb/141/Q141278/
---

## Q141278: Err Msg: Incompatible Parameters: Sector Size Adjusted

	Article: Q141278
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
	
	When you try to use Ramdrive.sys with a sector size of 128 or 256 bytes, you
	receive the following error message when Ramdrive.sys is loaded:
	
	  Incompatible Parameters: Sector Size Adjusted
	
	The sector size for the RAM drive is then set to 512 bytes.
	
	CAUSE
	=====
	
	The version of Ramdrive.sys included with Windows 95 does not support a sector
	size of 128 or 256 bytes.
	
	RESOLUTION
	==========
	
	To work around this problem, follow these steps:
	
	1. Copy the Ramdrive.sys file from an earlier version of MS-DOS to the Windows
	  folder on the hard disk.
	
	2. Type the following command at a command prompt
	
	  " setver <hdisk>:\<windows> ramdrive.sys <ms-dos version> "
	  (without the quotation marks)
	
	  where <hdisk> is the hard disk, <windows> is the Windows folder,
	  and <ms-dos version> is the 3-digit version of MS-DOS from which you
	  copied the Ramdrive.sys file.
	
	  For example, if Windows 95 is installed in the Windows folder on drive C, and
	  you copied the Ramdrive.sys file from version 6.2 of MS-DOS, type the
	  following line:
	
	  " setver c:\windows ramdrive.sys 6.20 " (without the quotation marks)
	
	3. Modify the Config.sys file so that Setver.exe is loaded before Ramdrive.sys.
	
	4. Restart your computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

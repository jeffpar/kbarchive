---
layout: page
title: "Q148799: Err Msg: There Is Not Enough Disk Space to Upgrade..."
permalink: kb/148/Q148799/
---

## Q148799: Err Msg: There Is Not Enough Disk Space to Upgrade...

	Article: Q148799
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to upgrade an earlier version of Windows to Windows 95 on a
	drive with ample free space, you may receive the following error message while
	Setup is performing a routine check of your computer:
	
	  Low Disk Space
	
	  There is not enough disk space to upgrade your current version of Windows.
	  However, Setup did find space for the following: a typical installation of
	  Windows on a different drive. If you set up Windows on different drive, you
	  will have to reinstall all of your existing Windows programs. Click OK to
	  continue Setup and install the following: a typical installation of Windows
	  on a different drive. Click Cancel to quit Setup, in which case you should
	  free up more disk space on the drive that contains your existing version of
	  Windows. Then run Setup again.
	
	CAUSE
	=====
	
	The PATH statement does not contain drive letters. For example:
	
	  SET PATH = \windows;\dos;
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	- Modify the PATH statement in the Autoexec.bat file to contain drive letters.
	  For example, change the statement
	
	  SET PATH = \windows;\dos;
	
	  to:
	
	  SET PATH = c:\windows;c:\dos;
	
	- Disable the PATH statement in the Autoexec.bat file. To do so, place the word
	  "rem" (without the quotation marks) at the beginning of the PATH statement.
	  For example:
	
	  REM SET PATH = \windows;\dos;
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

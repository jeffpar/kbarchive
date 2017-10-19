---
layout: page
title: "Q96130: How DBLSPACE.BIN Determines If It Should Stay in Memory"
permalink: /kb/096/Q96130/
---

## Q96130: How DBLSPACE.BIN Determines If It Should Stay in Memory

	Article: Q96130
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SUMMARY
	=======
	
	If you have DBLSPACE.BIN in the root directory of your startup drive (usually C)
	but you do not have a compressed volume file (CVF), DBLSPACE.BIN still loads in
	memory.
	
	After DBLSPACE.BIN loads in memory, it searches for the DBLSPACE.INI file.
	
	- If DBLSPACE.INI is found, DBLSPACE.BIN remains in memory and continues the
	  boot process by loading IO.SYS in memory. (It doesn't matter whether the
	  DBLSPACE.INI file is valid.)
	
	- If the DBLSPACE.INI file is not found, DBLSPACE.BIN does not remain loaded in
	  memory.
	
	NOTE: The DBLSPACE.SYS command in the CONFIG.SYS file does not affect this
	process.
	
	MORE INFORMATION
	================
	
	If you attempt to load DBLSPACE.SYS in the CONFIG.SYS file when DBLSPACE.BIN is
	not loaded into memory, the following error message is displayed:
	
	  You cannot access any DoubleSpace compressed drives because DBLSPACE.BIN is
	  not loaded. (DBLSPACE.BIN is the portion of MS-DOS that provides access to
	  DoubleSpace compressed drives.)
	
	To correct this problem, remove the line in the CONFIG.SYS that loads
	DBLSPACE.SYS or assure that DBLSPACE.BIN remains in memory on startup.
	
	Additional query words: 6.00 errmsg err msg dblspace start up 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

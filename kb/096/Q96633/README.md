---
layout: page
title: "Q96633: OEM Setup Copies All Files By Default"
permalink: /kb/096/Q96633/
---

## Q96633: OEM Setup Copies All Files By Default

	Article: Q96633
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MS-DOS 6.0 OEM Setup program copies all supplied files by default; this
	includes the optional Windows-based utilities Backup, Undelete, and Anti-Virus.
	These components are copied to your hard disk whether or not Windows is
	installed on your system.
	
	MORE INFORMATION
	================
	
	The files for the Windows-based utilities are copied to your hard disk; however,
	they are not set up correctly if Windows is not installed at the time of the
	initial setup. If you later add Windows to your system, running SETUP /E will
	properly configure the Windows-based utilities.
	
	
	Additional query words: 6.00 mwbackup mwav
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

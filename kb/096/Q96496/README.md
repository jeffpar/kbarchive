---
layout: page
title: "Q96496: Err Msg: SYS Is Unable to Operate on Target Drive"
permalink: kb/096/Q96496/
---

## Q96496: Err Msg: SYS Is Unable to Operate on Target Drive

	Article: Q96496
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22; WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for
	commands and filenames.
	
	SUMMARY
	=======
	
	If you try to run SYS.COM on a drive that has been compressed with DoubleSpace,
	you may receive the following error message:
	
	  SYS cannot operate on target drive
	
	To transfer the MS-DOS system files to your hard disk drive, you need to specify
	the host drive for C. For example, type "sys a: h:" (without the quotation
	marks) at the MS-DOS command prompt and then press ENTER. To determine your host
	drive for drive C, type "dblspace /list" (without the quotation marks) at the
	MS-DOS command prompt and then press ENTER.
	
	Additional query words: 6.00 6.20 is unable to sys.com double space
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3 kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22; WINDOWS:95
	
	=============================================================================
	

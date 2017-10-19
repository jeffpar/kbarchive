---
layout: page
title: "Q104546: MakeSys Fails to Find DBLSPACE.BIN If APPEND Is Loaded"
permalink: /kb/104/Q104546/
---

## Q104546: MakeSys Fails to Find DBLSPACE.BIN If APPEND Is Loaded

	Article: Q104546
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	MS-DOS 6.2 MakeSys (included with the downloadable version of MS-DOS 6.2 Step-Up
	and run by SETUP.BAT) cannot find the MS-DOS 6.0 DBLSPACE.BIN file if APPEND is
	active.
	
	This problem occurs when you have APPEND C:\DOS in your AUTOEXEC.BAT file.
	
	WORKAROUND
	==========
	
	To work around this problem, remove the APPEND command from your AUTOEXEC.BAT
	file and restart your computer before running MakeSys.
	
	WARNING: If you run MakeSys from the root directory (instead of running
	SETUP.BAT), your original system files (IO.SYS, MSDOS.SYS, and DBLSPACE.BIN) are
	overwritten. MakeSys places the updated system files in the directory from which
	it is run. Running SETUP.BAT automatically creates a STEPUP directory and run
	MakeSys from there, avoiding this situation.
	
	MORE INFORMATION
	================
	
	More information on this topic may be available from Microsoft Information
	Services. Microsoft Information Services are available on the World Wide Web by
	connecting to http://www.microsoft.com. The FTP site is located at
	ftp.microsoft.com.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : MS-DOS:6.2
	
	=============================================================================
	

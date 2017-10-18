---
layout: page
title: "Q101565: DoubleSpace Err Msg: MS-DOS Fastopen Program...Detected!"
permalink: kb/101/Q101565/
---

## Q101565: DoubleSpace Err Msg: MS-DOS Fastopen Program...Detected!

	Article: Q101565
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compress a drive using DoubleSpace, you may receive the following error
	message if the MS-DOS Fastopen program is running:
	
	  MS-DOS Fastopen Program has been detected!
	
	  Remove from your CONFIG.SYS or AUTOEXEC.BAT
	  file the command that installs FASTOPEN.
	  Then restart your computer and run DEFRAG again.
	
	This causes the defragmentation process to abort. If DoubleSpace was running the
	Defragmenter (Defrag) to obtain enough contiguous space to continue compression,
	DoubleSpace attempts to run Defrag again and the above error is displayed again.
	You must restart your computer to prevent this error from recurring.
	
	CAUSE
	=====
	
	Before DoubleSpace begins compressing a drive, it checks the contents of the
	MS-DOS configuration files against the contents of the DBLSPACE.INF file.
	Because Fastopen is listed in the [Dangerous] section of DBLSPACE.INF, a REM
	command is placed in front of any line in the AUTOEXEC.BAT or CONFIG.SYS file
	that calls that utility.
	
	During a first-time installation of DoubleSpace, the computer is then restarted,
	and Fastopen is removed from memory. However, if a drive is being compressed
	from the full-screen DoubleSpace maintenance program, the computer may not be
	restarted. In this case, if DoubleSpace runs Defrag, you continue to receive the
	above error message until you restart your computer.
	
	WORKAROUND
	==========
	
	To work around this problem, restart the computer using CTRL+ALT+DEL while the
	above error message is displayed on the screen. The edited configuration files
	are read and Fastopen is removed from memory. DoubleSpace can then continue with
	the compression process.
	
	MORE INFORMATION
	================
	
	Fastopen is a disk-caching utility that originally shipped with MS-DOS 3.3 and
	ships today with MS-DOS 6. It can be run directly from the MS-DOS command prompt
	or loaded in either the CONFIG.SYS or AUTOEXEC.BAT file.
	
	Additional query words: 6.00 doublespace manager dblspace
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

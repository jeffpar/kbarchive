---
layout: page
title: "Q108752: VSafe Message: You Must Load VSafe Before Starting Windows"
permalink: /kb/108/Q108752/
---

## Q108752: VSafe Message: You Must Load VSafe Before Starting Windows

	Article: Q108752
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows or Windows for Workgroups, you may receive the following
	error message:
	
	  You must load VSafe before starting Windows
	
	CAUSE
	=====
	
	You receive this message if the VSAFE command has been removed from the
	AUTOEXEC.BAT file and you are loading MWAVTSR.EXE in either the Startup group or
	the Load= line of the WIN.INI file.
	
	RESOLUTION
	==========
	
	To work around this problem, either add the VSAFE command to the AUTOEXEC.BAT
	file, or remove MWAVTSR.EXE from the Startup group and the WIN.INI Load= line.
	
	Additional query words: 6.22 6.00 6.20 c:\dos\vsafe
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	
	=============================================================================
	

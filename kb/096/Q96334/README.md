---
layout: page
title: "Q96334: Windows for Workgroups or WC Hang on NETBIND Command"
permalink: kb/096/Q96334/
---

## Q96334: Windows for Workgroups or WC Hang on NETBIND Command

	Article: Q96334
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows for Workgroups version 3.1 
	- Microsoft Workgroup Connections, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use MS-DOS 6.2 Interactive Boot (F8 or CTRL+F8) to interactively process
	your CONFIG.SYS and AUTOEXEC.BAT files, you may end up with very little
	conventional memory if you are using Microsoft Windows for Workgroups. For
	example, the MEM command indicates that MS-DOS and IO.SYS are taking up more
	than 100 kilobytes (K).
	
	CAUSE
	=====
	
	If the Windows for Workgroups or Workgroup Connections network drivers are
	loaded at the top of unallocated conventional memory, your system may stop
	responding (hang). This problem can occur if you run a large program before the
	NETBIND command.
	
	If you are using the MS-DOS interactive boot option, this problem can occur when
	you select N when given the option to process the NET START command in the
	AUTOEXEC.BAT file. This leaves a lot of memory that is waiting to be initialized
	allocated to PROTMAN.DOS.
	
	WORKAROUND
	==========
	
	To work around this problem, move the NET START command to the top of your
	AUTOEXEC.BAT file.
	
	If you are using the MS-DOS interactive startup option, respond consistently to
	your network commands in both the CONFIG.SYS file and the AUTOEXEC.BAT file. For
	example, if you respond Yes to the prompt to load PROTMAN.DOS, you should
	respond Yes to the prompt for NET START.
	
	Additional query words: 6.22 6.00 6.20 chkdsk.exe net bind
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1; :1.0
	
	=============================================================================
	

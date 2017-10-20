---
layout: page
title: "Q97020: OS_VERSION Points to Incorrect COMMAND.COM on Novell"
permalink: /kb/097/Q97020/
---

## Q97020: OS_VERSION Points to Incorrect COMMAND.COM on Novell

{% raw %}

	Article: Q97020
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using MS-DOS 6.0 or 6.2 with a Novell network, you may receive the
	following error message or your system may stop responding (hang).
	
	  Bad or missing Command Interpreter
	
	CAUSE
	=====
	
	Because the Novell NET.COM file requires that you use SETVER (set for MS-DOS
	version 5.0 by default), the OS_VERSION environment variable is set to the
	current version as follows:
	
	  OS_VERSION=V5.00
	
	Many Novell system login scripts map the COMSPEC environment variable to the
	OS_VERSION variable. (This is not an MS-DOS environment variable.) Under this
	configuration, when MS-DOS needs to find the transient portion of COMMAND.COM,
	it looks in the V5.00 directory on the network and may lock the computer or
	generate the error message above.
	
	WORKAROUND
	==========
	
	To temporarily work around this problem, do the following:
	
	1. Create a directory for the MS-DOS files called V4.60 on the network.
	
	2. Copy the MS-DOS 6.0 files to the V4.60 directory.
	
	3. Modify the SETVER.EXE table by typing the following at the MS-DOS command
	  prompt:
	
	  " setver netx.com 4.60 " (without the quotation marks)
	
	4. Restart your computer by pressing CTRL+ALT+DEL.
	
	
	NOTE: This procedure requires that you use a directory name with a version number
	earlier than 5.0 (4.40, 4.50, and so forth). The actual directory name doesn't
	matter since NETX depends on the major version number only.
	
	MORE INFORMATION
	================
	
	The new Novell shell (version 3.32) is compatible with MS-DOS 6.0. The new shell
	is available for download from the NOVFILES area on CompuServe in the file
	DOSUP7.EXE.
	
	NOTE: To make this version work correctly, you must remove the SETVER entry for
	NETX.EXE, BNETX.EXE, EMSNETX.EXE, or XMSNETX.EXE. For example, type "setver
	netx.exe /d" (without the quotation marks) at the MS-DOS command prompt and then
	press ENTER.
	
	If you are using MS-DOS 6.2 with the Novell 3.32 shell, you still need to use a
	directory called V6.00 if you want to use %OS_VERSION. This information may
	change when Novell releases an MS-DOS 6.2-compatible version of its shell.
	
	Additional query words: 6.22 6.00 6.20 %osver% os_ver os ver netware osver invalid OS_VER=DOS5.00
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}

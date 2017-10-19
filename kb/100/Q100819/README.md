---
layout: page
title: "Q100819: NET.TXT: Updating LAN Manager 1.x Enhanced Networks"
permalink: /kb/100/Q100819/
---

## Q100819: NET.TXT: Updating LAN Manager 1.x Enhanced Networks

	Article: Q100819
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After following the procedure for updating LAN Manager 1.x Enhanced and
	100-percent compatible networks described in the NET.TXT file that is included
	with the MS-DOS 6.0 and 6.2 Supplemental Kit, you may receive the following
	error messages at startup:
	
	  NET 2413 : incorrect MS-DOS version.
	  NET 2413 : incorrect MS-DOS version, error spawning workstation.
	
	CAUSE
	=====
	
	These errors occur because the NETWKSTA.EXE file, which is used to start the
	workstation, requires an entry in the MS-DOS 6 version table.
	
	WORKAROUND
	==========
	
	To correct this problem, add NETWKSTA.EXE to the Setver version table as MS-DOS
	4.01 and ensure that SETVER.EXE is being loaded from the CONFIG.SYS file, as
	follows:
	
	1. Make sure that SETVER.EXE is being loaded in your CONFIG.SYS file. For
	  example:
	
	  device=c:\dos\setver.exe
	
	2. Once your system has restarted completely, enter the following at an MS-DOS
	  command prompt:
	
	  " setver netwksta.exe 4.01" (without the quotation marks)
	
	You should receive a message regarding the application that you are adding to the
	MS-DOS 6.0 version table. This is normal. If the version table was successfully
	updated, you can reboot your system, and the change will take effect.
	
	MORE INFORMATION
	================
	
	For more information on using the SETVER command with MS-DOS 6, type "help
	setver" (without the quotation marks) at the MS-DOS command prompt or query on
	the following words in the Microsoft Knowledge Base:
	
	  "setver.exe" (without the quotation marks) and "version" (without the
	  quotation marks) and "table" (without the quotation marks) and "6.0" (without
	  the quotation marks)
	
	
	Additional query words: 6.22 6.00 net 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

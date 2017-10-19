---
layout: page
title: "Q98541: Windows Err Msg: LPT2 Is Not Present... (Interlnk)"
permalink: /kb/098/Q98541/
---

## Q98541: Windows Err Msg: LPT2 Is Not Present... (Interlnk)

	Article: Q98541
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In addition to providing remote access to another computer's drives, Interlnk
	allows you to use printers on the server computer by redirecting output from an
	unused LPT port on the client machine to the server.
	
	If you attempt to print to a redirected LPT port from within Windows 3.1, the
	client computer may display the following error message:
	
	  LPT2 is not present on your computer. Choose the Printer option in Control
	  Panel or the Printer Setup command in Print Manager to assign an installed
	  port to you printer.
	
	MORE INFORMATION
	================
	
	Windows attempts to write the data directly to the LPT2 port, bypassing MS-DOS
	and Interlnk. Using MS-DOS to print permits the Interlnk client to redirect LPT2
	output and allow the Interlnk server to receive and print the job on the
	server's parallel port.
	
	To allow Interlnk to capture print jobs from Windows, do the following:
	
	1. In Control Panel, choose Printers.
	
	2. Choose Connect, clear the Fast Printing Direct To Port check box, then choose
	  OK.
	
	3. Choose Close and then quit Control Panel.
	
	Additional query words: 6.22 Interlink 6.00 6.20 6.21 3.10 3.11 link "LPT2 is not present on you computer"
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	
	=============================================================================
	

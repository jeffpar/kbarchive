---
layout: page
title: "Q158868: Computer May Not Boot After Canceling Setup During File Copy"
permalink: /kb/158/Q158868/
---

## Q158868: Computer May Not Boot After Canceling Setup During File Copy

	Article: Q158868
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you cancel the setup of OEM Service Release version 2.1 (OSR2.1) over OEM
	Service Release 2 (OSR2) during the file copy stage, you receive a successful
	setup message and you are prompted to restart your computer. The next time you
	start your computer, you may receive real-mode error messages and a Windows
	Protection Error message, after which the computer stops responding (hangs).
	Subsequent reboots generate the same errors.
	
	CAUSE
	=====
	
	Some of the OSR2.1 files were not copied to the computer and Setup was not
	completed. Your computer contains a mixture of OSR2 and OSR2.1 files.
	
	RESOLUTION
	==========
	
	Run the OSR2.1 uninstall tool. This is a file named Rem.pss on the installation
	disk. To use the uninstall tool, follow these steps:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Safe Mode Command Prompt Only from the Startup
	  menu.
	
	2. Copy the Rem.pss file to the root directory of the boot drive as a file named
	  Remusb.bat.
	
	3. Type "remusb" (without the quotation marks) to restore your original files.
	
	4. Restart your computer normally. Use the Add/Remove Programs tool in Control
	  Panel to remove the program named "WDM/USB Supplement."
	
	  NOTE: This program may not be listed in the Add/Remove Programs tool depending
	  on when Setup was canceled. If it is not listed, skip this step.
	
	5. Delete the Remusb.bat file from the root directory of the boot drive.
	
	MORE INFORMATION
	================
	
	There are several stages to Setup, and canceling Setup during most of them is
	harmless. The following list summarizes these stages:
	
	- End User License Agreement - OK to cancel
	
	- ScanDisk - Cancelling Setup during ScanDisk (or canceling ScanDisk itself) is
	  OK
	
	- Initial extraction from cabinet files - OK to cancel
	
	- Actual file copy stage - problems will occur if you cancel Setup at this
	  point.
	
	
	Additional query words: 95
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR210
	Version           : WINDOWS:95
	
	=============================================================================
	

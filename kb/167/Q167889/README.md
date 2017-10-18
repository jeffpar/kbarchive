---
layout: page
title: "Q167889: Missing or Damaged Vmm32.vxd File in OSR2.1 Setup"
permalink: kb/167/Q167889/
---

## Q167889: Missing or Damaged Vmm32.vxd File in OSR2.1 Setup

	Article: Q167889
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbsetup osr2 win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up OEM Service Release version 2.1 (OSR2.1) over OEM Service
	Release 2 (OSR2) and restart your computer, you may receive an error message
	stating that the Vmm32.vxd file is missing or damaged, or you may not be able to
	boot Windows.
	
	CAUSE
	=====
	
	These errors can occur if either of the following conditions exists:
	
	- The Vmm32.vxd file was not rebuilt properly or was damaged, resulting in an
	  error message stating that "Vmm32.vxd is missing or corrupt."
	
	- The addition of Universal Serial Bus (USB) support is causing a conflict with
	  the system and Windows 95 is unable to boot normally.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method:
	
	Vmm32.vxd Missing or Damaged
	----------------------------
	
	If you receive an error message stating that the Vmm32.vxd file is missing or
	damaged, the rebuilding of the Vmm32.vxd file was unsuccessful, preventing
	Windows from booting properly and processing the RunOnce section of the
	registry.
	
	You must uninstall OSR2.1 using the OSR2.1 real-mode uninstall tool (Rem.pss) on
	the installation disk. To use the uninstall tool, follow these steps:
	
	1. Restart your computer.
	
	2. Press the F8 key when you see the "Starting Windows 95" message, and then
	  choose Safe Mode Command Prompt Only from the Startup menu.
	
	3. Copy the Rem.pss file to the root folder of the boot drive as Remusb.bat (do
	  not copy it to Rem.bat; "Rem" is a reserved command and it will not
	  function).
	
	4. Type "remusb" (without the quotation marks) to restore the original files
	  that were renamed with an .o20 extension.
	
	5. To complete the uninstall process, restart your computer and use the
	  Add/Remove Programs tool in Control Panel to remove the program "WDM/USB
	  Supplement."
	
	  NOTE: This program may not be listed in the Add/Remove Programs tool. If it is
	  not listed, skip this step.
	
	6. Delete the Remusb.bat file from the root folder of the boot drive.
	
	NOTE: The Rem.pss file has only been tested when the first reboot does not
	succeed. Failure to boot at any other time may not be resolved by the Rem.pss
	file process.
	
	Windows 95 Cannot Boot Because of a Conflict
	--------------------------------------------
	
	If Windows 95 cannot boot because of a conflict, use the following steps:
	
	1. Restart your computer.
	
	2. Press the F8 key when you see the "Starting Windows 95" message, and then
	  choose Safe Mode from the Startup menu.
	
	3. Rename the Detroit.bat file to Autoexec.bat. The Detroit.bat file is your
	  original Autoexec.bat file that was renamed by OSR2.1 Setup.
	
	
	1. Troubleshoot using standard Safe-mode troubleshooting.
	
	For information about how to troubleshoot Windows using Safe mode, see the
	following article in the Microsoft Knowledge Base:
	
	  Q156126 Troubleshooting Windows 95 Using Safe Mode
	
	
	
	Additional query words: 95
	
	======================================================================
	Keywords          : kbsetup osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR210
	Version           : WINDOWS:95
	
	=============================================================================
	

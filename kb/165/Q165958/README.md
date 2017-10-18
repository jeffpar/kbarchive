---
layout: page
title: "Q165958: Getting Madge PCMCIA Token Card to Join a Domain During Setup"
permalink: kb/165/Q165958/
---

## Q165958: Getting Madge PCMCIA Token Card to Join a Domain During Setup

	Article: Q165958
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	You are unable to load your Madge network adapter on a computer running Windows
	NT 4.0.
	
	CAUSE
	=====
	
	Because of an error in the Microsoft Windows NT registry regarding the name of
	the driver for the Madge SMART 16/4 PCMCIA RINGNODE, you are unable to load the
	Madge driver.
	
	RESOLUTION
	==========
	
	In order to get the Madge SMART 16/4 PCMCIA RINGNODE to install and load during
	setup, you will have to make the following changes:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Expand the file system._ from the <platform> directory on the
	  distribution CD to "c:\temp\system.".
	
	2. Copy the <platform> directory a server share point.
	
	3. Run REGEDT32.EXE, to edit the registry.
	
	4. From the Window menu chose HKEY_LOCAL_MACHINE
	
	5. From the Registry menu select "Load Hive" and enter the path
	  "c:\temp\system.".
	
	6. Enter the name "Madge", when the system prompts for a Key Name
	
	7. Find the following section:
	
	  HKEY_LOCAL_MACHINE\Madge\System\ControlSet01\Services
	  \Pcmcia\Database\MADGE\SMART 16/4 PCMCIA RINGNODE
	
	8. In this section, change the name of the file pointed to by the "Driver" from
	  "madgemport" to "mdgmport".
	
	9. Select the HKEY_LOCAL_MACHINE\Madge key again, and from the Registry menu
	  select "Unload Hive"
	
	10. Select "OK" to the dialog that gets displayed.
	
	11. Exit the Registry editor.
	
	12. Delete the "system._" from the Server Distribution point created in step 2
	  above and place the "system." from the c:\test directory into the Server
	  Distribution point. This file will now contain all the needed registry
	  settings to allow the Madge driver to load during setup.
	
	MORE INFORMATION
	================
	
	Please be aware that many of the current line of laptops and portables typically
	place the sound card on IRQ 10, which is the default IRQ for PCMCIA cards.
	Because of this conflict, you may still experience problems. Please contact
	Madge Technical support for more details.
	
	Additional query words: setup set-up madge pcmcia token ring
	
	======================================================================
	Keywords          : kbenv kbnetwork kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	

---
layout: page
title: "Q177313: Installing Multiple 3COM 3C509B PCMCIA Network Interface Cards"
permalink: /kb/177/Q177313/
---

## Q177313: Installing Multiple 3COM 3C509B PCMCIA Network Interface Cards

	Article: Q177313
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	On a computer that already has one 3COM 3C509B PCMCIA network interface card
	(NIC) installed, if you attempt to make the computer multihomed by installing
	another identical NIC, the following error message is displayed:
	
	  Registry service subkey already exists. Unable to access services subkey
	  and registry.
	
	As a result, you cannot install a second 3c309B PCMCIA NIC.
	
	CAUSE
	=====
	
	There are two entries in the registry that need to be deleted prior to adding
	the second 3COM 3C509B NIC.
	
	RESOLUTION
	==========
	
	To successfully install two 3COM 3C509B NICs on the same computer, follow these
	steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Install the MS Loopback Adapter by using the Network tool in Control Panel.
	
	2. Restart the computer.
	
	3. Remove the first 3COM 3C509B driver.
	
	4. Run Regedt32 and delete the 3COM key entries under the following two
	  locations:
	
	  HKLM\System\CurrentControlSet\Services\Elink3
	  HKLM\Software\Microsoft\Windows NT\CurrentVersion\NetworkCards
	
	  NOTE: There will be one number (1,2,3,...) for each adapter installed. Open
	  each numbered key, and delete the key that contains the 3COM card
	  information.
	
	5. Restart the computer.
	
	6. Install the first and second 3COM 3C509B cards by using the Network tool in
	  Control Panel.
	
	7. Delete the MS Loopback Adapter.
	
	8. Restart the computer
	
	Both 3c509B PCMCIA NICs should now be installed and functional.
	
	Additional query words: multi-homed multiple 3C509
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

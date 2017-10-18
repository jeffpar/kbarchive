---
layout: page
title: "Q114558: Err Msg: Could Not Set the Device Mode for this Printer"
permalink: kb/114/Q114558/
---

## Q114558: Err Msg: Could Not Set the Device Mode for this Printer

	Article: Q114558
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message appears when you create or configure a printer in
	Windows NT Print Manager:
	
	  Could not set the device mode for this printer: The system cannot find the
	  file specified.
	
	CAUSE
	=====
	
	This error message can result from entries in the Windows NT Registry that list
	printer driver files that no longer exist on disk.
	
	
	WORKAROUND
	==========
	
	Work around this problem by doing one of the following:
	
	- Expand or copy the correct driver files back to their proper directory.
	
	  -or-
	
	- Manually edit the Registry, and remove each driver subkey that references
	  driver files that are no longer present.
	
	Note that there is a Registry subkey for each printer defined in Print Manager,
	and these subkeys reference the driver subkeys, so if you choose the second
	workaround, also remove each printer subkey that references a driver subkey that
	you deleted. These printer subkeys are in the Registry location:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\Printers
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\Environments
	  \WindowsNTx86\Drivers\version-1.
	
	For more information on manually editing the Registry to remove printer drivers,
	query on the following words in the Microsoft Knowledge Base:
	
	  Windows NT and Manually and Remove and Printer and Driver
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	

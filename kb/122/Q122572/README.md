---
layout: page
title: "Q122572: Multiple Events Appear for Intelligent Digiboard Adapters"
permalink: /kb/122/Q122572/
---

## Q122572: Multiple Events Appear for Intelligent Digiboard Adapters

	Article: Q122572
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to Windows NT version 3.5 with any of the Intelligent
	Digiboard adapters, more than one of the following events may appear in the
	Event Viewer:
	
	  Event ID: 4103 Source: ntxall Type: Information
	  Description: Overriding current configuration to use 8K memory mapped window
	  on ntxall<a>.
	
	  Event ID: 25 Source: Serial Type: Error
	  Description: User configuration for parameter ntxall<a>Line<b>
	  Concentrator<c>Port<d> must have PortAddress.
	
	where: <a> is order number of installed adapters in Windows NT (usually 2
	if a network adapter was installed first on this computer) <b> is the line
	number used on the Digiboard adapter (usually 1) <c> is the concentrator
	number used on the Digiboard adapter (usually 1) <d> is the number of each
	port configured on the Digiboard adapter.
	
	CAUSE
	=====
	
	The ntxall subkey in the Windows NT Registry should reside under the Services
	subkey of HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet for all intelligent
	Digiboard adapters. Any subkeys residing under the Parameters subkey of
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Serial are port
	configurations for non-intelligent Digiboard adapters and any additional
	communication ports. This problem occurs after the upgrade process where a copy
	of the ntxall subkey tree was placed under the Parameters subkey.
	
	RESOLUTION
	==========
	
	To prevent these events from appearing in the Event Viewer, modify the Windows
	NT Registry.
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	1. Start REGEDT32.EXE and locate the following Registry subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet \Services\Serial\Parameters
	
	2. Remove all subkeys below and including ntxall<a>.
	
	3. Exit the Registry Editor.
	
	4. Shut down and restart Windows NT.
	
	Digiboard is manufactured by Digi International, Inc., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: prodnt pc/xe 2port mc/xe c/x
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

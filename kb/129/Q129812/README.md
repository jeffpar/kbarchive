---
layout: page
title: "Q129812: PCMCIA Cards Not Detected on Zenith NoteFLEX"
permalink: kb/129/Q129812/
---

## Q129812: PCMCIA Cards Not Detected on Zenith NoteFLEX

	Article: Q129812
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you are using a Zenith NoteFLEX 486DX computer with a PCIC-compatible
	controller (with a Cirrus Logic chip set), PCMCIA cards are not enumerated when
	you insert them. PCMCIA cards are enumerated only if they are already inserted
	when you start your computer.
	
	CAUSE
	=====
	
	There is a known problem with the automatic detection of available IRQs on the
	Zenith NoteFLEX computer. As a result, Windows 95 assigns a default set of IRQs
	for its mask. Although IRQ 10 is in the default mask assigned by Windows 95, IRQ
	10 is not supported on NoteFLEX computers.
	
	RESOLUTION
	==========
	
	To work around this problem, use Registry Editor (REGEDIT) to add the following
	registry entry. This entry overrides the default mask:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Class\PCMCIA\0000
	
	Add a key called PCICOptions to the entry, and assign the following value for the
	key:
	
	  b8 0a 00 00
	
	For information about how to edit the registry, view the Changing Keys And Values
	online Help topic in Registry Editor (Regedit.exe). Note that you should make a
	backup copy of the registry files (System.dat and User.dat) before you edit the
	registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	Additional query words: detected
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

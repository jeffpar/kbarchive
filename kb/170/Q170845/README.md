---
layout: page
title: "Q170845: SerialKey Accessibility Option Does Not Work in OSR2"
permalink: kb/170/Q170845/
---

## Q170845: SerialKey Accessibility Option Does Not Work in OSR2

	Article: Q170845
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenable kbenv kbtool osr2 win95 kbEnableSight kbEnableMove
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you turn on the SerialKey option in the Accessibility Options tool in
	Control Panel, the SerialKey feature may not seem to work. In addition, turning
	on the SerialKey option may cause the computer to stop responding (hang) with a
	page fault error message.
	
	CAUSE
	=====
	
	This behavior occurs only in Windows 95 OEM Service Release 2 (OSR2). Changes in
	OSR2 require Power Management features to be disabled for serial devices.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	To resolve this issue, turn off Power Management features for the Vcomm driver in
	the registry. To do so, set the value for the EnablePowerManagement value to 0
	(zero) in the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\vxd\Vcomm
	
	Additional query words: disability
	
	======================================================================
	Keywords          : kbenable kbenv kbtool osr2 win95 kbEnableSight kbEnableMove 
	Technology        : kbWin95search kbOPKSearch
	Version           : WINDOWS:95
	
	=============================================================================
	

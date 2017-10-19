---
layout: page
title: "Q168671: Cannot Connect to MSN Using Dial-Up Internet Provider or LAN"
permalink: /kb/168/Q168671/
---

## Q168671: Cannot Connect to MSN Using Dial-Up Internet Provider or LAN

	Article: Q168671
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0,2.5,2.51,2.52,2.6,95,98,98 Second Edition
	Operating System(s): 
	Keyword(s): kbenv kbmsn
	Last Modified: 16-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.0, 2.5, 2.51, 2.52, 2.6 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	- the operating system: Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry. Before you edit the registry, you should first make a backup copy of the registry files (System.dat and User.dat). Both are hidden files in the Windows folder.
	
	SYMPTOMS
	========
	
	When you connect to MSN, The Microsoft Network, you may not be able to select
	one of the following options in the Connection Settings screen:
	
	- Connect using another Dial-up Internet Provider
	
	- Connect using my Local Area Network
	
	CAUSE
	=====
	
	A registry setting was not removed after you completed the signup process.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the Changing Keys And Values
	online Help topic in Registry Editor (Regedit.exe). Note that you should make a
	backup copy of the registry files (System.dat and User.dat) before you edit the
	registry.
	
	To resolve this issue, remove the Signup value from the following registry key:
	
	HKEY_CURRENT_USER\Software\Microsoft\MOS\Connection
	
	Additional query words: 2.00 2.50 2.60 msnet msnetwork
	
	======================================================================
	Keywords          : kbenv kbmsn 
	Technology        : kbOSWin98 kbOSWin95 kbOSWin98SE kbOSWinSearch kbMSNSearch kbMSN200 kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : WINDOWS:2.0,2.5,2.51,2.52,2.6,95,98,98 Second Edition
	Issue type        : kbprb
	
	=============================================================================
	

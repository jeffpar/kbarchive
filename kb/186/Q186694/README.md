---
layout: page
title: "Q186694: Old MSN Setup Files Remain When You Upgrade to Windows 98"
permalink: kb/186/Q186694/
---

## Q186694: Old MSN Setup Files Remain When You Upgrade to Windows 98

	Article: Q186694
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.52
	Operating System(s): 
	Keyword(s): kbenv kbmsn
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.52 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you upgrade your computer to Microsoft Windows 98 and then attempt to install
	MSN, The Microsoft Network, by running the Msnstart.exe file, the MSN Setup
	program may stop responding (hang) when the "Loading, Please Wait" screen is
	displayed on the desktop.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions existed before you
	upgraded to Windows 98:
	
	- Microsoft Windows 95 OEM Service Release 2 (OSR2) was installed on the
	  computer.
	
	- The OEM version of MSN (2.5.0.217) was installed on the computer.
	
	If both of these conditions exist, the Setup files for the older version of MSN
	are not removed from the computer when you upgrade to Windows 98.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Right-click the Msnstart.exe program on the taskbar, and then click Move.
	
	2. Press the SPACEBAR key once.
	
	3. Move the mouse pointer to place the lower-left corner of the "Loading, Please
	  Wait" screen on the lower-left corner of the desktop.
	
	4. Click the mouse button.
	
	5. Click Cancel in the MSNSTART.EXE dialog box that is now visible on the
	  desktop.
	
	6. Click the Set Up The Microsoft Network icon on the desktop to install the
	  version of MSN included with Windows 98.
	
	MORE INFORMATION
	================
	
	For compatibility reasons, Windows 98 prevents the Msnstart.exe program from
	running and displays a dialog box informing the user that there is an updated
	version of MSN included with Windows 98. However, this dialog box may be hidden
	from view behind the "Loading, Please Wait" screen.
	
	Additional query words: msnet msnetwork microsoft-net m.s.n. win98
	
	======================================================================
	Keywords          : kbenv kbmsn 
	Technology        : kbMSNSearch kbMSN252
	Version           : WINDOWS:2.52
	Issue type        : kbprb
	
	=============================================================================
	

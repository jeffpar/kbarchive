---
layout: page
title: "Q172788: MSN Quick View Icon Does Not Appear on Taskbar"
permalink: kb/172/Q172788/
---

## Q172788: MSN Quick View Icon Does Not Appear on Taskbar

	Article: Q172788
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.5
	Operating System(s): 
	Keyword(s): kbtool kbmsn
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows 95, you may not see the MSN, The Microsoft Network, Quick
	View icon on the taskbar.
	
	CAUSE
	=====
	
	This behavior can occur if the MSN Setup program did not run the Msndc.exe file
	during the installation of MSN.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "msndc.exe" (without quotation marks), and then click
	  Find Now.
	
	3. In the list of found files, right-click the Msndc.exe file, and then click
	  Copy.
	
	4. Click Start, point to Settings, and then click Taskbar & Start Menu.
	
	5. On the Start Menu Programs tab, click Advanced.
	
	6. Under All Folders, double-click the Programs folder, and then double-click
	  the StartUp folder in the Name column.
	
	7. On the Edit menu, click Paste Shortcut.
	
	8. Close all open windows, and then restart the computer.
	
	
	Additional query words: msn quickview system tray systray
	
	======================================================================
	Keywords          : kbtool kbmsn 
	Technology        : kbMSNSearch kbMSN250
	Version           : WINDOWS:2.5
	Issue type        : kbprb
	
	=============================================================================
	

---
layout: page
title: "Q158150: Oracle 8 Utilities May Not Run"
permalink: kb/158/Q158150/
---

## Q158150: Oracle 8 Utilities May Not Run

	Article: Q158150
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some of the utilities that ship with Oracle 8 for Windows NT may not start or
	may display a garbled dialog box that disappears before you can read it. This
	information applies to Oracle 8.0.3.0.0 and earlier running on Windows NT 4.0
	and the following applications:
	
	  Oracle Data Migration Assistant
	  Oracle Database Assistant
	  Oracle Net8 Assistant
	  Oracle Net8 Easy Config
	  Oracle INTYPE File Assistant
	
	CAUSE
	=====
	
	This problem occurs because the above utilities require 256 colors or higher.
	
	RESOLUTION
	==========
	
	To resolve this problem, increase your color palette to 256 colors or higher. To
	do so:
	
	1. Click the Start button, point to Settings, click Control Panel, and then
	  double-click Display.
	
	2. Click the Settings tab, change the Color Palette, click Test, and then follow
	  the instructions on your screen.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	Additional query words: Oracle 8 Enterprise Edition Release Notes
	======================================================================
	Keywords          : kb3rdparty kbdisplay 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	

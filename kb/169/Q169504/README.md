---
layout: page
title: "Q169504: TrueType Fonts Displayed Incorrectly"
permalink: /kb/169/Q169504/
---

## Q169504: TrueType Fonts Displayed Incorrectly

	Article: Q169504
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdisplay win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	TrueType fonts may be displayed incorrectly, or not at all, or, your computer
	may stop responding (hang) when you try to install a standard (.fon) or TrueType
	(.ttf) font in Windows 95.
	
	CAUSE
	=====
	
	This problem can occur if the ttfCache file in the Windows folder is damaged.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods:
	
	Method 1
	--------
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Safe Mode from the Startup menu.
	
	2. In Safe mode, restart Windows 95 normally.
	
	Method 2
	--------
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Safe Mode from the Startup menu.
	
	2. Use Windows Explorer to remove the ttfCache file from the Windows folder.
	
	  For information about how to delete a file, click Start, click Help, click the
	  Index tab, type "deleting" (without quotation marks), and then double-click
	  the "Deleting files or folders" topic.
	
	  NOTE: You need to be able to view hidden files to see the ttfCache file. To
	  view hidden files, click Options on the View menu in Windows Explorer, click
	  Show All Files, and then click OK.
	
	3. Restart Windows 95 normally.
	
	MORE INFORMATION
	================
	
	The ttfCache file is a hidden file in the Windows folder that is rebuilt when
	you do one of the following:
	
	- Start Windows 95 in Safe mode, and then restart normally.
	
	- Delete the ttfCache file and then restart Windows normally.
	
	For additional information about font limits in Windows 95, see the following
	article in the Microsoft Knowledge Base:
	
	  Q131943 TrueType Font Limits in Windows 95
	
	For additional information about troubleshooting TrueType fonts, see the
	following article in the Microsoft Knowledge Base:
	
	  Q133732 Missing TrueType Fonts in Fonts Folder or Programs
	
	======================================================================
	Keywords          : kbdisplay win95 
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

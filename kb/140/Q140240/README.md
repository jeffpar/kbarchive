---
layout: page
title: "Q140240: Screen Saver Files Become Associated with Fax Viewer"
permalink: kb/140/Q140240/
---

## Q140240: Screen Saver Files Become Associated with Fax Viewer

	Article: Q140240
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
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
	
	When you double-click a screen saver (.scr) file, or use the right mouse button
	to click the file and then click Test on the menu that appears, the screen saver
	may not start. Fax Viewer may start instead, and display the following error
	message:
	
	  This file cannot be opened. It is not a fax image.
	
	CAUSE
	=====
	
	When you install Microsoft Mail version 3.2, the following entry is added to the
	[Extensions] section of the Win.ini file:
	
	  scr=c:\<msmail>\faxview.exe ^.scr
	
	When you install Windows 95 on a computer that is already running Microsoft Mail,
	or install Microsoft Mail on a computer that is already running Windows 95, this
	Win.ini entry is copied to the (Default) value under the following registry
	key:
	
	  Hkey_Classes_Root\Scrfile\Shell\Open\Command
	
	This registry value is given the following value:
	
	  c:\<msmail>\faxview.exe %1
	
	This registry entry causes Windows 95 to attempt to use Fax Viewer to open files
	that have an .scr extension. Because screen saver files are not in the proper
	fax image format, you receive an error message.
	
	
	RESOLUTION
	==========
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	To work around this problem, modify the (Default) value under the following
	registry key:
	
	  Hkey_Classes_Root\Scrfile\Shell\Open\Command
	
	This registry value should be given the following value:
	
	  "%1" /s
	
	NOTE: You should include the quotation marks when you type the above value.
	
	This value causes Windows 95 to start the screen saver as if it were an
	executable file, using the /S parameter on the command line.
	
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

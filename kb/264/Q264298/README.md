---
layout: page
title: "Q264298: WD97: Word Not Restored/Maximized When Clicking Program Button"
permalink: kb/264/Q264298/
---

## Q264298: WD97: Word Not Restored/Maximized When Clicking Program Button

	Article: Q264298
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft Word 2000 version of this article, see Q264299.
	
	For a Microsoft Word for Windows 95 version of this article, see Q144962.
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you start Microsoft Word or minimize the program, clicking the program
	button on the taskbar may not restore or maximize the program into view.
	
	CAUSE
	=====
	
	The coordinates for the Word program window that are stored in the Windows
	Registry place the window in an inaccessible area off-screen.
	
	RESOLUTION
	==========
	
	To maximize the Word program and allow it to appear on-screen, use the following
	methods.
	
	Method 1: Maximize the Word Program
	-----------------------------------
	
	1. Right-click the Word program button that appears on the Windows taskbar, and
	  then click Maximize on the shortcut menu.
	
	2. If the Word program window appears, click Exit on the File menu.
	
	3. Restart Microsoft Word.
	
	Method 2: Use the Move Feature in Windows to Reposition the Word Program into View
	----------------------------------------------------------------------------------
	
	1. Click the Word program button on the Windows taskbar.
	
	2. Right-click the Word program button on the taskbar, and then click Move on
	  the shortcut menu.
	
	3. Using the mouse, point to the middle of the screen.
	
	4. Use the arrow keys on the keyboard to move the program window to a viewable
	  area on the screen.
	
	5. Press ENTER.
	
	6. Resize the window if necessary.
	
	Method 3: Remove the Data Key That Stores the Windows Coordinates
	-----------------------------------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Right-click the Word program button on the Windows taskbar, and then click
	  Close on the shortcut menu.
	
	  NOTE: If Close is not available, click Maximize, and then quit the program.
	
	2. Quit all other running programs.
	
	3. Click Start and point to Run. In the Open box, type Regedit and then click
	  OK.
	
	4. Select the following registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Office\9.0\Word\Data
	
	5. On the Registry menu, click Export.
	
	6. In the "File name" box, type a file name.
	
	7. In the "Save in" box, click to select Desktop, and then click Save.
	
	8. With the Data key selected, click Delete on the Edit menu.
	
	9. On the Registry menu, click Exit to quit the Windows Registry Editor.
	
	10. Start Microsoft Word.
	
	NOTE: If this method resolves the issue, delete the exported key from your
	Windows desktop.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

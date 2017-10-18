---
layout: page
title: "Q182567: Fatal Exception in Msgsrv32.exe When You Quit Windows 95"
permalink: kb/182/Q182567/
---

## Q182567: Fatal Exception in Msgsrv32.exe When You Quit Windows 95

	Article: Q182567
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you quit Windows 95, you may receive a fatal exception error message that
	references the Msgsrv32.exe file.
	
	CAUSE
	=====
	
	This behavior can occur if you have the Autodesk AutoCad Release 14 program
	installed on your computer, and the Graphics Display Interface (GDI) handle
	table has become damaged.
	
	RESOLUTION
	==========
	
	To work around this issue, remove the Microsoft Find Fast shortcut from the
	StartUp folder. To do so, use the following steps:
	
	1. Right-click the desktop, click New, and then click Folder.
	
	2. Type "Disabled StartUp shortcuts" (without the quotation marks), and then
	  press ENTER.
	
	3. Click Start, point to Find, and then click Files Or Folders.
	
	4. In the Named box, type "startup" (without the quotation marks), and then
	  click the Advanced tab.
	
	5. In the Of Type box, click Folder, and then click Find Now.
	
	6. Double-click the StartUp folder (after you verify it is in the Windows\Start
	  Menu\Programs folder), right click the Microsoft Find Fast shortcut, and then
	  click Cut.
	
	7. Quit the Find Files Or Folders tool, right-click the Disabled StartUp
	  Shortcuts folder, and then click Paste.
	
	8. Restart your computer.
	
	MORE INFORMATION
	================
	
	This behavior can occur if you use a large number of fonts in a document.
	
	For more information about this issue, contact Autodesk.
	
	Additional query words: corrupt corrupted
	
	======================================================================
	Keywords          : kbenv win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

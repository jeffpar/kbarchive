---
layout: page
title: "Q138369: Start Menu Shortcut Removed When DriveSpace 3 Is Removed"
permalink: /kb/138/Q138369/
---

## Q138369: Start Menu Shortcut Removed When DriveSpace 3 Is Removed

	Article: Q138369
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Plus! for Windows 95 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you remove the DriveSpace 3 component of Microsoft Plus!, the DriveSpace
	shortcut may no longer appear on the Start menu. If you installed the Windows 95
	DriveSpace components before you installed Microsoft Plus!, the Windows 95
	DriveSpace components remain on the hard disk, but the shortcut may no longer
	appear.
	
	If you did not install the Windows 95 DriveSpace components before you installed
	DriveSpace 3, the DriveSpace check box no longer appears on the Windows Setup
	tab in the Add/Remove Programs tool after you remove DriveSpace 3, preventing
	you from installing the DriveSpace components.
	
	RESOLUTION
	==========
	
	Create a new Start menu shortcut for DriveSpace. To do so, follow these steps:
	
	1. Use the right mouse button to click an empty spot on the taskbar, and then
	  click Properties on the menu that appears.
	
	2. On the Start Menu Programs tab, click Add.
	
	3. In the Command Line box, type "c:\windows\drvspace.exe" (without the
	  quotation marks) , and then click Next.
	
	4. In the "Select folder to place shortcut in" box, click the System Tools
	  folder, and then click Next.
	
	5. In the "Select a name for the shortcut" box, type "DriveSpace" (without the
	  quotation marks) , and then click Finish.
	
	NOTE: If you did not install the Windows 95 DriveSpace components before you
	installed DriveSpace 3 and you cannot install DriveSpace because the DriveSpace
	check box is missing, you must reinstall Windows 95 to install DriveSpace.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	

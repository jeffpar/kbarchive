---
layout: page
title: "Q85005: Wrap Title for Icons Appears to Fail in Windows 3.1"
permalink: kb/085/Q85005/
---

## Q85005: Wrap Title for Icons Appears to Fail in Windows 3.1

	Article: Q85005
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Wrap Title feature for icons in the Windows 3.1 Program Manager may appear
	to fail even when this option is selected in the Desktop dialog box of Control
	Panel.
	
	WORKAROUND
	==========
	
	To work around this problem
	
	1. In Control Panel, choose the Desktop icon.
	
	2. Under Icons, reset Spacing to 75 (default) and select the Wrap Title check
	  box.
	
	3. From the Options menu in Program Manager, choose Auto Arrange. (A check mark
	  should appear beside the command.)
	
	4. Quit Windows.
	
	Title wrapping on icons should now be enabled when you restart Windows.
	
	MORE INFORMATION
	================
	
	If the icons in a program group have been arranged using a relatively low value
	for icon spacing and you then significantly increase the icon spacing without
	rearranging the icons, the titles may appear not to wrap when you restart
	Windows 3.1. When you increase the icon spacing, Program Manager assumes that
	the icons are spaced accordingly and therefore positions the titles as if there
	is enough room to display the titles on one line. This behavior occurs only if
	the Auto Arrange command is inactive (not selected).
	
	Additional query words: 3.10 3.11 pixels
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

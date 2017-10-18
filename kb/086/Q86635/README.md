---
layout: page
title: "Q86635: Mouse Driver 8.2 Install Doesn't Update Setup Description"
permalink: kb/086/Q86635/
---

## Q86635: Mouse Driver 8.2 Install Doesn't Update Setup Description

	Article: Q86635
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When installing the Microsoft Mouse driver version 8.2 or 8.2a, the description
	of the mouse in Microsoft Windows Setup (SETUP.EXE) will not change.
	
	MORE INFORMATION
	================
	
	The setting for the description of the mouse is saved in the SYSTEM.INI file in
	the [boot.description] section. The description will be as follows:
	
	       mouse.drv=No mouse or other pointing device
	
	Note that the mouse driver installation process will change the mouse.drv= line
	in the [boot] section of the SYSTEM.INI file.
	
	Additional query words: 3.00 3.00a 3.10 3.11 8.20 8.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

---
layout: page
title: "Q86057: Window Title Does Not Change When Modified with PIF Editor"
permalink: /kb/086/Q86057/
---

## Q86057: Window Title Does Not Change When Modified with PIF Editor

	Article: Q86057
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use the PIF Editor included with Windows version 3.1 to edit an existing
	PIF file, and you change the Window Title parameter, you must also re-create the
	icon associated with the PIF file to save your changes.
	
	MORE INFORMATION
	================
	
	The window title of an MS-DOS-based application running in a window is set by
	the description or name of the embedded icon associated with the PIF file for
	this application.
	
	Ways Icon Description Is Created
	--------------------------------
	
	There are three ways that you can create the icon description:
	
	1. If you use the Program Item Properties dialog box to specify the Description
	  option when you create or change the icon, your changes override any window
	  title parameter set in the PIF file and the changes modify the window title.
	
	2. If you specify a window title parameter and leave the Description option
	  blank when you create the icon, the icon's Description becomes the window
	  title parameter, and is used for the window title.
	
	3. If you leave both the window title parameter and the Description option
	  blank, both the icon's description and the window title are blank.
	
	If you edit the PIF file and change the window title parameter, your change is
	not evident if the PIF is run from the previously created icon. This is because
	the icon's description and window title are embedded in the group file.
	
	For the window title parameter to change when loading the PIF file from an icon,
	you must re-create the icon and leave the Description option blank. Once the
	icon is re-created, the new window title parameter is embedded in the group
	file. Each time the Window Title parameter is changed, the icon for the PIF must
	be re-created for the change to take effect.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

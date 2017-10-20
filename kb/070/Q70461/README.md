---
layout: page
title: "Q70461: Tetris for Windows Toggles NUM LOCK Key Off"
permalink: /kb/070/Q70461/
---

## Q70461: Tetris for Windows Toggles NUM LOCK Key Off

{% raw %}

	Article: Q70461
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Tetris for Microsoft Windows 3.0 starts, it turns off the NUM LOCK key if
	this key is enabled. Tetris requires that the NUM LOCK key be turned off for
	proper operation of the keys on the numeric keypad. The NUM LOCK key's state is
	not restored when you exit Tetris. The NUM LOCK key must be pressed again to
	reenable it.
	
	Some OEM versions of DOS and keyboard BIOS may not accept the function Tetris
	uses to turn off the NUM LOCK key. In addition, there is a problem that occurs
	with DOS applications and the NUM LOCK key after exiting Tetris for Windows. If
	the NUM LOCK key is on, it is turned off when executing any MS-DOS applications.
	Windows applications are not affected.
	
	WORKAROUND
	==========
	
	Manually turn off the NUM LOCK key before Tetris is executed, and keep it off
	until play is finished with Tetris. Press the NUM LOCK key on before starting
	MS-DOS applications.
	
	MORE INFORMATION
	================
	
	If the NUM LOCK key is automatically toggled off after exiting your MS-DOS
	applications, it may take more than one press before the NUM LOCK key is
	actually enabled again. This problem consistently occurs only on computers
	configured with MS-DOS versions 4.01 and earlier. It does not occur with later
	versions of MS-DOS.
	
	Additional query words: 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}

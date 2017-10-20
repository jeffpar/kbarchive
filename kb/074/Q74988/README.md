---
layout: page
title: "Q74988: Minimized Icons Revert to Program Manager Format in Windows"
permalink: /kb/074/Q74988/
---

## Q74988: Minimized Icons Revert to Program Manager Format in Windows

{% raw %}

	Article: Q74988
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	Under Windows 3.0, when you change the program icon for an MS-DOS
	based application by choosing Properties from the File menu and
	choosing the Change Icon button, the icon change is only active while
	the icon is displayed in its program group. Once the application is
	started and then minimized on the desktop, the original icon contained
	in PROGMAN.EXE is used.
	
	NOTE: This behavior does not affect Windows applications.
	
	The opposite problem occurs under Windows 3.1. If you change a Windows
	application's icon, it reverts to its original icon when minimized. An
	MS-DOS application, however retains its new icon both on the desktop
	and when running minimized. For example, under Windows 3.1, if you
	change the icon for Notepad, run it, then minimize it, it reverts back
	to the original Notepad icon despite the fact that you changed it and
	it appears changed in the Accessories group. If you change the icon
	for the MS-DOS prompt, it retains this new icon both in the Main Group
	(not running) and when it is minimized on the desktop (running).
	
	Additional query words: Win30 Win31 3.0 3.00 3.1 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}

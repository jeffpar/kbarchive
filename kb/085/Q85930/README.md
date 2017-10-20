---
layout: page
title: "Q85930: Windows 3.1: Logitech Mouse Directional Settings Not Saved"
permalink: /kb/085/Q85930/
---

## Q85930: Windows 3.1: Logitech Mouse Directional Settings Not Saved

{% raw %}

	Article: Q85930
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1 
	-------------------------------------------------------------------------------
	
	The following information applies to Windows versions 3.0 and 3.1
	running with a Logitech mouse plugged into a PS/2 style port.
	
	Mouse driver version 6.1 is currently being shipped with the Trackman
	Portable mouse. This software includes a .CPL file that installs into
	the WINDOWS\SYSTEM directory. A new icon appears in Control Panel
	using the .CPL file. This Logitech utility (activated by choosing the
	Logitech mouse icon) has the ability to change the directional
	settings for the mouse. For example, you can reverse the up/down
	direction of the mouse, so that pulling the mouse toward you causes
	the mouse pointer to move up instead of down.
	
	These settings are only saved for the active Windows session, and are
	lost when you exit Windows. Manually exiting the WIN.INI file and
	adding "orientation=south" to the [Trackman] section does NOT correct
	the problem.
	
	Logitech has confirmed this to be a problem with their .CPL file.
	
	The Logitech products included here are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: 3.00 3.00a 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310
	Version           : WINDOWS:3.0,3.0a,3.1
	
	=============================================================================
	

{% endraw %}

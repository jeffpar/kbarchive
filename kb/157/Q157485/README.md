---
layout: page
title: "Q157485: Taskbar Leaves Trail on Programs with Auto Hide Enabled"
permalink: kb/157/Q157485/
---

## Q157485: Taskbar Leaves Trail on Programs with Auto Hide Enabled

	Article: Q157485
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbdisplay kbui
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you size the taskbar to be higher than one button and enable the Auto Hide
	option, when the taskbar hides itself it leaves a trail of its borders in the
	window of any program it happened to overlap. When the taskbar is completely
	hidden, the program's window is redrawn and the trail disappears. This behavior
	also occurs if the taskbar is attached to the side of the screen rather than the
	bottom, but does not depend on the size of the taskbar.
	
	RESOLUTION
	==========
	
	To work around this behavior, disable the Show Window Contents While Dragging
	option on the Plus! tab in Display properties.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbdisplay kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

---
layout: page
title: "Q123010: LAN Manager Login PIF Changes Foreground Settings"
permalink: kb/123/Q123010/
---

## Q123010: LAN Manager Login PIF Changes Foreground Settings

	Article: Q123010
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After running a Microsoft LAN Manager logon script from LMSCRIPT.PIF, system
	performance may be degraded.
	
	CAUSE
	=====
	
	This problem occurs when Foreground Priority and Background Priority are both
	set to 10000 in the LMSCRIPT.PIF file and Background Execution is also
	selected.
	
	The result is that WinTimeSlice (Windows In Foreground) is dynamically set to
	half the value selected for Background Priority in the PIF. Windows and Windows
	for Workgroups automatically change the Windows In Foreground setting to 5000.
	
	WORKAROUND
	==========
	
	Method 1: The preferred solution is to set Background Priority in
	         LMSCRIPT.PIF to 200. This leaves WinTimeSlice (Windows In
	         Foreground) set to 100.
	
	Method 2: Deselect Background Execution in LMSCRIPT.PIF.
	
	Method 3: Open Control Panel and choose the 386 Enhanced icon. Set Windows
	         In Background to 2500 and Windows In Foreground to 5000. This
	         nullifies the changes caused by LMSCRIPT.PIF.
	
	Additional query words: 3.10 3.11 lanman lmscript.pif timeslice priority scheduling options 2.0 2.1 2.1a 2.2
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	
	=============================================================================
	

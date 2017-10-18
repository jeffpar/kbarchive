---
layout: page
title: "Q149228: How to Disable Mouse Acceleration"
permalink: kb/149/Q149228/
---

## Q149228: How to Disable Mouse Acceleration

	Article: Q149228
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The default settings for the mouse have acceleration enabled. To disable
	acceleration in the Mouse Control Panel tool, you can move the Mouse Speed slide
	bar all the way to the left. However, this makes the mouse pointer move very
	slowly in relation to the movement of the mouse. Disabling acceleration is
	desirable for some users of Windows NT, such as CAD users, but making the
	default mouse speed the only speed is impractical.
	
	MORE INFORMATION
	================
	
	To calculate the mouse speed under Windows NT, three settings are used: Mouse
	Speed, MouseThreshold1, and MouseThreshold2.
	
	Mouse Speed sets the relationship between mouse and cursor movement when the
	value of either MouseThreshold1 or MouseThreshold2 is exceeded. When this
	occurs, cursor movement accelerates according to the value of MouseSpeed.
	
	MouseThreshold1 and MouseThreshold2 set the maximum number of pixels the mouse
	can move between mouse interrupts before the system alters the relationship
	between mouse and cursor movement. If the mouse movement exceeds the threshold
	defined by MouseThreshold1 and if MouseSpeed is greater than 0, the system moves
	the cursor at twice the normal speed. If the mouse movement exceeds the
	threshold defined by MouseThreshold2 and if MouseSpeed is 2, the system moves
	the cursor at four times the normal speed.
	
	Using the slide bar in the Mouse Control Panel tool, you cannot disable
	acceleration without making the mouse pointer respond very slowly to the mouse
	movements. It is possible to overcome this limitation by manually setting the
	MouseThreshold settings so low that any movement at all is accelerated. Mouse
	pointer speed will no longer increase factorially with an increase in mouse
	movement, but still moves at a rate higher than normal.
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	To implement a higher default mouse pointer speed for the currently logged in
	user, use the Registry Editor (Regedt32.exe) to edit the following registry
	key:
	
	HKEY_CURRENT_USER\Control Panel\Mouse
	
	1. Set the value of MouseThreshold1 to 0.
	
	2. Set the value of MouseThreshold2 to 0.
	
	3. Set the value of MouseSpeed to 1 or 2 (1 doubles the normal speed, 2
	  quadruples the normal speed).
	
	4. Close Registry Editor, close all applications, and restart Windows NT.
	
	Additional query words: prodnt mice
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	

---
layout: page
title: "Q139340: How to Enable Debug Message Output During Setup"
permalink: kb/139/Q139340/
---

## Q139340: How to Enable Debug Message Output During Setup

	Article: Q139340
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During Setup, it is possible to display debug information. This is controlled by
	changing the value of the DEBUGOUTPUTCONTROL variable located in either the
	INITIAL.INF or SETUP.INF file (depending on the type of Setup used).
	
	MORE INFORMATION
	================
	
	You can determine whether or not debug information is displayed by changing the
	value of the variable, DEBUGOUTPUTCONTROL. If this variable is set to 1, debug
	messages are displayed; if it is set to 0, debug messages are suppressed. There
	are two ways to set or clear DEBUGOUTPUTCONTROL.
	
	GUI-MODE SETUP
	--------------
	
	GUI-mode Setup is controlled by INITIAL.INF, which contains a [DebugVars]
	section. The variable, STF_DISPLAYDEBUGOUTPUT, is defined by the following:
	
	  [DebugVars]
	  STF_DISPLAYDEBUGCONTROL = 0
	
	To display debug output, change the 0 to 1. This causes debug messages to be
	displayed because in the shell section of INITIAL.INF, the value of
	STF_DISPLAYDEBUGCONTROL is assigned to DEBUGOUTPUTCONTROL as follows:
	
	  read-syms DebugVars
	  set !DebugOutputControl = $(!STF_DISPLAYDEBUGOUTPUT)
	
	MAINTENANCE-MODE SETUP
	----------------------
	
	An acceptable and more direct method is to set DEBUGOUTPUTCONTROL directly.
	SETUP.INF contains a statement which sets the value of DEBUGOUTPUTCONTROL. To
	display debug information, change the 0 to 1, as shown in the example below:
	
	  set !G:DebugOutputControl = 0
	
	In maintenance Setup mode, this is the only available method because SETUP.INF
	controls maintenance-mode Setup (INITIAL.INF is not used) and SETUP.INF does not
	have a [DebugVars] section.
	
	NOTE: The use of the "G" prefix sets the value of DEBUGOUTPUTCONTROL in tth
	global symbol table in case SETUP.INF is not the top level .INF file.
	
	
	Additional query words: prodnt debugref
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

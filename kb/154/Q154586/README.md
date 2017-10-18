---
layout: page
title: "Q154586: Console Text Incorrectly Formatted"
permalink: kb/154/Q154586/
---

## Q154586: Console Text Incorrectly Formatted

	Article: Q154586
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you return to a full-screen command window (either Cmd or Command) that
	was forced to minimize, the text in the command window does not contain proper
	formatting.
	
	CAUSE
	=====
	
	This behavior can occur if there is a large font selected for the command
	prompt. When the ALT+ENTER message to return the window to full screen is
	received by the window, it tries to switch from full-screen to windowed mode.
	
	When it returns to full-screen mode, the console does not have correct
	information about the window and font size and formats the text incorrectly.
	
	RESOLUTION
	==========
	
	Restore the window to windowed mode and then back to full screen by pressing
	ALT+ENTER twice.
	
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

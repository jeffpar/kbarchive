---
layout: page
title: "Q89540: PRB: 15-Sec Hang During Critical Error Handling on Pen System"
permalink: kb/089/Q89540/
---

## Q89540: PRB: 15-Sec Hang During Critical Error Handling on Pen System

	Article: Q89540
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a critical error occurs on a system running Windows version 3.1, Windows
	enters message mode and displays the blue full-screen window that reports that
	an error has occurred. (This window is the window that appears when CTRL+ALT+DEL
	is pressed.) When running Windows for Pen Computing version 1.0 or 1.0a, the
	message window does not respond to keyboard input. The system appears to hang
	for 15 seconds and then returns to Windows.
	
	CAUSE
	=====
	
	Under Windows for Pen Computing, the pen driver installs a hook so that when the
	blue message window is displayed, the pen driver gets control. This gives the
	pen driver the ability to simulate a key stroke into the system thus preventing
	machines that don't have a keyboard from hanging when the critical error message
	window is displayed. Unfortunately, the pen driver's hook routine is intended
	only for machines that do not have a keyboard attached. If a keyboard is
	attached, all keystroke information is ignored for 15 seconds until the hook
	routine simulates the pressing of the ENTER key. Thus, the system appears to
	hang for 15 seconds.
	
	STATUS
	======
	
	Microsoft is aware of this problem and is making every effort to inform the OEMs
	that are currently providing pen drivers about the problem.
	
	MORE INFORMATION
	================
	
	For a detailed description of the virtual pen driver and the Key_Hook_Proc, see
	the article in the Microsoft Knowledge Base titled "Understanding the Windows
	Virtual Pen Driver." This article describes one possible workaround that an OEM
	can use to work around this problem.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

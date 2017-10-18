---
layout: page
title: "Q125392: Windows Stops Responding When Moving or Resizing a Window"
permalink: kb/125/Q125392/
---

## Q125392: Windows Stops Responding When Moving or Resizing a Window

	Article: Q125392
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the mouse to move or resize an application's window, Windows
	may stop responding (hang).
	
	CAUSE
	=====
	
	This problem can occur if a second Windows-based application opens a new dialog
	box while you are holding down the left (primary) mouse button and moving or
	resizing an application's window.
	
	When the second application's dialog box opens it places an incorrect instruction
	into the message queue. This blocks the first application from receiving a
	message from the mouse that is required to close the move or resize action. The
	computer hangs as the first application waits for input that it cannot receive.
	
	RESOLUTION
	==========
	
	You must restart your computer to resume normal functioning.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows and Windows
	for Workgroups versions 3.1 and 3.11. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	MORE INFORMATION
	================
	
	Most Microsoft Windows-based programs (such as Microsoft Schedule+ and WinPopup)
	do not have this problem because they do not display dialog boxes until after
	the first application has completed its move or resize action.
	
	Additional query words: 3.11 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

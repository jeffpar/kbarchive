---
layout: page
title: "Q73223: Group Window Does Not Repaint Properly in Windows 3.0"
permalink: kb/073/Q73223/
---

## Q73223: Group Window Does Not Repaint Properly in Windows 3.0

	Article: Q73223
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you open an application and size it to fit into the group from which it came,
	and then try to switch to another program item in that group, the window will
	not be repainted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows version 3.0 and 3.0a.
	This problem does not occur in later versions of Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open the Games group.
	
	2. Open Reversi.
	
	3. Size and Move Reversi so that it fits into the border of the Games group. The
	  Reversi window will now be completely within the Games window.
	
	4. Click the Solitaire icon. Reversi will disappear but the Games window will
	  not be repainted.
	
	  To allow for the window to be repainted, press ALT+TAB to return to Reversi
	  and close it.
	
	  -or-
	
	  You can press ALT+TAB to return to Reversi and click Solitaire. Now the window
	  will be repainted.
	
	NOTE: This happens in all group windows, not only the Games group.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

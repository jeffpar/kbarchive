---
layout: page
title: "Q138374: PRB: Can't Undo After Dragging from One Window to Another"
permalink: /kb/138/Q138374/
---

## Q138374: PRB: Can't Undo After Dragging from One Window to Another

	Article: Q138374
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After dragging from one window to another, if you click Undo on the Edit menu,
	only the action of the active window is affected.
	
	CAUSE
	=====
	
	The buffers for each window are separate. Therefore, the buffer of a window that
	is not active is not affected by Undo. Undo works if the non-active window is
	selected, then Undo affects the desired buffer.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a text file in Visual FoxPro's text editor.
	
	2. Select some text with the mouse.
	
	3. Drag that text into the Command window.
	
	4. On the Edit menu, click Undo. The text that was dropped into the Command
	  window disappears, but it does not reappear in the window containing the
	  original text.
	
	5. Click the window containing the original text.
	
	6. On the Edit menu, click Undo. The text that was originally selected and
	  dragged to the Command window reappears in the window containing the original
	  text.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

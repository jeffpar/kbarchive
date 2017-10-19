---
layout: page
title: "Q130390: How to Size Controls Using the Visual Class Designer"
permalink: /kb/130/Q130390/
---

## Q130390: How to Size Controls Using the Visual Class Designer

	Article: Q130390
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the Visual Class Designer and its child window
	to size controls.
	
	MORE INFORMATION
	================
	
	You can use Visual Class Designer in Visual FoxPro to design custom controls for
	use in applications. The Class Designer consists of a parent window and a child
	window in which you can adjust the size and dimensions of a given control.
	
	The child window contains the control. This is not to be confused with a
	container object. The child window is an editing region for the control being
	manipulated.
	
	For this reason, the control assumes the dimensions of the child window. For
	example, if you drag the child window by the lower-right corner, the control
	resizes to fill the frame of the child window. This is by design.
	
	The control can be independently resized by holding down the shift key and
	pressing the appropriate cursor key on the keyboard.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new class using the Class Designer by choosing New from the File
	  menu and clicking Class. Then click the New File command button to activate
	  the Visual Class Designer tool.
	
	2. Type in a name for this class. Under Based on, choose CommandButton. Type
	  Temp in the Store In text box.
	
	The Visual Class designer parent and child windows appear. Clicking and dragging
	the lower-right corner of the child window results in the command button
	resizing to the dimensions of the child window. Again, this is by design.
	
	The size of the window equals the size of the control. The control can be resized
	inside the child window by holding the SHIFT key down and repeatedly pressing
	the UP ARROW or LEFT ARROW key. When the class is saved and placed on a form, it
	is displayed using the dimensions it had when it was saved, not the dimensions
	of the child window it was in. If the class is then reopened in the Visual Class
	Designer, the child window will have the exact boundary dimensions of the
	control.
	
	Additional query words: VFoxWin KBfest
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

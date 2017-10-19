---
layout: page
title: "Q150194: BUG: OLE Container Launches Word When Resized"
permalink: /kb/150/Q150194/
---

## Q150194: BUG: OLE Container Launches Word When Resized

	Article: Q150194
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbprogramming kbVBp400
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Resizing the Microsoft Visual Basic 4.0 OLE Container control at run-time, when
	it contains a Microsoft Word document, causes Word to be launched. This behavior
	is different if a Microsoft Excel Worksheet or other OLE Server document is
	embedded in the OLE Container control. This is also different than the behavior
	in Microsoft Visual Basic 3.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce Problem
	--------------------------
	
	1. Place an OLE Container Control on a form. Insert a Word document into the
	  control by selecting any Word file in the Insert Object dialog box.
	
	2. Place a Command button on the form and place the following code in the Click
	  event for the button:
	
	        'Resize the control
	
	        OLE1.Width = 2 * OLE1.Width
	
	        'Test if the application is running
	
	        Msgbox OLE1.AppIsRunning
	
	3. Run the program by pressing the F5 key and then press the Command button.
	  Notice that Word is launched by the True result of the MsgBox.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	

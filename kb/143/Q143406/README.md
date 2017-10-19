---
layout: page
title: "Q143406: FIX: ListView and Item Spacing"
permalink: /kb/143/Q143406/
---

## Q143406: FIX: ListView and Item Spacing

	Article: Q143406
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
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
	
	The spacing between items in the ListView control changes, getting closer
	together when you change the BorderStyle property after adding listitems to the
	listview control. The problem occurs for Icon and SmallIcon views when the items
	include images.
	
	RESOLUTION
	==========
	
	You can work around this problem by setting the Arrange property to lvwAutoLeft
	or lvwAutoTop after setting the BorderStyle property and before adding listitems
	to the listview control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Start Visual Basic or from the File menu, choose New Project (ALT, F, N).
	
	2. Add a Listview control to Form1.
	
	3. Add an ImageList control to Form1.
	
	4. Place the following code to the form load event of form1.
	
	     Dim i As Integer
	     ListView1.Arrange = lvwAutoLeft
	
	     ImageList1.ListImages.Add , , LoadPicture("c:\windows\cars.bmp")
	     Set ListView1.Icons = ImageList1
	     Set ListView1.SmallIcons = ImageList1
	
	     For i = 1 To 20
	         ListView1.ListItems.Add , , "Item" & i, 1, 1
	     Next
	
	     ListView1.BorderStyle = 0
	
	5. Run program. Result: The items are all bunched together.
	
	Additional query words: kbVBp400bug kbVBp500fix kbVBp kbdsd kbDSupport kbCtrl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

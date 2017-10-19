---
layout: page
title: "Q151079: BUG: Label of ListView Items Large When LabelWrap Set to TRUE"
permalink: /kb/151/Q151079/
---

## Q151079: BUG: Label of ListView Items Large When LabelWrap Set to TRUE

	Article: Q151079
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the LabelWrap property of the ListView control is set to FALSE, then the
	width of the label is the correct width to hold the text of the ListView item.
	However, the height of the label for each item is the same height as calculated
	for the control if the LabelWrap property had been set TRUE. Consequently,
	unused space underneath the text makes the label for each item much larger than
	it needs to be.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place a ListView control on the form.
	
	3. Add the following code to the Load event of Form1:
	
	     Private Sub Form_Load()
	      ListView1.LabelWrap = False
	      ListView1.ListItems.Add , , "This is an extremely very, very, very," _
	      & "very long line of text"
	     End Sub
	
	4. Run the project by pressing the F5 key. Notice that the label is very wide
	  and tall because the FALSE Wrap property causes the label to be on one line.
	
	Additional query words: kbVBp400bug kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Issue type        : kbbug
	
	=============================================================================
	

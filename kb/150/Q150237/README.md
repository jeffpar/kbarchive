---
layout: page
title: "Q150237: BUG: Cell Size of Grid Does Not Change as Font Size Changes"
permalink: /kb/150/Q150237/
---

## Q150237: BUG: Cell Size of Grid Does Not Change as Font Size Changes

{% raw %}

	Article: Q150237
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400bug kbGrpDSVB
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
	
	If the Size property of the Font object belonging to a Microsoft Grid control is
	adjusted, the cell size containing that font does not change.
	
	RESOLUTION
	==========
	
	Rather than changing the size of the Font member object this way:
	
	     Grid1.Font.Size = 10
	
	use the FontSize property, which is a property of the Grid object. For example:
	
	     Grid1.FontSize = 10
	
	When the latter method is used, the cell size changes as the font size is
	adjusted.
	
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
	
	2. Place a Microsoft Grid control on Form1.
	
	3. In the Load event of Form1, place the following code:
	
	        Private Sub Form_Load()
	        Grid1.Text = "Hello"
	        End Sub
	
	4. In the Click event for the form, place the following code:
	
	        Private Sub Form_Click()
	        Grid1.Font.Size = Grid1.Font.Size + 4
	        End Sub
	
	5. Run the project by pressing the F5 key. Click the form and note that the font
	  in the first cell gets bigger, but the cell does not change size.
	
	To implement the workaround, change the code in the Click event of the form to:
	
	     Private Sub Form_Click()
	     Grid1.FontSize = Grid1.FontSize + 4
	     End Sub
	
	The cells grow as the font grows each time the form is clicked.
	
	Additional query words: kbVBp400bug kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbVBp400bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}

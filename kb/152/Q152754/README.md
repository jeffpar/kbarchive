---
layout: page
title: "Q152754: FIX: Controls Change Tabs if Sheridan Tab Control is Resized"
permalink: kb/152/Q152754/
---

## Q152754: FIX: Controls Change Tabs if Sheridan Tab Control is Resized

	Article: Q152754
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400bug kbVBp500fix kbGrpDSVB
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
	
	If the Sheridan Tab control is resized such that the controls on a given tab can
	no longer be seen, and if the focus is then changed to a different tab, then
	when the Tab control is resized back to its former size the controls change
	their parent to the tab which received focus after the initial resize.
	
	RESOLUTION
	==========
	
	The only way to avoid this problem is to not resize the Tab control to a size
	that hides the controls on the tab and then switches focus to another tab. If
	the tab control is going to be resized to a small size which hides controls,
	then it may be appropriate to hide the tab control completely rather then resize
	it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place a Sheridan tab control on Form1.
	
	3. Place a Command button in the middle of Tab 0. In the Click event for the
	  Command button, place the following code:
	
	        Private Sub Command1_Click()
	           SSTab1.Height = SSTab1.Height * 0.1     ' If this is larger,
	                                                   '  bug does not occur.
	           SSTab1.Tab = 1                          ' Makes tab 1 active.
	        End Sub
	
	4. In the Click event for Form1, place the following code:
	
	        Private Sub Form_Click()
	           SSTab1.Height = SSTab1.Height * 10
	        End Sub
	
	5. Run the project by pressing F5. Click the button on Tab 0 to shrink the Tab
	  control and make Tab 1 active. Then click Form1 to expand the Tab control.
	  Note that the Command button is now on Tab 1, and Tab 0 now contains no
	  controls.
	
	Additional query words: kbVBp400bug kbVBp500fix kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbVBp400bug kbVBp500fix kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

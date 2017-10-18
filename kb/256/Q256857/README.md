---
layout: page
title: "Q256857: BUG: Toolbar with Placeholder Button Does Not Wrap Correctly"
permalink: kb/256/Q256857/
---

## Q256857: BUG: Toolbar with Placeholder Button Does Not Wrap Correctly

	Article: Q256857
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbCtrl kbToolbar kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a form contains a Toolbar control with several buttons and several
	placeholders and the Wrappable property is set to True, when the form is resized
	to a smaller size, the Toolbar wraps to the next line.
	
	The placeholder buttons on the Toolbar wrap when the edge of the form starts to
	overlap the first non-placeholder button immediately to the right of the
	placeholder. However, the buttons to the right of the placeholder wrap
	incorrectly. They are wrapped onto two lines instead of one and are only
	partially visible. The Toolbar corrects itself when the first non-placeholder
	button to the left of the placeholder wraps to the next line.
	
	RESOLUTION
	==========
	
	A workaround is to place a dummy placeholder before and after the desired
	placeholder. However, if several placeholders are side-by-side in a row, this
	workaround does not resolve the issue because the placeholders act as one unit
	and wrap together when the form overlaps the left-most placeholder. In this
	situation, the controls used in conjunction with the placeholders of the Toolbar
	must be wrapped programmatically.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, click Components. In the Components dialog box, click to
	  select the Microsoft Windows Common Controls 6.0, and then click OK.
	
	3. Add a CommandButton, a TextBox, and a Toolbar control to Form1.
	
	4. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	     Toolbar1.Buttons.Add 2, "Ref1", , tbrPlaceholder
	     Toolbar1.Buttons.Add 4, "Ref2", , tbrPlaceholder
	     Text1.Top = Toolbar1.Buttons("Reference").Top + _
	                (Toolbar1.ButtonHeight - Text1.Height) / 2
	     Text1.Left = Toolbar1.Buttons("Reference").Left
	  End Sub
	
	  Private Sub Form_Load()
	     Toolbar1.Wrappable = True
	     
	     Toolbar1.Buttons.Add , "Button1", "Button1", tbrDefault
	     ' Add a placeholder
	     Toolbar1.Buttons.Add , "Reference", , tbrPlaceholder
	     Toolbar1.Buttons("Reference").Width = Text1.Width
	     Toolbar1.Buttons.Add , "Button2", "Button3", tbrDefault
	  End Sub
	
	  Private Sub Form_Resize()
	     ' set text boxes to placeholder positions
	     Text1.Top = Toolbar1.Buttons("Reference").Top + _
	                (Toolbar1.ButtonHeight - Text1.Height) / 2
	     Text1.Left = Toolbar1.Buttons("Reference").Left
	  End Sub
	
	5. Run the project. Resize the form by clicking the mouse on the lower-right
	  corner of the form and dragging it to the left until the Toolbar must wrap.
	  The visual problem becomes readily apparent.
	
	6. Click Command1 and repeat the previous step. Note that the problem no longer
	  occurs.
	
	REFERENCES
	==========
	
	For additional information on Toolbar wrapping problems, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q175533 BUG: Toolbar Does Not Wrap Correctly
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCmnCtrls kbCtrl kbToolbar kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

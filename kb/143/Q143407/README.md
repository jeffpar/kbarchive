---
layout: page
title: "Q143407: FIX: Buttons On Wrappable Toolbar Do Not Appear"
permalink: /kb/143/Q143407/
---

## Q143407: FIX: Buttons On Wrappable Toolbar Do Not Appear

	Article: Q143407
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
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
	
	When inserting multiple buttons on a toolbar with the wrappable property set to
	TRUE, only the first row of buttons is displayed when the program is run.
	
	WORKAROUND
	==========
	
	Place the following code in the form load event.
	
	     Private Sub Form_Load()
	      form1.show
	      form1.refresh
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Start Visual Basic or from the File menu, choose New Project (ALT, F, N).
	
	2. Add a toolbar to the form.
	
	3. Choose the (Custom) entry in the Properties window.
	
	4. Insert 3 buttons from the ToolBar Control Properties dialog box.
	
	5. Set the Wrappable property to True.
	
	6. Re-size the form so that the buttons are wrapped.
	
	7. Run the program.
	
	Results: Only the first row of buttons is displayed.
	
	Resizing the form will allow all buttons to be displayed. Of course, the form's
	borderstyle must not be fixed.
	
	Additional query words: kbVBp400bug kbVBp500fix kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

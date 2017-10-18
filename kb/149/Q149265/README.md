---
layout: page
title: "Q149265: BUG: SSCommand Button Loses Focus Rectangle"
permalink: kb/149/Q149265/
---

## Q149265: BUG: SSCommand Button Loses Focus Rectangle

	Article: Q149265
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp400bug
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
	
	When an SSCommand button exists on a form with other controls that are also
	provided by the Sheridan 3D Control OCX (THREED16.OCX or THREED32.OCX), the
	SSCommand button may not always display a focus rectangle to indicate that it
	has the focus. This problem occurs when the SSCommand button has both its
	Default property set to True and has a picture set in its Picture property.
	
	RESOLUTION
	==========
	
	To work around this problem, issue a refresh to the SSCommand button when it
	receives the focus. To implement this fix, insert the following code into the
	project, changing the control name to reflect the name of the SSCommand button
	used in the project:
	
	     Private Sub SSCommand1_GotFocus()
	         SSCommand1.Refresh
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic 4.0. Form1 is created by default.
	
	2. Add a single SSCommand button to the form. Also add an SSCheck check box. If
	  these controls do not appear in the toolbox, select Custom Controls from the
	  References menu and include the 'Sheridan 3D Controls'.
	
	3. Change these properties of the SSCommand button (be sure to change the file
	  reference to the bitmap to reflect your VB installation):
	
	  Default: True
	  Picture: C:\VB4\BITMAPS\ASSORTED\BELL.BMP
	
	4. Press F5 or select Start from the Run menu to run the application. Tab back
	  and forth between the controls and see that the SSCommand does not show a
	  dotted outline to indicate when it has the focus.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbVBp400bug 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00 | 4.00
	Issue type        : kbbug
	
	=============================================================================
	

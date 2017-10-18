---
layout: page
title: "Q77738: BUG: Extra Click Event If Double-Click When Mouse Button Down"
permalink: kb/077/Q77738/
---

## Q77738: BUG: Extra Click Event If Double-Click When Mouse Button Down

	Article: Q77738
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,2.0,3.0
	Operating System(s): 
	Keyword(s): kbvbp100bugkbbuglist
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 2.0, 3.0 
	- Microsoft Visual Basic Standard Edition for Windows, versions 1.0, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When one mouse button is held down, double-clicking the other button generates
	one more Click event than necessary. The problem does not occur when
	double-clicking either mouse button individually.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following code demonstrates that an extra Click event is generated when
	double-clicking one mouse button while holding the other down.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic.
	
	2. Double-click the form or press the F7 key to bring up the code window. Enter
	  the following code in the Form_Click event procedure for Form1:
	
	     Private Sub Form_Click ()
	        Print "Click"
	     End Sub
	
	3. Enter the following code in the Form_DblClick event procedure:
	
	     Private Sub Form_DblClick ()
	        Print "DblClick"
	     End Sub
	
	4. Enter the following code in the Form_MouseDown event procedure:
	
	
	     ' Enter the following two lines as one, single line:
	     Private Sub Form_MouseDown(Button As Integer, Shift As Integer,
	        X As Single, Y As Single)
	        Print "Down"; Button
	     End Sub
	
	5. Enter the following code in the Form_MouseUp event procedure:
	
	
	     ' Enter the following two lines as one, single line:
	     Private Sub Form_MouseUp(Button As Integer, Shift As Integer,
	        X As Single, Y As Single)
	        Print "Up"; Button
	     End Sub
	
	6. From the Run menu, choose Start.
	
	7. Using the right mouse button, double-click anywhere on the form. The output
	  to Form1 should be:
	
	  Down 2
	  Up 2
	  Click
	  DblClick
	  Up 2
	
	8. Press and hold the left mouse button. The output to Form1 should be:
	
	  Down 1
	
	9. While holding the left mouse button down, double-click with the right mouse
	  button. The output to Form1 should be:
	
	  Down 2
	  Up 2
	  Click
	  DblClick
	  Up 2
	  Click
	
	The last Click was not generated when double-clicking with the right mouse button
	alone (as illustrated in step 8 above). This additional call to the Click event
	procedure is not expected behavior and is a problem with Visual Basic. The
	problem also occurs when the right mouse button is held down and you
	double-click the left mouse button.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvbp100bug kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300 kbVB200
	Version           : :1.0,2.0,3.0
	Issue type        : kbbug
	
	=============================================================================
	

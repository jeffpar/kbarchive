---
layout: page
title: "Q223065: FIX: Button Parameter of DataGrid MouseUp Event Always Equals 0"
permalink: /kb/223/Q223065/
---

## Q223065: FIX: Button Parameter of DataGrid MouseUp Event Always Equals 0

	Article: Q223065
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the MouseUp and MouseDown events of the DataGrid control, you see the
	following symptoms:
	
	- The Button argument of the DataGrid MouseUp event is 0, regardless of which
	  mouse button is used.
	
	- When two mouse buttons are pressed together, the Button argument of the
	  DataGrid MouseDown event is 3 and the Button argument is incorrect for the
	  MouseUp event.
	
	RESOLUTION
	==========
	
	This behavior no longer occurs with the version of the DataGrid that ships with
	Visual Basic 6.0 Service Pack 3.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	The MouseDown event occurs when a mouse button is pressed over an object.
	
	The MouseUp event is raised when a mouse button is released over an object.
	
	The MouseMove event occurs when the mouse is moved over an object.
	
	The Button argument is an integer that indicates which mouse button was used
	during a MouseDown, MouseUp, or MouseMove event.
	
	The Button argument should be 0 if no button is used, 1 if the left button is
	used, 2 if the right button is used, or 4 if a middle button is used.
	
	While the Button argument may be incorrect for the DataGrid MouseUp and MouseDown
	events, the Button argument is correct for the DataGrid's MouseMove event.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Microsoft Visual Basic 6.0, create a new standard EXE project. Form1 is
	  created by default.
	
	2. From the Project menu, choose Components. Select the Microsoft DataGrid
	  Control 6.0 (OLEDB) and then click OK.
	
	3. Add a DataGrid to the Form1. DataGrid1 is created by default.
	
	4. Paste the following code into the code window for Form1:
	
	     Private Sub DataGrid1_MouseUp(Button As Integer, Shift As Integer, X As    Single, Y As Single)
	        Debug.Print "DataGrid1_MouseUp:" & Button
	     End Sub
	
	     Private Sub DataGrid1_MouseDown(Button As Integer, Shift As Integer, X    As Single, Y As Single)
	        Debug.Print "DataGrid1_MouseDown:" & Button
	     End Sub
	
	     Private Sub Form_MouseUp(Button As Integer, Shift As Integer, X As    Single, Y As Single)
	        Debug.Print "Form_MouseUp:" & Button
	     End Sub
	
	     Private Sub Form_MouseDown(Button As Integer, Shift As Integer, X As    Single, Y As Single)
	        Debug.Print "Form_MouseDown:" & Button
	     End Sub
	
	5. Before running the project, open the View menu, and select Immediate Window.
	  The Immediate Window allows you to see the output of the Debug.Print
	  statements at run-time (and later, back in design mode).
	
	6. Run the project.
	
	7. Position the mouse pointer over the Form, but not over the DataGrid.
	  Perform the following sequence of mouse operations:
	
	  a. Press (and hold) the left mouse button.
	
	  b. Press (and hold) the right mouse button.
	
	  c. Release the left mouse button.
	
	  d. Release the right mouse button.
	
	You will see the following sequence in the Immediate Window:
	
	   - Form_MouseDown: 1
	   - Form_MouseDown: 2
	   - Form_MouseUp: 1
	   - Form_MouseUP: 2
	
	NOTE: These are the correct mouse Button values.
	
	8. Position the mouse pointer over the DataGrid. Perform the following sequence
	  of mouse operations:
	
	  a. Press (and hold) the left mouse button.
	
	  b. Press (and hold) the right mouse button.
	
	  c. Release the left mouse button.
	
	  d. Release the right mouse button.
	
	You will see the following sequence in the Immediate Window:
	
	  
	   - DataGrid1_MouseDown: 1
	   - DataGrid1_MouseDown: 3
	   - DataGrid1_MouseUp: 2
	   - DataGrid1_MouseUP: 0
	
	NOTE: These are not the correct mouse Button values. The correct sequence
	follows:
	
	  
	   - DataGrid1_MouseDown: 1
	   - DataGrid1_MouseDown: 2
	   - DataGrid1_MouseUp: 1
	   - DataGrid1_MouseUP: 2
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

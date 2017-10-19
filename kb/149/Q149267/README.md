---
layout: page
title: "Q149267: BUG: Container Property of DBGrid Does Not Behave Correctly"
permalink: /kb/149/Q149267/
---

## Q149267: BUG: Container Property of DBGrid Does Not Behave Correctly

	Article: Q149267
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): kbbuglist
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
	
	If the container property of the DBGrid control is changed at run time,
	subsequent changes to the DBGrid's properties will still reflect the initial
	container. If the Name property of the Container object (that is,
	DBGrid1.Container.Name) is examined, it will return the newly set container, but
	the DBGrid itself will not honor this change.
	
	WORKAROUND
	==========
	
	To work around this problem, place the DBGrid control inside another container
	(such as a PictureBox or Frame), size this container, and set properties so that
	the DBGrid appears as normal, and then set the properties of this container
	instead of the properties of the DBGrid.
	
	Steps 5 - 9 of the reproduction sample below demonstrate this workaround.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Start Visual Basic 4.0. Form1 is created by default.
	
	2. Add a single DBGrid control to the form. Also click and drag a single picture
	  box onto the same form.
	
	3. Add the following code to the form's Form_Click event:
	
	     Private Sub Form_Click()
	        Set DBGrid1.Container = Picture1
	        DBGrid1.Left = 0
	        DBGrid1.Top = 0
	     End Sub
	
	4. Press F5 or select Start from the Run menu to run the application. Click on
	  the form and notice that the DBGrid moves to the upper-left corner of the
	  form instead of the upper-left corner of the picture box control.
	
	To work around the problem, perform the following steps:
	
	1. Add an additional PictureBox to the form (Picture2 by default).
	
	2. Delete the currently existing DBGrid and then draw a new DBGrid inside of the
	  Picture2 PictureBox control.
	
	3. Set the BorderStyle property of Picture2 to '0 - None'. Move the DBGrid and
	  resize Picture2 so that the picture box control just surrounds the DBGrid and
	  so that the picture control does not appear visible.
	
	4. Modify the Form_Click event to contain this code:
	
	     Private Sub Form_Click()
	        Set Picture2.Container = Picture1
	        Picture2.Left = 0
	        Picture2.Top = 0
	     End Sub
	
	5. Press F5 or select Start from the Run menu to run the application. Click the
	  form and observe how the DBGrid now moves to the upper-left corner of the
	  first picture box, not the form. In this sample, if you wanted to change the
	  properties of the DBGrid, you would change the properties of Picture2
	  instead.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00 | 4.00
	Issue type        : kbbug
	
	=============================================================================
	

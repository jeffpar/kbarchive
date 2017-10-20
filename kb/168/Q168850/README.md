---
layout: page
title: "Q168850: BUG: MDIChild Form Not Brought to Front with Show Method"
permalink: /kb/168/Q168850/
---

## Q168850: BUG: MDIChild Form Not Brought to Front with Show Method

{% raw %}

	Article: Q168850
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVBDB
	Last Modified: 16-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Show method of an MDI child form is invoked, the MDI child form is not
	brought to the front.
	
	RESOLUTION
	==========
	
	To ensure that the correct window is brought to the top, use the ZOrder method.
	Replace the Show method with the ZOrder method.
	
	In other words, you would replace the following line of code:
	
	     Form1.Show
	
	with:
	
	     Form1.ZOrder
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Start a new Visual Basic 5.0 Standard Exe project. Form1 is created by
	  default.
	
	2. Add an MDI form (MDIForm1) and a Form (Form2) to the project.
	
	3. Set the MDIChild property of Form1 and Form2 to True.
	
	4. Add two menu items to the MDIForm1. For the first menu item, set the Caption
	  property to "ShowForm1" and the Name property to mnuShowForm1. For the second
	  menu item, set the Caption property to "ShowForm2" and the Name property to
	  mnuShowForm2.
	
	5. Add the following code to the General Declarations section of MDIForm1:
	
	        Private Sub mnuShowForm1_Click()
	            Form1.Show
	        End Sub
	
	        Private Sub mnuShowForm2_Click()
	            Form2.Show
	        End Sub
	
	6. Press the F5 key to run the project. Click on the ShowForm2 menu. Then click
	  on ShowForm1. Notice that Form1 is not brought to the front.
	
	Additional query words: active activated focus
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : :5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q137623: PRB: Align Property Setting Causes Toolbar to Fill the Form"
permalink: /kb/137/Q137623/
---

## Q137623: PRB: Align Property Setting Causes Toolbar to Fill the Form

{% raw %}

	Article: Q137623
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change the align property to the left or right position, the control's
	width stays the same, the height changes to the height of the form, and the
	control becomes aligned with the desired side.
	
	CAUSE
	=====
	
	This is by design. All controls that have an align property behave like This.
	This includes the 3D panel, ProgressBar, StatusBar, and Toolbar controls.
	
	The toolbar control's default align setting is top, so in this case, the
	toolbar's width is the width of the form. When you change the align property to
	the left or right, the width stays the same (form's width), and the height
	becomes equal to the form. As a result, the toolbar takes up the entire form.
	
	RESOLUTION
	==========
	
	To work around this in code, you must set the width or height to the values you
	want when you change the align property. In addition, You might want to change
	the toolbar's BorderStyle property to 1-fixed single to make the toolbar border
	more visible.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project in Visual Basic. Form1 is created by default.
	
	2. Add a command button and a toolbar to Form1.
	
	3. Place the following code in the command button click event:
	
	     Private Sub Command1_Click()
	        If Toolbar1.Align < 4 Then
	           Toolbar1.Align = Toolbar1.Align + 1
	        Else
	           Toolbar1.Align = 0
	        End If
	     End Sub
	
	4. Change the toolbar's BorderStyle property to 1-fixed single.
	
	5. Run the program, and click the command button twice. The toolbar moves from
	  top to bottom. Then it moves from bottom to the entire screen. All the other
	  controls on the form are hidden from view.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

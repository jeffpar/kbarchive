---
layout: page
title: "Q145677: FIX: ARROW and TAB keys Stop Working in MDI Child Form"
permalink: /kb/145/Q145677/
---

## Q145677: FIX: ARROW and TAB keys Stop Working in MDI Child Form

{% raw %}

	Article: Q145677
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 22-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have an MDI parent form with a toolbar and one MDI child form, pressing
	a toolbar button can prevent the arrow keys and tab key from functioning as
	cursor navigation keys on the MDI child form. You can still type text into the
	text boxes on the child form, but the cursor can be moved only by using the
	mouse pointer.
	
	CAUSE
	=====
	
	The toolbar control is capturing all navigation key events, preventing the text
	box controls on the MDI child form from processing them.
	
	RESOLUTION
	==========
	
	To work around this problem, force the toolbar to lose focus. This will prevent
	the toolbar from trapping the navigation key events. Add the following code to
	the MouseUp event of the toolbar control:
	
	     Private Sub Toolbar1_MouseUp(Button As Integer, Shift As Integer, _
	     x As Single, y As Single)
	
	         Me.SetFocus
	
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 5.0 and 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place two text boxes on form1.
	
	3. Press F4 to bring up Visual Basic's property page and set form1's MDIChild
	  property to true.
	
	4. Add a MDI parent form to your project, by selecting "MDI Form" from the
	  "Insert" menu.
	
	5. Add a Toolbar control to your MDI form.
	
	6. Add the following code to the MDIForm_Load event of the MDI Form:
	
	     Private Sub MDIForm_Load()
	
	         Toolbar1.Buttons.Add
	         Form1.Show
	
	     End Sub
	
	7. Press the F5 key or click Start on the Run menu to start the program.
	
	8. Click the toolbar button.
	
	9. Click a text box, to give it keyboard focus. Now try using the cursor or tab
	  keys to reposition the cursor.
	
	Additional query words: kbVBp400bug kbVBp500fix kbVBp600fix kbVBp kbdsd kbDSupport kbMDI kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

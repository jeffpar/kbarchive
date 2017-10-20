---
layout: page
title: "Q150195: FIX: Hidden MDIChild Form Can Still Be Active Form"
permalink: /kb/150/Q150195/
---

## Q150195: FIX: Hidden MDIChild Form Can Still Be Active Form

{% raw %}

	Article: Q150195
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
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
	
	Under certain circumstances, an MDIChild form can be hidden but still be the
	active form. This occurs when an MDIChild form is shown before hiding the active
	MDIChild form. The latter MDIChild form stays active although it is invisible.
	Clicking in an area of the invisible form does not activate a visible form
	behind it because the input is sent to the invisible form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	WORKAROUND
	==========
	
	If you are going to hide an MDIChild form and then show another form, it is
	important to hide the existing form first, and then show the new MDIChild form.
	
	For example, instead of the code:
	
	     Form3.Show
	
	     Me.Hide
	
	the following code accomplishes the same objective but avoids the problem
	described above:
	
	     Me.Hide
	
	     Form3.Show
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default. Select the
	  Insert/Form menu option twice and insert an MDI parent form by selecting
	  Insert/MDI Form.
	
	2. Change the MDIChild property of all three regular forms to True. Place a
	  Command button on Form1 and Form2. In the Click event of the Command button
	  on Form1, place the following code:
	
	     Private Sub Command1_Click()
	
	        Form2.Show
	
	     End Sub
	
	3. In the Click event of the Command button on Form2, place the following code:
	
	     Private Sub Command1_Click()
	
	       Form3.Show
	
	       Me.Hide
	
	     End Sub
	
	4. Run the project by pressing the F5 key. Click on the Command button of Form1
	  to show Form2. Move Form2 so it only partially covers Form1. For example,
	  have it cover the lower right hand corner of Form1. Click on the Command
	  button on Form2 to show Form3 and hide Form2. Click on the lower right hand
	  corner of Form1. Form1 is not activated.
	
	To correct this problem, change the code in the Click event of the Command button
	on Form2 to read:
	
	     Private Sub Command1_Click()
	
	        Me.Hide
	
	     Form3.Show
	
	     End Sub
	
	Additional query words: kbVBp400bug kbVBp500fix kbVBp kbdsd kbDSupport kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

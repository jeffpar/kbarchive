---
layout: page
title: "Q150183: FIX: Cannot Change Left and Top of Invisible Sheridan Control"
permalink: /kb/150/Q150183/
---

## Q150183: FIX: Cannot Change Left and Top of Invisible Sheridan Control

{% raw %}

	Article: Q150183
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
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
	
	If the Left and Top properties of a Sheridan frame control are set to new values
	before the Width of the control is changed while the control is invisible, the
	Left and Top properties will retain their original values.
	
	RESOLUTION
	==========
	
	Set the Width property of the control before setting the Left and Top values.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place a Sheridan Frame control on to Form1. From the Tools menu, select
	  Custom Controls to add the Sheraton controls to the toolbar.
	
	3. Place the following code into the Click event for Form1:
	
	     Private Sub Form_Click()
	
	        SSFrame1.Visible = False
	
	        SSFrame1.Top = SSFrame1.Top + 1000
	
	        SSFrame1.Left = SSFrame1.Left + 1000
	
	        SSFrame1.Width = SSFrame1.Width + 1000
	
	        SSFrame1.Visible = True
	
	     End Sub
	
	4. Run the project by pressing F5. Click on the Form, and the Left and Top
	  properties of the Frame control remain the same.
	
	To implement the workaround above, change the code in the Click event of Form1 to
	the following:
	
	     Private Sub Form_Click()
	
	        SSFrame1.Visible = False
	
	        SSFrame1.Width = SSFrame1.Width + 1000
	
	        SSFrame1.Top = SSFrame1.Top + 1000
	
	        SSFrame1.Left = SSFrame1.Left + 1000
	
	        SSFrame1.Visible = True
	
	     End Sub
	
	Additional query words: kbVBp400bug kbVBp500fix kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

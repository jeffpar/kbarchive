---
layout: page
title: "Q180527: BUG: Setting WindowState = 0 Doesn't Set Window State to Normal"
permalink: /kb/180/Q180527/
---

## Q180527: BUG: Setting WindowState = 0 Doesn't Set Window State to Normal

{% raw %}

	Article: Q180527
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp kbVBp500 kbVBp600bug kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB
	Last Modified: 15-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the WindowState property of a form to '0 - Normal' has no effect.
	
	RESOLUTION
	==========
	
	Save the form's height and width before changing the WindowState property (such
	as Maximizing), and then restore the height and width when desired as follows:
	
	     Option Explicit
	     Dim FormHeight
	     Dim FormWidth
	
	     Private Sub Form_Load()
	        'initialize form size, could be set at design-time also.
	        Form1.height = 2000
	        Form1.width = 3000
	        'Save the form's height and width.
	        FormHeight = Form1.Height
	        FormWidth = Form1.Width
	        Command1.Caption = "Maximized"
	        Command2.Caption = "Normal"
	     End Sub
	
	     Private Sub Command1_Click()
	        Form1.WindowState = 2 'Maximized
	     End Sub
	
	     Private Sub Command2_Click()
	        'Restore the form's original height and width.
	        Form1.Height = FormHeight
	        Form1.Width = FormWidth
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Windows CE HPC Pro Project in either eMbedded Visual Basic or
	  Visual Basic 6.0. Form1 is created by default.
	
	2. Add two command buttons to Form1, placing them in the upper-left-hand corner
	  of the form so they will be visible when the form is resized by the Load
	  event of the form.
	
	3. Paste the following code into Form1:
	
	        Private Sub Form_Load()
	             Command1.Caption = "Maximized"
	             Command2.Caption = "Normal"
	             'initialize form size, could be set at design-time also.
	             Form1.height = 2000
	             Form1.width = 3000
	        End Sub
	
	        Private Sub Command1_Click()
	             Form1.WindowState = 2 'Maximized
	        End Sub
	
	        Private Sub Command2_Click()
	             Form1.WindowState = 0 'Normal
	        End Sub
	
	4. Press F5 to run the project.
	
	5. Click on Command1 and note that the form is maximized.
	
	6. Click on Command2 and note that the window does not return to its normal
	  state.
	
	Additional query words: wince vbce vbce6 evb
	
	======================================================================
	Keywords          : kbToolkit kbVBp kbVBp500 kbVBp600bug kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q191718: BUG: Error 13 Assigning Variable to UserControl in Same Project"
permalink: /kb/191/Q191718/
---

## Q191718: BUG: Error 13 Assigning Variable to UserControl in Same Project

{% raw %}

	Article: Q191718
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive a Type Mismatch Error (13) when assigning a UserControl to a
	variable if the UserControl is in the same project as the assigning code. The
	problem does not occur if the UserControl is in a different project or compiled.
	
	RESOLUTION
	==========
	
	Load the form containing the UserControl before assigning the UserControl to the
	variable. (See step 8 in Steps to Reproduce Behavior below.)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a UserControl to the project.
	
	3. Place an instance of the UserControl on Form1.
	
	4. Add a Standard Module to the project.
	
	5. Insert the following code into Module1:
	
	        Sub Main()
	           Dim x As UserControl1
	           Set x = Form1.UserControl11
	        End Sub
	
	6. Set the Startup Object of the project to Sub Main.
	
	7. Run the project. You should receive "Run-time error 13. Type Mismatch."
	
	8. To resolve the problem, change the code in step 5 to:
	
	        Sub Main()
	           Dim x As UserControl1
	           Load Form1
	           Set x = Form1.UserControl11
	        End Sub
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp600bug kbVBp500bug kbCtrl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q198887: BUG: Incorrect Error Assigning Read-Only Property of UserControl"
permalink: /kb/198/Q198887/
---

## Q198887: BUG: Incorrect Error Assigning Read-Only Property of UserControl

	Article: Q198887
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCtrl kbVBp kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to assign a value to a read-only property of a UserControl
	object, the following error message is displayed. However, the error message is
	incorrect.
	
	  Compile Error: Wrong number of arguments or invalid property assignment.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Microsoft Visual Basic. Form1 is created
	  by default.
	
	2. From the Project menu, select Add User Control to add a UserControl object to
	  the project.
	
	3. Paste the following code into the code window of the UserControl:
	
	     Property Get Test() As Integer
	        Test = 10
	     End Property
	
	4. Close the UserControl design window. This enables the UserControl object on
	  the Toolbox.
	
	5. Add the UserControl object to Form1 by dragging the UserControl object from
	  the Toolbox to Form1.
	
	6. Paste the following code in the declarations section of Form1:
	
	     Private Sub Form_Load()
	        UserControl11.Test = 10
	     End Sub
	
	7. Press the F5 key to run the project.
	
	The following error message is displayed:
	
	  Compile Error: Wrong number of arguments or invalid property assignment.
	
	The expected error message is:
	
	  Compile Error: Can't assign to read-only property.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCtrl kbVBp kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

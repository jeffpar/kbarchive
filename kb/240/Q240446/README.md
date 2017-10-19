---
layout: page
title: "Q240446: BUG: Text Box and Data Control on UserControl Closes It in IDE"
permalink: /kb/240/Q240446/
---

## Q240446: BUG: Text Box and Data Control on UserControl Closes It in IDE

	Article: Q240446
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCtrlCreate kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Standard EXE or UserControl form contains a second UserControl. The second
	UserControl contains a text box and a data control. You close all the forms and
	then open the second UserControl. When you attempt to change the DataSource
	property of the text box in the property window, the UserControl immediately
	closes or an application error occurs that causes Visual Basic to stop
	responding.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new ActiveX control project in Visual Basic. UserControl1 is created
	  by default.
	
	2. Add a second UserControl, UserControl2, to the project.
	
	3. Add a TextBox and a Data Control to UserControl2.
	
	4. Close the design window for UserControl2 and put a UserControl2 into
	  UserControl1.
	
	5. Close all visible design windows.
	
	6. Open UserControl2 and select the TextBox.
	
	7. In the Property window, change the DataSource property to Data1. UserControl2
	  immediately closes or an application error occurs that causes Visual Basic to
	  stop responding.
	
	Additional query words: Container
	
	======================================================================
	Keywords          : kbActiveX kbCtrlCreate kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

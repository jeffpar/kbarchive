---
layout: page
title: "Q150201: BUG: Application Does Not Restore Window from Minimized Icon"
permalink: kb/150/Q150201/
---

## Q150201: BUG: Application Does Not Restore Window from Minimized Icon

	Article: Q150201
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDLL kbVBp kbVBp400bug kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On Windows NT 3.51, forms created with Microsoft Visual Basic do not restore
	their previous window state automatically when ALT+TAB is pressed or the Task
	List is used to activate the application. For instance, they remain minimized.
	However, if two subsequent attempts are made to activate the application by
	pressing ALT+TAB or using the Task List, the application restores its former
	state.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default. To compile
	  the program, from the File menu, choose Make EXE and click OK on the Make EXE
	  dialog box.
	
	2. From File Manager, run the EXE and minimize it. Choose CTRL+ESC to bring up
	  the Task List. Double-click Project1 to activate it. Notice that the icon is
	  minimized. Choose CTRL+ESC again, and double-click on Project1 again. The
	  icon returns to the Normal WindowState.
	
	Additional query words: kbEXE
	
	======================================================================
	Keywords          : kbDLL kbVBp kbVBp400bug kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

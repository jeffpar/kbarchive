---
layout: page
title: "Q191201: BUG: Cannot Edit User Defined Type in Watch Window"
permalink: /kb/191/Q191201/
---

## Q191201: BUG: Cannot Edit User Defined Type in Watch Window

	Article: Q191201
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbcode kbDebug kbVBp600bug
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use the Watch window to modify values for User Defined types,
	you cannot modify the values.
	
	RESOLUTION
	==========
	
	Although a you cannot modify a User Defined type using the Watch window, you can
	modify it by using either of the following options:
	
	- Immediate window
	
	- Locals window
	
	- Modify the variable through code during the execution of the application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following steps have been divided into two parts: creating the test ActiveX
	DLL, and modifying the user defined type in a Standard EXE application.
	
	Creating a Test ActiveX DLL
	---------------------------
	
	1. Start Microsoft Visual Basic and create an ActiveX DLL project. Class1 is
	  created by default.
	
	2. Add the following code to Class1:
	
	        Public Type MyTest
	           x as Integer
	           y as Variant
	        End Type
	
	3. From the Project menu, click Project1 Properties. On the General tab, enter
	  MyServer in the Project Name box, and click OK.
	
	4. From the File menu, click Make MyServer.dll.
	
	5. From the File menu, click Save Project, if desired.
	
	Using the Watch Window
	----------------------
	
	1. From the File Menu, click Add Project, and then double-click on Standard EXE.
	  Form1 is created by default.
	
	2. From the Project menu, click References. In the Available References list,
	  select MyServer and click OK.
	
	3. Add the following code to the Load event of Form1:
	
	     Private Sub Form_Load()
	        Dim f as MyTest, v
	        f.y = f
	        v = f
	        Stop
	     End Sub
	
	4. Press F5 to run the application. Once the application enters debug mode,
	  highlight the "v" in the line of code immediately above the Stop command.
	
	5. From the Debug menu, click Add Watch, and then click OK.
	
	6. In the Watch window, expand the expression "v".
	
	7. Change the Value for "y" to 5. This change is allowed by the Watch window.
	
	8. Attempt to modify the value of "v" to 5 in the Watch window. The change is
	  not allowed.
	
	NOTE: You can change the value of "v" in the Immediate window using the
	expression "v=5". However, once this change occurs, "v" is no longer of type
	MyTest.
	
	REFERENCES
	==========
	
	Microsoft Visual Basic, version 6.0 Books Online
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbDebug kbVBp600bug 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

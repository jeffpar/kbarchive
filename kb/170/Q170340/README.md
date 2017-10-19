---
layout: page
title: "Q170340: FIX: Debugging ActiveX Server in IDE Causes Application Error"
permalink: /kb/170/Q170340/
---

## Q170340: FIX: Debugging ActiveX Server in IDE Causes Application Error

	Article: Q170340
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 10-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When debugging an ActiveX server running in the Visual Basic IDE on Windows NT
	4.0, you may receive the following error when the ActiveX server attempts to
	return control back to the Client application running in a second Visual Basic
	IDE:
	
	  "Step Into: VB5.EXE - Application Error
	  The instruction at <memory address> referenced memory at <memory
	  address>. The memory could not be "read"
	
	RESOLUTION
	==========
	
	To correct this problem, use one of the following methods.
	
	- Install Windows NT Service Pack 2 or later. The system requirements on the
	  Visual Basic Box recommend Service Pack 2 for Windows NT 4.0.
	
	-or-
	
	- Use late binding when creating the ActiveX server object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	This problem was corrected in Windows 2000.
	
	MORE INFORMATION
	================
	
	A common method of debugging ActiveX servers is to run them in one session of
	the Visual Basic IDE while the client runs in a second session of the Visual
	Basic IDE. When using early binding to an ActiveX server on Windows NT 4.0, you
	will receive an APPLICATION ERROR when the ActiveX server tries to return
	control to the client application.
	
	NOTE: This is a problem only if Windows NT Service Pack 2 or later is not
	installed.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX EXE Project.
	
	2. Name the Class "clsTest" (without the quotation marks).
	
	3. Add the following code to the class module:
	
	        Private Sub Class_Initialize()
	           Debug.Print "Class Init"
	        End Sub
	
	4. Click Properties on the Project menu. On the General tab, set the Project
	  name to "pjxTest." On the Make tab, set the Application Title to "pjxTest."
	  On the Component Tab, set the Start Mode to ActiveX Component and click OK.
	
	5. Run the ActiveX server by pressing CTRL+F5 or, from the Run Menu, select
	  Start with Full Compile.
	
	6. Start a second session of Visual Basic and create a Standard EXE project.
	
	7. From the Project Menu, select References. Check "pjxTest" and click OK.
	
	8. Place a CommandButton on Form1.
	
	9. Add the following code to the form:
	
	        Dim obj As pjxTest.clstest
	
	        Private Sub Command1_Click()
	           Set obj = New pjxTest.clstest
	        End Sub
	
	10. From the View Menu, select Toolbars, and make sure the Debug Toolbar is
	  checked.
	
	11. Use the Step Into button on the Debug Toolbar to step through the code. You
	  will get an APPLICATION ERROR when you click the Step Into button and you
	  are on the "End Sub" line in the Class_Initialize Sub of the ActiveX server.
	  Because the APPLICATION ERROR is from the Client, the Client session of
	  Visual Basic will be terminated.
	
	Additional query words: OLE kbAutomation instance
	
	======================================================================
	Keywords          : kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbPTNotAssigned kbZNotKeyword2
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

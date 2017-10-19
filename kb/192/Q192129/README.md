---
layout: page
title: "Q192129: PRB: Run-Time Error '373' or '-2147417848(80010108)'"
permalink: /kb/192/Q192129/
---

## Q192129: PRB: Run-Time Error '373' or '-2147417848(80010108)'

	Article: Q192129
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When passing a form to a public procedure of a compiled UserControl, you receive
	one of the following error messages:
	
	  Run-time error '373': This interaction between compiled and design
	  environment components is not supported.
	
	  -or-
	
	  Run-time error '-2147417848(80010108)': Method 'xxx' failed
	
	The first error is received if running a Visual Basic 6.0 project, the second
	applies to Visual Basic 5.0 projects.
	
	CAUSE
	=====
	
	Forms and controls are private objects to the Visual Basic project that created
	them. Therefore, they should not be passed as parameters to procedures outside
	the project. Although you can work around this error message by adding the
	UserControl project and the test client project to the same project group,
	passing forms and controls outside the project that originally created them may
	have unpredictable side effects and is strongly discouraged.
	
	RESOLUTION
	==========
	
	There are two possible resolutions to avoid this behavior:
	
	- Do not pass forms or controls outside a project.
	
	- Add the UserControl and the client projects to the same project group.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create the UserControl:
	
	1. Create a new UserControl project in Visual Basic, and name it TestCtl.
	
	2. Add a form to the project.
	
	3. Add the following code to the UserControl's code module:
	
	        Public Sub ShowForm(frm As Object)
	           Form1.Show vbModal, frm
	
	        End Sub
	
	4. Compile the project and create TestCtl.ocx.
	
	Create the Test Client Project:
	
	1. Create a Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Add TestCtl.ocx to the ToolBox by selecting Components from the Tools menu
	  and selecting the TestCtl control.
	
	3. Add a TestCtl to Form1.
	
	4. Add a CommandButton (Command1) to Form1.
	
	5. Add the following code to Form1's code module:
	
	        Private Sub Command1_Click()
	           UserControl11.ShowForm Me
	        End Sub
	
	6. Press the F5 key to run the project. When you click Command1, one of the
	  following messages is received:
	
	  Run-time error '373': "This interaction between compiled and design
	  environment components is not supported." for a VB6 project.
	
	  -or-
	
	  Run-time error '-2147417848(80010108)': "Method 'xxx' failed" for a VB5
	  project.
	
	
	Additional query words: kbdss kbDSupport kbVBp kbCtrlCreate kbVBp500 kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

---
layout: page
title: "Q179707: BUG: Pressing TAB Key on Form Does Not Change Focus"
permalink: kb/179/Q179707/
---

## Q179707: BUG: Pressing TAB Key on Form Does Not Change Focus

	Article: Q179707
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 16-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An ActiveX control is created using Visual Basic and compiled into an OCX file.
	The compiled OCX is then referenced in a Visual Basic standard EXE project. When
	the standard EXE project is run in the IDE, tabbing between the controls on the
	form and the ActiveX control results in a beep and the focus does not change.
	This problem occurs after the ActiveX control has shown a modal form.
	
	RESOLUTION
	==========
	
	This problem only occurs when a project in the IDE references the compiled OCX;
	the problem does not occur when the project is made into an EXE.
	
	To work around this problem, create a project group and reference the ActiveX
	control from the ActiveX control project. Reference the compiled version of the
	ActiveX control just before you compile your Visual Basic project.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	This section show you how to create a sample project that demonstrates this
	behavior.
	
	Steps to Create the ActiveX control
	-----------------------------------
	
	1. Start a new ActiveX Control project in Visual Basic. UserControl1 is created
	  by default.
	
	2. Add a textbox to UserControl1.
	
	3. Copy the following code to the Code window of UserControl1:
	
	        Option Explicit
	
	        Private Sub Text1_DblClick()
	           Form1.Show vbModal
	        End Sub
	
	4. Add a form to the ActiveX control project.
	
	5. Add a CommandButton to Form1. Copy the following code to the Code window of
	  Form1:
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	           Unload Me
	        End Sub
	
	6. Change the Project name to "TestControl" and select the File/Make
	  TestControl.ocx menu option to create TestControl.ocx. After creating the
	  control, save and close the project.
	
	You are done creating the ActiveX control. The next section shows you how to
	create the Standard EXE project that uses the ActiveX control you just created.
	
	Steps to Create Standard EXE Project
	------------------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add an MDI Form to the project.
	
	3. Set the MDIChild property of Form1 to True.
	
	4. Reference the ActiveX control you compiled in the previous section by
	  completing the following steps:
	
	  a. From the Project menu, click Components. The Components dialog box
	     displays.
	
	  b. Select the Controls Tab. Check TestControl in the list box.
	
	  c. Click OK to close the Components dialog box.
	
	5. Add two instances of the TestControl ActiveX control to Form1. Position the
	  two ActiveX controls so both controls are visible on the form.
	
	6. On the Run menu, click Start, or press the F5 key to start the program.
	
	  a. Press the Tab key to change the focus between the two controls.
	
	  b. Double-click the text box on one of the TestControl ActiveX controls.
	     Form1 appears. Click the CommandButton to close the form.
	
	  c. Set the focus to one of the TestControl ActiveX controls.
	
	     RESULTS: Pressing the Tab key results in a beep and the focus does not
	     change.
	
	The next section shows how to work around this bug using the projects you created
	in the previous sections.
	
	Workaround
	----------
	
	1. Open the ActiveX control project you used to create the ActiveX control.
	
	2. From the File menu, click Add Project to add a standard EXE project. Form1 is
	  created by default. Set the MDIChild property of Form1 to true.
	
	3. Close the ActiveX control project. Note than an ActiveX control is added to
	  the toolbar.
	
	4. Add two instances of the ActiveX control to Form1. Position the two ActiveX
	  controls so both controls are visible on the form.
	
	5. On the Run menu, click Start or press the F5 key to start the program.
	
	  a. Press the Tab key to change the focus between the two controls.
	
	  b. Double-click the text box on one of the TestControl ActiveX controls. A
	     form is displayed. Click the CommandButton to close the form.
	
	  c. Set the focus to one of the TestControl ActiveX controls.
	
	  You can now tab between the text boxes of both ActiveX controls.
	
	Additional query words: user control kbVBp500bug kbVBp600bug kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

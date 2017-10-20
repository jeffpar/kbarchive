---
layout: page
title: "Q177996: BUG: UserControl Event Is Not Raised from a Modal Form"
permalink: /kb/177/Q177996/
---

## Q177996: BUG: UserControl Event Is Not Raised from a Modal Form

{% raw %}

	Article: Q177996
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrlCreate kbVBp kbVBp500bug kbVBp600bug kbDSupport kbControl
	Last Modified: 16-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an event is raised from a UserControl while a modal form is active, the event
	is not executed.
	
	CAUSE
	=====
	
	The event is not executed if the UserControl is compiled into an OCX and
	referenced from a project that is run in the IDE.
	
	RESOLUTION
	==========
	
	There are two workarounds to this problem:
	
	- Use the compiled ActiveX component (OCX) only with compiled client programs
	  (EXE). In other words, both Visual Basic projects are compiled.
	
	  -or-
	
	- Use both the ActiveX component and the client project in the IDE in a project
	  group. In other words, both Visual Basic projects are in design mode.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The following section shows you how to create a sample project that demonstrates
	this problem. To reproduce this behavior, you first need to create a compiled
	ActiveX control with a custom event. Then you make a reference to this control
	from another project and run that project in the IDE.
	
	Create the ActiveX Control
	--------------------------
	
	1. Start a new ActiveX control project in Visual Basic. UserControl1 is created
	  by default.
	
	2. Add a new form to the project. Add a CommandButton to Form1.
	
	3. Copy the following code to the Code window of UserControl1:
	
	        Option Explicit
	        Private WithEvents MyCommand As CommandButton
	        Event TestEvent()
	
	        Private Sub MyCommand_Click()
	           RaiseEvent TestEvent
	        End Sub
	
	        Private Sub UserControl_Click()
	           Set MyCommand = Form1.Command1
	           Form1.Caption = "UserControl Form"
	           Form1.Show vbModal
	        End Sub
	
	4. Compile UserControl1 into an OCX file. Close all open windows associated with
	  UserControl1.
	
	Create the Sample Project
	-------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Make a reference to the ActiveX control you created in the previous section
	  by completing the following steps:
	
	   - From the Project menu, click Components. The Components dialog box is
	     displayed.
	
	   - Click Browse to open a dialog box that allows you to select the ActiveX
	     component created in the previous section.
	
	   - Click OK to close the dialog boxes.
	
	3. Add the ActiveX control to the Form1 form. Adjust the ActiveX control size to
	  take up most of the form.
	
	4. Copy the following code to the Code window of Form1:
	
	        Option Explicit
	
	        Private Sub UserControl11_TestEvent()
	           MsgBox "In the User control test event"
	        End Sub
	
	5. Press the F5 key to run the project and click on Form1. The UserControl Form
	  appears. Click Command1 and note that the message box indicating the custom
	  event has executed does not appear.
	
	6. Make the project into an EXE and run the EXE. Click Form1. The UserControl
	  Form appears. Click Command1 and note that the message box indicating the
	  custom event has executed does appear.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Arsenio Locsin, Microsoft Corporation
	
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q237286 BUG: Event Does Not Fire in the IDE When Raised from Inside a
	  Compiled Modal Form
	
	Additional query words: user control
	
	======================================================================
	Keywords          : kbCtrlCreate kbVBp kbVBp500bug kbVBp600bug kbDSupport kbControl 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}

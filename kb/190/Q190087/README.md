---
layout: page
title: "Q190087: BUG: Stop a Running Project From Immediate Window Crashes IDE"
permalink: /kb/190/Q190087/
---

## Q190087: BUG: Stop a Running Project From Immediate Window Crashes IDE

{% raw %}

	Article: Q190087
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a Visual Basic project, attempting to create and show a large number of modal
	forms and then stopping the application from running in the IDE will either shut
	down Visual Basic 5.0 automatically or crash it and generate the following
	message:
	
	  VB5 caused a stack fault in module KERNEL32.DLL at 0137:bff725c5.
	
	The crash occurs when you go into break mode, use the Immediate window, and then
	stop the application in IDE.
	
	This error does not occur if the application is run as a compiled EXE.
	
	CAUSE
	=====
	
	Too many modal forms in a Visual Basic project will cause Visual Basic to check
	numerous system message loops and go into an infinite loop, thus creating a
	stack overflow. This may occur due to a low stack space as numerous copies of a
	form are currently loaded modally.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new Standard EXE project in Visual Basic. Form1 is created by Default.
	
	2. Add a CommandButton (Command1) on Form1.
	
	3. Paste the following code in Form1's code module:
	
	        Private Sub Command1_Click()
	           Dim x As Form1
	           Set x = New Form1
	           x.Show vbModal
	        End Sub
	
	4. Press the F5 key to run the project. Click Command1 39 times to create 40
	  modal forms.
	
	5. Press the CTRL+BREAK key combination to pause the project.
	
	6. Press the CTRL+G key combination to bring up the Immediate window.
	
	7. Type ? 1 in the Immediate window, and press the ENTER key.
	
	8. Stop the project from running by clicking the Stop button on the toolbar.
	
	  Note that while Visual Basic is closing all the modal forms, it eventually
	  crashes and either shuts down or generates the following error message:
	
	  VB5 caused a stack fault in module KERNEL32.DLL at 0137:bff725c5
	
	Additional query words: kbDSupport kbVBp500bug kbIDE kbVBp kbdss
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}

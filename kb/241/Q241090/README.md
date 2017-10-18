---
layout: page
title: "Q241090: PRB: Toggling TitleBar Property Off and On Causes Form to Resize"
permalink: kb/241/Q241090/
---

## Q241090: PRB: Toggling TitleBar Property Off and On Causes Form to Resize

	Article: Q241090
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbOOP kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 15-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changing the TitleBar property of a form programmatically causes the Width
	property of the form to be increased by two every time the TitleBar property is
	toggled off and on. This gradually affects the size of the form. The behavior
	occurs at both Development and run time.
	
	RESOLUTION
	==========
	
	To work around this problem, store the initial value of the form before
	attempting to toggle the TitleBar, and replace the value after the toggle:
	
	  nFormWidth = ThisForm.Width          && Saves the current Form Width
	  ThisForm.TitleBar = 0                && Hides the TitleBar
	  ThisForm.TitleBar = 1                && Shows the TitleBar
	  ThisForm.Width = nFormWidth          && Sets back the Form Width to the original value
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual FoxPro, create a new program.
	
	2. Copy and paste the following code into the new program:
	
	  PUBLIC oform1
	
	  oform1=NEWOBJECT("form1")
	  oform1.Show
	  RETURN
	
	  	**************************************************
	
	  DEFINE CLASS form1 AS form
	
	  	Top = 0
	  	Left = 0
	  	DoCreate = .T.
	  	Caption = "TitleBar"
	  	Name = "Form1"
	
	  	ADD OBJECT commandgroup1 AS commandgroup WITH ;
	  		ButtonCount = 4, ;
	  		Value = 1, ;
	  		Height = 151, ;
	  		Left = 133, ;
	  		Top = 49, ;
	  		Width = 119, ;
	  		Name = "Commandgroup1", ;
	  		Command1.Top = 18, ;
	  		Command1.Left = 8, ;
	  		Command1.Height = 27, ;
	  		Command1.Width = 103, ;
	  		Command1.Caption = "Disable TitleBar", ;
	  		Command1.Name = "Command1", ;
	  		Command2.Top = 47, ;
	  		Command2.Left = 8, ;
	  		Command2.Height = 27, ;
	  		Command2.Width = 103, ;
	  		Command2.Caption = "Enable TitleBar", ;
	  		Command2.Name = "Command2", ;
	  		Command3.Top = 76, ;
	  		Command3.Left = 8, ;
	  		Command3.Height = 27, ;
	  		Command3.Width = 103, ;
	  		Command3.Caption = "TitleBar Loop", ;
	  		Command3.Name = "Command3", ;
	  		Command4.Top = 105, ;
	  		Command4.Left = 8, ;
	  		Command4.Height = 27, ;
	  		Command4.Width = 103, ;
	  		Command4.Caption = "Quit", ;
	  		Command4.Name = "Command4"
	
	  	PROCEDURE commandgroup1.Command1.Click
	  		ThisForm.TitleBar = 0
	  	ENDPROC
	
	  	PROCEDURE commandgroup1.Command2.Click
	  		ThisForm.TitleBar = 1
	  	ENDPROC
	
	  	PROCEDURE commandgroup1.Command3.Click
	  		For nLoopVar = 1 to 10
	  			ThisForm.TitleBar = 0
	  			ThisForm.TitleBar = 1
	  		EndFor
	  	ENDPROC
	
	  	PROCEDURE commandgroup1.Command4.Click
	  		ThisForm.Release
	  	ENDPROC
	
	  ENDDEFINE
	
	3. Save and run the program.
	
	Following are two ways to duplicate the behavior:
	
	1. To do this manually, click on the DISABLE TITLEBAR and ENABLE TITLEBAR
	  command buttons.
	
	2. To do this automatically, click on the TITLEBAR LOOP command button.
	
	The difference between the methods is to illustrate that the behavior occurs with
	or without user interaction.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbOOP kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

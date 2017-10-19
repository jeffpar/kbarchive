---
layout: page
title: "Q299746: PRB: F1 Help Does Not Work With Focus on OLEControls"
permalink: /kb/299/Q299746/
---

## Q299746: PRB: F1 Help Does Not Work With Focus on OLEControls

	Article: Q299746
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): kbCtrl kbvfp kbGrpDSFox kbCodeSnippet
	Last Modified: 02-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have focus on an OLEControl on a form and you press F1 to start Help,
	nothing happens.
	
	RESOLUTION
	==========
	
	ON KEY LABEL F1 HELP starts the Help file, even if focus is on an OLEControl.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file.
	
	  *!* Q299746 PRB: F1 Help Doesn't Work With OLEControls
	  loForm = CREATEOBJECT("testForm")
	  loForm.Show(1)
	
	  DEFINE CLASS testForm AS Form
	
	  	Top = 10
	  	Left = 10
	  	Height = 150
	  	Width = 200
	  	
	  	Caption = "OLEControl Help form"
	  	
	  	ADD OBJECT oleTest AS oleControl WITH ;
	  		Top = 10, ;
	  		Left = 10, ;
	  		Height = 120, ;
	  		Width = 80, ;
	  		OLEClass = "MSComctLlib.TreeCtrl", ;
	  		Name = "oleTest"
	  		
	  	ADD OBJECT cmdTest AS commandbutton WITH ;
	  		Top = 50, ;
	  		Left = 100, ;
	  		Caption = "OK", ;
	  		Name = "cmdTest"
	  		
	  	PROCEDURE Init
	  		*!* Replace the file below with an appropriate help file 
	  		*!* for your system.
	  		SET HELP TO d:\vfp3\foxhelp.hlp
	  		
	  		*!* Uncomment the next line for the workaround.
	  		*!* ON KEY LABEL F1 HELP
	  	ENDPROC
	  ENDDEFINE
	
	2. Note that the focus is on the TreeView control and press F1. Nothing happens.
	
	3. Press TAB to move the focus to the command button, and press F1 again. The
	  Help file that you specified in Form.Init starts.
	
	4. Close the form, uncomment the ON KEY LABEL statement in the Init method, and
	  run the program again. This time Help starts no matter which control has the
	  focus.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbvfp kbGrpDSFox kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	

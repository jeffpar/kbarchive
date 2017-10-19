---
layout: page
title: "Q129425: Form Debugging Tips"
permalink: /kb/129/Q129425/
---

## Q129425: Form Debugging Tips

	Article: Q129425
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article gives you tips that can be used with the Debug window to help you
	debug forms.
	
	MORE INFORMATION
	================
	
	THIS and THISFORM Keywords
	--------------------------
	
	The THIS and THISFORM keywords can only be used in a class definition. Because an
	object has been instantiated when a form is running, the THIS and THISFORM
	keywords only reference the form object when a method is executing. You can use
	the form's name to reference it in the Debug window. A generic way to refer to
	the active form is to place the following expression on the left side of the
	Debug window:
	
	     _SCREEN.ACTIVEFORM
	
	The "(object)" word that is presented on the right side of the Debug window will
	signify that an object reference to the form exists.
	
	How to Verify the Method Currently Executing
	--------------------------------------------
	
	To verify the method currently executing, type PROGRAM() in the Debug window. For
	example, if you have defined code for the Load event, the right side of the
	Debug window will read FORM1.LOAD when the Load event is executed.
	
	How to Verify the Name of the Active Control in a Form
	------------------------------------------------------
	
	To verify the name of the active control in a form, type:
	
	       _SCREEN.ACTIVEFORM.ACTIVECONTROL.NAME
	
	This expression returns the name of the member object, such as Command1.
	
	How to Verify the Name of the Container of an Active Control
	------------------------------------------------------------
	
	To verify the name of the container of an active control, type:
	
	     _SCREEN.ACTIVEFORM.ACTIVECONTROL.PARENT.NAME
	
	How to Suspend Execution of the Form
	------------------------------------
	
	You can suspend execution of the form by setting a breakpoint in the Debug
	window. For example, to verify the order in which methods are executed when you
	run a form, you can place PROGRAM() on the left side of the Debug window. This
	function is updated each time a method or the code associated with an event is
	executed. If you set a breakpoint in the Debug window by clicking the center
	bar, the execution of the form will be suspended each time the value returned by
	PROGRAM() is modified.
	
	REFERENCES
	==========
	
	For more information about using the Debug window, search for the "Debug Window"
	topic in the FoxPro Help menu.
	
	Additional query words: VFoxWin trace error current break point breakpoint suspending 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

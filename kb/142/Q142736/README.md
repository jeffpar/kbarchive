---
layout: page
title: "Q142736: PRB: RETRY Command in Method Causes Visual FoxPro to Quit"
permalink: /kb/142/Q142736/
---

## Q142736: PRB: RETRY Command in Method Causes Visual FoxPro to Quit

	Article: Q142736
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An "ON ERROR <object>.<method>" command is used to trap for an
	error. The ON ERROR command calls a method of an object. Inside the method,
	RETRY will trigger a "Mismatched pushjmp/popjmp call" error, which is not listed
	in the Help File. After you click OK, Visual FoxPro quits.
	
	WORKAROUND
	==========
	
	Do not call a method from an ON ERROR command. Call a program file instead.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Add the following code to the form's Load event:
	
	        ON ERROR _Screen.Activeform.Mymethod
	
	3. Create a new method of the form called Mymethod, and type the following code
	  into it:
	
	     PUBLIC obj1
	     obj1=_Screen.Activeform
	     RETRY
	
	4. Place a command button on the form, and enter the following code in its Click
	  event:
	
	     obj1.Caption="Fox"
	
	5. Run the form, and click the command button. The Error "Mismatched'
	  pushjmp/popjmp call" is triggered. Inside the help for the error is the
	  message "The topic does not exist. Contact your application vendor for an
	  updated Help File (129)."
	
	6. Click OK, and Visual FoxPro quits.
	
	Additional query words: VFoxWin crash terminate abort
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

---
layout: page
title: "Q141076: How to Change a Method at Run Time"
permalink: /kb/141/Q141076/
---

## Q141076: How to Change a Method at Run Time

{% raw %}

	Article: Q141076
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	All methods are read-only at run time. You can, however, have several methods
	and decide at run time which method to execute. This article shows you how.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create a new form.
	
	2. Place a command button (Command1) on the form, and add the following code to
	  its Click event:
	
	     lcTemp=ThisForm.gcCurrentclk
	     &lcTemp
	
	3. Place an Option Group on the form, and add the following code to its Click
	  event:
	
	     IF This.Value=1
	       ThisForm.gcCurrentclk="ThisForm.Click1"
	     ELSE
	       ThisForm.gcCurrentclk="ThisForm.Click2"
	     ENDIF
	
	4. Create a new form property called gcCurrentclk, and assign ThisForm.Click1 to
	  gcCurrentclk.
	
	5. Create a new Form method called Click1, and place the following in the
	  Form.Click1 method:
	
	     WAIT WINDOW "Click #1"
	
	6. Create a new method called Click2, and place the following code in the
	  Form.Click2 method:
	
	     WAIT WINDOW "Click #2"
	
	7. Run the form.
	
	The option group determines which Click method for the command button will
	execute.
	
	NOTE: The Click event for the command button does not have to be a method of the
	current form. For example:
	
	  gcCurrentclk="DO myprog.PRG" would execute a program.
	  gcCurrentclk="oMyclass.Click1" would execute a method of an external class.
	  gcCurrentclk="WAIT WINDOW" would execute a wait window.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}

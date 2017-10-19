---
layout: page
title: "Q130526: How to Use the ON ERROR Command and the Error Event"
permalink: /kb/130/Q130526/
---

## Q130526: How to Use the ON ERROR Command and the Error Event

	Article: Q130526
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In version 2.x of FoxPro, the ON ERROR command allowed the developer to code a
	routine to handle errors that occurred while an application was running. This
	functionality is still present in Visual FoxPro. In addition, Visual FoxPro has
	a new error event. This article demonstrates how to use the ON ERROR command and
	the error event in a Visual FoxPro application.
	
	MORE INFORMATION
	================
	
	The error event allows error processing for a specific control, class, or form
	to be encapsulated for that object. The error event overrides any ON ERROR
	routine that is in effect.
	
	An application can contain ON ERROR commands, error events, or a combination of
	both.
	
	Step-by-Step Example
	--------------------
	
	In the following example, there might be an application-wide ON ERROR routine, an
	error event for the form itself, and an error event for the employee ID field
	itself.
	
	The application handles payroll processing. A form in the application allows you
	to input new employees into a table.
	
	1. At the beginning of the main program, add a command to handle generic errors
	  that occur in the application:
	
	     ON ERROR DO errhandler
	
	2. In the form.error event, add code that will execute if the program is unable
	  to open the Employee table in case the system administrator is packing or
	  reindexing the file. The generic ON ERROR routine will be accessed if a
	  different error occurs:
	
	     LPARAMETERS nError, cMethod, nLine
	     * File in use by another error
	     IF nError = 108
	        =MESSAGEBOX("System maintenance is in effect." + ;
	                    "Please try again later")
	     ELSE
	        DO errhandler
	     ENDIF
	
	3. In the Employee ID field, add code to handle a duplicate value plus any other
	  errors that may occur:
	
	     LPARAMETERS nError, cMethod, nLine
	     * Uniqueness of index has been violated
	     IF nError = 1884
	        =MESSAGEBOX("This employee ID already exists on file")
	        =TABLEREVERT()
	     ELSE
	        DO errhandler
	     ENDIF
	
	As an alternative to using the ON ERROR routine, you can define an error event
	within a class. Once the class is instantiated, the error event is available to
	be called within the application. The syntax for calling the class error event
	is:
	
	  oMyObject.Error
	
	Using an error event within a class allows you to encapsulate specific error
	processing within the class. The error event is inherited by any subclasses
	defined from the parent class.
	
	The error event is not inherited or called automatically from any controls or
	objects defined within the class or form. For example, if an error event is
	defined for a form and no error events are coded for individual controls on that
	form, the error event will not be called if an error is encountered in a text
	box or command button on the form. To call the form's error event, code the
	following in each control's error event:
	
	     ThisForm.Error
	
	In this case, an ON ERROR command might be preferable to placing error handling
	code in the error event of the form itself. Then each control would not need to
	include code to invoke error processing.
	
	When an error event is invoked, Visual FoxPro automatically passes the number of
	the error that occurred, the name of the method where the error occurred, and
	the line number of code on which it occurred. This information should be passed
	to an ON ERROR program as parameters by using the ERROR() and PROGRAM()
	functions. As an alternative, the AERROR() function can be used within the
	routine to obtain this information.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	

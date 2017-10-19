---
layout: page
title: "Q194668: PRB: NewObject() Requires Null or &quot;&quot; for 2nd &amp; 3rd Parameters"
permalink: /kb/194/Q194668/
---

## Q194668: PRB: NewObject() Requires Null or &quot;&quot; for 2nd &amp; 3rd Parameters

	Article: Q194668
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600
	Last Modified: 04-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the NewObject() function, leaving any parameters blank while filling
	subsequent parameters results in the following syntax error:
	
	  Program Error.
	  Function argument value, type, or count is invalid.
	
	CAUSE
	=====
	
	Microsoft Visual FoxPro does not allow empty parameters in internal methods and
	functions.
	
	RESOLUTION
	==========
	
	When running the NewObject() function and passing an optional parameter, make
	sure to pass "" or NULL in any optional parameter that precedes the one being
	passed.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This functionality differs from the NewObject method. The NewObject method
	allows for passing empty parameters because Visual FoxPro does allow empty
	parameters when calling iDispatch methods from Component Object Model (COM)
	objects.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code from a program file:
	
	     CLEAR
	     PUBLIC oX
	     ********NewObject Method*************
	     *!* The NewObject method allows blank arguments between those filled.
	     oX = CreateObject('cst1','One')
	     ?oX.cprop
	     oX.NewObject('cst3','cst1',,,'Two') && Works
	     ?oX.cst3.cprop
	
	     ********NewObject Function Used Below***********
	     oX=NewObject('cst1','','','Three')   && Works
	     ?oX.cprop
	     oX=NewObject('cst1',NULL,NULL,'Four') && Works
	     ?oX.cprop
	     oX=NewObject('cst1',,,'Five') && Fails with Syntax error
	     ?oX.cprop
	     *!* NewObject Function errors with blank arguments between those filled.
	     DEFINE CLASS cst1 AS CUSTOM
	        cprop = ''
	        PROCEDURE INIT
	           LPARAMETERS tctest
	           THIS.cprop = tctest
	       ENDPROC
	     ENDDEFINE
	
	Additional query words: kbVFp600 kbOOP
	
	======================================================================
	Keywords          : kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

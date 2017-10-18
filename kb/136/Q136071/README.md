---
layout: page
title: "Q136071: DOC: ON ERROR Not Invoked when Error Occurs in Error Event"
permalink: kb/136/Q136071/
---

## Q136071: DOC: ON ERROR Not Invoked when Error Occurs in Error Event

	Article: Q136071
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbdocerr kbvfp300bBUG kbvfp500aBUG kbvfp500bug
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an error occurs while executing an object's Error event procedure, Visual
	FoxPro suspends execution and displays the error message. Even an ON ERROR
	routine currently in effect is ignored. The Visual FoxPro Help file gives the
	following information about the Error event:
	
	  If a second error occurs in the Error event procedure while it is handling an
	  error, Visual FoxPro calls the ON ERROR routine.
	
	This is incorrect. When an error occurs while executing an object's Error event
	procedure, Visual FoxPro suspends execution and displays the error message. Even
	an ON ERROR routine currently in effect is ignored.
	
	MORE INFORMATION
	================
	
	If code placed in an Error event handler can itself generate an error, place all
	error-handling code within the ON ERROR routine.
	
	An object's Error event procedure is triggered when there is a run-time error in
	a method of that object. Using the Error event allows you to define code to
	handle an error at the object level.
	
	Code to Reproduce Behavior
	--------------------------
	
	     SET PROCEDURE TO SYS(16)
	     ON ERROR DO procerror
	
	     oform1=CREATE('myform')
	     oform1.SHOW
	     read events
	
	     DEFINE CLASS myform AS FORM
	       ADD OBJECT cmd1 AS CommandError
	     ENDDEFINE
	
	     DEFINE CLASS CommandError AS COMMANDBUTTON
	        TOP=5
	        LEFT=10
	        WIDTH=50
	        PROCEDURE CLICK
	           wiat WINDOW     && Error in code. Calls the error event
	        ENDPROC
	
	       PROCEDURE ERROR
	        PARAMETERS x,Y,z,T
	           WAIT WINDOW u    && Another error. Should call the ON ERROR
	        ENDPROC
	     ENDDEFINE
	
	     PROCEDURE procerror
	       WAIT WINDOW "this is an error"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr kbvfp300bBUG kbvfp500aBUG kbvfp500bug 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	
	=============================================================================
	

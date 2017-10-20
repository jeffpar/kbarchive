---
layout: page
title: "Q162084: PRB: Non-Standard RETURN TO MASTER Behavior After LOCATE Error"
permalink: /kb/162/Q162084/
---

## Q162084: PRB: Non-Standard RETURN TO MASTER Behavior After LOCATE Error

{% raw %}

	Article: Q162084
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In an error-handling routine of a sub-program, a RETURN TO MASTER command
	returns processing to the highest level running program.
	
	An error caused by a faulty LOCATE FOR command does not result in a successful
	RETURN TO MASTER until after first returning to the command immediately
	following the line that caused the error.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Copy the following two programs, and paste them into appropriately named program
	(.prg) files:
	
	1. Copy the following into a program named ReturnFail:
	
	     ** Returnfail.prg - demonstrates failure of
	     ** RETURN TO MASTER in a class error method
	     DEFINE CLASS returntest AS custom
	        PROCEDURE init
	           CLEAR
	           USE HOME()+"samples\data\customer"
	           ERROR 12, "MyError"
	           *LOCATE FOR CustHeight="Steve" && No such column in table
	           =MESSAGEBOX("It didn't return to master")
	        ENDPROC
	
	        PROCEDURE error
	           LPARAMTERS  nError, cMethod, nLine
	           =MESSAGEBOX("The error is " + STR(nError,2,0) + ;
	               " in " + cMethod +" method.")
	           RETURN TO MASTER
	        ENDPROC
	     ENDDEFINE
	
	2. Copy the following into a program named TryFail:
	
	     ** Tryfail.prg - program to test the failure of
	     ** RETURN TO MASTER in a class where the error is
	     ** caused by a LOCATE FOR fault.
	     CLEAR
	     CLOSE ALL
	     SET PROCEDURE TO returnfail
	     oRef = CREATEOBJECT("returntest")
	     =MESSAGEBOX("It did return to master")
	
	3. Run TryFail with the command "Do tryfail" (without the quotation marks).
	  Observe that the only message is "It did return to master."
	
	4. Edit the program "ReturnFail" by issuing the following command:
	
	  " MODIFY COMMAND returnfail " (without the quotation marks)
	
	  Find the following two lines of code:
	
	        ERROR 12, "MyError"
	        *LOCATE FOR CustHeight="Steve" && No such column in table
	
	  Remove the asterisk from the second line, and place an asterisk to the left of
	  the first so that the lines look like:
	
	        *ERROR 12, "MyError"
	        LOCATE FOR CustHeight="Steve" && No such column in table
	
	  Save that program.
	
	5. Run tryfail again and observe the second and third messages.
	
	An error caused by the ERROR command causes an error, and the error method
	successfully issues a RETURN TO MASTER command, which successfully returns to
	the highest level running program.
	
	An error caused by a faulty LOCATE FOR command does not result in a successful
	RETURN TO MASTER until after first returning to the command immediately
	following the line that caused the error.
	
	Additional query words: vfoxwin kbdsd
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0
	
	=============================================================================
	

{% endraw %}

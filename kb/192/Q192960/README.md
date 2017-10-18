---
layout: page
title: "Q192960: PRB: Cannot Release Procedure's FXP if Class Definition in PRG"
permalink: kb/192/Q192960/
---

## Q192960: PRB: Cannot Release Procedure's FXP if Class Definition in PRG

	Article: Q192960
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a program file, when using the SET PROCEDURE TO command to call a procedure
	file that has a Class Definition in it, issuing a RELEASE PROCEDURE command in
	the program file will not release the procedure's FXP file even after the
	program has been run. If the procedure file does not have any Class Definition
	in it, RELEASE PROCEDURE will work as expected.
	
	RESOLUTION
	==========
	
	Use the CLEAR ALL command to release the procedure's FXP file.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file named mytest containing following code:
	
	        FUNCTION TestFunction
	
	        o=CREATEOBJECT("cTemp")
	        o.SomeMethod()
	
	        RETURN
	
	        DEFINE CLASS cTemp AS Custom
	
	           FUNCTION SomeMethod(lcText)
	              lcText=IIF(type("lcText")="C",lcText,"HelloWorld")
	              WAIT WINDOW lcText
	           RETURN
	
	        ENDDEFINE
	
	2. In the Command window, run the following commands:
	
	        CLEAR ALL
	        CLOSE ALL
	        CLEAR PROG
	
	        SET PROCEDURE TO mytest
	        ?SET("PROCEDURE")     && The name of the procedure file returned
	        DO TestFunction
	
	        RELEASE PROCEDURE mytest
	        ?SET("PROCEDURE")     && Nothing returned
	
	3. Go to Explorer and find mytest.fxp and try to delete the file. Note that the
	  FXP file cannot be deleted, yet you cannot access either the function in the
	  PRG or the class.
	
	Additional query words: kbDSupport kbDse kbVFp300b kbVFp500a kbVFp500 kbVFp600 kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

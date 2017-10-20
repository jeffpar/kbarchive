---
layout: page
title: "Q189603: INFO: NewObject Command Respects the SET PROCEDURE Command"
permalink: /kb/189/Q189603/
---

## Q189603: INFO: NewObject Command Respects the SET PROCEDURE Command

{% raw %}

	Article: Q189603
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The NewObject function temporarily overrides the SET CLASSLIB and SET PROCEDURE
	commands in order to create an object from a specific class and class library.
	The SET PROCEDURE TO setting is retained, however, during the initialization of
	the NewObject object, in the event that the information in a procedure is
	required.
	
	MORE INFORMATION
	================
	
	In the following example, an object instantiated using the NewObject command
	calls a procedure located in a .prg file:
	
	1. Create a class named ProcTest in a class library name SetProcTest as
	  follows:
	
	  CREATE CLASS ProcTest of SetProcTest as Custom
	
	2. In the Init Event of ProcTest, place the following code and save the class:
	
	        lcValue = InitFunction()
	        MESSAGEBOX(lcValue)
	
	3. Create a procedure called TestProg with the following code:
	
	        PROCEDURE InitFunction
	           RETURN "Hello"
	
	4. In the Command window, issue the following commands:
	
	        SET PROCEDURE to TestProg
	        oProcTest = NEWOBJECT("ProcTest", "SetProcTest")
	
	Although the NewObject function performs its own SET CLASSLIB and SET PROCEDURE
	commands, in order to instantiate an object, the ability to use SET CLASSLIB or
	SET PROCEDURE settings previously invoked allows additional flexibility in this
	command. The SET CLASSLIB and SET PROCEDURE commands remain available to the
	NewObject command and do not have to be re-issued during the instantiation of an
	object.
	
	Additional query words: kbVFp600 kbOOP
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}

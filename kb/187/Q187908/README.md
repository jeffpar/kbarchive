---
layout: page
title: "Q187908: HOWTO: Use COMRETURNERROR() Function in a OLE Server"
permalink: kb/187/Q187908/
---

## Q187908: HOWTO: Use COMRETURNERROR() Function in a OLE Server

	Article: Q187908
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ComReturnError function allows Visual FoxPro 6.0 to make reporting errors
	from the Visual FoxPro OLE Servers easier. This function gives programmers the
	ability to create more meaningful messages to return to the client, instead of
	having the client receive a cryptic message that does not make sense.
	
	MORE INFORMATION
	================
	
	ComReturnError has two parameters, Source and Description. The Source parameter
	is at which place the error occurs in code. You may use the Program function or
	the cMethod parameter in the Error event to populate the Source parameter.
	
	The Description parameter can be anything needed to describe the error. The
	information that you may want to return to the client is the actual error
	message and error number from Visual FoxPro and on which line number that error
	message occurs. The following class is an example of how to use the
	ComReturnError function:
	
	1. Create a program named Test.prg and add the following code:
	
	  
	
	  DEFINE CLASS sampleclass AS CUSTOM OLEPUBLIC
	     NAME = "sampleclass"
	
	     *!* GenError accepts one numeric parameter, which is the error number
	     *!* of the Visual FoxPro (VFP) error to generate.
	     PROCEDURE GenError
	        LPARAMETERS nError
	        
	        *!* This raises the error.
	        ERROR nError
	     ENDPROC
	
	     *!* When the error is generated, it triggers the Error event, which
	     *!* creates a return statement to pass back to the client.
	     PROCEDURE Error
	        LPARAMETERS nError, cMethod, nLine
	        LOCAL lcRetVal
	        
	        lcRetVal = ALLTRIM(STR(nError)) + ": " + MESSAGE() + ;
	           " on Line " + ALLTRIM(STR(nLine)) + ;
	           " in the sample DLL that was created for this article"
	           
	        COMRETURNERROR(cMethod, lcRetVal)
	     ENDPROC
	  ENDDEFINE
	
	2. Create a project and name it MySample. Add the Test.prg file to the project
	  and make sure it is marked as the main file. Save the project and build a COM
	  DLL.
	
	3. Create an object reference to the class, and call the GenError method by
	  issuing the following code in the Command window:
	
	  
	
	        oX = CreateObject('Mysample.sampleclass')
	        oX.generror(1)
	
	An error message dialog box appears with the following message:
	
	  OLE IDispatch error code 120 from generror: 1: File does not exist. On line
	  3..
	
	Once you issue the ComReturnError function, program execution stops there. The
	client is still able to call methods from the object, but any code that occurs
	after the ComReturnError function does not execute.
	
	REFERENCES
	==========
	
	Visual FoxPro 6.0 Help; search on: "ComReturnError"
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by David
	Botzenhart, Microsoft Corporation
	
	
	Additional query words: kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

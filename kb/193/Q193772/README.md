---
layout: page
title: "Q193772: HOWTO: Use the _ShellExecute Foundation Class"
permalink: kb/193/Q193772/
---

## Q193772: HOWTO: Use the _ShellExecute Foundation Class

	Article: Q193772
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to call the _ShellExecute Foundation Class in the
	_Environ Visual Class Library.
	
	MORE INFORMATION
	================
	
	You can use the _ShellExecute Foundation Class in the _Environ Visual Class
	Library to either open or print the file that passed to _ShellExecute. If the
	file is found, or if there was no association with the file, you can test the
	return value for possible reasons why the ShellExecute failed. A return value
	over 32 indicates success.
	
	The following code shows how to print a Microsoft Word 97 document named Test.doc
	in the Word97 directory using the _ShellExecute Foundation Class.
	
	Sample Code
	-----------
	
	     * Start of code *
	     * Program using _ShellExecute class in _Environ library
	     *
	     * Pass in three parameters:
	     *    tcFileName= file to open/print
	     *    tcWorkdir = path to file
	     *        tcOperation = what to do with the file, Open or Print
	     *
	     *  Return:   2  - Bad Association (e.g., invalid URL)
	     *            29 - Failure to load application
	     *            30 - Application is busy
	     *            31 - No application association
	     *
	     *            Values over 32 indicate success
	     *
	     LPARAMETERS tcFileName,tcWorkDir,tcOperation
	     tcFileName = "Test.doc"
	     tcWorkDir = "C:\Word"         && Use appropriate directory here
	     tcOperation = "Print"
	     runapp = NEWOBJECT("_ShellExecute",HOME()+"Ffc\_Environ.vcx")
	     retval=runapp.ShellExecute(tcFileName,tcWorkDir,tcOperation)
	
	     IF retval <= 32
	        =MESSAGEBOX("ShellExecute was unsuccessful.")
	     ENDIF
	     * End of code *
	
	You can also use the _ShellExecute Class to run another application. The
	following example opens Windows Explorer:
	
	Sample Code
	-----------
	
	     * Start of code *
	     * Program using _ShellExecute class in _Environ library
	     tcFileName = "Explorer.exe"
	     tcOperation = "Open"
	     retval=runapp.ShellExecute(tcFileName,tcWorkDir,tcOperation)
	     IF retval <= 32
	        =MESSAGEBOX("ShellExecute was unsuccessful.")
	     ENDIF
	     * End of code *
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q192352 Invoke the "Open With..." Dialog Box Using ShellExecute
	
	Visual FoxPro Help, version 6.0; search on: "Visual FoxPro Foundation Classes";
	Topics: Visual FoxPro Foundation Classes and Foundation Classes
	
	(c) Microsoft Corporation 1998. All Rights Reserved. Contributions by Dean
	Christopher, Microsoft Corporation.
	
	
	Additional query words: kbVFp600 kbFFC
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

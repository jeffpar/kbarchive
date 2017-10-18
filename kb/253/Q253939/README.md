---
layout: page
title: "Q253939: DOC: APPEND PROCEDURES Is Not Available at Run Time"
permalink: kb/253/Q253939/
---

## Q253939: DOC: APPEND PROCEDURES Is Not Available at Run Time

	Article: Q253939
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbdocfix kbDatabase kbvfp600 kbXBase KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for Visual FoxPro 6.0 does not state that the APPEND
	PROCEDURES command is not a supported run-time feature. However, when the APPEND
	PROCEDURES command is used in a compiled .exe file, Visual FoxPro generates an
	error:
	
	  "Feature is not available."
	
	MORE INFORMATION
	================
	
	Workaround
	----------
	
	Beginning with Visual Studio 6.0 Service Pack 3, the Visual FoxPro 6.0 run-time
	library supports the COMPILE command. Using the COMPILE DATABASE and APPEND MEMO
	commands, you are able to reproduce the APPEND PROCEDURE behavior that is
	lacking in the run-time library.
	
	Copy the following code to a .prg file and add that .prg file to a project.
	Compile the project into an .exe file, and run the .exe file:
	
	  #DEFINE vfCRLF CHR(13) + CHR(10)
	  LOCAL cFileName, cProcedure, cHelloWorld2
	  cHelloWorld2 = 'HelloWorld2'
	
	  SET SAFETY OFF
	  CLOSE ALL
	  CREATE DATA AppendProc
	  CREATE TABLE AppendProc (fld1 c(2))
	
	  cFileName = SYS(2015) + ".tmp"
	
	  *!*	Make a text file that will be used for the stored procedure
	  cProcedure = "PROCEDURE HelloWorld2" + vfCRLF + ;
	               "          WAIT WINDOW PROGRAM()" + vfCRLF +;
	               "ENDPROC" + vfcrlf
	  = STRTOFILE(cProcedure, cFileName)
	
	  *!*	This code will allow you to add a stored procedure to the database.
	  *!*	Database must be compiled before running stored procedures 
	  *!*	added with this method.
	  CLOSE DATA ALL
	  USE AppendProc.DBC
	  LOCATE FOR objecttype = "Database" AND objectname = "StoredProceduresSource"
	  IF FOUND()
	  	APPEND MEMO CODE FROM (cFileName)
	  ENDIF
	  USE
	
	  *!*	Compile the database
	  COMPILE DATABASE AppendProc
	  OPEN DATA AppendProc 
	  Do (cHelloWorld2)  && Called as a variable to avoid compile error
	  ERASE (cFileName)
	  CLOSE DATA
	
	Steps to Reproduce Behavior
	---------------------------
	
	Copy the following code to a .prg file and add that .prg file to a project.
	Compile the project into an .exe file and run it:
	
	  #DEFINE vfCRLF CHR(13) + CHR(10)
	  LOCAL cFileName, cProcedure, cHelloWorld1
	  cHelloWorld1 = 'HelloWorld1'
	
	  SET SAFETY OFF
	  CLOSE ALL
	  CREATE DATA AppendProc
	  CREATE TABLE AppendProc (fld1 c(2))
	
	  cFileName = SYS(2015) + ".tmp"
	
	  *!*	Make a text file that will be used for the stored procedure
	  cProcedure = "PROCEDURE HelloWorld1" + vfCRLF + ;
	               "          WAIT WINDOW PROGRAM()" + vfCRLF +;
	               "ENDPROC" + vfcrlf
	  = STRTOFILE(cProcedure, cFileName)
	
	  *!*	This code segment will produce a Run-Time error
	  OPEN DATA AppendProc
	  WAIT WINDOW [In Run-Time, the next command, APPEND PROCEDURE, will display "Feature is not available." error]
	  APPEND PROCEDURES FROM (cFileName) OVERWRITE 
	  ERASE (cFileName)
	  Do (cHelloWorld1)  && Called as a variable to avoid compile error
	  CLOSE DATA
	
	NOTE: Make sure you are not overlapping the Error Message window with other
	Windows applications on your desktop.
	
	REFERENCES
	==========
	
	For more information on APPEND PROCEDURES, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q174916 PRB: APPEND PROCEDURES Causes 'Feature Not Available' in Run Time
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbDatabase kbvfp600 kbXBase KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	
	=============================================================================
	

---
layout: page
title: "Q187909: HOWTO: How to Prevent UI in an Out of Process Server"
permalink: kb/187/Q187909/
---

## Q187909: HOWTO: How to Prevent UI in an Out of Process Server

	Article: Q187909
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In an Out of Process Automation Server, it is possible to display a modal dialog
	box, Messagebox, error message or Wait Window. However, if you distribute the
	server remotely, you do not want to have any user interface display. To prevent
	a server from going into a modal state, issue the SYS(2335,0) function.
	
	MORE INFORMATION
	================
	
	If any type of modal dialog appears in a remote server, the server processing
	stops and the client appears to hang until some type of user interaction handles
	the dialog. To prevent the server from going into a modal state, use the
	SYS(2335,0) function early in the code. This is the "Unattended Server Mode" and
	it causes Visual FoxPro to generate an error if any type of modal user interface
	(UI) is attempted in the server code. The error code is 2031:"User-interface
	operation not allowed at this time", which is a trappable error.
	
	The following code is a sample of how the SYS(2335,0) prevents any UI from
	displaying in an out of process server.
	
	Sample Code
	-----------
	
	     DEFINE CLASS sampclass AS custom OLEPUBLIC
	
	        Name = "sampclass"
	
	        Procedure Init
	           *!* Turn on unattended mode as early as possible.
	           SYS(2335,0)
	        ENDPROC
	
	        PROCEDURE GenDisp
	           *!* Display some type of UI, this could be anything from an error
	           *!* message to a dialog box caused by an ODBC Logon.
	           WAIT WINDOW "test"
	        ENDPROC
	
	        PROCEDURE Error
	           LPARAMETERS nError, cMethod, nLine
	           *!* Trap error and return the error message to client.
	           returnstr = ALLTRIM(STR(nError)) + ': "'+MESSAGE()+'" on Line ' ;
	                       +ALLTRIM(STR(nline))
	           ComReturnError(cMethod,returnstr)
	        ENDPROC
	
	     ENDDEFINE
	
	To build this code, create a project and name it MySample. Copy and paste this
	code into a .prg file and add it to the project. Build the project as an EXE. To
	run the sample code from the Command window, issue the following:
	
	     oX = Createobject("MySample.sampclass")
	     oX.GenDisp()
	
	A Dialog box should display stating the 2031 error number, message, and line
	number where the error occurs.
	
	The SYS(2335) function is only for Out of Process Servers (EXE's); the In Process
	servers (DLL's) are by default in unattended mode and can not display any UI.
	
	REFERENCES
	==========
	
	Visual FoxPro Help; search on: "SYS(2335)"; topic: "SYS(2335)- Unattended Mode"
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by David Botzenhart, Microsoft Corporation
	
	
	Additional query words: kbvfp600
	
	======================================================================
	Keywords          : kbvfp600 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP600
	Version           : WINDOWS:2.5,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

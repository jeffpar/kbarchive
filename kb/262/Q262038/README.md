---
layout: page
title: "Q262038: PRB: COMRETURNERROR Fails if Error Occurs During Server Creation"
permalink: kb/262/Q262038/
---

## Q262038: PRB: COMRETURNERROR Fails if Error Occurs During Server Creation

	Article: Q262038
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Visual FoxPro, you may make use of the COMRETURNERROR()
	function in your Visual FoxPro Component Object Model (COM) servers. However,
	COMRETURNERROR only works from method calls. There is no way that COM can return
	an error during object creation. As a result, you do not get a detailed error
	message if a problem occurs in the INIT of your object and you are using
	COMRETURNERROR only.
	
	CAUSE
	=====
	
	This problem exists because there is no way that COM can return an error during
	object creation.
	
	RESOLUTION
	==========
	
	As a possible workaround for this issue, use an approach similar to the
	following when you develop your COM server:
	
	1. Build this program code into an .exe file named GOOD_SERVER:
	
	  ********* START CODE *****************
	  DEFINE CLASS SERVER AS CUSTOM OLEPUBLIC
	
	        xError = .F.
	
	        PROCEDURE INIT
	            ERROR 21
	            ERROR 22
	            ERROR 23
	            ERROR 24
	        ENDPROC
	
	        PROCEDURE ERROR
	            LPARAMETERS nError, cMethod, nLine
	            #DEFINE CRLF CHR(13) + CHR(10)
	            LOCAL cErrStr, cErrTxtFile
	            cErrTxtFile = ;
	                JUSTPATH(SUBSTR(SYS(16),AT(' ',SYS(16),2))) + "\COMERR.TXT"
	            cErrStr = "Error #: " + TRANS(nError) + CRLF + ;
	            "Method Name: " + cMethod + CRLF + ;
	            "On Line: " + TRANS(nLine) + CRLF + ;
	            "Message: " + MESSAGE() + CRLF + ;
	            "DateTime: " + TTOC(DATETIME()) + CRLF + CRLF
	
	            IF "INIT" $ UPPER(cMethod)
	                STRTOFILE(cErrStr, cErrTxtFile, .T.)
	                THIS.xError = cErrStr
	            ELSE
	                COMRETURNERROR(cMethod, cErrStr)
	            ENDIF
	            ENDPROC
	
	  ENDDEFINE
	  ***************** END CODE ******************
	
	2. Call the server by using the following code:
	
	  ********* START CODE *****************
	  #DEFINE MB_ICONQUESTION   32   && Warning query
	  #DEFINE MB_YESNO           4   && Yes and No buttons
	  #DEFINE IDYES              6   && Yes button pressed
	  #DEFINE CRLF CHR(13) + CHR(10)
	  #DEFINE MB_OK              6   && OK button pressed
	
	  PUBLIC goMyServer
	  LOCAL lcComInitError, lnReleaseCom
	  lcComInitError = ""
	  lnReleaseCom = 0
	
	  goMyServer = CREATEOBJECT("GOOD_SERVER.SERVER")
	  IF  VARTYPE(goMyServer) # "O"
	  	MESSAGEBOX("Create Object Failed!")
	  	RETURN .F.
	  ENDIF
	
	  *!* Text in this property means we had an error (default is logical).
	  IF VARTYPE(goMyServer.xError) = "C"
	  	lcComInitError = goMyServer.xError
	  	lnReleaseCom = MESSAGEBOX("The following error occurred:" + ;
	  		+ CRLF + CRLF + lcComInitError + CRLF + CRLF + ;
	  		"Additional errors may have occurred. Check COMERR.TXT" + CRLF + ;
	  		"in the directory with the object for details. Release the object?", ;
	  		MB_ICONQUESTION  + MB_YESNO, ;
	  		"Error Creating Object - Release It?")
	
	  	IF lnReleaseCom = IDYES
	  		RELEASE goMyServer
	  		MESSAGEBOX("Object Released",MB_OK,"COM ERROR")
	  	ELSE
	  		MESSAGEBOX("Object Remains",MB_OK,"COM ERROR")
	  	ENDIF
	  	RETURN .F.
	  ENDIF
	  *!* If goMyServer.xError is still .F., no INIT error occurred,
	  *!* so do whatever...
	  MESSAGEBOX("Object Created Successfully")
	  RELEASE goMyServer
	  ***************** END CODE ******************
	
	The main issue with this approach is that the error message you get from the
	message box is only the LAST error that occurred in the INIT of the object
	(error 24). To work around this, the object writes any errors out to a file
	named COMERR.TXT that resides in the same directory as the server.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Build the following program into an executable file called BAD_SERVER.
	
	2. Call the server from the Visual FoxPro Command window by running the oX =
	  CREATEOBJECT('BAD_SERVER.SERVER') function.
	
	When you run the CREATEOBJECT() function line, note that you see an error message
	such as this:
	
	  OLE error code 0x800004002: No such interface supported
	
	  ********** START CODE *************
	  DEFINE CLASS SERVER AS CUSTOM OLEPUBLIC
	
	      PROCEDURE INIT
	         *!* Cause an error        
	         ERROR 22
	      ENDPROC
	
	      PROCEDURE ERROR
	          LPARAMETERS nError, cMethod, nLine
	          #DEFINE CR CHR(13)
	          LOCAL cErrStr
	          cErrStr = "Error #: " + TRANS(nError) + CR + ;
	              "Method Name: " + cMethod + CR + ;
	              "On Line: " + TRANS(nLine) + CR + ;
	              "Message: " + MESSAGE()
	
	          COMRETURNERROR(cMethod, cErrStr)
	      ENDPROC
	
	  ENDDEFINE
	  ********** END CODE *************
	
	REFERENCES
	==========
	
	For additional information on the COMRETURNERROR() function, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q187908 HOWTO: Use COMRETURNERROR() Function in a OLE Server
	
	  Q259211 PRB: COMRETURNERROR() Only Works Properly if Error Has Occurred
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Trevor
	Hancock, Microsoft Corporation.
	
	
	Additional query words: 24
	
	======================================================================
	Keywords          : kbCOMt kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

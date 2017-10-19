---
layout: page
title: "Q255683: BUG: The GETOBJECT() Function Fails When Calling a Visual FoxPro"
permalink: /kb/255/Q255683/
---

## Q255683: BUG: The GETOBJECT() Function Fails When Calling a Visual FoxPro

	Article: Q255683
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 17-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The GETOBJECT() function in Visual FoxPro activates an Automation object and
	creates a reference to the object. If the application is already running, you
	can prevent additional instances of the application from starting by omitting
	FileName and including ClassName, as in this example:
	
	  oleApp = GETOBJECT(, "Excel.Application")
	
	This type of approach is also useful when you want to share Component Object
	Model (COM) objects between applications, sharing the object's properties,
	events, or methods (PEMs). For instance, a Microsoft Visual Basic application
	and a Microsoft Visual C++ application could exchange and share data via
	separate connections to the same instance of Microsoft Excel.
	
	While Visual FoxPro allows you to create a COM server, the GETOBJECT() function
	cannot be used to instantiate it. The command fails with the following error
	message when you try:
	
	  OLE error code 0x800401e3: Operation unavailable.
	
	Trying to call a Visual FoxPro COM server from Visual Basic using the Visual
	Basic GETOBJECT() function also results in an error message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To demonstrate this problem, save the following code to a new program in Visual
	FoxPro 6.0 and run it. Please close any open projects, designers, and so forth,
	before doing so. The program programmatically creates and builds a Visual FoxPro
	COM .exe file. It then attempts to instantiate it using the GETOBJECT()
	function.
	
	  **********
	  * Start sample code to reproduce GETOBJECT() problem calling VFP COM .exe
	  *
	  *
	  LOCAL lnFileHand, lnBuildSuccess, lcOldConsole, lcOldSafety
	  SET DEFAULT TO JUSTPATH(SYS(16))
	  *!* Clean up any project files/program files from any previous runs.
	  DELETE FILE GETFOXCOM.*
	  *!* Retain environmental settings for later restoration.
	  lcOldConsole = SET('CONSOLE')
	  SET CONSOLE OFF
	  lcOldSafety = SET('SAFETY')
	  SET SAFETY OFF
	
	  *!* Create the main program with the class definition of the COM server.
	  SET TEXTMERGE TO 'GETFOXCOM.PRG'
	  TEXT
	  	DEFINE CLASS myserver AS CUSTOM OLEPUBLIC
	  		HEIGHT = 69
	  		WIDTH = 172
	  		NAME = "myserver"
	  		NEWPROP = 1
	  	ENDDEFINE
	  ENDTEXT
	  SET TEXTMERGE TO
	
	  *!* Create a project for the server.
	  CREATE PROJECT GETFOXCOM NOWAIT
	  *!* Add the main program.
	  _VFP.ACTIVEPROJECT.FILES.ADD('GETFOXCOM.PRG')
	  *!* Clean up the project.
	  _VFP.ACTIVEPROJECT.CLEANUP()
	  *!* Build a multi-instantiating (default COM .exe), looking for build success.
	  lnBuildSuccess = _VFP.ACTIVEPROJECT.BUILD("GETFOXCOM",3,.T.,.T.)
	
	  IF ! lnBuildSuccess	&& Build failed
	  	WAIT WINDOW "Build Errors"
	  	RETURN .F.
	  ENDIF
	
	  *!* Build success. Test GETOBJECT() on the server.
	  WAIT WINDOW "COM server GETFOXCOM.MYSERVER built successfully" + CHR(13) + ;
	  	"Press Any key to attempt GETOBJECT(, 'GETFOXCOM.MYSERVER')" + CHR(13) + CHR(13) +;
	  	"Click 'IGNORE' on the error to finish the demo."
	
	  *!* The GETOBJECT() call here should produce error message:
	  *!* " OLE error code 0x800401e3: Operation unavailable"
	  oVFPServer1 = CREATEOBJECT("GETFOXCOM.MYSERVER")
	  oVFPServer2 = GETOBJECT(, "GETFOXCOM.MYSERVER")
	
	  *!* Restore environmental settings.
	  SET CONSOLE &lcOldConsole
	  SET SAFETY &lcOldSafety
	  *
	  *
	  ******* END CODE ****************
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Trevor
	Hancock, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

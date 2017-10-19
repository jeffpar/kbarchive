---
layout: page
title: "Q295840: HOWTO: Determine if a Service Exists Using Visual FoxPro"
permalink: /kb/295/Q295840/
---

## Q295840: HOWTO: Determine if a Service Exists Using Visual FoxPro

	Article: Q295840
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 28-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Occasionally, the installation, configuration, or successful execution of a
	custom application written with Visual FoxPro (VFP) is dependent on the
	existence of a particular service. Given a valid computer and service name, the
	code in this article will let you determine if a particular service exists.
	
	MORE INFORMATION
	================
	
	Services are a component of the Microsoft Windows NT and Microsoft Windows 2000
	operating systems. A service is defined as:
	
	  "A program, routine, or process that performs a specific system function to
	  support other programs, particularly at a low (close to the hardware) level."
	
	When executed on a computer running Microsoft Windows NT or Microsoft Windows
	2000, the following VFP code determines if the "IISADMIN" service is present on
	the local computer (regardless of whether it is running or not).
	
	To use this code, follow these steps:
	
	1. Start Visual FoxPro and create a new program.
	
	2. Paste the following code in the program window:
	
	  #DEFINE ThisMachine	SUBSTR(SYS(0),1,ATC(" ",SYS(0))-1)
	
	  ? ServiceExist("IISADMIN",ThisMachine)
	
	  PROCEDURE ServiceExist(lcServiceName, lcMachineName)
	  *~	Prevent this procedure from running
	  *~ 	if we're not on NT/2000.
	  	IF !INLIST(UPPER(OS()),"WINDOWS 5.00","WINDOWS NT 4.00")
	  		RETURN .F.
	  	ENDIF
	
	  	#DEFINE GENERIC_READ	0x80000000
	  	DECLARE INTEGER OpenSCManager IN advapi32.DLL ;
	  		STRING, STRING, INTEGER
	  	DECLARE INTEGER OpenService IN advapi32.DLL ;
	  		INTEGER, STRING, INTEGER
	
	  	LOCAL liSCM, liService
	  	liSCM = OpenSCManager(lcMachineName, NULL, GENERIC_READ)
	  	IF !(liSCM > 0)
	  		RETURN .F.
	  	ENDIF
	  	liService = OpenService(liSCM, lcServiceName, GENERIC_READ)
	
	  	RETURN IIF(liService > 0, .T.,.F.)
	  ENDPROC
	
	3. Save and then run the program.
	
	4. If the IISADMIN service is present on the local computer, a .T. is printed to
	  _SCREEN; if not, a .F. is printed.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Trevor
	Hancock and Mike Stewart, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

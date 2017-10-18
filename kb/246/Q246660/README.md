---
layout: page
title: "Q246660: PRB: Certain Commands &amp; Functions Removed from Visual FoxPro ODB"
permalink: kb/246/Q246660/
---

## Q246660: PRB: Certain Commands &amp; Functions Removed from Visual FoxPro ODB

	Article: Q246660
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbMDAC210
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro (Build 6.00.8281.00), version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some Visual FoxPro commands and functions are no longer available in the Visual
	FoxPro ODBC driver version 6.0.8428 that ships with MDAC version 2.10.
	
	CAUSE
	=====
	
	Microsoft has become aware of a potential security issue involving earlier
	versions of the Microsoft Visual FoxPro ODBC driver. Earlier Visual FoxPro ODBC
	drivers allowed the execution of certain commands and functions that, if used
	maliciously, could remove or damage files. Therefore, the driver no longer
	supports these commands or functions.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Visual FoxPro ODBC driver no longer supports the following commands:
	
	COPY MEMO
	DELETE FILE
	COPY TO
	
	The Visual FoxPro ODBC driver no longer supports the following functions:
	
	FCREATE()
	FWRITE()
	FCHSIZE()
	FPUTS()
	STRTOFILE()
	FCLOSE()
	FOPEN()
	FREAD()
	FSEEK()
	FEOF()
	FFLUSH()
	FGETS()
	
	REFERENCES
	==========
	
	For additional information other security issues involving ODBC drivers , click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q238445 OFF97: Office 97 ODBC Driver Vulnerability Security Update
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbMDAC210 
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbODBCVFP600828100
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

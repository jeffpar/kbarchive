---
layout: page
title: "Q181852: PRB: Program Generates Error 429 on First Reference to RDO"
permalink: kb/181/Q181852/
---

## Q181852: PRB: Program Generates Error 429 on First Reference to RDO

	Article: Q181852
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbRegistry kbVBp kbVBp500 kbVBp600 kbDSupport
	Last Modified: 25-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to run an application using Remote Data Object (RDO), the first line
	of code that references RDO generates error number 429 listed below:
	
	  ActiveX component cannot create object.
	
	CAUSE
	=====
	
	This may be due to a registration problem with the Msrdo20.dll file. This error
	can also be caused by mismatched DLLs. For instance, the application may find
	and use the wrong version of a DLL, such as ODBC32.DLL.
	
	RESOLUTION
	==========
	
	Manually re-register the .dll using the REGSVR32 utility. To do this, select Run
	from the Start menu and enter the following line:
	
	  REGSVR32 c:\winnt\system32\Msrdo20.dll
	
	It may be necessary to include a path to Regsvr32.exe and/or modify the path to
	the Msrdo20.dll file.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q181854 FILE: VB5cli.exe Fixes Visual Basic 5.0 Control Installation Problem
	
	Additional query words: MDAC_typ
	
	======================================================================
	Keywords          : kbRegistry kbVBp kbVBp500 kbVBp600 kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

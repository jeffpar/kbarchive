---
layout: page
title: "Q260369: PRB: Err Msg &quot;Can't Load DLL '?????L?' &quot; Running Deployed App"
permalink: kb/260/Q260369/
---

## Q260369: PRB: Err Msg &quot;Can't Load DLL '?????L?' &quot; Running Deployed App

	Article: Q260369
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbDeployment kbVBp kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you deploy an application that uses the CreateWorkspace method to create an
	Open Database Connectivity (ODBC) WorkSpace, the application raises one of the
	following errors:
	
	  Run-time Error '3633' Can't load DLL "?????L?"
	
	  -or-
	
	  Run-time Error '3633' Can't load DLL "MSRDO20.DLL"
	
	CAUSE
	=====
	
	When the call to CreateWorkspace creates an ODBC WorkSpace, it uses ODBCDirect,
	which is dependent on the Remote Data Objects (RDO) Msrdo20.dll file. Because
	there is no actual Reference to ODBCDirect in the project (just the type of call
	that is made in code), the Package & Deployment Wizard (PDW) does not know
	to include the Msrdo20.dll file.
	
	RESOLUTION
	==========
	
	Add the Msrdo20.dll file to the Package. There are two different methods to
	accomplish this when running the PDW:
	
	1. If you are presented with a DAO Drivers screen, move ODBCDirect over to the
	  Included Drivers column. This includes the Msrdo20.dll file.
	
	2. From the Included Files screen, click the Add button and manually add the
	  Msrdo20.dll file to the Package.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbDeployment kbVBp kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

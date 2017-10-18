---
layout: page
title: "Q269620: PRB: SP_SetAppRole in RDO Causes Error Message"
permalink: kb/269/Q269620/
---

## Q269620: PRB: SP_SetAppRole in RDO Causes Error Message

	Article: Q269620
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbRDO kbGrpDSVBDB kbDSupport
	Last Modified: 26-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the sp_SetAppRole stored procedure in Remote Data Objects (RDO) to
	set the application role for the connection, Microsoft SQL Server returns the
	following error message:
	
	  40002
	  37000: [Microsoft][ODBC SQL Server Driver][SQL Server] Application roles can
	  only be activated at the ad hoc level.
	
	CAUSE
	=====
	
	This error message occurs because a temporary stored procedure has been created
	to run the query.
	
	RESOLUTION
	==========
	
	If you use the rdExecDirect option, RDO uses the SQLExecDirect ODBC API function
	to run the query because no temporary stored procedure is created.
	
	To resolve the problem, add rdExecDirect option to the Execute method call as
	follows:
	
	  rdoConnection.Execute "sp_SetAppRole 'RoleName', 'Password'", rdExecDirect
	
	Additional query words: 40002 37000
	
	======================================================================
	Keywords          : kbRDO kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

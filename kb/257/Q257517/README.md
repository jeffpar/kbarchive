---
layout: page
title: "Q257517: PRB: SQLBulkOperations Returns Function Sequence Error w/Jet 4.0"
permalink: kb/257/Q257517/
---

## Q257517: PRB: SQLBulkOperations Returns Function Sequence Error w/Jet 4.0

	Article: Q257517
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.1,2.5,4.0
	Operating System(s): 
	Keyword(s): kbJET kbMDAC kbODBC kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC210 kbMDAC210SP2 kbMDAC250
	Last Modified: 24-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Access, version 4.0 
	- Microsoft Data Access Components versions 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With the Microsoft Jet 4.0 ODBC driver, a call to the SQLBulkOperations ODBC
	function, when preceded by a call to SQLExtendedFetch, may result in the
	following error:
	
	  DIAG [S1010] [Microsoft][ODBC Driver Manager] Function sequence error (0)
	
	CAUSE
	=====
	
	Earlier versions (3.5x) of the Jet ODBC drivers do not implement
	SQLBulkOperations. If an application uses this function with these versions, the
	ODBC Driver Manager changes the call to SQLSetPos, which does not produce this
	error when preceeded by SQLExtendedFetch.
	
	Because version 4.0 of the Jet driver implements SQLBulkOperations, the call is
	not transformed by the Driver Manager. Instead, it is passed unchanged to the
	driver, which results in the error.
	
	NOTE: The ODBC documentation expressly states that the combination of
	SQLExtendedFetch followed by SQLBulkOperations will result in a function
	sequence error.
	
	RESOLUTION
	==========
	
	Replace the SQLExtendedFetch call with a call to SQLFetchScroll.
	
	MORE INFORMATION
	================
	
	Microsoft Data Access Components (MDAC) version 2.6 and later do not contain the
	following Jet components:
	
	Additional query words: odbcjt32
	
	======================================================================
	Keywords          : kbJET kbMDAC kbODBC kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC210 kbMDAC210SP2 kbMDAC250 kbMDAC250SP1 
	Technology        : kbAudDeveloper kbAccessSearch kbODBCSearch kbMDACSearch kbMDAC210 kbMDAC250 kbODBCAccess400
	Version           : :2.1,2.5,4.0
	Issue type        : kbprb
	
	=============================================================================
	

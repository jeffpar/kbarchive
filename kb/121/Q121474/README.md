---
layout: page
title: "Q121474: BUG: Incorrect Declarations in vbdemo Program"
permalink: /kb/121/Q121474/
---

## Q121474: BUG: Incorrect Declarations in vbdemo Program

	Article: Q121474
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	BUG# ODBCSDK: 2714
	
	SYMPTOMS
	========
	
	The vbdemo program, included with the Open Database Connectivity Software
	Development Kit (ODBC SDK) version 2.0, has incorrect declarations for the
	following functions in odbcor_m.bi and odbcext_m.bi header files: SQLGetData,
	SQLBindCol, SQLColumns, SQLSpecialColumns, SQLStatistics, SQLTables,
	SQLProcedures, SQLProcedureColumns, and SQLPrimaryKeys.
	
	The correct declarations are:
	
	NOTE: The declarations should not wrap over multiple lines in the VB program.
	
	  // ByVal should be removed from rgbValue as below
	  Declare Function SQLBindCol Lib "odbc.dll" (ByVal hstmt&, ByVal
	  icol%, ByVal fCType%, rgbValue As Any, ByVal cbValueMax&, pcbValue&)
	  As Integer
	
	  // Byval should be removed from rgbValue as below
	  Declare Function SQLGetData Lib "odbc.dll" (ByVal hstmt&, ByVal
	  icol%, ByVal fCType%,  rgbValue As Any, ByVal cbValueMax&, pcbValue&)
	  As Integer
	
	  //For SQLColumns, SQLSpecialColumns ,SQLStatistics, SQLTables,
	  // SQLProcedureColumns ,SQLProcedures and SQLPrimaryKeys
	  declarations, the table qualifer,
	  // table name, and other name arguments should be suffixed with a '$'
	  instead of '&', because
	  // strings are being passed.
	
	  Declare Function SQLColumns Lib "odbc.dll" (ByVal hstmt&, ByVal
	  szTblQualifier$, ByVal cbTblQualifier%, ByVal szTblOwner$, ByVal
	  cbTblOwner%, ByVal szTblName$, ByVal cbTblName%, ByVal szColName$,
	  ByVal cbColName%) As Integer
	
	  Declare Function SQLSpecialColumns Lib "odbc.dll" (ByVal hstmt&,
	  ByVal fColType%, ByVal szTblQualifier$, ByVal cbTblQualifier%, ByVal
	  szTblOwner$, ByVal cbTblOwner%, ByVal szTblName$, ByVal cbTblName%,
	  ByVal fScope%, ByVal fNullable%) As Integer
	
	  Declare Function SQLStatistics Lib "odbc.dll" (ByVal hstmt&, ByVal
	  szTblQualifier$, ByVal cbTblQualifier%, ByVal szTblOwner$, ByVal
	  cbTblOwner%, ByVal szTblName$, ByVal cbTblName%, ByVal fUnique%,
	  ByVal fAccuracy%) As Integer
	
	  Declare Function SQLTables Lib "odbc.dll" (ByVal hstmt&, ByVal
	  szTblQualifier$, ByVal cbTblQualifier%, ByVal szTblOwner$, ByVal
	  cbTblOwner%, ByVal szTblName$, ByVal cbTblName%, ByVal szTblType$,
	  ByVal cbTblType%) As Integer
	
	  Declare Function SQLProcedures Lib "odbc.dll" (ByVal hstmt&, ByVal
	  szProcQualifier$, ByVal cbProcQualifier%, ByVal szProcOwner$, ByVal
	  cbProcOwner%, ByVal szProcName$, ByVal cbProcName%) As Integer
	
	  Declare Function SQLProcedureColumns Lib "odbc.dll" (ByVal hstmt&,
	  ByVal szProcQualifier$, ByVal cbProcQualifier%, ByVal szProcOwner$,
	  ByVal cbProcOwner%, ByVal szProcName$, ByVal cbProcName%, ByVal
	  szColName$, ByVal cbColName%) As Integer
	
	  Declare Function SQLPrimaryKeys Lib "odbc.dll" (ByVal hstmt&, ByVal
	  szTblQualifier$, ByVal cbTblQualifier%, ByVal szTblOwner$, ByVal
	  cbTblOwner%, ByVal szTblName$, ByVal cbTblName%) As Integer
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Open Database Connectivity
	Software Development Kit (ODBC SDK) version 2.0. We are researching this problem
	and will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: Windows NT
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	
	=============================================================================
	

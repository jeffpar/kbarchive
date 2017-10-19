---
layout: page
title: "Q202852: FIX: SQLGetData Returns Extra Character For StrLen_or_IndPtr"
permalink: /kb/202/Q202852/
---

## Q202852: FIX: SQLGetData Returns Extra Character For StrLen_or_IndPtr

	Article: Q202852
	Product(s): Open Database Connectivity (ODBC)
	Version(s): Build 2.73.7269,Build 2.73.7283.01,Build 2.73.7283.03,Build 2.73.7356
	Operating System(s): 
	Keyword(s): kbDatabase kbDriver kbMDAC kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC200
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.0, versions Build 2.73.7269, Build 2.73.7283.01, Build 2.73.7283.03, Build 2.73.7356 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using SQLGetData, the StrLen_or_IndPtr is the length of TargetValuePtr + 1. The
	length is including the NULL terminator for the string.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Microsoft's Oracle
	ODBC Driver 2.573.2927 and higher. This driver is available in MDAC 2.0, part
	Visual Studio 6.0, and the latest MDAC version can be downloaded from the
	following Web site:
	
	  http://www.microsoft.com/data
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Use ODBC Test to perform the following steps:
	
	1. Connect to a data source using the driver.
	
	2. Call SQLGetTypeInfo (to create a result set).
	
	3. Call SQLExtendedFetch:
	
	  In:StatementHandle = 0x00301250,
	
	  FetchOrientation = SQL_FETCH_NEXT=1,
	
	  FetchOffset = 1,
	
	  RowCountPtr = 0x0014B348,
	
	  RowStatusArray = 0x0014B378
	
	  Return:   SQL_SUCCESS=0
	
	  Out:  *RowCountPtr = 1,
	
	  *RowStatusArray = 0
	
	4. Call SQLGetData:
	
	  In: Statementhandle = 0x00301250,
	
	  ColumnNumber = 1,
	
	  TargetType = SQL_C_CHAR=1,
	
	  TargetValuePtr = 0x0014BF10,
	
	  BufferLength = 256,
	
	  StrLen_or_IndPtr = 0x0014AD58
	
	  Return:   SQL_SUCCESS=0
	
	  Out: *TargetValuePtr = "LONG RAW",
	
	  *StrLen_or_IndPtr = 9
	
	NOTE: StrLen_or_IndPtr equals nine, yet there are only eight characters in the
	TargetValuePtr.
	
	Expected behavior:
	
	  Out: *TargetValuePtr = "LONG RAW", *StrLen_or_IndPtr = 8
	
	REFERENCES
	==========
	
	The ODBC Test utility can be obtained from the Microsoft Data Access SDK, which
	comes with Visual Studio or can be downloaded from the following Web site:
	
	  http://www.microsoft.com/data
	
	Additional query words: msorcl32.dll
	
	======================================================================
	Keywords          : kbDatabase kbDriver kbMDAC kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC200fix kbMDACNoSweep 
	Technology        : kbAudDeveloper kbODBCSearch kbODBCOracle2737269 kbODBCOracle273728303 kbODBCOracle273728301 kbODBCOracle2737356 kbODBCOracle200Search
	Version           : :Build 2.73.7269,Build 2.73.7283.01,Build 2.73.7283.03,Build 2.73.7356
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

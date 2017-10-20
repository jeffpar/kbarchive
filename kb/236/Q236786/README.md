---
layout: page
title: "Q236786: PRB: &quot;Numeric Value Out of Range&quot; Error Calling GetFieldValue"
permalink: /kb/236/Q236786/
---

## Q236786: PRB: &quot;Numeric Value Out of Range&quot; Error Calling GetFieldValue

{% raw %}

	Article: Q236786
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.1,2.5,2.6,2.7,6.0,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.420
	Operating System(s): 
	Keyword(s): kbfile kbDatabase kbDriver kbMFC kbODBC kbOracle kbVC kbGrpDSVCDB kbGrpDSMDAC kbDSuppor
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.2927, Build 2.573.3513, Build 2.573.3711, Build 2.573.4202, Build 2.573.4403, Build 2.573.5303, Build 2.573.6019, Build 2.573.6526, Build 2.573.7326, Build 2.573.7626, Build 2.573.7713.2 
	- Microsoft Data Access Components versions 2.1, 2.5, 2.6, 2.7 
	- Microsoft Visual C++, 32-bit Editions, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If CRecordset::GetFieldValue() is used on a numeric column to retrieve a value
	from an SQL UNION derived recordset and the Microsoft Oracle ODBC driver is
	used, then the following error message occurs:
	
	  Error in column 1: Numeric value out of range
	  State:22003,Native:0,Origin:[Microsoft][ODBC driver for Oracle]
	
	Following is an example of the code that can cause the error:
	
	  CString strValue;
	  CDatabase db;
	  db.OpenEx("DSN=MSORACLEDSN;PWD=demo;UID=demo", CDatabase::noOdbcDialog);
	
	  CRecordset rs(&db);
	  rs.Open(CRecordset::snapshot, "SELECT field1, field2 FROM table1"
	                            " UNION SELECT field1, field2 FROM table2");
	  rs.GetFieldValue(short(0), strValue);
	
	CAUSE
	=====
	
	The MFC (Microsoft Foundation Classes) CRecordset class gathers information
	about a resultset from the SQLDescribeCol() ODBC function. The SQLDescribeCol()
	function gives the column size for the column, which the CRecordset class then
	uses in the GetFieldValue() function to determine the size of the buffer. In the
	case where the SQL statement uses a UNION with a numeric column,
	SQLDescribeCol() returns 0 (zero) for the column size, which in turn gets sent
	to the SQLGetData() ODBC call that GetFieldValue() performs. As a result, the
	data is truncated because the buffer is not large enough to hold the complete
	number, and therefore, the error occurs.
	
	NOTE: The GetFieldValue() call always add space for the sign and decimal point.
	This call allows smaller numbers to work although numbers that are three digits
	or more cause the error.
	
	RESOLUTION
	==========
	
	To resolve this problem, specify the maximum precision that you need for the
	field. Following are two ways to do this.
	
	1. Create a global function called GetNumericFieldValue() and instead of calling
	  GetFieldValue(), call this new function.
	
	  Here is what the function looks like:
	
	  void GetNumericFieldValue(CRecordset &rs, int nIndex, CString &strValue)
	  {
	      // Special GetFieldValue function for Microsoft Oracle driver to handle UNIONs.
	
	  	nIndex++;
	
	  #ifndef _UNICODE
	  	CString& strData = strValue;
	  #else
	  	CString strProxy;
	  	CString& strData = strProxy;
	  #endif
	  	// Specify max length for buffer - add 3 for null, sign, and decimal.
	  	const int nLen = 38+3;
	  	void* pvData = strData.GetBufferSetLength(nLen);
	
	  	// Now can actually get the data.
	  	long nActualSize = rs.GetData(rs.m_pDatabase, rs.m_hstmt, nIndex,
	  		SQL_C_CHAR, pvData, nLen,
	  		rs.m_rgODBCFieldInfos[nIndex - 1].m_nSQLType);
	
	  	// Handle NULL data separately.
	  	if (nActualSize == SQL_NULL_DATA)
	  	{
	  		// Clear value.
	  		strValue.Empty();
	  	}
	  	else
	  	{
	  		// May need to clean up and call SQLGetData again if necessary.
	  		rs.GetLongCharDataAndCleanup(rs.m_pDatabase, rs.m_hstmt, nIndex,
	  			nActualSize, &pvData, nLen, strData,
	  			rs.m_rgODBCFieldInfos[nIndex - 1].m_nSQLType);
	
	  #ifdef _UNICODE
	  	// Now must convert string to Unicode.
	  	strValue = (LPCSTR)strData.GetBuffer(0);
	  #endif // _UNIOCDE
	  	}
	  }
	
	2. A more elegant approach is to create a new class derived from CRecordset
	  class that contains the fix. You can then place the following code at the top
	  of your .cpp file (you don't have to change any other code where
	  CNumericFixRecordset is a class that has a modified GetFieldValue() function
	  that specifies the maximum precision of the column).
	
	  #define CRecordset CNumericFixRecordset
	
	  Download the self-extracting file Numericfix.exe to get the .h and .cpp files
	  for the CNumericFixRecordset class.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Numericfix.exe
	
	For more information about how to download files from the Microsoft Download
	Center, please see the following Microsoft Web site:
	
	  http://www.microsoft.com/downloads/search.asp
	
	and click How to use the Microsoft Download Center.
	
	Additional query words: Numericfix
	
	======================================================================
	Keywords          : kbfile kbDatabase kbDriver kbMFC kbODBC kbOracle kbVC kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 kbmdac270 
	Technology        : kbVCsearch kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC210 kbMDAC250 kbMDAC260 kbODBCOracle25732927 kbODBCOracle25733513 kbODBCOracle25733711 kbODBCOracle25734202 kbODBCOracle25734403 kbODBCOracle25736526 kbVC600 kbVC32bitSearch kbMDAC270 kbodbcOracle25737626 kbodbcoracle25735303 kbODBCOracle25736019 kbODBCOracle25737326 kbODBCOracle257377132 kbODBCOracle250Search
	Version           : :2.1,2.5,2.6,2.7,6.0,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202,Build 2.573.4403,Build 2.573.5303,Build 2.573.6019,Build 2.573.6526,Build 2.573.7326,Build 2.573.7626,Build 2.573.7713.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

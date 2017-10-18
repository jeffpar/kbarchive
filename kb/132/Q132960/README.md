---
layout: page
title: "Q132960: PRB: Invalid Precision Value Err w/ Character Field Parameters"
permalink: kb/132/Q132960/
---

## Q132960: PRB: Invalid Precision Value Err w/ Character Field Parameters

	Article: Q132960
	Product(s): Microsoft C Compiler
	Version(s): 1.5 1.51 1.52 1.52a 1.52b 2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbDatabase kbMFC kbODBC kbVC
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Parameterizing a recordset using one or more character fields may result in an
	error message similar to the following being returned by an ODBC driver:
	
	  
	
	  Invalid precision value
	  State:S1104,Native:76,Origin:[Microsoft][ODBC dBase Driver]
	
	CAUSE
	=====
	
	If an application does not specify the maximum length of a character field
	parameter in the recordset's DoFieldExchange() function, a default value of 255
	is used. Some data sources have a maximum character field length of less than
	255.
	
	RESOLUTION
	==========
	
	To resolve this issue, include a fourth parameter in the RFX_Text() function
	call equal to the size of the character field that is being bound. For example,
	to bind a parameter to an eight-character field in a database, call the
	RFX_Text() function as follows:
	
	     pFX->SetFieldType(CFieldExchange::param);
	     RFX_Text(pFX, "FIELD1Param", m_strFIELD1Param, 8);
	
	MORE INFORMATION
	================
	
	The exception being thrown is generated in the RFX_Text() function by the
	following code:
	
	     AFX_SQL_SYNC(::SQLBindParameter(pFX->m_hstmt, (UWORD)nField,
	     SQL_PARAM_INPUT, SQL_C_CHAR,
	                 (SWORD)nColumnType,
	                 nMaxLength, 0, pvParam, 0, plLength));
	
	The ODBC Programmer[ASCII 146]s Reference states the following for the
	SQLBindParameter() S1104 error:
	
	  
	
	  S1104 - Invalid precision value The value specified for the argument
	  cbColDef was outside the range of values supported by the data source
	  for a column of the SQL data type specified by the fSqlType argument.
	
	If no nMaxLength is passed into the RFX_Text(), nMaxLength defaults to 255. If
	the data source does not support text fields of 255, the S1104 error occurs. The
	Microsoft dBASE and FoxPro drivers, for example, have a maximum character field
	length of 254. They exhibit the behavior described in this article.
	
	REFERENCES
	==========
	
	For more information, please see SQLBindParameter in the ODBC 2.x Programmer's
	Reference.
	
	Additional query words: kbvc200 kbvc210 kbvc220 kbvc400 kbvc410 kbvc42 kbvc500 kbvc600
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbAudDeveloper kbMFC
	Version           : 1.5 1.51 1.52 1.52a 1.52b 2.0
	Issue type        : kbprb
	
	=============================================================================
	

---
layout: page
title: "Q136653: PRB: SQLGetData w/ SQL_C_BINARY Causes GPF in 16-bit ODBC Test"
permalink: /kb/136/Q136653/
---

## Q136653: PRB: SQLGetData w/ SQL_C_BINARY Causes GPF in 16-bit ODBC Test

{% raw %}

	Article: Q136653
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.10x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.10x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Inside 16-bit ODBC Test, when you call SQLGetData with SQL_C_BINARY on a column
	holding more than 40 bytes and cbValueMax is set to be smaller than the actual
	size of data in the column, the following general protection fault (GPF) will be
	raised:
	
	  ODBCTEST caused a General Protection Fault in module ODBCTEST.EXE at
	  0001:BF33
	
	WORKAROUND
	==========
	
	There are two resolutions for this problem in 16-bit ODBC Test:
	
	1. Specify cbValueMax large enough to get data back by one SQLGetData call.
	
	2. Replace SQL_C_BINARY with SQL_C_CHAR for fCType. The following text is an
	  excerpt from "ODBC 2.0 Programmer's Reference Book," Appendix D. Please refer
	  to this book for more information before you use this method:
	
	  When binary SQL data is converted to character C data, each byte (8 bits) of
	  source data is represented as two ASCII characters. These characters are the
	  ASCII character representation of the number in its hexadecimal form. For
	  example, a binary 00000001 is converted to "01" and a binary 11111111 is
	  converted to "FF".
	
	  The driver always converts individual bytes to pairs of hexadecimal digits and
	  terminates the character string with a null byte. Because of this, if
	  cbValueMax is even and is less than the length of the converted data, the
	  last byte of the rgbValue buffer is not used. (The converted data requires an
	  even number of bytes, the next-to-last byte is a null byte, and the last byte
	  cannot be used.)
	
	You will not have this problem with 32-bit ODBC Test.
	
	MORE INFORMATION
	================
	
	Here are the steps to reproduce the error:
	
	1. "Full Connect" to an ODBC data source;
	
	2. SQLExecuteDirect:
	  create table test(col1 varchar(50))
	
	3. SQLExecuteDirect:
	  insert into test values ('<40 characters>')
	
	4. SQLExecuteDirect:
	  select * from test
	
	5. SQLFetch;
	
	6. SQLGetData(hstmt, icol=1, fCType=SQL_C_BINARY, rgbValue, cbValueMax=10,
	  pcbValue)
	
	Additional query words: 2.10 odbcsdk sql6 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch
	Version           : WINDOWS:2.10x
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

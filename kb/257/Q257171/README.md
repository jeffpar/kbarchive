---
layout: page
title: "Q257171: BUG: Double Brackets in SQL Statement with MFC May Cause Error"
permalink: /kb/257/Q257171/
---

## Q257171: BUG: Double Brackets in SQL Statement with MFC May Cause Error

{% raw %}

	Article: Q257171
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVC kbVC600bug kbVS600bug kbGrpDSVCDB kbDSupport
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An error may occur when, in order to preserve a set of square brackets, you add
	an extra set of brackets to an SQL statement. For example:
	
	  Select * from myview where [[tableA.field1]]
	
	The error that is returned depends on which Open Database Connectivity (ODBC)
	driver is used and on the structure of the SQL statement, but can include a
	syntax error, an invalid table or field name, or a variety of other problems.
	
	CAUSE
	=====
	
	The Microsoft Foundation Classes (MFC) ODBC function CDatabase::ReplaceBrackets
	replaces square brackets in an SQL statement with a driver-dependent quote
	character (SQL_IDENTIFIER_QUOTE_CHAR). The CDatabase::ReplaceBrackets function,
	which is called by the CRecordset::Open function, is used frequently.
	
	When double brackets are replaced with single brackets, the string length changes
	but the CDatabase::ReplaceBrackets function does not make the necessary
	adjustment. The SQL statement that is passed to the driver contains extra
	characters at the end of the string, which can cause errors.
	
	WORKAROUND
	
	Pad the end of your SQL statement with one blank space for each double bracket
	used. For example, in the following statement
	
	  "Select * from myview where [[tableA.field1]]"
	
	place two spaces at the end of the statement:
	
	  "Select * from myview where [[tableA.field1]]  "
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a table in a Microsoft SQL Server database that uses a keyword for a
	  field name (for instance "key"). If the Data Source Name (DSN) setting or
	  connection string has quoted identifiers turned off, double brackets are
	  needed. (Note that this is just an example; there are a number of other
	  situations where double brackets are needed as well.)
	
	2. Create an MFC ODBC application with a recordset based on this new table and
	  make the following call:
	
	  keyRS.Open(AFX_DB_USE_DEFAULT_TYPE, "Select [[key]] from TableA");
	
	  This call produces the following error:
	
	  Invalid object name 'TableAeA'.
	  Statement(s) could not be prepared.
	
	3. Set a breakpoint on the call to the CDatabase::ReplaceBrackets function
	  inside of the CRecordset::BuildSQL function. You will see that before the
	  call, m_strSQL contains the following
	
	  Select [[key]] from TableA 
	
	  whereas after the call returns, m_strSQL contains the following:
	
	  Select [key] from TableAeA
	
	  The CDatabase::ReplaceBrackets function removed the extra set of brackets but
	  didn't correctly terminate the string. The null terminator remains in its
	  original position, which makes the table name invalid.
	
	
	Additional query words: escape character square brace braces
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbVC600bug kbVS600bug kbGrpDSVCDB kbDSupport 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}

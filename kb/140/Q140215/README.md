---
layout: page
title: "Q140215: FIX: Brackets Cause Recordset Update to Fail in SQL Server"
permalink: kb/140/Q140215/
---

## Q140215: FIX: Brackets Cause Recordset Update to Fail in SQL Server

	Article: Q140215
	Product(s): Microsoft C Compiler
	Version(s): 2.0 2.1 2.2
	Operating System(s): 
	Keyword(s): kbprogramming kbDatabase kbMFC kbODBC kbVC
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An MFC ODBC application in Visual C++ 2.x using a Microsoft SQL Server 6.0 data
	source may throw a CDBException when Update() is called to commit an AddNew() or
	Edit() for a recordset opened as snapshot. The following error is displayed in
	the output window of the debugger (DB tracing enabled):
	
	  
	
	  Line 1: Incorrect syntax near '['.
	  State:37000,Native:170,Origin:[Microsoft][ODBC SQL Server Driver]
	  [SQL Server]
	
	CAUSE
	=====
	
	The column name in an RFX function call in DoFieldExchange() needs to be
	enclosed in square brackets if the column name contains spaces or if it is a
	reserved word. These brackets need to be replaced with a driver-specific
	quotation mark before the SQL statement is sent for execution.
	
	The quotation mark used by a particular driver can be retreived by calling
	SQLGetInfo() with the SQL_IDENTIFIER_QUOTE_CHAR argument. A Microsoft Access 2.0
	data source uses a backward quotation mark (`). However, a double quotation mark
	(") and square brackets ([]) are also treated as quotation marks when used in
	this context. SQL Server 6.0 uses double quotation marks ("); square brackets
	([]) will not work.
	
	In the version of MFC that comes with Visual C++ version 2.x,
	CDatabase::ReplaceBrackets() is called while processing CRecordset::Open(). This
	function replaces the square brackets ([]) with the driver-specific quotation
	marks. However, this function is not called during AddNew/Update() or
	Edit/Update(). MFC builds an INSERT or UPDATE statement with column names and
	values when using snapshots. When the SQL statement generated with square
	brackets around field names is sent to SQL Server, the previously mentioned
	syntax error occurs because SQL Server does not recognize square brackets.
	
	
	RESOLUTION
	==========
	
	A simple workaround is to not use brackets around field names. If field names
	need to be enclosed, use the driver-specific quotation mark. For SQL Server,
	manually replace occurences of [field name] with "field name" inside the
	DoFieldExchange() function.
	
	An alternative solution is to prevent the building of SQL statements with a list
	of column names for INSERT and UPDATE calls. This can be done by using dynasets
	instead of snapshots. However, to use dynasets with SQL Server 6.0, you must
	have a unique index. For further discussion of this issue, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q136994 HOWTO: Use Dynasets with Microsoft SQL Server Version 6.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++
	version 4.0.
	
	Additional query words: 3.00 3.10 3.20
	
	======================================================================
	Keywords          : kbprogramming kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbVC220 kbVC200 kbVC210
	Version           : 2.0 2.1 2.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

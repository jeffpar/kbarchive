---
layout: page
title: "Q293653: BUG: Access ODBC Driver Incorrectly Maps Unicode Datatypes"
permalink: /kb/293/Q293653/
---

## Q293653: BUG: Access ODBC Driver Incorrectly Maps Unicode Datatypes

{% raw %}

	Article: Q293653
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbGrpDSVCDB kbDSupport
	Last Modified: 08-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Access, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Client applications that call the ODBC API SQLBindCol() function to bind a
	Unicode data column using SQL_C_DEFAULT will be bound as SQL_C_CHAR. In
	addition, calling the ODBC API SQLDescribeCol() function on the same column will
	return the column's datatype as SQL_VARCHAR.
	
	CAUSE
	=====
	
	The Microsoft Access ODBC driver intentionally maps these Unicode datatypes to
	protect older applications that have been written to use SQL_C_DEFAULT. Mapping
	columns bound with SQL_C_DEFAULT to Unicode datatypes of SQL_WCHAR,
	SQL_WVARCHAR, or SQL_LONGVARCHAR could potentially break older applications.
	
	RESOLUTION
	==========
	
	Applications that require access to extended characters should not bind the
	Unicode datatype columns as SQL_C_DEFAULT. Instead, these programs should bind
	Unicode columns as SQL_WCHAR, SQL_WVARCHAR, or SQL_LONGVARCHAR in order to avoid
	this behavior in the Microsoft Access ODBC driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Please note that the "Text" and "Memo" columns in Microsoft Access version 4.0
	databases are Unicode data fields.
	
	This behavior is not an issue with .mdb files prior to version 4.0.
	
	REFERENCES
	==========
	
	ODBC API Programmer's Reference, MSDN, Platform SDK Documentation.
	
	
	Additional query words: Unicode, ODBC, SQLBindCol
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbGrpDSVCDB kbDSupport 
	Technology        : kbAudDeveloper kbAccessSearch kbODBCSearch kbODBCAccess400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}

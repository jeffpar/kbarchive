---
layout: page
title: "Q156006: FIX: Columns Properties Shows Numeric Codes Under &quot;Data Type&quot;"
permalink: /kb/156/Q156006/
---

## Q156006: FIX: Columns Properties Shows Numeric Codes Under &quot;Data Type&quot;

{% raw %}

	Article: Q156006
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:4.2
	Operating System(s): 
	Keyword(s): kbProgramming kbEEdition kbVC
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Properties for table columns in Data View show numeric codes under Data Type in
	the Column Properties dialog box. The Type field of the same dialog box displays
	the text version of the column type.
	
	CAUSE
	=====
	
	The ODBC API SQLGetTypeInfo returns these numbers. The return code is displayed
	without displaying the constant name for the SQL data type (SQL_CHAR,
	SQL_INTEGER, and so on).
	
	RESOLUTION
	==========
	
	Open the header file Sql.h, which lists the constant names for the SQL data type
	codes, in the MSDEV\include subdirectory. A partial list is given below:
	
	  /* Standard SQL datatypes, using ANSI type numbering */ 
	  #define SQL_CHAR                        1
	  #define SQL_NUMERIC                     2
	  #define SQL_DECIMAL                     3
	  #define SQL_INTEGER                     4
	  #define SQL_SMALLINT                    5
	  #define SQL_FLOAT                       6
	  #define SQL_REAL                        7
	  #define SQL_DOUBLE                      8
	  #define SQL_VARCHAR                     12
	  ..
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual C++ version
	5.0.
	
	MORE INFORMATION
	================
	
	To reproduce the behavior, insert a SQL Server data source connecting to the
	pubs sample database:
	
	1. In the data source pane, open the authors table so that each column name is
	  displayed.
	
	2. Display the properties page, pin it in place, and click the various column
	  names.
	
	Note: The data types are shown as 1, -7, 12, and perhaps others. These are the
	SQL type ids for the various SQL types. The type name is listed elsewhere in the
	properties page. Other tables show the same problem.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming kbEEdition kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : WINDOWS:4.2
	Issue type        : kbbug kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

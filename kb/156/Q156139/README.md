---
layout: page
title: "Q156139: HOWTO: Use the SQL Server DateTime Parameter"
permalink: /kb/156/Q156139/
---

## Q156139: HOWTO: Use the SQL Server DateTime Parameter

{% raw %}

	Article: Q156139
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbProgramming kbDatabase kbEEdition kbMFC kbSQL kbVC420 kbVC500 kbVC600 kbDSup
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you run a SQL Server stored procedure that has a datetime type parameter, you
	need to provide the value in a specific format or you get the following error:
	
	  22008[Microsoft][ODBC SQL Server Driver]Invalid date
	
	Visual C++, Enterprise Edition, version 5.0 can also give "Invalid timestamp"
	error for some combination of date and time formats.
	
	
	MORE INFORMATION
	================
	
	1. Create the following stored procedure in a SQL Server datasource:
	
	     CREATE PROCEDURE GetDateTime @dt datetime AS
	     RETURN
	
	2. Execute the Stored Procedure.
	
	  The "Execute Stored Procedure" window asks for parameters. The following
	  are the only acceptable formats:
	
	     yyyy-mm-dd
	     yyyy-mm-dd hh:mm:ss
	
	  All other formats generate the above error message.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbProgramming kbDatabase kbEEdition kbMFC kbSQL kbVC420 kbVC500 kbVC600 kbDSupport kbGrpDSODBC kbSQLProg 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : winnt:4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}

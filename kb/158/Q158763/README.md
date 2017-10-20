---
layout: page
title: "Q158763: FIX: Server Out of Memory when Inserting into Text/Image Fields"
permalink: /kb/158/Q158763/
---

## Q158763: FIX: Server Out of Memory when Inserting into Text/Image Fields

{% raw %}

	Article: Q158763
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.5,2.65
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 20-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for SQL Server, versions 2.5, 2.65 
	-------------------------------------------------------------------------------
	
	BUG #: 16076 (NT: 6.5)
	
	SYMPTOMS
	========
	
	Using the 32-bit SQL Server Open Database Connectivity (ODBC) driver to insert
	chunks of data into text/image columns with the SQLPutData API may cause error
	701, "There is insufficient memory to execute the query," from SQL Server 6.5.
	
	WORKAROUND
	==========
	
	The amount of data inserted into the image/text field can be increased by
	increasing the amount of memory allocated to SQL Server and the amount of memory
	allocated to the procedure cache.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft ODBC driver
	versions 2.5 and 2.65. This problem has been corrected in the SQL Server ODBC
	driver included with the U.S. Service Pack 2 for Microsoft SQL Server version
	6.5. For more information, contact your primary support provider.
	
	MORE INFORMATION
	================
	
	If your system is configured to the minimal SQL Server configuration of 8 MB of
	memory and 30 percent of memory allocated to the procedure cache, data that is
	over 2 MB in size may exhibit the problem. Data of about 1 MB in size does not
	exhibit any problem.
	
	Additional query words: blob
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbSQLServSearch kbAudDeveloper kbODBCSearch kbODBCSQLServ250 kbODBCSQLServ265
	Version           : :2.5,2.65
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

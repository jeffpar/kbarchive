---
layout: page
title: "Q240104: BUG: Schema Calls to DB2 on OS/400 V4R4 Cause 100% CPU Spin"
permalink: /kb/240/Q240104/
---

## Q240104: BUG: Schema Calls to DB2 on OS/400 V4R4 Cause 100% CPU Spin

{% raw %}

	Article: Q240104
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for DB2, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When calls to retrieve schema information from DB2 on the OS/400 V4R4 are issued
	with IDBSchemaRowset using the Microsoft OLE DB Provider for DB2 or with
	SQLTables using the Microsoft ODBC Driver for DB2, 100 percent CPU utilization
	occurs for that process.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. Obtain PTF SF99104 from IBM and apply it to the OS/400 V4R4.
	
	2. Re-create the packages by checking the Replace existing package option in the
	  CRTPKGW utility. For more information on creating packages using this
	  utility, see the following article in the Microsoft Knowledge Base:
	
	  
	
	  Q216810 Creating Packages for Use with ODBC Driver for DB2 and OLE DB
	  Provider for DB2
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	Service Pack 3.
	
	MORE INFORMATION
	================
	
	If the problem continues after you apply the PTF and replace the existing
	packages, it is recommended that you create a new collection and packages in
	that collection, and use that collection and packages to issue the schema
	calls.
	
	Note: If the provider or driver uses an existing collection and packages, the
	100-percent CPU spin and an Access Violation error in DB2Serv.exe may still
	occur even after you apply the PTF.
	
	Additional query words: AS/400 MVS OS/390 DB2OLEDB MSDB2OLE Mainframe
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbOLEDBSearch kbOLEDBProvDB2400SP2 kbOLEDBProvSearch
	Version           : WINDOWS:4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}

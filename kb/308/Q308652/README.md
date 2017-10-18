---
layout: page
title: "Q308652: IDBSchemaRowset::GetSchema Fails to Return List of Rowsets"
permalink: kb/308/Q308652/
---

## Q308652: IDBSchemaRowset::GetSchema Fails to Return List of Rowsets

	Article: Q308652
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 02-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application that is using the Microsoft OLE DB Provider for DB2 or
	Microsoft ODBC Driver for DB2 calls the GetSchemaRowset command to retrieve a
	list of stored procedures from a host system that is running DB2 UDB for OS/390
	version 6.1, no stored procedures will be listed. The GetSchemaRowset command
	works properly when run against DB2 UDB for OS/390 version 5.1 systems, but not
	6.1.
	
	CAUSE
	=====
	
	DB2 UDB for OS/390 version 5.1 and earlier defined stored procedures by using
	the SYSIBM.SYSPROCEDURES table. In DB2 UDB for OS/390 version 6.1, stored
	procedures are defined in the SYSIBM.SYSROUTINES and SYSIBM.SYSPARMS tables. The
	Microsoft OLEDB Provider for DB2 and Microsoft ODBC Driver for DB2 are not aware
	of this difference and continue to check the SYSIBM.SYSPROCEDURES table when
	they access host systems that are running DB2 UDB for OS/390 version 6.1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Host Integration Server 2000.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

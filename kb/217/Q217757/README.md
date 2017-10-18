---
layout: page
title: "Q217757: INF: Default Schema to be Used with ODBC Driver for DB2 and OLE"
permalink: kb/217/Q217757/
---

## Q217757: INF: Default Schema to be Used with ODBC Driver for DB2 and OLE

	Article: Q217757
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for DB2, version 4.0 SP2 
	- Microsoft ODBC Driver for DB2, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Default Schema is the name of the DB2 collection where the driver or the
	provider looks for catalog information. This is an optional parameter that can
	be specified while configuring ODBC and OLE DB Data Sources for DB2 to restrict
	results sets for popular operations, such as enumerating a list of tables in a
	target collection (for example, ODBC Catalog SQLTables).
	
	If this paramater is not specified (left blank), the driver or the provider uses
	the default values depending on the platform that DB2 is running on. For DB2 (on
	Mainframe), it defaults to SYSIBM, for DB2/400 it defaults to QSYS2, and for UDB
	the default value is SYSCAT.
	
	Retrieving all the tables within these global defaults could be time consuming
	for the driver and the provider, therefore, it is recommended that you specify
	the name of the target collection whenever possible.
	
	Additional query words: AS/400 MVS OS/390
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbOLEDBSearch kbODBCDB2400SP2 kbOLEDBProvDB2400SP2 kbOLEDBProvSearch
	Version           : WINDOWS:4.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	

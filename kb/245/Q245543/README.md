---
layout: page
title: "Q245543: INFO: ODBC Connection Pooling Counters in Performance Monitor"
permalink: kb/245/Q245543/
---

## Q245543: INFO: ODBC Connection Pooling Counters in Performance Monitor

	Article: Q245543
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 3.5,3.7,7.0
	Operating System(s): 
	Keyword(s): kbODBC kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 kbmdac270
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SQL Server version 7.0 
	- Microsoft ODBC Driver for SQL Server, version 3.7 
	- Microsoft Open Database Connectivity, version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ODBC Connection Pooling counters in Performance Monitor keep track of all
	the connections that are from the Connection Pool of the ODBC Driver manager.
	ODBC Connection Pooling does not keep track of the connections that are NOT
	pooled. Also, ODBC Connection Pooling does not keep track of any session that
	you open from an OLEDB consumer.
	
	There are six counters for this ODBC Connection Pooling object in the Performance
	Monitor. To see a detailed description of these counters please refer to the
	Pooling Resource
	(http://msdn.microsoft.com/library/techart/pooling2.htm#pooling2_topic2/)
	article.
	
	MORE INFORMATION
	================
	
	Microsoft ActiveX Data Objects (ADO) is an OLEDB consumer. You can enable
	Session Pooling from a standalone ADO program by keeping a global connection
	open all the time. If you enable Session Pooling in ADO you cannot see any
	activity in the ODBC Connection Pooling counters in the Performance Monitor.
	
	Instead of enabling Session Pooling in ADO, you can enable Connection Pooling if
	and ONLY if you are using the Microsoft OLEDB Provider for ODBC Driver. To
	enable Connection Pooling in ADO, using that particular provider, you must call
	the SQLSetEnvAttr function with the proper parameters.
	
	After enabling Connection Pooling you can see all the activities with ODBC
	Connection Pooling counter in the Performance Monitor.
	
	REFERENCES
	==========
	
	  Q228843 HOWTO: Implement Session Pooling from Visual Basic ADO Program
	
	  Q237844 HOWTO: Enable ODBC Connection Pooling in a Visual Basic ADO
	  Application
	
	Additional query words:
	
	======================================================================
	Keywords          : kbODBC kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 kbmdac270 
	Technology        : kbSQLServSearch kbAudDeveloper kbSQLServ700 kbODBCSearch kbODBCSQLServ370 kbODBC350
	Version           : :3.5,3.7,7.0
	Issue type        : kbinfo
	
	=============================================================================
	

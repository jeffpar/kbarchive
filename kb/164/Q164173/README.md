---
layout: page
title: "Q164173: PRB: No Information Returned for SQLSTATE IM006 from Driver"
permalink: kb/164/Q164173/
---

## Q164173: PRB: No Information Returned for SQLSTATE IM006 from Driver

	Article: Q164173
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	3.00
	
	WINDOWS
	
	kbprg kbinterop kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the database driver's SQLSetConnectAttr function call fails during a
	SQLConnect or a SQLDriverConnect function call, the driver manager returns
	SQL_SUCCESS_WITH_INFO and SQLSTATE IM006. However, no information from the
	database driver is returned on why SQLSetConnectAttr failed. In contrast,
	SQLBrowseConnect returns SQLError along with the error message from the driver.
	
	MORE INFORMATION
	================
	
	When SQLConnect or SQLDriverConnect is called and the database driver has not
	been loaded, the Driver Manager loads the driver and calls SQLAllocHandle. If
	connection attributes were specified, the driver manager then calls
	SQLSetConnectAttr in the driver. However, if the driver's SQLSetConnectAttr
	function fails, the Driver Manager returns SQL_SUCCESS_WITH_INFO and SQLSTATE
	IM006 for the connection function, while the error message from the driver is
	lost.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

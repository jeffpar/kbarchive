---
layout: page
title: "Q150783: INF: Testing ODBC Connectivity to Oracle 7.x"
permalink: kb/150/Q150783/
---

## Q150783: INF: Testing ODBC Connectivity to Oracle 7.x

	Article: Q150783
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	2.00 2.50
	
	WINDOWS
	
	kb3rdparty kbinterop
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When troubleshooting ODBC access to Oracle 7.x RDBMS servers, it may be
	necessary to verify that the underlying SQL*Net and Oracle Protocol Adapters are
	correctly installed. To do this you can use the Oracle supplied utility
	NETTEST.EXE found in the ORAWIN\BIN directory.
	
	Nettest is a simple utility that attempts to only login to the selected server
	using the installed SQL*Net software that is part of the Oracle client. The
	utility will ask for a login name, password, and TNS connect string. If the
	Oracle client is correctly installed, the utility will simply display "Ping
	Successful." If the login was not successful, the user will need to consult with
	their database administrator.
	
	Additional query words: Oracle ping SQLNet
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch
	Version           : WINDOWS:
	
	=============================================================================
	

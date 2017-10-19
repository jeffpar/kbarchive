---
layout: page
title: "Q310663: PRB: SQLBrowseConnect Can't Browse SQL 7.0 Servers from Win9x"
permalink: /kb/310/Q310663/
---

## Q310663: PRB: SQLBrowseConnect Can't Browse SQL 7.0 Servers from Win9x

	Article: Q310663
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.6,2.6 SP1,2.7,2000.80.194
	Operating System(s): 
	Keyword(s): kbGrpDSVCDB kbGrpDSMDAC kbGrpDSODBC
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Data Access Components versions 2.6, 2.6 SP1, 2.7, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 98 Second Edition 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft ODBC Driver for SQL Server 2000, version 2000.80.194 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With Microsoft Data Access Components (MDAC) version 2.6 and later installed on
	the platforms listed above, the SQLBrowseConnect ODBC call enumerates Microsoft
	SQL Server 2000 instances but cannot enumerate Microsoft SQL Server 7.0 servers.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To reproduce this behavior, call SQLBrowseConnect with a Connection String In
	parameter of "Driver={SQL Server}". After the call completes, the Connection
	String Out parameter does not contain any SQL Server 7.0 names in the server
	list.
	
	Additional query words: list servers SQL
	
	======================================================================
	Keywords          : kbGrpDSVCDB kbGrpDSMDAC kbGrpDSODBC 
	Technology        : kbAudDeveloper kbMDACSearch
	Version           : :2.6,2.6 SP1,2.7,2000.80.194
	Issue type        : kbprb
	
	=============================================================================
	

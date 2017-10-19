---
layout: page
title: "Q112513: BUG: SQL Server ODBC Driver Removes Entry From WIN.INI"
permalink: /kb/112/Q112513/
---

## Q112513: BUG: SQL Server ODBC Driver Removes Entry From WIN.INI

	Article: Q112513
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG# ODBCSS: 2834 (1.01.22807)
	
	SYMPTOMS
	========
	
	If an existing data source is reconfigured in such a way that only its name is
	changed using either ODBC Administrator or ODBC icon from Control Panel for the
	SQL Server driver, the corresponding server entry in the WIN.INI entry (for
	non-default network or Network Library) is removed.
	
	For example, assume a data source called MYSOURCE is configured and maps to a SQL
	Server machine called SQLNT1. Also it is using dbmsspx3 net-library. So in the
	ODBC.INI file, the server entry for [MYSOURCE] would be SQLNT1 and the
	corresponding entry in WIN.INI for this would be under SQL Server section as
	follows:
	
	     [SQL Server]
	     SQLNT1=dbmsspx3,SQLNT1
	
	Now if the data source name is changed from MYSOURCE to NEWSRC using ODBC
	Administrator or ODBC icon in the control panel, the above entry for SQLNT1 will
	be removed. This happens even though the server entry in ODBC.INI for the
	[NEWSRC] still points to SQLNT1.
	
	NOTE: In case of default network and net-library, no entry in needed in the
	WIN.INI.
	
	WORKAROUND
	==========
	
	Remove the data source and the add it back again. That will add the entry back
	in WIN.INI.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SQL Server Driver version
	1.01.2807. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.01.2807 Access VB Visual Basic C++
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	
	=============================================================================
	

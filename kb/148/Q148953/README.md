---
layout: page
title: "Q148953: IIS Fails to Connect to Sybase Server"
permalink: /kb/148/Q148953/
---

## Q148953: IIS Fails to Connect to Sybase Server

	Article: Q148953
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to connect to a Sybase Database via an .idc file using the ODBC
	drivers included in Internet Information Server (IIS), you may get the following
	error message:
	
	  Error performing query state=01000, error 1225 Microsoft ODBC SQL Server
	  Driver DBNMPNTW Connection open Create file
	
	  State = 08001 error = 1225 Microsoft ODBC SQL Server Driver unable to
	  connect to data source.
	
	CAUSE
	=====
	
	The current Microsoft ODBC SQL Server Driver is not certified for use against
	Sybase SQL Servers.
	
	For additional information on ODBC drivers, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q137637 : INF: ODBC Connections to Sybase SQL Servers
	
	RESOLUTION
	==========
	
	To correct this problem you need to use a Sybase SQL Server ODBC drivers
	available from other vendors. You can contact Sybase Corporation for drivers
	certified for use against Sybase SQL Servers. Many third party ODBC vendors also
	provide ODBC drivers certified for use against Sybase. Most ODBC driver vendors
	maintain a presence in the ODBC section of the WINEXT forum on CompuServe.
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	

---
layout: page
title: "Q95020: INF: Setting Data Sources for SQL Server Driver on Novell NIK"
permalink: /kb/095/Q95020/
---

## Q95020: INF: Setting Data Sources for SQL Server Driver on Novell NIK

{% raw %}

	Article: Q95020
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To be able to properly access a SQL Server from an ODBC application on Novell
	NIK, the correct net-library and the network name have to be specified.
	Otherwise, you will not be able to connect. Also, there is a danger of breaking
	the existing DB-LIBRARY (db-lib) applications.
	
	MORE INFORMATION
	================
	
	The Microsoft SQL Server Network Integration Kit for Novell NetWare (Novell NIK)
	enables clients to communicate with Microsoft SQL Server and Microsoft Open Data
	Services using the Novell IPX/SPX protocol. It eliminates the need for named
	pipes support software on MS-DOS and Windows-based clients.
	
	For the rest of this article, it is assumed that you are connecting to a SQL
	Server called "Mysqlsvr" from an ODBC application, using Novell NIK. This is
	server should be setup as an ODBC Data Source using the ODBC Administrator
	Utility. Open up the ODBC Administrator, and choose SQL Server from the list of
	installed drivers. Choose Add New Name. In the ODBC SQL Server Setup dialog box,
	type a data source name. Note that a single server can function as multiple ODBC
	Data Sources, because each database in the server can be a data source. So, the
	data source name need not necessarily be the same as the servername.
	
	Choose Add after typing in the data source name. In the resulting dialog box, the
	Network Address field will have a default entry of the form:
	
	  \\data-source-name\pipe\sql\query
	
	This is actually a named pipe name. Because the Novell NIK does not use named
	pipes, this name will not work. Change this so that it contains the actual
	servername. In this example, this field should have "mysqlsvr". The Network
	Library field has a default entry of dbnmp3. This is the net-library if you are
	using named pipes. Change this to read "dbmsspx3". This is the net-library for
	Novell NIK. Choose OK to get back to the initial screen. The addition of the
	data source is now complete.
	
	If this procedure is not done properly, then there is a possibility that the
	existing db-library applications will be unable to connect. Specifically, this
	will happen if the data source name is the same as the servername and the
	changes described above are not made.
	
	Finally, note that if the above procedure is followed correctly, then the
	following changes appear in the ODBC.INI and WIN.INI files. The [Data Sources]
	section of ODBC.INI will have an entry of the form:
	
	  data-source-name=SQL Server
	
	where "data-source-name" is the name of the data source that you added. There
	will be a new section called [data-source-name] containing the location of the
	SQL Server driver and a description of the data source. The [SQLSERVER} section
	of the WIN.INI will contain an entry of the form:
	
	  data-source-name=dbmsspx3,servername
	
	Additional query words: dblib
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}

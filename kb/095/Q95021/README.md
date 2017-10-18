---
layout: page
title: "Q95021: INFO: Connecting to Sybase SQL Server from ODBC Applications"
permalink: kb/095/Q95021/
---

## Q95021: INFO: Connecting to Sybase SQL Server from ODBC Applications

	Article: Q95021
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0,2.0,2.1,2.5,3.0,3.5,3.51; winnt:4.2x,6.0,6.5,7.0; :
	Operating System(s): 
	Keyword(s): kb3rdparty kbDatabase kbODBC kbGrpDSVCDB kbGrpDSMDAC kbSybase
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, versions 1.0, 2.0, 2.1, 2.5, 3.0, 3.5, 3.51 
	- Microsoft SQL Server versions 4.2x, 6.0, 6.5, 7.0 
	- Microsoft SQL Server 2000 (all editions) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article clarifies which Microsoft components can and cannot be used to
	interface with Sybase products. It also provide references to third-party
	vendors who provide products that can be used with Sybase and Microsoft Database
	Server Products.
	
	NOTE: The third-party products discussed in this article are manufactured by
	vendors independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	MORE INFORMATION
	================
	
	This article is divided into the following sections:
	
	1. Background and History
	2. Tabular Data Stream Details
	3. Microsoft Client Access Available to Sybase SQL Servers: DB-Library, ODBC,
	  and OLE DB
	4. Microsoft Client Access Available to Microsoft SQL Servers: DB-Library, ODBC,
	  and OLE DB
	5. Third-Party ODBC Client Support for Non-Windows Platforms That Need to
	  Connect to Microsoft SQL Server and/or Sybase Server Products
	6. Third-Party ODBC Client Support for Sybase Data Servers, MTS, and DTC
	
	1. Background and History
	-------------------------
	
	A number of years ago, there was an agreement between Microsoft and Sybase
	whereby Microsoft provided SQL Server for Microsoft operating systems, and
	Sybase provided versions of SQL Server for all other platforms. The technology
	that was used, by both Microsoft and Sybase, to communicate with SQL Server was
	the Tabular Data Stream (TDS). Both companies developed client-side software
	that could be used to read the TDS, providing data exchange between Microsoft
	versions of SQL Server and those versions of SQL Server developed by Sybase.
	
	The initial product provided by Microsoft targeted the OS/2 and Windows operating
	systems. This early TDS decoding technology was called DB-Library. DB-Library
	was implemented as a Dynamic Link Library (DLL), which could interface between
	an application, an appropriate network library interface, and eventually over
	the network to SQL Server. Applications were initially written using the C
	language.
	
	With the growth of Microsoft Basic and its evolution into Microsoft Visual Basic
	(VB), support was provided by the Vbsql.vbx, a DLL that was specific to Visual
	Basic. DB-Library was limited to use with Microsoft's SQL Server, and so could
	not be used as a standard methodology to work with other data stores.
	
	The limitations of DB-Library eventually lead to the development of the Open
	Database Connectivity (ODBC) Application Programming Interface (API). ODBC was
	developed as an interface to SQL-based data stores. Within the last several
	years, a new API has evolved, based on the Component Object Model (COM), that
	has the ability to work with any data source that can provide information in a
	tabular format. This API is the Object Linking and Embedding Database (OLE DB)
	API.
	
	Each of the three APIs that were developed to support Microsoft SQL Server is
	based on a version of the TDS specification, which was developed to allow a
	client to exchange information with either the Microsoft or Sybase SQL Server.
	
	At one time, both companies shared the same TDS specification. Recently however,
	Microsoft SQL Server and the Sybase products have diverged, and as a result,
	each company has updated or adapted new versions of the TDS to meet the needs of
	their current products. As a result, Microsoft SQL Server and Sybase Data Server
	products do not share a common TDS specification to transfer data between the
	servers.
	
	2. Tabular Data Stream Details
	------------------------------
	
	Applications that use version 4.21a, 6.0, or 6.5 of the Microsoft SQL Server
	client software use version 4.2 of the SQL Server TDS protocol to communicate
	with SQL Server. Applications that use Microsoft SQL Server 7.0 versions of the
	client software use TDS version 7.0.
	
	For additional information regarding Microsoft versions of the TDS specification,
	refer to the SQL Server Books Online. Other Microsoft resources such as the
	Microsoft Knowledge Base and Microsoft Developer Support Network provide more
	current information. These resources are available at the following Web
	addresses:
	
	  http://support.microsoft.com (http://support.microsoft.com)
	
	  http://msdn.microsoft.com (http://msdn.microsoft.com)
	
	Sybase products currently run under the TDS 5.0 specification. For additional
	information regarding the Sybase TDS specification, see the following Web site:
	
	  http://www.sybase.com/downloads/ (http://www.sybase.com/downloads/)
	
	3. Microsoft Client Access to Sybase SQL Server: DB-Library, ODBC, and OLE DB
	-----------------------------------------------------------------------------
	
	Microsoft does not currently provide an ODBC Driver or OLE DB Provider for any
	Sybase product. Microsoft has established a working relationship with Merant,
	which provides both ODBC and OLE DB software components for Sybase Data Servers.
	The Web address for this third-party provider of ODBC and OLE DB components is
	as follows:
	
	  http://www.merant.com/datadirect/products/
	  (http://www.merant.com/datadirect/products/)
	
	Merant provides an ODBC Product matrix at the following Web address:
	
	  http://www.merant.com/products/datadirect/odbc/Connect/techdocs/matrix.asp
	  (http://www.merant.com/products/datadirect/odbc/Connect/techdocs/matrix.asp)
	
	Merant provides a similar type of product matrix for ADO/OLE DB at the following
	address:
	
	  http://www.merant.com/products/datadirect/oledb/Connect/techdocs/matrix.asp
	  (http://www.merant.com/products/datadirect/oledb/Connect/techdocs/matrix.asp)
	
	It is possible that some Microsoft client components may be able to interact with
	Sybase Data Servers that conform to the TDS 4.2 specification. It is important
	to remember, however, that with the exception of the information provided in the
	subsequent paragraphs, Microsoft has not provided supported client access
	technology for Sybase Data Servers.
	
	With older versions of the Microsoft SQL Server ODBC driver, it was possible to
	connect to older versions of Sybase SQL Servers. The following paragraphs
	describe how to set up an ODBC data source for these old drivers to connect to
	older Sybase SQL Servers. If clients are already connecting to the Sybase server
	from Windows DB-Library applications, no extra components are required.
	
	Starting with version 2.00.1912 of the Microsoft SQL Server ODBC Driver (which
	shipped with SQL Server version 4.21a), Microsoft SQL Server drivers are no
	longer certified for use against any Sybase SQL Servers. Driver versions
	1.02.3231 or earlier were certified to run against older versions of Sybase SQL
	Servers, but none of the Microsoft SQL Server ODBC drivers was certified to run
	against System/10 or later Sybase servers. Because all of the Microsoft driver
	versions that were certified for use against Sybase are now obsolete, it is
	recommended that sites wanting to connect ODBC applications to Sybase servers
	contact Sybase or third-party ODBC driver vendors for drivers certified for use
	against Sybase.
	
	The key to Microsoft and Sybase SQL Server connectivity is a module called the
	Network Library (Net-Library). This module consists of two interfaces: one
	interface with the network, and another with the application. The network
	interface is customized to support a particular network, but the application
	interface remains the same. Because ODBC, DB-Library, APT-SQL, APT-Library, and
	so on communicate with the Net-Library, they can be written in a
	network-independent fashion. In particular, the ODBC SQL Server driver can be
	used to connect to either Microsoft or Sybase SQL Servers (on Unix and VMS),
	regardless of the network you are using, as long as there is a Net-Library for
	that network.
	
	To connect to a Sybase SQL Server from an ODBC application, perform the following
	steps:
	
	1. For the remainder of this article, it is assumed that you are connecting to
	  an SQL Server called "Mysqlsvr". This server should be set up as an ODBC Data
	  Source by using the ODBC Administrator utility.
	
	2. In the ODBC Administrator, from the list of installed drivers, click SQL
	  Server, and then click Add New Name.
	
	3. In the ODBC SQL Server Setup dialog box, type a data source name (DSN) and
	  then click Add. Note that a single server can function as multiple ODBC Data
	  Sources, because each database in the server can be a data source. Thus, the
	  data source name does not necessarily have to be the same as the server name.
	
	4. In the resulting dialog box, the Network Address field has a default entry of
	  the form:
	
	  
	
	  \\DATA-SOURCE-NAME\PIPE\SQL\QUERY
	
	  This is actually a named pipe name. Because a Sybase SQL Server on Unix uses
	  sockets rather than named pipes, you must change this name so that it
	  contains the IP address and the port identification number. This is a string
	  of the form "ip_address,port". For example:
	
	  "11.1.14.40,3180" (without the quotation marks)
	
	  For a Sybase SQL Server on VAX, this entry should contain a string of the form
	  "node address,process_id" where "node address" is the DECNet node address of
	  the server, and "process_id" is the process identification number to use for
	  the connection. An example entry is "1.997,141". The "Network Library" field
	  has a default entry of dbnmp3. This is the Net-Library if you are using named
	  pipes. This field should contain the name of the Net-Library that you will
	  need to use, which is dependent on what network you are using. For example,
	  if you are using FTP PCTCP, the Net-Library name is wdbftptc. Note that if
	  you are already connecting to a Sybase SQL Server from an existing Windows
	  db-lib application, you will have the correct Net-Libraries. Click OK to
	  return to the initial screen. The addition of the data source is now
	  complete.
	
	5. The next step is to have the Sybase Database Administrator run the
	  Instcat.sql script file. This file contains SQL statements that create
	  certain stored procedures needed to process ODBC calls. Without these
	  procedures, Microsoft Access will not be able to attach to a SQL Server
	  table, and Visual Basic 2.0 will not be able to function correctly. To run
	  this script file, you must use ISQL. At a Unix command line, or at a DOS
	  prompt, type the following:
	
	  "isql -S<servername> -Usa -P<sa-password>
	  -i<path>\instcat.sql" (without the quotation marks)
	
	  If you are running Sybase SQL Server 4.2, use the Instcat.sql file that is
	  included with the application.
	
	6. Finally, note that if the above procedure is followed correctly, the
	  following changes appear in the Odbc.ini and Win.ini files. The [Data
	  Sources] section of the Odbc.ini file has an entry of the form:
	
	  
	
	  data-source-name=SQL Server
	
	  where "data-source-name" is the name of the data source that you added. There
	  is a new section called "[data-source-name]" that contains the location of
	  the SQL Server driver and a description of the data source. The [SQLSERVER}
	  section of the Win.ini file contains an entry of the form:
	
	  
	
	  data-source-name=<net-library-name>,<network address>
	
	4. Microsoft Client Access to Microsoft SQL Server: DB-Library, ODBC, and OLE DB
	--------------------------------------------------------------------------------
	
	The primary source for Microsoft client access components for Microsoft SQL
	Server is currently provided by means of the Microsoft Data Access Components
	(MDAC). MDAC is an installation package that is available from various Microsoft
	products, and as a download from the Web. It is important to note that MDAC
	products only support Microsoft operating systems. For the latest information
	about MDAC, see the following Web site:
	
	  http://www.microsoft.com/data/ (http://www.microsoft.com/data/)
	
	5. Third-Party ODBC Client Support for Non-Windows Platforms That Need to Connect to Microsoft SQL Server and/or Sybase Server Products
	---------------------------------------------------------------------------------------------------------------------------------------
	
	Microsoft does not provide ODBC Drivers or other data access methods for
	non-Microsoft operating system platforms. Microsoft has established a working
	relationship with Merant, who does provide these software components. For more
	information about these products, refer to Merant's Web site at the following
	address:
	
	  http://www.merant.com/datadirect/products/
	  (http://www.merant.com/datadirect/products/)
	
	For an ODBC Integrator matrix, see this Web address:
	
	  http://www.merant.com/datadirect/products/odbc/integrator/matrixodbc.asp
	  (http://www.merant.com/datadirect/products/odbc/integrator/matrixodbc.asp)
	
	For an ADO/OLE DB Integrator matrix, see this Web address:
	
	  http://www.merant.com/products/datadirect/oledb/Connect/overview.asp
	  (http://www.merant.com/products/datadirect/oledb/Connect/overview.asp)
	
	6. Third-Party ODBC Client Support for Sybase Data Servers, MTS, and DTC
	------------------------------------------------------------------------
	
	Merant provides Microsoft Transaction Server (MTS) support with their DataDirect
	product for ODBC. They are actively working with Microsoft to include Data
	Transaction Coordinator (DTC) support for Sybase Data Server products. Browse
	the Merant Web site for more information about their products that support MTS,
	and for a current status of DTC for Sybase. Merant also makes an Integrator
	product that provides the capability of joining data from various data sources:
	from ODBC data sources, from ADO data sources, or from both sources. There are
	two versions of the Integrator product: one that communicates with ODBC
	applications, and one that communicates with ADO/OLE DB applications.
	
	The ODBC Integrator matrix can be found at this Web address:
	
	  http://www.merant.com/products/datadirect/odbc/integrator/matrixodbc.asp
	
	The ADO Integrator matrix can be found at this Web address:
	
	  http://www.merant.com/products/datadirect/odbc/integrator/matrixoledb.asp
	
	Additional query words: merant dblib odbc connectivity sql
	
	======================================================================
	Keywords          : kb3rdparty kbDatabase kbODBC kbGrpDSVCDB kbGrpDSMDAC kbSybase 
	Technology        : kbSQLServSearch kbAudDeveloper kbSQLServ600 kbSQLServ700 kbSQLServ650 kbSQLServ2000Search kbODBCSearch kbSQLServ420OS2 kbODBC350 kbODBC351 kbODBC300 kbODBC200 kbODBC250 kbODBC210 kbODBC100 kbSQLServ2000
	Version           : WINDOWS:1.0,2.0,2.1,2.5,3.0,3.5,3.51; winnt:4.2x,6.0,6.5,7.0; :
	Issue type        : kbinfo
	
	=============================================================================
	

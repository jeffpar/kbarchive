---
layout: page
title: "Q300382: HOW TO: Create a Database Connection from an ASP Page in IIS"
permalink: /kb/300/Q300382/
---

## Q300382: HOW TO: Create a Database Connection from an ASP Page in IIS

	Article: Q300382
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbAudDeveloper kbHOWTOmaster
	Last Modified: 09-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Requirements
	- Sample Database Connection Strings
	
	   - Microsoft Access
	- Microsoft SQL Server
	- Microsoft Visual FoxPro
	- Oracle
	
	- REFERENCES
	
	SUMMARY
	=======
	
	There are many ways to connect to a database. This step-by-step article provides
	sample connection strings for various types of databases and database
	connections.
	
	Requirements
	------------
	
	The following are the requirements for connecting to a database:
	
	- Active Server Pages (ASP) enabled Internet Information Services (IIS) version
	  5.0 Web server with Microsoft Data Access Components (MDAC) version 2.5 or
	  2.6 (with a Jet database engine)
	
	- Connectivity to a local or remote database
	
	- ASP enabled Microsoft Internet Explorer version 5.0 or later
	
	Sample Database Connection Strings
	----------------------------------
	
	These examples are for demonstration purposes only. You must paste this code in
	your ASP code to make a connection to the specified database. Note that you must
	change elements such as database name, server name, database location, Data
	Source Name (DSN), and so on.
	
	Microsoft Access:
	
	Without DSN
	
	  <%
	  Set Cnn = Server.CreateObject("ADODB.Connection")
	  Cnn.open "DRIVER={Microsoft Access Driver (*.mdb)};DBQ=c:\mydatabase.mdb"
	  %>
	
	OLE DB
	
	  <%
	  Set Cnn = Server.CreateObject("ADODB.Connection")
	  Cnn.open "PROVIDER=MICROSOFT.JET.OLEDB.4.0;DATA SOURCE=c:\mydatabase.mdb"
	  %>
	
	File DSN
	
	  <% Set Cnn = Server.CreateObject("ADODB.Connection")
	  Cnn.open "FILEDSN=ADSN"
	  %>
	
	With DSN and no User ID/Password
	
	  <%
	  Set Conn = Server.CreateObject("ADODB.Connection")
	  Conn.open "DSNname"
	  %>
	
	With DSN and User ID/Password
	
	  <%
	  Set Conn = Server.CreateObject("ADODB.Connection")
	  Conn.open "DSNname","username","password"
	  %>
	
	Without DSN, using a physical path as a reference
	
	  <%
	  Set Conn = Server.CreateObject("ADODB.Connection")
	  DSNtest="DRIVER={Microsoft Access Driver (*.mdb)}; "
	  DSNtest=dsntest & "DBQ=c:\mydatabase.mdb" 
	  Conn.Open DSNtest
	  %>
	
	Without DSN, using Server.MapPath
	
	NOTE: Server.MapPath is the path from the Web server root. By default, this is
	C:\Inetpub\Wwwroot.
	
	  <%
	  Set Conn = Server.CreateObject("ADODB.Connection")
	  DSNtest="DRIVER={Microsoft Access Driver (*.mdb)}; "
	  DSNtest=dsntest & "DBQ=" & Server.MapPath("/databases/mydatabase.mdb")
	  Conn.Open DSNtest
	  %>
	
	Microsoft SQL Server:
	
	OLE DB
	
	  <%
	  Set cnn = Server.CreateObject("ADODB.Connection")
	  cnn.open "PROVIDER=SQLOLEDB;DATA SOURCE=sqlservername;UID=username;PWD=password;DATABASE=mydatabase "
	  %>
	
	With DSN
	
	  <%
	  Set Conn = Server.CreateObject("ADODB.Connection")
	  Conn.open "DSN=MyDSN;UID=user;PWD=password;DATABASE=mydatabase"
	  %>
	
	Without DSN
	
	  <%
	  Set Conn = Server.CreateObject("ADODB.Connection")
	  DSNtest="DRIVER={SQL Server};SERVER=ServerName;UID=USER;PWD=password;DATABASE=mydatabase"
	  Conn.open DSNtest
	  %>
	
	Microsoft Visual FoxPro:
	
	Without DSN
	
	  <%
	  Set Conn = Server.CreateObject("ADODB.Connection")
	  ConnStr= "Driver=Microsoft Visual Foxpro Driver; UID=userID;SourceType=DBC;SourceDB=C:\databases\mydatabase.dbc"
	  Conn.Open ConnStr
	  %>
	
	Oracle:
	
	ODBC with DSN
	
	  <%
	  Set Conn = Server.CreateObject("ADODB.Connection")
	  Conn.cursorlocation=adUseClient   
	  ' requires use of adovbs.inc; numeric value is 3
	  Conn.open "DSN=test;UID=name;PWD=pass"
	  %>
	
	OLE DB
	
	  <%
	  Set Conn = Server.CreateObject("ADODB.Connection")
	  Conn.cursorlocation=adUseClient   
	  ' requires use of adovbs.inc; numeric value is 3
	  DSNTest="Provider=MSDAORA.1;Password=pass;User ID=name;Data Source=data.world"
	  Conn.open DSNtest
	  %>
	
	REFERENCES
	==========
	
	For more information on data types, data connections, or MDAC components, see
	the following Microsoft Web site:
	
	  http://www.microsoft.com/data
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAudDeveloper kbHOWTOmaster 
	Technology        : kbiisSearch
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	

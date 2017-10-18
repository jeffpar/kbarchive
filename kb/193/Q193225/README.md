---
layout: page
title: "Q193225: How to Configure IIS to Connect to Oracle from ASP and ADO"
permalink: kb/193/Q193225/
---

## Q193225: How to Configure IIS to Connect to Oracle from ASP and ADO

	Article: Q193225
	Product(s): Internet Information Server
	Version(s): 2.0,2.1 SP2,4.0,6.0,Build 2.573.2927,Build 2.573.3513
	Operating System(s): 
	Keyword(s): kbDatabase kbOracle kbGrpDSASP kbGrpDSMDAC kbDSupport kbADO210sp2
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Visual Studio 6.0 
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.2927, Build 2.573.3513 
	- ActiveX Data Objects (ADO), versions 2.0, 2.1 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following article includes the recommended Oracle client software versions
	and ODBC driver versions recommended for use with Microsoft Internet Information
	Server (IIS) with Active Server Pages (ASP).
	
	Ensuring that the correct drivers are used and that the appropriate patches from
	Oracle are installed will help create a stable platform for your application.
	
	This article also includes a sample step-by-step guide on how to successfully set
	up an Internet Information Server computer for ASP or ADO connectivity to an
	Oracle Server. It is important to note that the sample setup guide is provided
	as an example and will not apply to every installation of Oracle client
	software. For more detailed assistance, please contact Oracle support.
	
	Recommended Software Versions
	-----------------------------
	
	The recommended software versions for the clients are as follows:
	
	  Microsoft Data Access Components 2.5 with Microsoft ODBC for Oracle driver
	  Msorcl32.dll) version 2.573.4403.0 (or later)
	
	  -or-
	
	  The Microsoft OLEDB Provider for Oracle (msdaora.dll) version 2.50.4403.0 (or
	  later)
	
	The following Oracle software versions (or later) are recommended:
	
	  Oracle Server     7.3.3.0.0  7.3.4.0.0  8.0.3.0.0  8.0.4.0.0
	  -------------     ---------  ---------  ---------  ---------
	  RSF               7.3.3.5.3  7.3.4.2.0  8.0.3.2.3  8.0.4.3.2
	  SQL*Net           2.3.3.0.5  2.3.4.0.4  N/A        N/A
	  Net8              N/A        N/A        8.0.3.0.4  8.0.4.0.3
	
	Oracle updates and patches may be obtained from Oracle Support.
	
	The Microsoft Data Access Components (MDAC) 2.5 installation can be obtained at
	http://www.microsoft.com/data/mdac2.htm.
	
	IMPORTANT: Oracle client software (SQL*Net, Net8) is manufactured by Oracle, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	MORE INFORMATION
	================
	
	The following is a sample step-by-step setup guide to install the necessary
	software for client access to an Oracle database. This sample sets up SQL*Net
	version 2.3.3.0.0 with the required support files version 7.3.3.0.0 on a
	computer running Windows NT 4.0 Server.
	
	NOTE: For optimum results, it is recommended that you perform the following
	configuration on a fresh installation of Windows NT 4.0 (SP3) with Internet
	Information Server also installed.
	
	Installing the Microsoft Data Access Components 2.5
	---------------------------------------------------
	
	If you select Custom installation, make sure that you select the following:
	
	- ODBC Components
	
	- OLE DB Components
	
	- ODBC Driver for Oracle Databases
	
	- OLE DB Provider for Oracle Databases
	
	- Microsoft ActiveX Data Objects
	
	NOTE: The Microsoft Data Access Components 2.5 installation is available at
	http://www.microsoft.com/data/mdac2.htm.
	
	Installing the Oracle required support files and SQL*Net
	--------------------------------------------------------
	
	Active Server Pages uses ActiveX Data Objects (ADO) to communicate to Oracle
	through Open Database Connectivity (ODBC). To enable this connectivity, install
	Oracle's client software on the Web server.
	
	1. From your Oracle software compact disc, run Setup from the root directory.
	
	  NOTE: If you are installing Oracle software from a network drive, you must map
	  a network drive to install the Oracle software.
	
	2. Select Language.
	
	3. Select Installation Directory.
	
	You will be prompted that the install directory path information needs to be
	added to the registry. The Oracle installer will automatically do this for you.
	At this point, Setup will exit and you will have to restart again. Repeat the
	above steps.
	
	1. Select Oracle7 Client Products.
	
	2. Select Application User.
	
	3. When you are prompted to install the Oracle documentation either on your hard
	  disk drive or to read it from the compact disc, choose the appropriate
	  location.
	
	The Oracle client Setup will now copy the files and configure the client
	software.
	
	To connect to an Oracle database using ODBC, you must supply a valid SQL*Net
	connect string. SQL Net Easy Configuration allows you to create an alias that
	you can reference in an ODBC Data Source Name (DSN) to connect to your Oracle
	Server.
	
	Adding a Database Alias
	-----------------------
	
	1. Run SQL*Net Easy Configuration. (Click Start, point to Programs, select
	  Oracle for Windows NT, and then choose SQL Net Easy Configuration.)
	
	2. Select Add Database Alias.
	
	3. Type in a name for the alias (for example, the server name).
	
	4. Select the protocol (most commonly, it will be TCP/IP).
	
	5. Specify the host machicomputerne and the database instance. This is the name
	  of the Oracle Server and the database on that server. If you do not know
	  these values, get them from your Oracle Database Administrator (DBA).
	
	6. Confirm the settings.
	
	7. Select Exit SQL*Net Easy Configuration.
	
	Creating a System DSN
	---------------------
	
	1. On the Web server, from the Control Panel use the 32-Bit ODBC Administrator
	  to add a System DSN.
	
	2. Select Microsoft ODBC for Oracle version 2.573.2927.
	
	3. In the Microsoft ODBC for Oracle dialogue, supply the required information.
	  The user name will be provided by your Oracle DBA and the "Server" is the
	  alias created with SQL Net Easy Configuration.
	
	  Data Source Name : OracleDSN
	  Description      : Oracle Server Test on Server Name (optional)
	  User Name        : <supplied by your Oracle DBA>
	  Server           : <SQL*Net Easy Configuration Alias>
	
	Leave the options set to their default values.
	
	Connecting to the Oracle Server from ASP
	----------------------------------------
	
	You can create an Active Server Page with the following code to test your Oracle
	connection. Please ensure that the connect string has a valid user ID and
	password and that the SQL statement references a valid table.
	
	     <%@ Language=VBScript %>
	     <html>
	     <head>
	     <title>Oracle Test</title>
	     </head>
	     <body>
	     <center>
	     <%
	       Set objConn = Server.CreateObject("ADODB.Connection")
	       objConn.Open "dsn=OracleDSN;uid=userid;pwd=password;"
	
	       Set objRs = objConn.Execute("SELECT * FROM DEMO.EMPLOYEE")
	
	       Response.Write "<table border=1 cellpadding=4>"
	       Response.Write "<tr>"
	
	       For I = 0 To objRS.Fields.Count - 1
	         Response.Write "<td><b>" & objRS(I).Name & "</b></td>"
	       Next
	
	       Response.Write "</tr>"
	
	       Do While Not objRS.EOF
	         Response.Write "<tr>"
	
	         For I = 0 To objRS.Fields.Count - 1
	           Response.Write "<td>" & objRS(I) & "</td>"
	         Next
	
	         Response.Write "</tr>"
	
	         objRS.MoveNext
	       Loop
	
	       Response.Write "</table>"
	
	       objRs.Close
	       objConn.Close
	     %>
	     </center>
	     </body>
	     </html>
	
	For more information regarding Oracle and/or IIS, please see the following
	Microsoft Knowledge Base articles:
	
	  Q189410 : HOWTO: Enable or Disable Connection Pooling in IIS 4.0
	
	  Q178391 : PRB: Oracle TNS: Authentication Service Initialization Error
	
	REFERENCES
	==========
	
	  Q60781 Hardware and Software Third-Party Vendor List, L-P
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbDatabase kbOracle kbGrpDSASP kbGrpDSMDAC kbDSupport kbADO210sp2 
	Technology        : kbVSsearch kbiisSearch kbAudDeveloper kbADOsearch kbADO200 kbADO210sp2 kbiis400 kbODBCSearch kbODBCOracle25732927 kbODBCOracle25733513 kbVS600 kbVS600Search kbODBCOracle250Search
	Version           : :2.0,2.1 SP2,4.0,6.0,Build 2.573.2927,Build 2.573.3513
	Issue type        : kbhowto
	
	=============================================================================
	

---
layout: page
title: "Q245243: HOW TO: Configure ODBC Logging in IIS"
permalink: /kb/245/Q245243/
---

## Q245243: HOW TO: Configure ODBC Logging in IIS

{% raw %}

	Article: Q245243
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 25-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Create a Table
	- Run a SQL Script to Automate Creating the Table
	- Table - Field Format
	- Create a System DSN
	- Configure IIS for ODBC Logging
	- Recommendations for ODBC Logging
	- Troubleshooting
	
	- REFERENCES
	
	SUMMARY
	=======
	
	In Internet Information Server (IIS) 4.0 and Internet Information Services (IIS)
	5.0, you can configure the Open Database Connectivity (ODBC) logging feature to
	allow logging to local Microsoft Access databases or local or remote Microsoft
	SQL Server databases.
	
	Create a Table
	--------------
	
	Create a table in the Microsoft Access or SQL Server database. To do this, either
	follow the steps in the Run a SQL Script to Automate Creating the Table section,
	or create a table manually by using the fields in the Table - Field Format
	section. The default table name is InternetLog on the ODBC Logging Properties
	page in the Internet Services Manager (ISM) Microsoft Management Console (MMC).
	
	NOTE: These steps work for World Wide Web (WWW) or File Transfer Protocol (FTP)
	logging on the Web server.
	
	Run a SQL Script to Automate Creating the Table
	-----------------------------------------------
	
	If you are using a computer that is running SQL Server, you can create the IIS
	ODBC logging table with a Transact-SQL script named Logtemp.sql that is included
	with IIS. To do this, follow these steps:
	
	1. Log on to the server with a user account that has administrative access on
	  the computer that is running SQL Server.
	
	2. Open SQL Server Query Analyzer.
	
	3. On the File menu, click Open.
	
	4. Locate the %Windir%\System32\Inetsrv folder.
	
	5. Click Logtemp.sql, and then click Open.
	
	6. In the first line of the Logtemp.sql script, replace inetlog with
	  "InternetLog" (without the quotation marks).
	
	7. Select the database to create the InternetLog table. By default, the database
	  is Master, but Microsoft does not recommend that you use this database.
	
	8. Click Query, and then click Execute.
	
	Table - Field Format
	--------------------
	
	FieldName: ClientHost
	Data Source/Type: Varchar(255)
	Explanations: Client IP address
	
	FieldName: Username
	Data Source/Type: Varchar(255)
	Explanations: User name for the client. If the page is not
	              password-protected, this is always the anonymous user name.
	
	FieldName: LogTime
	Data Source/Type: Datetime
	Explanations: Date and time that the log entry was created.
	
	FieldName: Service
	Data Source/Type: Varchar(255)
	Explanations: Name of the service. This can be WWW, FTP, or some other name.
	
	FieldName: Machine
	Data Source/Type: Varchar(255)
	Explanations: Server name
	
	FieldName: ServerIP
	Data Source/Type: Varchar(255)
	Explanations: Server IP address.
	
	FieldName: ProcessingTime
	Data Source/Type: Int
	Explanations: Time spent on request processing (in milliseconds).
	
	FieldName: BytesRecvd
	Data Source/Type: Int
	Explanations: Number of bytes received.
	
	FieldName: BytesSent
	Data Source/Type: Int
	Explanations: Number of bytes sent.
	
	FieldName: ServiceStatus
	Data Source/Type: Int
	Explanations: Service status, such as 200.
	
	FieldName: Win32Status
	Data Source/Type: Int
	Explanations: Windows NT status code. 0 typically indicates success.
	
	FieldName: Operation
	Data Source/Type: Varchar(255)
	Explanations: Type of the operation or command. 
	              For example, this may be USER for FTP or GET for WWW.
	
	FieldName: Target
	Data Source/Type: Varchar(255)
	Explanations: Target of the operation.
	              For example, this may be Default.htm.
	
	FieldName: Parameters
	Data Source/Type: Varchar(255)
	Explanations: Any parameters to the operation. 
	              This can be either name/value pairs for invoking 
	              CGI or an ISAPI extension. It is a user name for 
	              the FTP command USER.
	
	Create a System DSN
	-------------------
	
	NOTE: This example uses SQL Server 7.0.
	
	1. On the IIS computer, open Control Panel, double-click the ODBC data source,
	  click the System DSN tab, and then click Add.
	
	2. When the Create New Data Source window appears, click to select SQL Server,
	  and then click Finish.
	
	3. In the Name box, type "HTTPLOG" (without the quotation marks), type a
	  description, and then click to select the SQL server that you want to connect
	  to. If the SQL server is on the same computer, select (local).
	
	4. Click Next.
	
	5. In the creation wizard, map the SQL server name and the default database.
	  Make sure that you click to select With Windows NT authentication using the
	  network login ID for the computer that is running SQL Server.
	
	6. Map the default database to the database where the template table resides.
	
	7. Examine the client configuration and use the default Named Pipe setting. Make
	  sure that the SQL server name is correct. If you want to, you can also click
	  to select Save long query to a file and Save the statistics in the wizard.
	
	8. At the end of the wizard, click Test the data source. Make sure that you have
	  successfully connected to the computer that is running SQL Server, and then
	  click OK to exit.
	
	Configure IIS for ODBC Logging
	------------------------------
	
	1. In the ISM MMC, right-click the Web site, and then click Properties.
	
	2. Click the Web Site tab.
	
	3. In the Active log format list, click to select ODBC Logging. You can ignore
	  the user name and password on the ODBC Logging Properties page if you
	  selected Windows NT Integrated authentication when you set up the system DSN
	  that is mapped to the computer that is running SQL Server.
	
	4. Click Apply, and then click OK.
	
	NOTE: If an account is specified on the ODBC Logging Properties page, the
	Username field in the SQL Server table is blank or contains a dash (-). If a
	domain account is used, the account name appears in the SQL Server logging
	table.
	
	5. In the ISM MMC, right-click the Web site, and then click Stop to stop your
	  Web site.
	
	6. Right-click the Web site, and then click Start to restart your Web site.
	
	Recommendations for ODBC Logging
	--------------------------------
	
	- Microsoft does not recommend IIS logging to a SQL Server table if the IIS
	  computer is a busy server. Sending logging data to a SQL Server database for
	  a busy Web site consumes system resources. In this case, you may want import
	  the IIS logs to a SQL database later.
	
	For additional information about importing IIS logs to SQL, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q296085 HOWTO: Use SQL Server to Analyze Web Logs
	
	  Q296093 FILE: PrepWebLog Utility Prepares IIS Logs for SQL Bulk Insert
	
	- By default, the logging configuration uses Named Pipes for the SQL Server
	  connection. If you are using a remote computer that is running SQL Server,
	  you may have to configure TCP/IP for the SQL Server connection.
	
	Troubleshooting
	---------------
	
	If the InternetLog table is not configured correctly, or if the correct user has
	not been granted the right permissions to the InternetLog table, you may receive
	either Event ID 5, Event ID 6 (with a source of IISLOG), or both in the system
	log of the Event Viewer.
	
	NOTE: For other database systems, you must configure a system DSN to link the
	database and table that contain the appropriate fields for the logging format,
	and then follow the steps in Configuring IIS for ODBC Logging to set up
	logging.
	
	REFERENCES
	==========
	
	For additional information about ODBC logging issues, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q149398 IIS logging to SQL Server Fails w/ Blank Username and Password
	
	  Q192293 IIS Stops ODBC Logging after Failing to Communicate with SQL
	
	  Q256839 Long URL Requests or Parameters Are Not Logged When You Use ODBC
	  Logging
	
	For additional information about importing IIS logs to SQL, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q296085 HOWTO: Use SQL Server to Analyze Web Logs
	
	  Q296093 FILE: PrepWebLog Utility Prepares IIS Logs for SQL Bulk Insert
	
	Additional query words: IIS 'ODBC logging'
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}

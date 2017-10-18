---
layout: page
title: "Q216428: Configuring Microsoft ODBC Driver for DB2"
permalink: kb/216/Q216428/
---

## Q216428: Configuring Microsoft ODBC Driver for DB2

	Article: Q216428
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for DB2, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides an overview of the Microsoft ODBC Driver for DB2.
	
	Microsoft ODBC Driver for DB2 (Msdb2ole.dll) enables access over SNA LU 6.2 and
	TCP/IP networks to remote DB2 databases. This driver is implemented as an IBM
	Distributed Relational Database Architecture (DRDA) application requester that
	can connect to DRDA-compliant DB2 systems like MVS, OS/400, and Microsoft
	Windows NT.
	
	The driver supports ODBC 2.x and ODBC 3.x functions (for a complete list of
	supported functions please see the SNA Server SDK online documentation). The
	driver can be used interactively or from an application program to issue SQL
	statements. From Microsoft Excel, users can import DB2 tables into worksheets
	and use Excel graphing tools to analyze the data. From Microsoft Access, users
	can import from and export to DB2. With Microsoft Internet Information Server
	(IIS), developers can publish DB2-stored information to users through a Web
	browser.
	
	For more information on using ODBC Driver for DB2, as well as a list of supported
	ODBC connection string attribute keywords and values, see the SNA Server SDK
	online documentation or the ODBC Driver for DB2 online Help files.
	
	MORE INFORMATION
	================
	
	Adding a ODBC Data Source
	-------------------------
	
	A Data Source associates a particular ODBC driver with the data you want to
	access through that driver. You must configure data source information for each
	DB2 system that is to be accessed using the ODBC driver for DB2. The default
	parameters for the ODBC driver for DB2 are used for the data source only and
	need to be configured for each Data Source separately. To configure the driver,
	perform the following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click ODBC Data Sources.
	
	3. Choose a User DSN, System DSN, or File DSN.
	
	4. Click Microsoft ODBC Driver for DB2, and then click Finish.
	
	You can also display the ODBC Data Sources configuration tool from the shortcut
	located in the Microsoft SNA Server Data Access program group.
	
	Configuring Data Sources
	------------------------
	
	The General tab allows the user to configure the basic attributes required to
	describe a data source. For the ODBC driver for DB2, the general attributes
	include the following keywords:
	
	Data Source Name: The data source is a required parameter that is used to define
	the data source. The ODBC driver manager uses this attribute value to load the
	correct ODBC data source configuration from the registry or file. For file data
	sources, this field is used to name the DSN file, which is stored in the Program
	Files\Common Files\ODBC\Data Sources directory.
	
	Description: The description is an optional parameter that can be used to
	describe the data source.
	
	The Connection tab allows the user to configure the basic attributes required to
	connect to a data source. For ODBC Driver for DB2, the connection attributes
	include the following keywords:
	
	LU 6.2 Connection: This radio button allows the user to choose an SNA LU6.2-based
	connection. If the default SNA is selected, then values for APPC Local LU Alias,
	APPC Mode Name, and APPC Remote LU Alias are required.
	TCP/IP Connection: This radio button allows the user to choose a TCP/IP-based
	connection. If TCP/IP is selected, then values for Network Address and Network
	Port are required.
	
	Local APPC LU Alias: The name of the local LU alias configured in SNA Server.
	
	Remote APPC LU Alias: The name of the remote LU alias configured in SNA Server.
	
	APPC Mode Name: The APPC mode that matches the host configuration and SNA Server
	configuration. Legal values for the APPC mode include QPCSUPP (common system
	default), #INTER (interactive), #INTERSC (interactive with minimal routing
	security), #BATCH (batch), #BATCHSC (batch with minimal routing security), and
	#IBMRDB (DB2 remote database access).
	
	IP Address: This property is used to locate the target DB2 computer, specifically
	the TCP/IP address or TCP/IP host name/alias associated with the DRDA port. The
	network address is required when connecting via TCP/IP.
	
	Network Port: This property is used to locate the target DB2 DRDA service access
	port when connecting through TCP/IP. The default is the well-known DRDA port
	address of 446.
	
	The Connection tab also includes a Test Connection button that can be used to
	test the connection parameters. The connection can only be tested after all of
	the required parameters are typed in. When you click this button, a session will
	be established to the remote DB2 system using OLE DB Provider for DB2.
	
	The Security tab allows the user to configure optional attributes used to
	restrict connections to a data source. For Microsoft ODBC Driver for DB2, the
	security attributes include the following:
	
	Use this username: A valid user name is normally required to access data on DB2.
	Optionally, you can persist a user name in the DSN. The ODBC driver will prompt
	the user at runtime to type in a valid password. Additionally, the prompt dialog
	box will allow the user to override the user name stored in the DSN.
	
	The AS/400 computer is case-sensitive with regard to User ID and Password. The
	AS/400 only accepts a DB2/400 User ID and Password in UPPER CASE. (If DB2/400
	connection fails because of incorrect authentication, the ODBC driver will
	re-send the authentication, forcing the User ID and Password into UPPER CASE.)
	
	The Mainframe is case-insensitive. This means that on mainframe computers, you
	can type the DB2 User ID and Password in any case. The ODBC driver will send the
	these values in UPPER CASE. DB2 UDB for Windows NT is case-sensitive. The User
	ID is stored in UPPER CASE. The password is stored in mixed case. The user must
	type the Password in the correct case. The ODBC driver sends exactly the
	password in the case entered by the user. One does not pass the NT Domain Name,
	only the NT user name.
	
	Use Single Sign on: Optionally, one can use the Single Signon option of Microsoft
	SNA Server's Host Security feature. This allows the administrator creating the
	data source definition to isolate the logon process from the end user. The user
	context for single-signon is the user context associated with the SNA DB2
	Service. If running on Windows 9x, then the user context is that associated with
	the currently logged-in user.
	
	Database is Read-only: Creates a read-only data source. The user has only read
	access to objects, such as tables, and cannot do update operations, such as
	INSERT, UPDATE, or DELETE.
	
	The Target Database tab allows the user to configure required, as well as
	optional, attributes used to define the target DB2 system. For Microsoft ODBC
	Driver for DB2, the target database attributes include the following:
	
	Remote Database Name: This ODBC attribute is used as the first part of a
	three-part fully qualified table name.
	
	In DB2 (MVS, OS/390), this property is referred to as LOCATION. The
	SYSIBM.LOCATIONS table lists all the accessible locations. To find the location
	of the DB2 to which you need to connect, ask your administrator to look in the
	TSO Clist DSNTINST under the DDF definitions. These definitions are provided in
	the DSNTIPR panel in the DB2 installation manual.
	In DB2/400, this property is referred to as RDBNAM. The RDBNAM value can be
	determined by invoking the WRKRDBDIRE command from the console to the OS/400
	system. If there is no RDBNAM value, then one can be created using the Add
	option.
	In DB2 Universal Database, this property is referred to as DATABASE.
	
	Package Collection: The name of the DRDA COLLECTION where you want the driver to
	store and bind DB2 packages. This is a required parameter. For more information
	about creating packages, please read the following Microsoft Knowledge Base
	article:
	
	  Q216810 Creating Packages for Use with ODBC Driver for DB2 and OLE KB
	  Provided for DB2
	
	Default Schema: The name of the Collection where the provider looks for catalog
	information. The ODBC driver uses Default Schema to restrict results sets for
	popular operations, such as enumerating a list of tables in a target collection
	(for example, ODBC Catalog SQLTables). For more information on this parameter,
	please see the following Microsoft Knowledge Base article:
	
	  Q217757 INF: Default Schema to be Used with ODBC Driver for DB2 and OLE DB
	  Provider for DB2
	
	Default Isolation Level: Determines the level of isolation used in cases of
	simultaneous access to DB2 objects by multiple applications. The default is NC.
	The following levels are supported:
	
	CS: Cursor Stability. In DB2/400, this corresponds to COMMIT(*CS). In ANSI, this
	corresponds to Read Committed (RC).
	
	NC: No Commit. In DB2/400, this corresponds to COMMIT(*NONE). In ANSI, this
	corresponds to No Commit (NC).
	
	UR: Uncommitted Read. In DB2/400, this corresponds to COMMIT(*CHG). In ANSI, this
	corresponds to Read Uncommitted.
	
	RS: Read Stability. In DB2/400, this corresponds to COMMIT(*ALL). In ANSI, this
	corresponds to Repeatable Read.
	
	RR: Repeatable Read. In DB2/400, this corresponds to COMMIT(*RR). In ANSI, this
	corresponds to Serializable (Isolated).
	
	Alternate TP Name: This property is only required when connecting to SQL/DS
	(DB2/VM or DB2/VSE) and is referred to as the remote transaction program.
	
	Auto Commit: This attribute allows for implicit COMMIT on all SQL statements. In
	auto-commit mode, every database operation is a transaction that is committed
	when performed. This mode is suitable for common transactions that consist of a
	single SQL statement. It is unnecessary to delimit or specify completion of
	these transactions. No ROLLBACK is allowed when using Auto Commit Mode. The
	default is True.
	
	Convert all binary data types as character data types: This option treats binary
	(CCSID 65535) data type fields as character data type fields on a per-data
	source basis. The Host CCSID and PC Code Page values are required input and
	output parameters. (See Locale tab.)
	
	The Locale tab allows the user to configure required, as well as optional,
	attributes used to define the code pages to be used on the DB2 system as well as
	the Windows-based computer. For Microsoft ODBC Driver for DB2, the locale
	attributes include the following:
	
	Host Locale: The character code set identifier (CCSID) matching the DB2 data as
	represented on the remote computer. This parameter defaults to U.S./Canada (37).
	The CCSID property is required when processing binary data as character data.
	Unless the Process Binary as Character value is set, character data is converted
	based on the DB2 column CCSID and default ANSI code page.
	
	Use default code page for locale: This option instructs the ODBC driver to use
	the default ANSI code page for the Windows-based computer. If this default
	setting is cleared, then the user may choose any supported PC Code Page.
	
	PC Locale: This attribute is required when processing binary data as character
	data. Unless the Process Binary as Character value is set, character data is
	converted based on the default ANSI code page configured in Windows. The default
	value for this property is Latin 1 (1252).
	
	Additional query words: MSDB2OLE DLL
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBCDB2400SP2
	Version           : WINDOWS:4.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	

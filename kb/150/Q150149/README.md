---
layout: page
title: "Q150149: Contents of Visual FoxPro 1.0 ODBC Vfpodbc.txt File"
permalink: /kb/150/Q150149/
---

## Q150149: Contents of Visual FoxPro 1.0 ODBC Vfpodbc.txt File

	Article: Q150149
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAY-2001
	
	1.00
	
	WINDOWS
	
	kbinterop kbreadme
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro (Build 6.00.8281.00), version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Below is Microsoft Visual FoxPro Open Database Connectivity (ODBC) 1.0
	Vfpodbc.txt file, located in the Windows System subdirectory.
	
	MORE INFORMATION
	================
	
	-----------------------------------------------------------
	Microsoft Visual FoxPro ODBC Driver Version 1.0 ReadMe File
	-----------------------------------------------------------
	
	(c) Copyright Microsoft Corporation, 1996
	
	This document provides late-breaking or other information that supplements
	the Microsoft Visual FoxPro ODBC Driver Help file.
	
	------------------------
	How to Use This Document
	------------------------
	
	To view the ReadMe file in Windows Notepad, maximize the Notepad window and
	click Word Wrap on the Edit menu. To print the ReadMe file, open it in
	Notepad or another word processor, and then use the Print command on the
	File menu.
	
	--------
	CONTENTS
	--------
	
	1.   INSTALLATION NOTES
	    1.1  System Requirements
	    1.2  Installing from Disk
	    1.3  Adding a Data Source
	    1.4  Information Resources
	
	2.   DISK CONTENTS
	    2.1  Files on Disk
	    2.2  Files Installed By SETUP.EXE
	
	3.   TROUBLESHOOTING
	    3.1  Installation Problems
	    3.2  Unsupported Commands in Existing Stored Procedures
	    3.3  ODBC Troubleshooting Tools
	    3.4  Contacting Product Support Services
	
	4.   ADDITIONAL INFORMATION
	    4.1  Data Files That Can Be Accessed by the Driver
	    4.2  Driver Capabilities
	    4.3  Driver Limitations
	    4.4  Default Environment Settings
	    4.5  Default Column Names For Expressions
	    4.6  Known Issues With SQL Server Replication and Office Applications
	
	5.   ADDITIONAL EXAMPLES
	    5.1  Accessing Visual FoxPro Data from Microsoft Excel
	    5.2  Accessing Visual FoxPro Data from Visual Basic
	
	-----------------------
	1.   INSTALLATION NOTES
	-----------------------
	    1.1  System Requirements
	    1.2  Installing from Disk
	    1.3  Adding a Data Source
	    1.4  Information Resources
	
	1.1  System Requirements
	========================
	To install the Visual FoxPro ODBC Driver, you need:
	* Windows NT 3.50 (or later) or Windows 95
	* 2 MB disk space
	
	Important: Visual FoxPro ODBC Driver 1.0 is a 32-bit driver only.  Windows
	3.1 and Windows for Workgroups platforms are not supported.
	
	1.2  Installing from Disk
	=========================
	
	1 Place the Visual FoxPro ODBC Driver installation disk into the A: drive.
	2 On Windows 95, choose Run from the Start button.
	 -or-
	 On Windows NT, choose Run from the Program Manager File menu.
	3 Type "A:\SETUP.EXE" without quotes and press ENTER.
	
	NOTE:  The Visual FoxPro ODBC Driver installation updates the ODBC
	components to ODBC 2.5 compliance if necessary.  See the README25.TXT file
	in your Windows system directory for additional information on enhancements
	or features of the ODBC 2.5 components.
	
	1.3 Adding a Data Source
	========================
	In order to use any ODBC driver from an ODBC-aware application, you must
	first set up a data source. For instructions on adding a data source,
	search for "Adding a Visual FoxPro data source" in Help.
	
	1.4  Information Resources
	==========================
	The following information is available to help you:
	* Help files
	* ReadMe files
	* Microsoft Press Books
	* MSDN
	
	Help Files
	----------
	The Visual FoxPro ODBC Driver comes with two help files, located in your
	Windows system directory:
	* ODBCINST.HLP  General ODBC information
	* DRVVFP.HLP  The Visual FoxPro ODBC Driver Help file
	
	ReadMe Files
	------------
	The Visual FoxPro ODBC Driver comes with two readme files, located in your
	Windows system directory:
	* VFPODBC.TXT  This file.
	* README25.TXT  Contains information specific to ODBC 2.5 components
	
	Microsoft Press Books
	---------------------
	Microsoft publishes two books on ODBC:
	
	* Microsoft ODBC 2.0 Programmer's Reference and SDK Guide
	  (ISBN#: 1-55615-658-8).
	* Inside ODBC (ISBN#: 1-55615-815-7).
	
	Check your local book store for third party books on ODBC or newly released
	MS Press books on ODBC.
	
	MSDN
	----
	See MSDN for ODBC revision information on versions 2.1 through 2.5.
	
	------------------
	2.   DISK CONTENTS
	------------------
	    2.1  Files on Disk
	    2.2  Files Installed By SETUP.EXE
	
	2.1  Files on Disk
	==================
	EXTRACT.EXE
	SETUP.EXE
	SETUP.INI
	SETUP.LST
	SETUP.TDF
	VFPODBC.INF
	VFPODBC.TXT
	VFPODBC1.CAB
	
	2.2  Files Installed By SETUP.EXE
	=================================
	CTL3D32.DLL             Dialog DLL.
	DRVVFP.HLP              The Visual FoxPro ODBC Driver help file; the
	primary resource for information on the driver.
	FOXPRO.INT              Collation support for some Eastern European
	languages.
	VFPODBC.DLL             The Visual FoxPro ODBC Driver.
	VFPODBC.TXT             This file, containing additional information on the
	Visual FoxPro ODBC Driver.
	README25.TXT            ReadMe file for the ODBC 2.5 component changes.
	
	--------------------
	3.   TROUBLESHOOTING
	--------------------
	    3.1  Installation Problems
	    3.2  Unsupported Commands in Existing Stored Procedures
	    3.3  ODBC Troubleshooting Tools
	    3.4  Contacting Product Support Services
	
	3.1  Installation Problems
	==========================
	>>>To troubleshoot installation problems
	1 Clean-boot the machine.  For example, under Windows 95, start in Safe
	Mode.
	2 Make sure that nothing else is running, including virus software,
	Terminate and Stay Resident (TSR) applications, third party shells, or
	toolbars such as Microsoft Office Manager.
	3 If the computer has video or system ROM shadowing, clear these options
	before reinstalling.
	4 Scan the installation disks for damage and request new disks if they are
	damaged.
	5 Re-install the driver.
	
	3.2  Unsupported Commands in Existing Stored Procedures
	=======================================================
	The Microsoft Visual FoxPro ODBC Driver supports only a subset of the
	commands and functions available in the Visual FoxPro language.  If a
	trigger contains an unsupported command or function, the Visual FoxPro ODBC
	Driver will return a "Trigger Failed" error message and ignore the INSERT,
	UPDATE, or DELETE command associated with the trigger.
	
	Trigger code can be customized to execute code conditionally, depending on
	whether the code is being executed by the driver or by Visual FoxPro.   You
	can use the following template to create conditional code:
	
	IF VERSION() = "Visual FoxPro ODBC Driver"
	  * [Insert trigger code that is supported by the Visual FoxPro ODBC
	Driver]
	ELSE
	  * [Insert trigger code supported by Visual FoxPro]
	ENDIF
	
	See the Help file, DRVVFP.HLP, for a list of supported and unsupported
	commands and functions.
	
	3.3  ODBC Troubleshooting Tools
	===============================
	You can troubleshoot ODBC problems with ODBC Test and ODBC Spy
	applications, available in  the Microsoft ODBC SDK. You can use the 32-bit
	version of ODBC Spy to determine the ODBC function and parameters that
	caused the problem to occur.  You can then use the 32-bit version of ODBC
	Test to verify the cause of the problem by submitting specific function
	calls with the parameters you identified.  For additional information on
	using these utilities, refer to the ODBC 2.0 Programmer's Reference and SDK
	guide in Chapter 4: Using ODBC Test, and Chapter 5: Using ODBC Spy.
	
	Note:   Only the 32-bit version of ODBC Spy and ODBC Test can be used
	because the Visual FoxPro ODBC Driver is fully 32-bit.
	
	An ODBC Trace Log can be generated by using the 32-bit version of ODBC Spy
	or by using the ODBC 32-bit Administrator.
	
	>>>To generate an ODBC trace log:
	1 In the Control Panel, double-click the 32bit ODBC icon.
	2 In the Data Sources dialog box, click Options.
	3 Select Trace ODBC Calls and Stop Tracing Automatically.
	4 Click Select File and provide a log file name.
	5 Click Save.
	6 Click OK.
	7 Click Close.
	
	Now when you execute your code, all C ODBC API calls, their input
	parameters, and their output will be written to the log file.  The ODBC log
	file is ASCII text and may be viewed in any standard ASCII text editor such
	as Microsoft Word, Notepad, or WordPad.
	
	3.4  Contacting Product Support Services
	========================================
	If you have a question that requires technical support, prepare the
	following information before you call:
	
	* The version numbers of any Microsoft products you are using
	* The type of hardware that you are using
	* The exact wording of any messages that appeared on your screen
	* A description of what happened and what you were doing when the problem
	occurred
	* A description of how you tried to solve the problem
	* Any ODBC Trace logs
	
	When you call, be at your machine and have the Visual FoxPro ODBC Help file
	and any other related product documentation available, and then call one of
	the following numbers:
	
	* If you are a registered user of Visual FoxPro, call (425) 635-7191, and
	have your product identification number available.
	
	* If you have successfully installed the driver but are having trouble
	using it with your ODBC-aware application, contact the support provider for
	your application.
	
	* If you do not own Visual FoxPro, you can call (800) 936-5800 and use
	 the Microsoft Technical Support "Pay As You Go" options.
	
	* If you have issues with the ODBC API or other advanced issues, call the
	 Advanced Systems "Pay As You Go" support line at (800) 936-5900.
	
	---------------------------
	4.   ADDITIONAL INFORMATION
	---------------------------
	    4.1  Data Files That Can Be Accessed by the Driver
	    4.2  Driver Capabilities
	    4.3  Driver Limitations
	    4.4  Default Environment Settings
	    4.5  Default Column Names For Expressions
	    4.6  Known Issues With SQL Server Replication and Office Applications
	
	4.1  Data Files That Can Be Accessed by the Driver
	==================================================
	The driver supports FoxBase+ and FoxPro tables as well as dBASE IV tables.
	
	FoxBase+ and FoxPro Tables
	--------------------------
	The Visual FoxPro ODBC Driver gives you access to FoxBase+, FoxPro 1.x,
	FoxPro 2.x and Visual FoxPro 3.0 tables. The Visual FoxPro ODBC Driver also
	provides access to tables that are associated with a Visual FoxPro database
	container (DBC).
	
	Note:  The Visual FoxPro ODBC Driver allows transactions only on tables
	within a Visual FoxPro database. You cannot create transactions on free
	tables.
	
	dBASE IV Tables
	---------------
	The Visual FoxPro ODBC Driver gives you access to dBASE IV and earlier
	tables. The dBASE files are supported in the following manner:
	* dBASE  v2.x and 3.x: The files are read without conversion.
	* dBASE  v4.x and 5.x: If the files do not have memo fields and the table
	has fewer than 255 columns, the files are read.
	* dBASE  v4.x and 5.x tables with memo fields or dBASE indexes: These files
	require conversion in Visual FoxPro for Windows before they can be used
	with the Visual FoxPro ODBC Driver. The driver will not read or convert
	files. If you attempt to connect to a dBASE file that contains a memo field
	or index, an error will occur.
	
	4.2  Driver Capabilities
	========================
	International Support
	---------------------
	You can set the collating sequence for index ordering.  For a list of
	supported collating sequences, search for SET COLLATE in Help.
	
	The default collating sequence is "MACHINE".   The collating sequence can
	be changed by:
	* Selecting a different collating sequence from the driver options in the
	Data Source Setup dialog box.
	* Setting SET COLLATE TO cSequenceName with the ODBC function
	SQLExecDirect().
	* Calling SQLPrepare() and SQLExecute() (see the ODBC 2.0 Programmer's
	Reference and SDK Guide).
	
	Note: Support for the Eastern European code pages depends on the FOXPRO.INT
	file, which is installed by the Visual FoxPro ODBC Driver in your Windows
	system directory.  If it is removed, the collating sequences on Eastern
	European code page machines will not work.
	
	Remote Views and Parameterized Views
	------------------------------------
	Any time the SQLTables() function is called, remote and parameterized views
	are excluded from the list. Local views based on parameterized views are
	not excluded, but will generate errors if you use them. If you call the
	SQLTables() function with a unique table name, however, you will find views
	if they are present, so that you can check for name conflicts.
	
	4.3  Driver Limitations
	=======================
	You must use Visual FoxPro, not the Visual FoxPro ODBC Driver, to:
	
	  * Use remote views. Remote views are not supported in the driver.
	  * Update local views. Changes to views from the driver affect only the
	view cursors, not the base tables.
	  * Update base tables.
	  * Call stored procedures directly. Using the driver, stored procedures
	can only be called from a rule or trigger.
	  * Create some index types. The driver can create only Primary or Unique
	indexes, using the ALTER TABLE command.  The driver cannot create an index
	on a free table.
	  * Create transactions on free tables.  The Visual FoxPro ODBC Driver
	allows transactions only on tables within a database, not on free tables.
	  * Remove records marked for deletion. The PACK command is not supported
	by the driver.
	  * Convert dBASE files that have indexes or memo fields.
	
	4.4  Default Environment Settings
	==========================================
	The default settings for the following SET commands are different from
	their default settings in Visual FoxPro.
	
	Environment/SET command    Driver's Default Value
	-----------------------    ----------------------
	EXCLUSIVE                  OFF
	NULL                       ON
	DELETED                    ON
	ANSI                       ON
	
	4.5  Default Column Names For Expressions
	=========================================
	The Visual FoxPro ODBC Driver names columns based on expressions using a
	combination of the expression operator and expression field. For example,
	the driver returns min_customerid as the name of the expression field in
	the result set for the following statement:
	
	  SELECT MIN (customer_id) FROM customers
	
	If you want to control the expression field name, use the AS clause.  The
	following example returns  'minimum_custid' as the name of the expression
	field:
	
	  SELECT MIN(customer_id) AS minimum_custid FROM customers
	
	4.6  Known Issues With SQL Server Replication and Office Applications
	=====================================================================
	SQL Server Replication
	----------------------
	* When creating a character field, note that the Visual FoxPro maximum
	character field length is 254 characters, while the SQL Server maximum
	character field length is 255 characters.
	
	* In order for replication to work properly, do not export indexes.
	
	MSQuery Issues
	--------------
	To access a Visual FoxPro data source from a Microsoft Office application,
	you must have the MSQuery add-in; however, MSQuery is not installed by
	default with Microsoft Office applications. You can install MSQuery by
	reinstalling Excel or another Office component, choosing the Custom
	installation option, and then selecting the MSQuery add-in.
	
	Using MSQuery To Create Visual FoxPro Tables
	----------------------------------
	When creating a table with MSQuery, the Type box in the Table Definition
	dialog box displays the following characters: B,C,D,F,G,I,L,M,M NOCPTRANS,
	N,T, and Y.  For topics containing a definition of these data types, search
	for "field data types" in Help. The table describing data types is
	displayed when you click on the green 'data type' link.
	
	Note:  It is not possible to create a table that includes a Visual FoxPro
	Character Binary data type with MSQuery.
	
	Invalid Field Names and MSQuery
	-------------------------------
	MSQuery allows you to create invalid Visual FoxPro field names in tables.
	For example,  "1995sales" is not a valid field name in Visual FoxPro, but
	MSQuery allows you to create it.  When you open the table, you will get an
	error.
	
	------------------------
	5.   ADDITIONAL EXAMPLES
	------------------------
	    5.1  Accessing Visual FoxPro Data from Microsoft Excel
	    5.2  Accessing Visual FoxPro Data from Visual Basic
	
	5.1  Accessing Visual FoxPro Data from Microsoft Excel
	======================================================
	>>>To use Visual Basic for Applications in Excel to access Visual FoxPro
	data:
	1 Start Microsoft Excel.
	2 From the Insert menu, choose Macro and then Module.
	3 Type the following code into the blank Macro editing window:
	
	Sub MainRoutine()
	   Dim Id As Variant
	   Dim Constring As String   ' The connect string
	   Dim Sql         ' The SQL Select command string
	   Dim rc As Variant      ' The return code from a function
	   Dim re As Variant      ' The returned error code from SQLError
	
	   ' Initialize variables
	   Constring =
	"DSN=testdata;DBQ=c:\vfp\samples\data\testdata.dbc;FIL=FoxPro 3.0"
	   Sql = "SELECT * from employee"
	
	   ' Connect to the data source
	   Id = SQLOpen(Constring)
	
	   ' Execute the select command to return data
	   rc = SQLExecQuery(Id, Sql)
	
	   ' If there is an error, display it and exit
	   If IsError(rc) Then
	       re = SQLError()
	       MsgBox "SQL Error. Error Message:" & re(3)
	       Exit Sub
	   End If
	
	   ' Retrieve the data and put it into worksheet Sheet1
	   rc = SQLRetrieve(Id, Worksheets("Sheet1").Range("A1"))
	
	   ' Close the connection
	   SQLClose Id
	End Sub
	
	4 From the Tools menu, choose References.
	5 Select the XLODBC.XLA check box and click OK.
	Note: If XLODBC.XLA does not exist in the list, select Browse and find
	XLODBC.XLA in the Microsoft Excel Library\MsQuery directory.
	6 From the Run menu, choose Start.
	7 Click the Sheet1 tab to display the data.
	
	5.2 Accessing Visual FoxPro Data from Visual Basic
	==================================================
	>>>To access Visual FoxPro data with a Visual Basic Remote Data Object
	(RDO):
	1 Define a data source named TasTradeDSN that connects to TASTRADE.DBC.
	2 Start the Enterprise Edition of Visual Basic and create a form.
	3 From the Tools menu, choose Custom Controls.
	4 In the Available Tools list, select Microsoft Remote Data Control.
	5 From the object toolbar, drop an RDO control on the form and set these
	properties:
	  DataSourceName:   TastradeDSN (This example requires a data source named
	TastradeDSN that connects to TASTRADE.DBC.)
	  Connect:   ODBC=TastradeDSN
	  CursorDriver:   0-ODBC Cursor if needed
	  SQL:      select * from customer
	  ResultType:   3-Static
	  LockType:   1-ReadOnly
	
	6 Drop a text box on the form and set these properties:
	  DataSource:   MSRDC1 (the RDO control)
	  DataField:   company_name
	
	7 Drop a command button on the form and set these properties:
	  Caption:   Skip 1
	
	8 Add the following code to the command button's Click event:
	  MSRDC1.Resultset.MoveNext
	
	9 Run the form and click the Skip 1 command button.
	
	Additional query words: 1.00 VFoxWin 3.00 3.00b readme.txt akz
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch
	Version           : :1.0
	
	=============================================================================
	

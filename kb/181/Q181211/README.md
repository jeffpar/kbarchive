---
layout: page
title: "Q181211: Common Issues Related to the ODBC Driver for DB2"
permalink: kb/181/Q181211/
---

## Q181211: Common Issues Related to the ODBC Driver for DB2

	Article: Q181211
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following are some of the common issues that may be encountered when you use
	the ODBC driver for DB2 that is included with SNA Server versions 3.0 and 4.0:
	
	Question: What is a DDM X "2124" error? I get this error message when attaching
	to my DB2 tables.
	
	Answer: This error occurs if you specify an Isolation Level that is not supported
	by the driver. If you receive this message, use the Advanced options in the Data
	Source Setup (StarSQL Pro only) to select a supported Isolation Level from the
	Default Isolation Level drop-down list.
	
	DB2/MVS and SQL/DS Specific Issues
	----------------------------------
	
	Problem: I get the following error message:
	
	  "Unsuccessful execution caused by deadlock or timeout. Reason code 00c9008e.
	  Type of resource 00000100 and resource name is WSW01DB"
	
	Resolution: The resource name varies, depending upon your DB2 configuration, but
	the above message appears with various ODBC-enabled applications--for example,
	Microsoft Access, Microsoft Query, and so on-- that have an "exclusive" lock on
	the database, and another session attempts to access data. The fix is to select
	Use Held Cursors in the Advanced options for the data source.
	
	Question: I am using StarSQL to SQL/DS and getting the error message:
	
	  Database server V5R1 not supported by this version of StarSQL.
	
	What is the problem?
	
	Answer: If you are using Windows NT or Windows 95, the Swodbc.ini file needs to
	be edited. In this file, there is a section called [CustomizeNT] and a line that
	reads:
	
	  ARI34NT=ARI32NT.DLL
	
	Add a line to read:
	
	  ARI0501=ARI34NT.DLL
	
	Question: I am unable to update a table on SQL/DS that includes a LONG VARCHAR
	column. What's wrong?
	
	Answer: In order to insert, update, delete, and so on, a table on SQL/DS that
	includes a LONG VARCHAR column, the following must be true:
	
	- The table must be indexed.
	
	- You must use the Enable SQLSpecialColumns option in the Advanced dialog box
	  of the StarSQL data source.
	
	Question: How can I limit the number of DB2 tables in the list that is returned
	to my ODBC application?
	
	Answer: Using SYSIBM as the SQL Catalog Qualifier will return a list of all
	tables in the database. Using SYSIBM.AUTHID will return a list of all tables
	owned by AUTHID. You can use Restricted Views to return a list of tables owned
	by one or more AUTHIDs.
	
	Question: What can I do to prevent "runaway" queries from occurring on DB2/MVS?
	
	Answer: The Resource Limit Facility is a portion of DB2 code that prevents
	dynamic manipulative SQL statements from exceeding specified time limits.
	
	AS/400 Specific
	---------------
	
	Question: What does the error [ASCII 147]File in Library NOT VALID FOR
	OPERATION[ASCII 148] mean? How can this error be resolved?
	
	Answer: This error occurs when you are trying to access non-journaled physical
	files residing on an AS/400 with StarSQL. For access to non- journaled physical
	files on OS/400 V3R1 or later, you must set the isolation level in the Advanced
	options for the data source to None or Default.
	
	Question: When I try to access AS/400 files with periods(.) in the file name, the
	following error message appears:
	
	Relational Database<name> not the same as current
	servername<servername>.
	
	What is the problem?
	
	Answer: Because a file name with a period is an "illegal" SQL name, you must
	explicitly type in the SQL and enclose the file name in quotes. Characters
	between the quotes are treated exactly as they are shown, and the text is case
	sensitive. For example:
	
	  Select *FROMLIB."TEST.FILE"
	
	Question: Is it possible to work around the problem of running out of memory when
	using QSYS and QSYS2 catalog qualifiers?
	
	Answer: To work around this problem, use one of the following suggestions:
	
	- Filter the table.
	
	- Create restricted views.
	
	- Use authorization IDs in the SQL Catalog Qualifier field of the StarSQL data
	  source.
	
	StarSQL 1.05 (and later) allows users to filter the table and view names returned
	when retrieving a list of available tables (views, physical files) to what is
	available in a single AS/400 collection or library, or to a single Authorization
	ID in DB2/MVS or SQL/DS. This feature is useful when using the system-wide
	catalog on the database server. For AS/400 v2r2 and v2r3 QSYS, AS/400 v3r1
	QSYS2, DB2/MVS SYSIBM, or on SQL/DS SYSTEM.
	
	The filter is specified by appending the library, AS/400 collection, or an
	authorization-id to the SQL Catalog Qualifier in the data source setup.
	
	Examples: (AS/400 v2r2 or v2r3) "QSYS.MYLIB"
	
	  (AS/400 v3r1) "QSYS2.MYLIB"
	
	With any AS/400 version, the catalog is restricted to a single collection by
	specifying the collection as the SQL Catalog Qualifier, for example, "MYCOLL"
	
	(DB2/MVS) "SYSIBM.MYAUTH"
	
	(SQL/DS) "SYSTEM.MYAUTH"
	
	Question: What does the following error message mean?
	
	  [StarQuest] [Starsql ODBC Driver] DB2 400 Object
	  QSYS.QSECOFR type *collection not found Error 204
	
	Answer: This error occurs when a SQL query is executed without qualifying a table
	name. The SQL query needs to be qualified with a LIBRARY.TABLE name.
	
	Question: What does the following message mean?
	
	  This version of SNA Server not supported by this driver.
	
	Answer: This error occurs when there is a mismatch of Wappc32.dll with the SNA
	installation. Search the drive for multiple versions of this file. If multiple
	versions exist, rename all of them except the one in \sna\system, and try the
	connection again.
	
	Check the version of this file both in your \sna\system directory and from the
	source installation media. If the versions do not match, delete your SNA client
	installation, and reinstall the SNA client.
	
	Question: What does the error [ASCII 147]DRDA Reply codepoint x'2208'[ASCII 148]
	indicate?
	
	Answer: This is a bind add error that occurs when trying to connect to DB2/MVS
	for the first time. When connecting for the first time, StarSQL creates static
	packages on the host system. On DB2/MVS, the authid needs to be granted the
	following authorities:
	
	  BINDADD
	  CREATE IN COLLECTION <CollectionName>
	
	After the packages are bound for the first time, these privileges can be revoked.
	Any user wanting to connect then needs EXECUTE authority on the packages.
	
	This can also occur if the packages are bound with one isolation level, and
	someone attempts to connect with a different isolation level, for which packages
	were not bound. Please check the advanced options in the datasource for Use Held
	Cursors and Isolation Level.
	
	Problem: When trying to connect to an AS/400 using StarSQL, the following error
	message appears:
	
	[StarQuest][StarSQL ODBC Driver][DB2/400]Section number not valid (#-144)
	
	Resolution: After upgrading StarSQL Pro, you must drop (or delete) old packages
	and bind (create) new packages.
	
	First, drop StarSQL Pro packages: To drop packages, start a 5250 session with
	your AS/400 as QSECOFR. Use the command WRKLIB LIBRARY where LIBRARY refers to
	the library specified in the Package Collection field when you did your StarSQL
	Data Source setup. If you left that field <DEFAULT>, the LIBRARY will be
	your User ID. If you followed the instructions in the StarQuest Help
	documentation, LIBRARY will be STARSQL. (Creating a STARSQL library to hold
	packages is recommended for multiple users.)
	
	Move the cursor to the option fields next to the library and select 12=Work with
	Objects. You will see a screen with several packages. You need to drop the
	*SQLPKG. These are typically files named SWNC0000, SWRC000, SWCATPKG, and/or
	QSYS2 (QSYS for OS/400 v3r05 and earlier). In the option field next to the name
	of each StarSQL package, type 4=delete. Confirm deletion.
	
	Exit the screens and end the 5250 session.
	
	Second, connect to your DB2 data source through your application:
	
	Do this in the usual way. When you reconnect to your data source, the driver will
	automatically rebind (create) the StarSQL packages you need. You may need to try
	this a couple of times. In order to bind the packages, you need to get a table
	list and try to open a table.
	
	Third, make sure other users have authority to use the packages you just
	recreated:
	
	This is the same procedure you probably followed when you first set up the driver
	and which is described in the StarSQL Pro Help documentation.
	
	To change authority on packages, start a 5250 session as QSECOFR. Use WRKLIB
	command with the same library as above. For each package created by the StarSQL
	Pro driver, select 2=Edit Authority. Next to *PUBLIC, make sure the authority is
	set to *USE rather than *EXCLUDE. Verify that the changes took effect (exit and
	re-enter the appropriate screens) and end the session.
	
	Problem: I receive a GPF or Dr. Watson error message when using the StarSQL
	driver.
	
	Resolution: This can sometimes be caused by the presence of Msvcrt40.dll version
	4.2 on Windows 95. If you are not using Windows 95 or do not have that version
	of Msvcrt40.dll, this error is due to a mix of versions of StarSQL on the drive.
	Check the versions of the following files, located in the \windows\system, or on
	Windows NT, \windows\system32 directory:
	
	  ARI34NT.DLL
	  DSN23NT.DLL
	  DSN31NT.DLL
	  DSN41NT.DLL
	  QSQ23NT.DLL
	  QSQ31NT.DLL
	  sqconv32.dll
	  SQL21NT.DLL
	  SQLPSR32.dll
	  SWAPPCNT.DLL
	  swgest32.dll
	  swhcnv32.dll
	  swlmgr32.dll
	  Swpro32.dll
	  swrntm32.dll
	  swrsrc32.dll
	  Qsq32nt.dll
	
	If the versions do not match, or you have multiple copies on your drive, delete
	all copies of these files and reinstall StarSQL.
	
	MORE INFORMATION
	================
	
	Please refer to the following Web site for information about more commonly asked
	questions or problems related to the ODBC driver for DB2 that is included with
	SNA Server:
	
	  http://www.starquest.com/support/
	
	NOTE: The third-party contact information included in this article is provided to
	help you find the technical support you need. This contact information is
	subject to change without notice. Microsoft in no way guarantees the accuracy of
	this third-party contact information.
	
	Additional query words: snafaq
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	

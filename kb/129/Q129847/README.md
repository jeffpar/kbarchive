---
layout: page
title: "Q129847: HOWTO: How to Use the Upsizing (SQL) Wizard in Visual FoxPro"
permalink: /kb/129/Q129847/
---

## Q129847: HOWTO: How to Use the Upsizing (SQL) Wizard in Visual FoxPro

	Article: Q129847
	Product(s): Microsoft FoxPro
	Version(s): 2.5
	Operating System(s): 
	Keyword(s): kbvfp600 kbMDAC250
	Last Modified: 01-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, Professional Edition 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Upsizing Wizard creates a SQL Server database that duplicates, as much as
	possible, the functionality of a Visual FoxPro database. The Upsizing Wizard is
	included only with the Professional Edition of Visual FoxPro. This article
	outlines basic steps and recommendations for running the Upsizing Wizard in
	Visual FoxPro.
	
	MORE INFORMATION
	================
	
	Running the Upsizing Wizard
	---------------------------
	
	You can use the Upsizing Wizard to:
	
	- Move local data to a remote server.
	
	- Transform local base tables and local views into remote base tables and
	  remote views.
	
	- Migrate a local application to a client/server application.
	
	Upsizing can take a long time, depending on the size of your data, the amount of
	network traffic, and the number of concurrent demands being handled by your
	server. Large tables may require several hours to upsize. The Upsizing Wizard
	takes you through the following steps.
	
	Step 1 - Local Database Selection
	---------------------------------
	
	Choose Wizards from the Tools menu, and then select Upsizing. This launches the
	Upsizing Wizard and presents you with the Step 1 dialog box that prompts you to
	select the database file you want to upsize. If you don't have a database open,
	choose the Open button to select and open a database.
	
	Step 2 - Data Source Selection
	------------------------------
	
	If you use a named connection to access your data source, the Upsizing Wizard
	associates the named connection with any remote views it creates during
	upsizing.
	
	If you use a data source name rather than a connection name to log on to the data
	source and you choose to have the wizard create remote views, the Upsizing
	Wizard creates a named connection called "Upsize" (or "Upsize2," "Upsize3," and
	so on - if a connection definition already exists with the suggested name).
	
	When you choose the Next button, the wizard displays the ODBC Login dialog. If
	you used a named connection with a saved password, the wizard logs you on to the
	SQL Server you've selected without prompting you for ODBC login information.
	
	Step 3 - Target Database
	------------------------
	
	If you want to add Visual FoxPro tables to an existing SQL Server database, you
	can upsize to an existing database. If you upsize to an existing database, the
	wizard jumps to Step 6.
	
	If you choose to create a new remote database, the name can be up to 30
	characters and include letters, digits, and the symbols #, $, and _. Spaces are
	not allowed.
	
	Step 4 - Database Device (SQL Server)
	-------------------------------------
	
	Select the size and device for your database. Choose from existing devices or
	create a new one. The size of a new database must be at least 2 MB, which is the
	minimum allowed by SQL Server.
	
	Step 5 - Log Device (SQL Server)
	--------------------------------
	
	SQL Server creates a transaction log for your database that can be used to
	reconstruct the database in the event of a serious system problem.
	
	Ideally, a database and its corresponding log should be placed on devices that
	are on separate physical disks. These devices must be created before you start
	the Upsizing Wizard, as the wizard creates all new devices on the same physical
	disk where the master database device resides.
	
	If you have only one physical disk, you should place the database and its log on
	separate devices, so that you can use the SQL server DUMP TRANSACTION command.
	
	Step 6 - Tables to Upsize
	-------------------------
	
	To ensure the accuracy of exported data, the wizard tries to open all the tables
	for exclusive use in the database you chose to upsize. If any tables are open
	and shared, the wizard closes them and reopens them exclusively, which might
	cause you to lose any temporary relations established with the SET RELATION or
	SET SKIP commands. Any tables that can't be opened exclusively won't be
	available to upsize.
	
	Step 7 - Field Data Types
	-------------------------
	
	You can't change the default mapping for a key field to a data type that prevents
	the field from being indexed. You can change the default mapping of a field that
	is part of an index key if you choose a data type that can be indexed; however,
	you might want to change the data types for the other fields in the key to
	match. Visual FoxPro warns you if you change the default data type mapping for a
	field that is not a key field but is used in a Visual FoxPro index.
	
	If you make a mistake, click Reset To Defaults to reset the data types. For more
	information on the default data types used, search for the "Data Type Mapping in
	the Upsizing Wizard" topic in the Visual FoxPro Help file.
	
	Step 8 - Upsizing Options
	-------------------------
	
	By default, the Upsizing Wizard exports a table's structure and its data. Along
	with field names and data types, you can also export indexes, defaults,
	relationships (referential integrity constraints), and validation rules. Visual
	FoxPro indexes and defaults become SQL Server indexes and defaults.
	
	If you choose to export validation rules, the Upsizing Wizard attempts to export
	field- and row-level validation rules to SQL Server, where they become stored
	procedures called from SQL Server triggers. Exported table relationships also
	become part of these triggers.
	
	If you upsize table relationships, be sure to upsize indexes as well or you might
	experience mediocre performance.
	
	Step 9 - Finish
	---------------
	
	You can choose to:
	
	- Upsize without generating SQL code.
	
	-or-
	
	- Generate the SQL code for upsizing.
	
	-or-
	
	- Upsize and generate SQL code.
	
	The first and third options are available only if you have CREATE TABLE
	permission on the SQL server. If you choose either of the options that save
	generated SQL code, all the SQL code generated by the Upsizing Wizard is stored
	on your hard disk.
	
	REFERENCES
	==========
	
	For more documentation related to the Upsizing Wizard, including detailed
	information for each step, see "Using the Upsizing Wizard" in Chapter 2,
	"Upsizing Visual FoxPro Databases," in the "Professional Features Guide." Or
	search for the "Upsizing Wizard" topic in the Visual FoxPro Help file.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          : kbvfp600 kbMDAC250 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250
	Version           : :2.5
	Issue type        : kbhowto
	
	=============================================================================
	

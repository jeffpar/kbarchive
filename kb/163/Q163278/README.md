---
layout: page
title: "Q163278: ACC97: Err Checking Out Data Object with Linked Exchange Table"
permalink: /kb/163/Q163278/
---

## Q163278: ACC97: Err Checking Out Data Object with Linked Exchange Table

	Article: Q163278
	Product(s): Microsoft SourceSafe
	Version(s): 97
	Operating System(s): 
	Keyword(s): kberrmsg kbinteropkbbuglist
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0 
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	If you have a database under source code control with Microsoft Visual
	SourceSafe, and the database contains links to a Microsoft Outlook or Microsoft
	Exchange folder, when you check out Data and Misc. Objects you may receive one
	of the following error messages
	
	  Table 'ExchangeTable000' already exists
	
	-or-
	
	  Table 'MSysExchangeColumns' already exists
	
	which is followed by
	
	  Failed to import file '<Database Name>' into Microsoft Access.
	
	After these errors, checking out Data and Misc. Objects stops, and any remaining
	tables in the database are not imported from Visual SourceSafe.
	
	NOTE: The Source Code Control component of Microsoft Access 97 is included with
	the Microsoft Office 97 Developer Edition Tools.
	
	This article assumes that you are familiar with using the client-side
	capabilities of Visual SourceSafe. For more information about Visual SourceSafe,
	please refer to the "Visual SourceSafe User's Guide" or Help topics available
	from the Visual SourceSafe Help menu.
	
	CAUSE
	=====
	
	When you check out the linked Microsoft Exchange or Microsoft Outlook table, it
	creates new system tables in the Microsoft Access database. When Visual
	SourceSafe tries to import the original system tables with the same name, an
	error occurs and check out stops.
	
	RESOLUTION
	==========
	
	The resolution contains two parts. First, you must recover data and design
	changes if you can. Second, you must prevent the error from occurring when you
	use links to Microsoft Exchange or Microsoft Outlook folders.
	
	Recovering Data After the Error
	-------------------------------
	
	Data and Misc. Objects contains the following Microsoft Access database
	components: tables, relationships, user-defined toolbars and menus, database
	properties, startup properties, import/export specifications, Microsoft Visual
	Basic project references, the project name of the database, and conditional
	compilation arguments.
	
	If you created the table links before you added the database to Visual
	SourceSafe, when the error occurs you must restore the database from a backup if
	there are any tables or other objects that are missing from the database.
	Because all of the Data and Misc. Objects are stored in Visual SourceSafe as a
	single binary object, you cannot retrieve missing objects individually. If you
	do not have a backup, delete the linked Microsoft Exchange or Microsoft Outlook
	tables, and then recreate any missing data, tables, table design changes, or
	other components.
	
	If you created the table links sometime after you added the database to Visual
	SourceSafe, and if Visual SourceSafe is configured to retain a history of your
	modifications, you can recover some or all of the data by following these
	steps:
	
	1. After you receive the error, the Data and Misc. Objects that were checked out
	  before the error message are still checked out in your database. On the Tools
	  menu, point to SourceSafe, and then click Undo Check Out. Undo the check out
	  for Data and Misc. Objects, and click Yes when prompted if you want to undo
	  checkout and lose changes. Note that you receive the same error messages
	  again when you undo the check out.
	
	2. If you have any other database objects checked out, check them back in as you
	  usually do.
	
	3. Make a backup copy of the database. You will import objects from this copy in
	  a later step.
	
	4. On the Tools menu, point to SourceSafe, and then click Show History.
	
	5. In the History dialog box, select the version before the one in which you
	  created the links to Microsoft Exchange or Microsoft Outlook, and then click
	  Rollback.
	
	  NOTE: Rolling back to an earlier revision will cause you to lose some of the
	  modifications you have made to your database. Rolling back to the version
	  immediately before the creation of the linked tables will minimize this loss.
	
	6. When the rollback is complete, check out Data and Misc. Objects.
	
	7. Recover missing design and data changes to Data and Misc. Objects by
	  importing objects or appending data from the backup database you created in
	  step 3. You must recreate any changes you cannot recover. Verify that each
	  component is fully restored and up-to-date in your rolled-back database
	  before you proceed with further development.
	
	Preventing the Error from Occurring
	-----------------------------------
	
	The only way to prevent the error is to name your links to Microsoft Exchange or
	Microsoft Outlook folders so they appear alphabetically after
	MSysExchangeTables. A good rule of thumb is to name those links starting with
	the letter N or higher.
	
	When you check out Data and Misc. Objects, the tables are imported
	alphabetically; if your linked tables start with the letter N or higher, the
	Microsoft Exchange system tables will already exist in the database when the
	linked table is imported by Visual SourceSafe. When the links are refreshed,
	Microsoft Access uses the existing system tables and does not try to create new
	ones.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Access 97. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When you first link to a Microsoft Exchange or Microsoft Outlook folder, three
	system tables are created in your database to manage the link:
	MSysExchangeColumns, MSysExchangeTables, and ExchangeTable000. Each subsequent
	link creates one new incremental system table: ExchangeTable001,
	ExchangeTable002, and so on.
	
	When you check in Data and Misc. Objects, Visual SourceSafe stores those system
	tables with your other tables. When you check out Data and Misc. Objects again,
	if your linked table occurs alphabetically before ExchangeTablexxx or
	MSysExchangeColumns, it is imported before those system tables. Because they
	don't exist in the database, those system tables are recreated when the table
	link is refreshed. Then Visual SourceSafe tries to import the copy of those
	system tables it has stored, and an error occurs because the tables already
	exist.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new blank database in Microsoft Access 97.
	
	2. Create a link to a Microsoft Exchange or Microsoft Outlook folder. Regardless
	  of the name of the folder you link to, name the linked table Contacts in
	  Microsoft Access. This ensures that it appears alphabetically in the Database
	  window before its supporting system tables.
	
	3. Create another table called Test. It can be an empty table, and only needs to
	  contain a single field. You do not need to create a primary key.
	
	4. On the Tools menu, point to SourceSafe, and then click Add Database to
	  SourceSafe. Add the database to a new SourceSafe project.
	
	5. Check out Data and Misc. Objects. Note that you receive the error message
	
	  Table 'ExchangeTable000' already exists
	
	  followed by
	
	  Failed to import file '<Database Name>' into Microsoft Access.
	
	  After you click OK, note also that the Test table is missing from the Database
	  window.
	
	REFERENCES
	==========
	
	For more information about installing and using the Microsoft Outlook/Exchange
	driver, please see the following articles in the Microsoft Knowledge Base:
	
	  Q159322 ACC97: Paradox, Lotus, & MS Exchange/Outlook ISAMs in ValuPack
	
	  Q161173 ACC97: MS Exchange ISAM Driver Requires Manual Registration
	
	  Q161174 ACC97: Sample Procedure to Attach a Microsoft Outlook Folder
	
	For more information about Microsoft Access system tables, search the Help Index
	for "system tables," or ask the Microsoft Access 97 Office Assistant.
	
	Additional query words: outlook exchange isam vss mail mapi attach
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbbuglist
	Technology        : kbSSafeSearch kbAudDeveloper kbAccessSearch kbAccess97 kbAccess97Search kbSSafe400 kbSSafe400a kbSSafe500
	Version           : 97
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

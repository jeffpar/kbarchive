---
layout: page
title: "Q110723: Documentation and Features for Visual Basic's 3.0 Data Manager"
permalink: kb/110/Q110723/
---

## Q110723: Documentation and Features for Visual Basic's 3.0 Data Manager

	Article: Q110723
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can run the DATAMGR.EXE Data Manager program as follows:
	
	- Choose Data Manager from the Window menu in Visual Basic, or
	
	- Run the DATAMGR.EXE program from the File Manager in Windows.
	
	The complete documentation for using Data Manager is found in Data Manager's Help
	menu. You can also run the DATAMGR.HLP Help file from File Manager in Windows.
	Visual Basic provides no printed documentation for Data Manager. Instead, you
	can print the topics from the Help menu.
	
	MORE INFORMATION
	================
	
	The DATAMGR.EXE Data Manager program provided with Visual Basic has the
	following features:
	
	- Open an existing database that has one of the following formats:
	
	   - Microsoft Access
	
	   - FoxPro version 2.0 or 2.5
	
	   - dBase III or dBase IV
	
	   - Paradox version 3.x
	
	   - BTRIEVE
	
	- Create a new database in Microsoft Access format (.MDB)
	
	- Create new tables in a database
	
	- Create an index in a table
	
	- Add fields to a table
	
	- Modify table data
	
	- Delete an existing table
	
	- Compact a database
	
	- Repair a database
	
	The Data Manager gives you a subset of the features found in Microsoft Access for
	Windows. Data Manager, Visual Basic, and Microsoft Access all have the same
	native database format, an .MDB file. A single .MDB file contains the database
	structure as well as the data itself.
	
	Introduction from Data Manager's Help Menu Topic
	------------------------------------------------
	
	The Visual Basic Data Manager allows Visual Basic users to create new databases
	(.MDB format) and examine or map the structure of existing external databases in
	a variety of formats. Formats that you can either create or modify with the Data
	Manager are shown below:
	
	  Database Format         Create     Modify
	  -----------------------------------------
	
	  Microsoft Access 1.0     Yes        Yes
	  Microsoft Access 1.1     Yes        Yes
	  Paradox 3.0 and 3.5       No        Yes
	  dBASE III and IV          No        Yes
	  FoxPro 2.0 and 2.5        No        Yes
	  Btrieve                   No        Yes
	
	Visual Basic shares its database engine with Microsoft Access, so databases
	created with Visual Basic or the Data Manager can be manipulated using Microsoft
	Access. In addition, databases created with Microsoft Access can be manipulated
	using Visual Basic and the Data Manager. Throughout the Visual Basic
	documentation, databases created with that engine are referred to as Visual
	Basic databases.
	
	For additional information on using external databases, see the file EXTERNAL.TXT
	or BTRIEVE.TXT supplied with Visual Basic.
	
	Many external databases exist as directories on your disk. To create databases in
	these formats, use the File Manager to create a directory that will become the
	database. Once the database directory is created, use the Data Manager to add
	tables and indexes, which become files in this directory.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : :3.0
	
	=============================================================================
	

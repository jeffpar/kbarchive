---
layout: page
title: "Q163843: INFO: Managing Linked Tables When You Create a New DB from VSS"
permalink: /kb/163/Q163843/
---

## Q163843: INFO: Managing Linked Tables When You Create a New DB from VSS

{% raw %}

	Article: Q163843
	Product(s): Microsoft SourceSafe
	Version(s): 97
	Operating System(s): 
	Keyword(s): kbinterop kbusage kbAccess kbSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	Microsoft Visual SourceSafe integration with Microsoft Access enables you to
	create a database from the SourceSafe server. This feature enables users to
	create additional copies of a shared project on different workstations or
	folders.
	
	This article discusses methods for maintaining linked tables when you create a
	new database from a Visual SourceSafe project.
	
	This article assumes that you are familiar with using the client and server side
	capabilities of Visual SourceSafe. For more information about Visual SourceSafe,
	please refer to the "Visual SourceSafe User's Guide" or the Help topics
	available from the Visual SourceSafe Help menu.
	
	MORE INFORMATION
	================
	
	When you create a new database from a project on a Visual SourceSafe server, any
	linked tables in the database are refreshed as the table definitions are
	created. Microsoft Access expects to find the exact configuration on the target
	workstation with respect to the location of the linked tables or in the case of
	linked ODBC tables, the exact DSN and configuration to connect to the ODBC data
	source successfully.
	
	If the required folder, database file, or ODBC data source is not found as the
	linked table is being created, the following error occurs:
	
	  An error occurred while trying to create the linked table '<Table
	  Name>'
	
	The error indicates that the table definition could not be created and will not
	exist in the new database. It is important to note that the table still exists
	in the SourceSafe project on the server and that the new database is not a true
	reflection of the project; this situation must be corrected.
	
	The following sections discuss techniques you can use to relink the tables in
	your database.
	
	Links to ODBC Data Sources
	--------------------------
	
	You can create a procedure that uses the RegisterDatabase method to create an
	ODBC data source for a linked table. Create the code module in your database and
	check it in to the Visual SourceSafe project; then when you create a new
	database from that project on another workstation, the database will contain the
	necessary code to refresh its linked ODBC tables.
	
	NOTE: If ODBC is not installed on the target workstation when you create a new
	database from a Visual SourceSafe project, you must install ODBC and the ODBC
	drivers your database uses before you can refresh linked ODBC tables.
	
	For an example of a procedure that programmatically creates ODBC data sources and
	refreshes linked tables, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q159691 INF: Procedure to Create Data Sources and Relink ODBC Tables
	
	Follow these steps to recreate ODBC links and resolve conflicts with the
	SourceSafe project when you create a new database:
	
	1. Create your custom procedure for creating ODBC data sources and refreshing
	  your linked tables, and check it in to the Visual SourceSafe project.
	
	2. On another workstation, start Microsoft Access and create a new database from
	  the Visual SourceSafe project by pointing to SourceSafe on the Tools menu,
	  and then clicking Create Database from SourceSafe Project.
	
	3. As the database is created, you receive the following error for any linked
	  ODBC tables that Microsoft Access cannot refresh:
	
	  An error occurred while trying to create the linked table '<Table
	  Name>'.
	
	  Respond to all error messages and finish creating the database.
	
	4. Execute your custom procedure to create ODBC data sources and refresh the
	  linked tables.
	
	5. Check out Data and Misc. Objects. If the object checks out successfully, your
	  database is synchronized with the files on the Visual SourceSafe server. You
	  can check in Data and Misc. Objects, or leave it checked out and work on the
	  project.
	
	Links That Use the Microsoft Jet Database Engine
	------------------------------------------------
	
	When you create a database from a Visual SourceSafe project that contains links
	to Microsoft Access, Microsoft FoxPro, dBASE or any of the other file formats
	supported by the Jet database engine, you receive one of the following error
	messages if Microsoft Access cannot locate the linked table:
	
	  Couldn't find file '<File Name>'.
	
	-or-
	
	  The Microsoft Jet database engine could not find the object '<File
	  Name>'. Make sure the object exists and that you spell its name and the
	  path name correctly.
	
	This is followed by:
	
	  An error occurred while trying to create the linked table '<Table
	  Name>'.
	
	This happens if the path to the linked table file is different on the workstation
	than it is on the computer where the table links were created, or if the linked
	file has been moved.
	
	For example, the following steps cause an error when you create a new database
	from a Visual SourceSafe project:
	
	1. Create a new database with a link to a dBASE file called
	  C:\MyFolder\MyFile.dbf.
	
	2. Place the database under source code control.
	
	3. On another workstation, create a new database from the VSS project. When
	  Microsoft Access tries to create the linked dBASE table, it looks for a file
	  called C:\MyFolder\MyFile.dbf. If that file does not exist on the
	  workstation, an error occurs.
	
	To avoid this problem, place the dBASE file in a shared network location before
	you create the linked table. When you link to the file, use the UNC name (such
	as \\MyServer\MyFolder\MyFile.dbf), or use a mapped drive letter that will be
	the same on all workstations (such as G:\MyFile.dbf). Then when you place the
	database under source code control and create a new database from the Visual
	SourceSafe project on another workstation, Microsoft Access will find the file
	and successfully create the linked table. If you use this method, and you still
	receive error messages when you create a new database:
	
	- Check that the workstation has installed the correct drivers in Microsoft
	  Access to link to the table. If not, run Setup to install the necessary
	  drivers.
	
	- Verify that the workstation can access the network server via the UNC name or
	  mapped drive letter (\\MyServer\MyFolder or G:), and that the correct
	  permissions exist on that share to allow the workstation to read the file.
	
	Once you resolve the connection issues to the linked file, check out Data and
	Misc. Objects in the new database. If all the linked tables check out
	successfully, your database is synchronized with the files on the Visual
	SourceSafe server. You can check in Data and Misc. Objects, or leave it checked
	out and work on the project.
	
	Additional query words: VSS SS ACCSCC attach
	
	======================================================================
	Keywords          : kbinterop kbusage kbAccess kbSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbAccessSearch kbAccess97 kbAccess97Search kbSSafe400 kbSSafe400a kbSSafe500
	Version           : 97
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}

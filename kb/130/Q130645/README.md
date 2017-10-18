---
layout: page
title: "Q130645: How to Use DAO to Assign or View Permissions"
permalink: kb/130/Q130645/
---

## Q130645: How to Use DAO to Assign or View Permissions

	Article: Q130645
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Visual Basic version 4.0, you can assign permissions to database
	objects in a program by using data access objects (DAO). This article shows you
	how.
	
	MORE INFORMATION
	================
	
	Steps to Secure Database
	------------------------
	
	Securing a database involves these steps:
	
	1. Create group accounts. For information on how to do this, please see the
	  CreateGroup method in the Visual Basic Help menu.
	
	2. Create user accounts. For information on how to do this, please see the
	  CreateUser method in the Visual Basic Help menu.
	
	3. Assign users to groups.
	
	4. Assign permissions on database objects to users and groups. This article
	  describes this step in detail.
	
	5. Encrypt the database, if desired. For information on how to do this, please
	  see options:dbEncrypt under the CompactDatabase and CreateDatabase methods in
	  the Visual Basic Help menu.
	
	Assigning Permissions on Database Objects to Users and Groups
	-------------------------------------------------------------
	
	To assign permissions for an object, you must reference the UserName and
	Permissions properties of the object's document. All database objects can be
	treated as documents in a container. For example, suppose you have this DB
	variable assignment:
	
	     Dim DB As Database
	     Set DB = DBEngine.Workspaces(0).Opendatabase("Biblio.mdb")
	
	A table called Authors can be referred to using DAO as follows:
	
	     DB.Containers("Tables").Documents("Authors")
	
	However, it is usually easier to assign and work with object variables:
	
	     Dim DB as Database, DOC as Document
	     Set DB = DBEngine.Workspaces(0).OpenDatabase("Biblio.MDB")
	     Set DOC = DB.Containers("Tables").Documents("Authors")
	
	You can reference the UserName and Permissions properties of the Table1 document
	directly by using this code:
	
	     UserNameVariable = DOC.UserName
	     PermissionsVariable = DOC.Permissions
	
	-or-
	
	     DOC.UserName = "MyUser"
	     DOC.Permissions = dbSecFullAccess
	
	Reading Permissions Information
	-------------------------------
	
	To read the permissions that a given user or group has on an object, set the
	UserName property of the document to that user or group name, and then read the
	value of the Permissions property.
	
	NOTE: To use the following examples, you must already have a database with
	security established. That is, a SYSTEM.MDA file exists.
	
	The following example shows how to read the permissions for the user John on
	table TestTable:
	
	     Dim DB as Database, DOC as Document, HisPermissions as Long
	     Set DB = DBEngine.Workspaces(0).Opendatabase("Test.MDB")
	     Set DOC = DB.Containers("Tables").Documents("TestTable")
	     DOC.UserName = "John"
	     HisPermissions = DOC.Permissions
	
	NOTE: Whether you inquire about a group or a user, you still set the UserName
	property. There is no GroupName property for a document.
	
	Assigning Permissions Information
	---------------------------------
	
	To assign permissions for a user on an object, set the UserName property of the
	document to the name of the user or group. Then set the Permissions property of
	the document to the appropriate value.
	
	Generally, you should use the predefined constants when you assign permissions.
	For a complete list of the predefined constants, search under DAO for constants
	starting with 'dbSec' in the Object Browser.
	
	The following example shows how to assign Full permissions on the Employees table
	for a user named Martha:
	
	     Dim DB as Database, DOC as Document
	     Set DB = DBEngine.Workspaces(0).Opendatabase("TestDB.MDB")
	     Set DOC = DB.Containers("Tables").Documents("Employees")
	     DOC.UserName = "Martha"
	     DOC.Permissions = dbSecFullAccess
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	
	=============================================================================
	

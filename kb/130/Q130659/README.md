---
layout: page
title: "Q130659: PRB: &quot;The database must be opened exclusively&quot; Multiuser Error"
permalink: kb/130/Q130659/
---

## Q130659: PRB: &quot;The database must be opened exclusively&quot; Multiuser Error

	Article: Q130659
	Product(s): Microsoft FoxPro
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprogramming
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a multiuser situation, when you perform tasks that affect the contents of a
	database (.DBC file), the error "The database must be opened exclusively" is
	displayed.
	
	CAUSE
	=====
	
	The command requires exclusive access to the database. Several commands that
	create or modify database objects require that the database not be shared--at
	design time or run time.
	
	This error may also occur at run time in an application or EXE if you have
	included the database(s) in the project. By including the database(s) in the
	project, you have caused them to be read-only, and you will not be able to
	properly validate the database. In this situation, it is possible for ISE
	CLUSIVE() to return a .T. (true) value and still get the error message described
	above.
	
	WORKAROUND
	==========
	
	If you receive the error "The database must be opened exclusively" at design
	time, all developers must close the database before you can proceed.
	
	To prevent this error from occurring at run time when manipulating views or
	connections, create a local database for each user. All users will have
	exclusive access to their database, and will also be able to update the table
	records contained in a centralized, shared database.
	
	To verify whether or not a database is open exclusively, use the ISEXCLUSIVE()
	function. The syntax for the ISEXCLUSIVE() function is:
	
	  ISEXCLUSIVE([cTableAlias | nWorkArea | cDatabaseName [, nType]])
	
	When the nType parameter has a value of 2, the function returns the exclusive
	status for a database. The following example code makes sure the database is
	open exclusively before using the INDEX ON command:
	
	     CLOSE ALL
	     OPEN DATABASE SYS(2004)+"SAMPLES\DATA\TESTDATA"
	     SELECT 0
	     USE CUSTOMER
	     IF ISEXCLUSIVE('testdata',2)
	        INDEX ON CITY TAG CITY
	        ELSE
	        =MESSAGEBOX("Database must be opened Exclusively")
	     ENDIF
	     CLOSE DATABASE
	
	NOTE: The above code uses CLOSE ALL to close all the files so that the database
	can be opened but not selected, making the CLOSE DATABASE command useless. Of
	course using CLOSE DATABASE ALL might not be helpful if only one database needs
	to be closed. Therefore, issue the following code to select a certain database
	to close and reopen:
	
	     SET DATABASE TO <dbc name>
	     CLOSE DATABASE
	     OPEN DATABASE <dbc name> EXCLUSIVE
	
	This ensures that the correct database container is selected, closed, and
	reopened.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	If a view or a table contained in a database is open for shared use, the
	database is also shared. Therefore, all multiuser applications require that a
	database be shared.
	
	However, commands that directly relate to the database (.DBC file) structure and
	commands that involve the creation or deletion of objects require exclusive use
	of the database. These commands include:
	
	  CREATE TABLE
	  MODIFY STRUCTURE
	  ALTER TABLE
	  ADD TABLE
	  RENAME TABLE
	
	  CREATE SQL VIEW
	  MODIFY VIEW
	  DELETE VIEW
	  RENAME VIEW
	
	  CREATE CONNECTION
	  MODIFY CONNECTION
	  DELETE CONNECTION
	  RENAME CONNECTION
	
	  INDEX ON && You can however use INDEX ON on a view
	  DELETE TAG
	
	  CREATE TRIGGER
	  DELETE TRIGGER
	
	  APPEND PROCEDURES
	  COPY PROCEDURES
	  MODIFY PROCEDURE
	
	  COMPILE DATABASE
	  PACK DATABASE
	  VALIDATE DATABASE
	
	Additional query words: denied
	
	======================================================================
	Keywords          : kbnetwork kbprogramming 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP500a
	Version           : 3.0
	Issue type        : kbprb
	
	=============================================================================
	

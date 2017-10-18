---
layout: page
title: "Q129400: FREE TABLE Command Removes Table from Corrupted Database"
permalink: kb/129/Q129400/
---

## Q129400: FREE TABLE Command Removes Table from Corrupted Database

	Article: Q129400
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbcode kberrmsg
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FREE TABLE command removes a table from a database. The purpose of this
	command is to provide a programmatic way to remove a table from a corrupted
	database.
	
	You should normally use REMOVE TABLE to remove a table from a database that is
	not corrupted.
	
	MORE INFORMATION
	================
	
	If FREE TABLE is used to remove a table from a database that is not corrupted,
	the Table Designer window still displays the table. However, the table is no
	longer really part of the database, and issuing the VALIDATE DATABASE command
	causes the following error message to be displayed:
	
	  Validate Database database name
	  Rebuilding Structural Index.....Index Rebuilt
	  Object #N(Table 'table name'): table is not in database
	
	Also, attempting to browse or modify the table causes the error message to be
	displayed:
	
	  Table <table name> is not marked as belonging to <database name>
	  database.
	  Would you like to create the back link to mark it?
	
	Answering Yes to this question recreates the back link of the table to the
	database and issuing the VALIDATE DATABASE command returns the message "Database
	container is valid". The table is now part of the database again.
	
	Example Usage of the FREE TABLE Command
	---------------------------------------
	
	CAUTION: Performing this example will corrupt the TESTDATA.DBC database in the
	SAMPLE subdirectory.
	
	1. First corrupt a database by running the following:
	
	        SET DEFAULT TO c:\vfp\samples\data
	        USE testdata.dbc
	        GO TOP
	        DELETE            && Delete one record of the .DBC.
	        USE               && Now TESTDATA cannot be opened as a database
	
	2. Run the following program which has an on error routine to trap for a damaged
	  database. If this program is run without the error routine, the message
	  "Testdata.DBC is not a database" will be returned.
	
	        SET PROCEDURE TO freetabl      && FREETABL is the name of the program
	
	        ON ERROR DO errhand WITH ERROR()
	        * The next line should cause an error because the first record
	        * was deleted from TESTDATA.DBC
	
	        OPEN DATA testdata
	        USE customer
	        USE products IN 0
	        USE orders IN 0
	        USE orditems IN 0
	        USE employee IN 0
	
	        ON ERROR  && restore system error handler
	
	        PROCEDURE errhand
	          PARAMETER merror
	          WAIT WINDOW STR(merror)
	          IF merror=1552
	            FREE TABLE customer      && Allows the tables to be opened
	            FREE TABLE orders        && by freeing them from the corrupted
	            FREE TABLE products      && DATABASE
	            FREE TABLE orditems
	            FREE TABLE employee
	          ENDIF
	
	Additional query words: VFoxWin errmsg
	
	======================================================================
	Keywords          : kbcode kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	

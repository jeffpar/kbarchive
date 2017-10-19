---
layout: page
title: "Q142242: DOC: Create SQL View Incorrectly Documented"
permalink: /kb/142/Q142242/
---

## Q142242: DOC: Create SQL View Incorrectly Documented

	Article: Q142242
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbdocfix
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A view created on a local table in the currently selected database container
	doesn't keep a reference to the database. The Table property of a cursor can be
	used to view this.
	
	CAUSE
	=====
	
	The Visual FoxPro 3.0 Help file and printed documentation for the CREATE SQL
	VIEW command incorrectly implies that you can properly create a view to a local
	table in the current database without specifying the database name in the SELECT
	statement. The documentation states that for tables in other databases, you must
	use the database name and table name separated by an exclamation mark (!).
	
	The correct method is for the database name to always be prepended to the table
	name. The database name is not automatically appended to the table name even
	when the table is in the currently selected database.
	
	Correct:
	
	     Create SQL View myview as Select * from mydbc!mytable
	
	Incorrect:
	
	     Create SQL View myview as Select * from mytable
	
	The incorrect code will work but the view created with the incorrect syntax may
	cause an error or unexpected results if you have multiple databases containing
	the same table name. It can also cause a problem with the Upsizing Wizard, which
	expects the correct syntax of dbc!table.
	
	NOTE: Views created visually in the View Designer are created properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	This documentation error has been fixed in Visual FoxPro 3.0b and 5.0 for
	Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	The following example highlights the fact that the database name isn't
	automatically picked up just because the table is in the current .dbc file.
	
	1. Run the following code:
	
	     CLOSE DATABASE
	     CREATE DATABASE testdbc
	     CREATE TABLE tbl2 (source C(20) PRIMARY KEY, num n(3))
	     CREATE TABLE tbl1 (Link C(20) REFERENCES tbl2, num n(3))
	     INSERT INTO tbl2 (source,num) VALUES ("Smith",1)
	     INSERT INTO tbl2 (source,num) VALUES ("Jones",1)
	     INSERT INTO tbl1 (link,num) VALUES ("Smith",1)
	     INSERT INTO tbl1 (link,num) VALUES ("Smith",2)
	     INSERT INTO tbl1 (link,num) VALUES ("Jones",1)
	     INSERT INTO tbl1 (link,num) VALUES ("Jones",2)
	     MODIFY DATA NOWAIT
	
	2. In the data designer, right-click, and then create and save a new local view
	  called Designer View against one of the tables.
	
	3. In the Command window, type each of the following commands:
	
	     CREATE SQL VIEW 'prog view' as SELECT * FROM tbl2
	     ?DBGetProp('designer view', 'view', 'table')
	     ?DBGetProp('prog view', 'view', 'table')
	
	  The second command returns testdbc!<tblname>, but the third just returns
	  the table name.
	
	Additional query words: docerr VFoxWin 5.00
	
	======================================================================
	Keywords          : kbdocfix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

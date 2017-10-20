---
layout: page
title: "Q130601: How to Create a Primary Index in a Visual FoxPro Program"
permalink: /kb/130/Q130601/
---

## Q130601: How to Create a Primary Index in a Visual FoxPro Program

{% raw %}

	Article: Q130601
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Visual FoxPro has a new index type, Primary. The Primary index,
	however, cannot be created in a program by using the INDEX command. This article
	shows by example how to add or modify a Primary index in a program.
	
	MORE INFORMATION
	================
	
	A Primary index is an index that never permits duplicate values on the specified
	field or expression. The Primary index may be established in the database
	container interface or in a program by using the CREATE TABLE or ALTER TABLE
	command.
	
	A table with a Primary index must be part of a database and cannot be a free
	table. The first example shows how to create a table with a Primary index. The
	second example shows how to alter an existing table to change a Primary key. The
	third example adds a Primary index to an existing table.
	
	Example 1 - Create a New Table with a Primary Index
	---------------------------------------------------
	
	1. Create a new database, or open an existing one.
	
	2. Issue the following command in the Command window to create a table with a
	  Primary index on the cSsn key field:
	
	     CREATE TABLE employee (cSsn C(11) PRIMARY KEY, cLast C(20),;
	        cFirst C(20))
	
	Example 2 - Modify an Existing Table to change a Primary Index
	--------------------------------------------------------------
	
	1. Open the database used in example 1.
	
	2. Issue the following command from the Command window to move the Primary index
	  from the cSsn field to the cLast field:
	
	     ALTER TABLE employee DROP PRIMARY KEY ADD PRIMARY KEY cLast TAG cLast
	
	Example 3 - Modify an Existing Table to add a Primary Index
	-----------------------------------------------------------
	
	1. Add a new table to an existing database with this command:
	
	     CREATE TABLE noprime (cLast C(20))
	
	2. From the Command window, add a Primary index to the existing table by using
	  one of the following commands:
	
	     ALTER TABLE noprime ADD PRIMARY KEY cLast TAG cLast
	
	  -or-
	
	     ALTER TABLE noprime ALTER COLUMN cLast C(20) PRIMARY KEY
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}

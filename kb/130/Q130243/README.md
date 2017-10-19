---
layout: page
title: "Q130243: How to Create Persistent Relations Using ALTER TABLE SQL"
permalink: /kb/130/Q130243/
---

## Q130243: How to Create Persistent Relations Using ALTER TABLE SQL

	Article: Q130243
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To create a persistent relation after tables are created, you can use the ALTER
	TABLE SQL command and its associated clauses.
	
	MORE INFORMATION
	================
	
	A persistent relation must meet these requirements:
	
	- The tables participating in the persistent relation must reside in a .DBC
	  file because a persistent relation is considered a property of the DBC. Each
	  persistent relation is a record in the DBC.
	
	- The parent table must have primary-key type of index.
	
	The ALTER TABLE SQL command can only operate on existing tables, and persistent
	relations can only exist in a DBC. Therefore, you must first create a database
	containing two tables, as in this example:
	
	     CREATE DATABASE pr_dbc
	     CREATE TABLE pr_Parent (cid c(3), cfld2 c(3))
	     CREATE TABLE pr_Child (cid c(3), cfld2 c(3), cfld3 c(3))
	     MODIFY DATABASE
	
	Example One: Using the ALTER TABLE SQL Command to Create a Persistent Table
	---------------------------------------------------------------------------
	
	     ALTER TABLE pr_Parent ADD PRIMARY KEY cid TAG p_cid
	     ALTER TABLE pr_Child ALTER COLUMN cid c(3) ;
	        REFERENCES pr_Parent TAG p_cid
	
	Explanation:
	
	The first line of code adds a primary key index to the pr_Parent table with the
	ADD PRIMARY KEY clause. The first portion of ADD PRIMARY KEY identifies the
	field (cid) or expression that is to be indexed. The second portion, the TAG
	clause, allows a name to be specified for the index. This clause is required if
	the ADD PRIMARY KEY <expression> is anything other than a column name. If
	the ADD PRIMARY KEY <expression> is a column name and the TAG clause is
	not used, Visual FoxPro, by default, uses the column name as a TAG name.
	
	The second line of code adds an ordinary index to the pr_child table on the
	column (cid) specified in the ALTER COLUMN clause. The REFERENCE clause
	identifies the parent table (pr_Parent) of the relation. The TAG portion of the
	REFERENCES clause is optional if there already is a primary key existing in the
	specified parent table.
	
	If the primary key had is not predefined in the parent table and the TAG clause
	is not used, Visual FoxPro generates this error message:
	
	  No Primary Key.
	
	In addition, the relation is not established, but the TAG is still created in the
	child table. The TAG clause is more for readability than any other reason, it
	doesn't serve any other function here.
	
	Example Two: Using the ALTER TABLE SQL Command to Create a Persistent Table
	---------------------------------------------------------------------------
	
	     ALTER TABLE pr_Parent ALTER COLUMN cid c(3) PRIMARY KEY
	     ALTER TABLE pr_Child ALTER COLUMN cid c(3) ;
	        ADD FOREIGN KEY cid TAG cc_id REFERENCES ar_parent TAG cid
	
	Explanation:
	
	The first line of code adds a primary key index based on the cid column with the
	default name of cid. This method does not provide a method of naming the TAG, to
	name the tag see the first line of example one.
	
	The second line establishes the persistent relation between pr_Child and
	pr_Parent. It creates an index TAG on the column (cid) specified in the ADD
	FOREIGN KEY clause of the command. The TAG clause, is required here and can be
	used to give the TAG a more descriptive name.
	
	The REFERENCES clause specifies the table that is to be the parent. The TAG
	portion of the REFERENCES clause is optional if there is already a primary key
	existing in the specified parent table. If the primary key is not predefined in
	the parent table and the TAG clause is not used, Visual FoxPro generates this
	error message:
	
	  No Primary Key.
	
	NOTE: The TAG clause is more for readability than any other reason, it doesn't
	serve any other function here. Also, the ALTER COLUMN clause is optional.
	Therefore, the second command could be:
	
	     ALTER TABLE pr_Child ADD FOREIGN KEY cid TAG cc_id ;
	        REFERENCES ar_parent
	
	Note that the TAG portion of the REFERENCES clause was also dropped.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

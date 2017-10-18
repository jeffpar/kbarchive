---
layout: page
title: "Q131265: Use Exclamation Mark (!) Notation for Precise Referencing"
permalink: kb/131/Q131265/
---

## Q131265: Use Exclamation Mark (!) Notation for Precise Referencing

	Article: Q131265
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Use the exclamation mark (!) notation to reference tables in databases (.DBC
	files). Use it to reference tables that have the same names but that exist in
	different databases, and use it to make code more readable. Its main purpose is
	to guarantee the opening of a specific table.
	
	MORE INFORMATION
	================
	
	Here is the syntax:
	
	     USE <cDatabase_name>!<cTable_name>
	
	NOTE: Do not put spaces on either side of the exclamation mark.
	
	Step-by-Step Example
	--------------------
	
	1. Create the following directory structure:
	
	  C:\MAIN
	  C:\MAIN\ONE
	  C:\MAIN\TWO
	
	  This can be done Visual FoxPro by issuing these commands:
	
	  CD C:\ 
	  MD MAIN
	  CD C:\MAIN
	  MD ONE
	  MD TWO
	
	2. Issue the following commands in the Command Window:
	
	     CD C:\MAIN\ONE
	     CREATE TABLE tb_mytbl (fld1 c(10))
	     CD C:\MAIN\TWO
	     CREATE TABLE tb_mytbl (fld1 c(10))
	     USE
	     CD C:\MAIN
	     CREATE DATABASE db_one
	     ADD TABLE C:\MAIN\ONE\tb_mytbl
	     CREATE DATABASE db_two
	     ADD TABLE C:\MAIN\ONE\tb_mytbl
	     SET DATABASE TO db_one
	
	  These commands set up a scenario where a database named db_one contains a
	  table named tb_mytbl, which is located in the C:\MAIN\ONE directory. Another
	  database named db_two contains a different table named tb_mytbl, which is
	  located in the C:\MAIN\TWO directory.
	
	  The issue is to open the tb_mytbl table in the db_two database. The current
	  database is db_one, so you can't use this command:
	
	        USE tb_mytbl
	
	  It would open the table in db_one located in C:\MAIN\ONE.
	
	3. Open the tb_mytbl table in the db_two database by using this command:
	
	     USE db_two!tb_mytbl
	
	The exclamation mark (!) notation works in the same manner for long table names,
	and it makes code more readable. The notation makes it clear exactly which
	database holds the table of interest. It is especially useful in SQL-SELECT
	statements.
	
	Additional query words: VFoxWin !-symbol bang symbol
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

---
layout: page
title: "Q98434: Using Wildcard Characters in SQL Statements"
permalink: kb/098/Q98434/
---

## Q98434: Using Wildcard Characters in SQL Statements

	Article: Q98434
	Product(s): Microsoft FoxPro
	Version(s): 2.00 2.50 2.50a | 2.50 2.50a 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To broaden the selections of a structured query language (SQL) statement, two
	wildcard characters, the percent sign (%) and the underscore (_), can be used.
	
	The percent sign is analogous to the asterisk (*) wildcard character used with
	MS-DOS. The percent sign allows for the substitution of one or more characters
	in a field.
	
	The underscore is similar to the MS-DOS wildcard question mark (?) character. The
	underscore allows for the substitution of a single character in an expression.
	Three examples showing the use of these characters in SQL statements are
	provided below. The examples use the CLIENTS.DBF file that is provided with
	FoxPro.
	
	MORE INFORMATION
	================
	
	The following SELECT statement returns all the records from the CLIENTS.DBF file
	that contain an "N" as the first character in the STATE field. The SELECT
	statement lists the records from New York and New Jersey in a Browse window.
	
	     SELECT * FROM clients WHERE state LIKE "N_"
	
	The following SELECT statement lists all the records that have an "X" or a "Y" as
	the last character in the STATE field. The output will include records from New
	York and Texas.
	
	     SELECT * FROM clients WHERE state LIKE "_Y" OR state LIKE "_X"
	
	The following SELECT statement uses the percent sign and underscore to return all
	the records that have a CLIENT_ID number starting with "C" and that have a state
	abbreviation ending in "X". Note that the percent sign allows any string of
	characters to follow the "C". Conversely, the underscore allows the substitution
	of only a single character.
	
	     SELECT * FROM CLIENTS WHERE CLIENTS.CLIENT_ID LIKE "C%" ;
	     AND CLIENTS.STATE LIKE "_X"
	
	To do a string search similar to the one performed by the $ function, use a
	statement like:
	
	     SELECT * FROM CUSTOMER WHERE CUSTOMER.COMPANY LIKE "%X%"
	
	This SELECT statement will find all companies with names that contain the letter
	"x".
	
	REFERENCES
	==========
	
	"Developer's Guide," version 2.0, page D7-9
	"Developer's Guide," version 2.5, page D7-9
	Visual FoxPro Help version 5.0; search on: "SELECT - SQL"
	Visual FoxPro Help version 6.0: search on: "Tools"; Topic: menu pad
	
	Additional query words: VFoxWin FoxDos FoxWin wild card select kbvfp300 kbvfp500 kbvfp600 search
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300 kbVFP500 kbVFP600
	Version           : 2.00 2.50 2.50a | 2.50 2.50a 3.0
	
	=============================================================================
	

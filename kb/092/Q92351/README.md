---
layout: page
title: "Q92351: Using the JOIN Command in FoxBASE+"
permalink: kb/092/Q92351/
---

## Q92351: Using the JOIN Command in FoxBASE+

	Article: Q92351
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MS-DOS:2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for MS-DOS, version 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FoxBASE+ JOIN command creates a new database by combining two other
	databases. The JOIN combines the current database with another that is
	identified by its work area number or alias, designated by <expN> or
	<expC>.
	
	JOIN positions the record pointer on the first record in the current database and
	evaluates the FOR <expL> expression for each record in the second
	database. If <expL> evaluates to be true, JOIN writes a record into the
	new file. The process repeats for each record in the current database.
	
	MORE INFORMATION
	================
	
	The syntax for the JOIN command is as follows:
	
	     JOIN WITH <expN> | <expC>
	        TO <file>
	        FOR <expL>
	        FIELDS <field list>
	
	  <expN> | <expC>
	
	  This parameter specifies the work area number <expN>, or the database
	  alias <expC>.
	
	  TO <file>
	
	  This parameter specifies the name of the newly created database.
	
	  FOR <expL>
	
	  This parameter specifies the parameter to evaluate for each record. If
	  <expL> is true, JOIN writes a record in the new database.
	
	  FIELDS <field list>
	
	  This parameter specifies the fields to include in the records of the new
	  database. The field list may include fields from both the current database
	  and the second database. If no FIELDS clause is specified, records of the new
	  database include all fields in the record in the active database, and as many
	  fields from the second database that fit in the FoxBASE+ field limit.
	
	The time required to execute a JOIN command may be very large depending on the
	sizes of the specified database files and on the <expL> expression. The
	JOIN command may also exhaust available disk space even when the databases have
	modest size.
	
	The text below demonstrates joining the custno and invcno databases on the cno
	field:
	
	     SELECT 1
	     USE customer INDEX custcno
	     SELECT 2
	     USE invoice INDEX invcno
	     SELECT 1
	     JOIN WITH invoice TO newfile FOR customer.cno=invoice.cno ;
	          FIELDS customer.cno, customer.company, invoice.ino
	     USE newfile
	     DISPLAY STRUCTURE
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE210DOS kbFoxBASESearch
	Version           : MS-DOS:2.1
	
	=============================================================================
	

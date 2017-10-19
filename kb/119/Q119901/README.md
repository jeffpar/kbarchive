---
layout: page
title: "Q119901: How to Use the UNION Clause in a FoxPro SELECT Statement"
permalink: /kb/119/Q119901/
---

## Q119901: How to Use the UNION Clause in a FoxPro SELECT Statement

	Article: Q119901
	Product(s): Microsoft FoxPro
	Version(s): 2.00 2.5x 2.60 2.60a | 2.5x 2.60
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6, 2.6a 
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6, 2.6a 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	- Microsoft FoxPro for UNIX, version 2.6 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The UNION clause is used to join the results of multiple queries. However, the
	UNION clause is not supported by the Relational Query By Example (RQBE) tool
	because the RQBE tool does not support multiple or nested queries. Therefore, to
	perform queries of this type, the SELECT statement must be coded by hand.
	
	MORE INFORMATION
	================
	
	The UNION clause is a very important clause in the SELECT statement because it
	allows you to append the results of a query to the results of another query. The
	syntax is:
	
	  UNION [ALL] <SELECT statement>
	
	The ALL clause prevents UNION from eliminating duplicate rows from the combined
	results of the tables.
	
	NOTE: There is no limit to the number of UNION clauses that can be used, except
	that the whole SELECT statement is limited to 2048 characters.
	
	There are three rules you need to follow when using a UNION clause. They are as
	follows:
	
	1. A UNION clause cannot be used to join nested SELECT statements.
	
	2. If an ORDER BY or an INTO clause is used, it must be placed in the last
	  SELECT statement.
	
	3. SELECT statements joined with a UNION clause must have identical structures
	  for the resulting tables of both statements.
	
	The last rule is very important to keep in mind because you may need to join two
	tables that have different structures. For example, one of the tables may
	contain a memo field while the other does not. In this case, you have two
	options. If the information in the field is not needed, do not include that
	particular field in the SELECT statement. If the field is needed, insert a
	placeholder in the SELECT statement for the other table. The placeholders for
	the different data types are as follows:
	
	  Numeric:   0
	  Character: " "
	  Date:      {}
	  Logical:   .F.
	  Memo:      Not available. Use workaround described below.
	
	To create a placeholder for a memo field:
	
	1. Create a database called HOLDMEMO with only one field: a memo field called
	  PLACEHOLD.
	
	2. USE the database.
	
	3. In the Command window, type:
	
	        APPEND BLANK
	
	Now that the placeholder has been created, it has to be added to the SELECT
	statement. Here is an example of using a memo field placeholder with the
	CUSTOMER.DBF file:
	
	     SELECT *,placehold FROM customer, holdmemo INTO CURSOR test
	
	The resulting query will have a blank memo field as the last field for each
	record. This behavior occurs because there is not a join condition for the
	databases, which creates a Cartesian product. In other words, each record in the
	first table is matched with each record in the second table.
	
	For another example of the UNION clause, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q89181 Outer Join Syntax Example for SELECT-SQL Statement
	
	REFERENCES
	==========
	
	FoxPro "Language Reference," see "SELECT-SQL"
	
	"Using FoxPro 2.5 for Windows," Que Publishing, pages 266-267
	
	Additional query words: VFoxWin FoxUnix FoxMac FoxDos FoxWin SQL outer join combine outerjoin 2.50 2.50a 2.50b 2.50c
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro200DOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260UNIX kbFoxPro260 kbFoxPro260a kbVFP300
	Version           : 2.00 2.5x 2.60 2.60a | 2.5x 2.60
	
	=============================================================================
	

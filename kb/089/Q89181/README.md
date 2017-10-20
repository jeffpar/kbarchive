---
layout: page
title: "Q89181: Outer Join Syntax Example for SELECT-SQL Statement"
permalink: /kb/089/Q89181/
---

## Q89181: Outer Join Syntax Example for SELECT-SQL Statement

{% raw %}

	Article: Q89181
	Product(s): Microsoft FoxPro
	Version(s): 2.5x 2.6x 3.00 | 2.00 2.5x 2.6x
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6x 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When FoxPro Relational Query By Example (RQBE) is used to join two databases, a
	record in the parent database that does not have any corresponding record in the
	child database is omitted from the joined database. However, under some
	circumstances, this is not the desired behavior. The text below details how to
	perform an "outer join" that preserves all records in the parent database.
	
	NOTE: The RQBE interface cannot perform an outer join; a program must perform the
	join because the RQBE interface cannot process the necessary nested SELECT-SQL
	statements.
	
	MORE INFORMATION
	================
	
	The code below demonstrates an outer join of the CUSTOMER.DBF and INVOICES.DBF
	databases in the FOXPRO2\TUTORIAL directory.
	
	NOTE: In Visual FoxPro for Windows, open the CUSTOMER.DBF and ORDERS.DBF files in
	the VFP\SAMPLES\MAINSAMP\DATA subdirectory. Then, substitute
	CUSTOMER.COMPANY_NAME for CUSTOMER.COMPANY, CUSTOMER.CUSTOMER_ID for
	CUSTOMER.CNO, and ORDERS.ORDER_ID for INVOICES.INO in the code below.
	
	(Note that the space before each semicolon [;] character is required. Omitting
	the space from the query causes an error.)
	
	     SELECT customer.company, customer.cno, invoices.ino ;
	        FROM customer, invoices ;
	        WHERE customer.cno = invoices.cno ;
	     UNION ;
	     SELECT customer.company, customer.cno, 0 ;
	        FROM customer ;
	        WHERE customer.cno NOT IN ;
	           (SELECT invoices.cno FROM invoices ;
	              WHERE customer.cno = invoices.cno) ;
	     INTO CURSOR QUERY
	
	The lines from the first SELECT statement to just before the UNION statement
	
	     SELECT customer.company, customer.cno, invoices.ino ;
	        FROM customer, invoices ;
	        WHERE customer.cno = invoices.cno ;
	
	select all the records in the parent database that have a corresponding record in
	the child database. This is what you normally get when you do a join. The UNION
	statement tells FoxPro to include the output of the first half of this SELECT
	statement with the second half in the final results. It is important that the
	data in the second half of the query have the same structure as the data in the
	first half of the query, otherwise errors are generated.
	
	The lines after the UNION statement
	
	     SELECT customer.company, customer.cno, 0 ;
	        FROM customer ;
	        WHERE customer.cno NOT IN ;
	           (SELECT invoices.cno FROM invoices ;
	              WHERE customer.cno = invoices.cno) ;
	
	retrieve all of the records in the parent database that have no corresponding
	child record. This is done as follows:
	
	1. The SELECT statement in the parentheses creates a list of all the records
	  that have corresponding child records.
	
	        (SELECT invoices.cno FROM invoices ;
	           WHERE customer.cno = invoices.cno) ;
	
	2. The SELECT statement directly above that then selects all the records that
	  are not in the list created by step 1.
	
	        SELECT customer.company, customer.cno, 0 ;
	           FROM customer ;
	           WHERE customer.cno NOT IN ;
	
	3. The 0 in the line for the second SELECT statement is used as a placeholder.
	  If INVOICES.INO is a date field, use { / / } instead of the 0. Similarly, if
	  INVOICES.INO is a character field, use " ". The idea is for the placeholder
	  to be the same type as the field that it replaces.
	
	  Please note that at this time, there are no plans to implement the
	  functionality for a memo field placeholder. However, a workaround for this
	  situation is documented in the following article in the Microsoft Knowledge
	  Base:
	
	  Q119901 How to Use the UNION Clause in a FoxPro SELECT Statement
	
	If the ORDER BY clause is entered at the end of the SELECT statement, and the CNO
	field is used, an error message occurs. For example, the following clause
	
	     ORDER BY cno
	
	results in an "Fieldname is not unique and must be qualified" error message.
	Similarly, the following clause
	
	     ORDER BY customer.cno
	
	results in an "SQL Invalid Order by" error message.
	
	To eliminate these errors, use the ORDER BY clause with a column number. For
	example, the following clause
	
	     ORDER BY 1
	
	results in a query ordered by CNO since CNO is in column 1 of the output table.
	
	Additional query words: VFoxMac FoxDos VFoxWin FoxWin 2.50 2.50a 2.50b kbvfp300 kbvfp500 kbvfp600 kbdatabase 2.60 2.60a
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbVFP300bMac kbVFP300 kbVFP500 kbVFP600
	Version           : 2.5x 2.6x 3.00 | 2.00 2.5x 2.6x
	
	=============================================================================
	

{% endraw %}

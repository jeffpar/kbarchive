---
layout: page
title: "Q189598: BUG: Full Outer Join Does Not Respect Deleted Records"
permalink: kb/189/Q189598/
---

## Q189598: BUG: Full Outer Join Does Not Respect Deleted Records

	Article: Q189598
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The full outer join does not respect deleted records that occur in the second
	table listed in the SELECT-SQL statement.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The query result from a full outer join should contain all matching and non-
	matching rows from both tables. However, deleting records in the second table
	causes erroneous results to appear.
	
	In the following example, when the parent table, cur1, does not find the deleted
	records in the second table, cur2, the result set fills with nulls for those
	records. Then, as it processes the deleted records in cur2 and does not find
	matches for them, it adds more null records to the result set.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program called Ztest and add the following code:
	
	        CREATE CURSOR cur1 (id_1 I(4), desc_1 C(20))
	        CREATE CURSOR cur2 (id_2 I(4), desc_2 C(20))
	
	        FOR l_n = 1 TO 100
	           INSERT INTO cur1 (id_1, desc_1) VALUES (l_n, "TABLE1__"  + ;
	           ALLTRIM(STR(l_n)))
	           INSERT INTO cur2 (id_2, desc_2) VALUES (l_n, "TABLE2__"  + ;
	           ALLTRIM(STR(l_n)))
	        ENDFOR
	        SET DELETED ON
	        SELECT * FROM cur1 FULL OUTER JOIN cur2 ON id_1 = id_2
	        WAIT WINDOW STR(_TALLY)+" records returned when no records are
	        deleted."
	
	        ** Delete the last 50 records in cur1.
	        GO 51 IN cur1
	        DELETE REST IN cur1
	
	        ** Issue the SQL statement again.
	        SELECT * FROM cur1 FULL OUTER JOIN cur2 ON id_1 = id_2
	        WAIT WINDOW STR(_TALLY)+" records returned when 50 records are
	        deleted;
	        in cur1"
	
	        ** Recall the records in cur1.
	        SET DELETED OFF
	        RECALL ALL IN cur1
	        SET DELETED ON
	
	        ** Delete the last 50 records in cur2.
	        GO 51 IN cur2
	        DELETE REST IN cur2
	
	        ** Issue the  SQL statement again.
	
	        SELECT * FROM cur1 FULL OUTER JOIN cur2 ON id_1 = id_2
	
	        WAIT WINDOW STR(_TALLY)+" records returned when 50 records are
	         deleted;
	        in cur2"
	
	2. Run the program, and after each Browse window appears, close the window. The
	  WAIT WINDOW commands display the number of records and information on the
	  number of deleted records. Deleting 50 records in the second cursor, cur2,
	  causes the SQL-SELECT statement to return 150 records instead of 100.
	
	Additional query words: kbVFp500abug kbSQL
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

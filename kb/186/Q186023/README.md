---
layout: page
title: "Q186023: FIX: Set Collate Causes Display Problems for Related Tables"
permalink: /kb/186/Q186023/
---

## Q186023: FIX: Set Collate Causes Display Problems for Related Tables

{% raw %}

	Article: Q186023
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Creating indexes with the Collate command set to anything other than "Machine"
	causes display problems for related tables.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	When creating indexes with the Collate command set to anything other than
	"Machine" and you use a child table that does not have any related records, the
	child table's Browse window updates incorrectly. The Browse window shows the
	related records for the previously selected parent record.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create two tables as shown below:
	
	        CREATE TABLE tbl1(a1 c(1), b1 c(1))
	        INSERT INTO tbl1 VALUES('1','2')
	        INSERT INTO tbl1 VALUES('1','3')
	        INSERT INTO tbl1 VALUES('2','2')
	        INSERT INTO tbl1 VALUES('2','3')
	        INSERT INTO tbl1 VALUES('6','3')
	
	        CREATE TABLE tbl2(c2 c(1),d2 c(1))
	        INSERT INTO tbl2 VALUES('1','1')
	        INSERT INTO tbl2 VALUES('3','')
	        INSERT INTO tbl2 VALUES('2','6')
	        INSERT INTO tbl2 VALUES('4','')
	        INSERT INTO tbl2 VALUES('5','2')
	
	2. Create a program and place the following commands in the program:
	
	        SET EXACT OFF
	
	        SET COLLATE TO "general"
	        ** To get the correct behavior comment previous line **
	        ** and un-Comment the following line:                **
	        * SET COLLATE TO "machine"
	
	        CLOSE DATABASE ALL
	        USE tbl1 IN 0
	        INDEX ON a1 + b1 TAG indtab1
	        USE tbl2 IN 0
	        SELECT tbl2
	        SET RELATION TO tbl2.d2 INTO tbl1
	        SELECT tbl1
	        DEFINE WINDOW win1 FROM 20,10 to 30,40 CLOSE FLOAT GROW
	        BROWSE WINDOW win1 NOWAIT
	        RELEASE WINDOW win1
	        SELECT tbl2
	        DEFINE WINDOW win2 FROM 10,10 to 20,40 CLOSE FLOAT GROW
	        BROWSE WINDOW win2 NOWAIT
	        RELEASE WINDOW win2
	
	3. Run the program created in step 2.
	
	4. When the Browse windows open, the parent table (TBL2) window should get the
	  focus. The record pointer is located on the first record for the parent table
	  (TBL2). The Browse window for TBL1 displays two records (1,2) and (1,3).
	
	5. In the parent table (TBL2) window move the cursor from the first record (1,1)
	  to the second record (3, '').
	
	  The child table window (TBL1) should not display any records. However, note
	  that the same records (1,2 and 1,3) are displayed in the child table, as when
	  record number one of parent table (TBL2) was selected.
	
	6. Move the cursor in the parent table (TBL2) to the third record and then back
	  to the second record.
	
	  The child table window should not display any records. However, note that the
	  same record is displayed (6,3), as when record number three of the parent
	  table (TBL2) was selected.
	
	  If the Collate command is set to "Machine" when you run the program, the
	  Browse window for the child table (TBL1) updates correctly.
	
	NOTE: The same behavior occurs if the tables are in a database. You may use the
	same sample program to reproduce this behavior, except that the related parent
	field has to be primary or candidate so that only one record in the parent table
	can be blank.
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix kbpending
	
	=============================================================================
	

{% endraw %}

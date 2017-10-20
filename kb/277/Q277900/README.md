---
layout: page
title: "Q277900: PRB: Changes to Key Field in Parent Table Not Cascaded to Child"
permalink: /kb/277/Q277900/
---

## Q277900: PRB: Changes to Key Field in Parent Table Not Cascaded to Child

{% raw %}

	Article: Q277900
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 22-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a key field in the parent table in a parent/child relationship is changed,
	the changes are not cascaded to the child table. If the record in the parent is
	deleted without first unlocking it, the corresponding records in the child table
	may be orphaned.
	
	RESOLUTION
	==========
	
	To work around this problem, unlock the record before you delete it. This causes
	the changes to be cascaded to the child table.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code to create a database and tables with a parent/child
	  relationship:
	
	  SET EXCLUSIVE ON
	  CREATE DATABASE testdata
	  CREATE TABLE Table1 (PriKey C(10) PRIMARY KEY)
	  CREATE TABLE Table2 (ChildKey C(10) PRIMARY KEY, Child N(4,0))
	
	  * Create Persistent Relationship.
	  ALTER TABLE Table2 ADD FOREIGN KEY ChildKey TAG ChildKey REFERENCES Table1
	
	  * Add Records to the tables.
	  INSERT INTO Table1 VALUES ("Rec1")
	  INSERT INTO Table1 VALUES ("Rec2")
	  INSERT INTO Table1 VALUES ("Rec3")
	  INSERT INTO Table1 VALUES ("Rec4")
	
	  INSERT INTO Table2 VALUES ("Rec1", 1)
	  INSERT INTO Table2 VALUES ("Rec1", 2)
	  INSERT INTO Table2 VALUES ("Rec1", 3)
	  INSERT INTO Table2 VALUES ("Rec2", 1)
	  INSERT INTO Table2 VALUES ("Rec2", 2)
	  INSERT INTO Table2 VALUES ("Rec2", 3)
	  INSERT INTO Table2 VALUES ("Rec3", 1)
	  INSERT INTO Table2 VALUES ("Rec3", 2)
	  INSERT INTO Table2 VALUES ("Rec3", 3)
	  INSERT INTO Table2 VALUES ("Rec4", 1)
	  INSERT INTO Table2 VALUES ("Rec4", 2)
	  INSERT INTO Table2 VALUES ("Rec4", 3)
	  CLOSE ALL
	
	2. Add Referential Integrity (RI) to the database. In the Command window, type
	  the following:
	
	   MODIFY DATABASE
	
	3. From the Database menu, click Clean Up Database.
	
	4. From the Database menu, click Edit Referential Integrity. On the Rules for
	  Updating tab, select Cascade. Do the same for the Rules for Deleting tab. On
	  the Rules for Inserting tab, select Restrict. Click OK, and then click Yes to
	  save changes and generate the RI code. Click Yes for the next message about
	  generating RI code.
	
	5. Close the Database Designer.
	
	6. Run the following code:
	
	  USE table1 IN 0 SHARED ORDER TAG PriKey
	  USE table2 IN 0 SHARED ORDER TAG ChildKey
	
	  SELECT table1
	  SET RELATION TO PriKey into Table2
	
	7. Browse both tables and select a record in Table1.
	
	8. Run the following code to change the primary key and delete a record in
	  Table1:
	
	  SELECT Table1
	  IF LOCK(STR(RECNO()), "Table1")
	     OLDKEY = Table1.PriKey
	     NEWKEY = TRIM(OLDKEY) + "-BAK"
	
	     * USING A SQL UPDATE STATEMENT, BUT REPLACE DOES THE SAME THING.
	     UPDATE Table1 SET Table1.PriKey = NEWKEY WHERE Table1.PriKey = OLDKEY
	      ** UNLOCK RECORD RECNO() && uncomment to fix problem.
	     DELETE
	     UNLOCK RECORD RECNO()  && comment this line when uncommenting the 
	                            && the line above.
	  ENDIF
	
	9. Note that the record you selected in Table1 is deleted and the PriKey field
	  has "-BAK on" appended to it.
	
	10. Close the Browse window for Table2. Make sure that Table2 is still selected
	  in the current work area and then issue another BROWSE. The corresponding
	  records in the child table remained unchanged.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Mark
	Barnard, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}

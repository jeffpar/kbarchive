---
layout: page
title: "Q157404: PRB: Changing Field Settings of a Table Deletes Relationships"
permalink: /kb/157/Q157404/
---

## Q157404: PRB: Changing Field Settings of a Table Deletes Relationships

{% raw %}

	Article: Q157404
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the field settings of a table in a database are modified, any relationships
	to other tables that are based on that field are deleted.
	
	CAUSE
	=====
	
	When the field settings of a table are changed, the dependent indexes get
	dropped and rebuilt, and when an index is dropped, relations referring to it are
	dropped as well.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a database with two tables as follows:
	
	        CREATE DATABASE test
	        CREATE TABLE Tst1 (Fld1 c(5),Fld2 c(5))
	        CREATE TABL Tst2 (Fld1 c(5),Fld2 c(5))
	
	2. Modify the database and the TST1 table. Set Tst1.Fld1 as the primary key for
	  this table. Save changes and exit the Table Designer.
	
	3. Modify the Tst2.dbf file and set Tst2.Fld1 as the regular key. Save changes
	  and exit the Table Designer.
	
	4. In the Database Designer click on Tst1.Fld1 and drag it to Tst2.Fld1 to
	  create a Parent Child relation between Tst1 and Tst2.
	
	5. Modify the Tst1.dbf file and select the Fields tab.
	
	6. Make any of the following changes to Tst1.Fld1:
	
	   - Select(check) the NULL option.
	
	   - Change the field width.
	
	7. Save changes and return to the Database Designer.
	
	The Relation between the two tables has been removed, so you need to re- create
	it.
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	

{% endraw %}

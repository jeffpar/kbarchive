---
layout: page
title: "Q141354: FIX: Adding Description to Table's Index in DBC Corrupts Table"
permalink: /kb/141/Q141354/
---

## Q141354: FIX: Adding Description to Table's Index in DBC Corrupts Table

	Article: Q141354
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using Project Manager to add a description to a table's index when that table is
	part of a database (.dbc file) corrupts the database. You have to run the
	VALIDATE DATABASE command on the database container to repair it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In the Command window, type the following commands:
	
	     SET EXCLUSIVE ON
	     CREATE DATABASE mydata
	     MODIFY DATABASE mydata
	
	2. Add a new table, and add the first and last name fields to the table. Name
	  the table "Mytable" (without the quotation marks).
	
	3. Create a regular index on the last name field. You do not need to add any
	  data to the table.
	
	4. Close the Database Designer.
	
	5. In the Command window, type:
	
	     CREATE PROJECT myproj
	
	6. Add Mydata to the project.
	
	7. Expand the data section to expose the fields and index for the table you
	  created. With the index expression selected in the project, right-click and
	  select Edit description. Enter any description.
	
	8. Close the project, and in the Command window type:
	
	      CLOSE ALL
	      CLEAR ALL
	
	9. Re-open the project and try to edit the database. Visual FoxPro will return
	  the error message:
	
	  FILE C:\VFP\mydata.dbc is an invalid database.
	
	Example Resolution
	------------------
	
	The following steps should resolve this problem. Note that thes steps have been
	performed under Windows NT only; they have not been tested on other platforms.
	
	1. Close the project, and ensure that Mydata is open.
	
	2. In the Command window, type:
	
	     VALIDATE DATABASE RECOVER
	
	3. Visual FoxPro will return the following information:
	
	  Validate Database MYDATA:
	  Rebuilding structural index.... Index rebuilt
	  Object #8 (Index 'lastname'): Bad property types or lengths: 1. (Fixed)
	
	Your description will be removed from the index and you can now make additional
	modifications to the table.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

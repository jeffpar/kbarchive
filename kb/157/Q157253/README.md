---
layout: page
title: "Q157253: FIX: Copying Tables Between Databases Changes Index Type"
permalink: /kb/157/Q157253/
---

## Q157253: FIX: Copying Tables Between Databases Changes Index Type

	Article: Q157253
	Product(s): Microsoft FoxPro
	Version(s): 5.0 5.0a
	Operating System(s): 
	Keyword(s): kbtool kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Copying a table from one database to another changes the index type of the table
	from Primary to Candidate.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a database that has a table and a Primary key as following:
	
	        CREATE DATABASE Test
	        CREATE TABLE Tst1T1 (Fld1 c(5), Fld2 c(5))
	        ALTER TABLE Tst1T1 ALTER Fld1 c(5) Primary Key
	
	2. Open the table Tst1T1 and modify it. Select the Indexes tab in the Table
	  Designer and verify that a Primary Index has been created on the first field,
	  Fld1. Close the Table Designer and leave the table open in the current work
	  area.
	
	3. Create another database Test2 using "CREATE DATABASE Test2" command.
	
	4. Issue the following commands to copy Tst1T1 table from Test1 database to
	  Test2 as Tst2T1:
	
	        SET DATABASE TO Test2
	        SELECT Tst1T1
	        COPY TO Tst2T1 PRODUCTION DATABASE Test2
	
	5. When you get the "Invalid File Descriptor" error, click OK.
	
	6. After the table Tst1T1 is copied to Test2 database as Tst2T1, open and then
	  modify the Tst2T1 table in the Test2 database. When in the Table Designer,
	  select the Indexes tab. Notice that the Index type has changed from Primary
	  to Candidate.
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbtool kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : 5.0 5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

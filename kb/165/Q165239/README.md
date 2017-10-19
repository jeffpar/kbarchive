---
layout: page
title: "Q165239: FIX: Removing Views from DBC in Project Causes Error"
permalink: /kb/165/Q165239/
---

## Q165239: FIX: Removing Views from DBC in Project Causes Error

	Article: Q165239
	Product(s): Microsoft FoxPro
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error may be returned when trying to edit a table or a view from
	the project manager.
	
	  DBC Internal Consistency Error
	  Fatal Error 550 while attempting to report error 550.
	  Program has performed an illegal operation.
	
	The errors may vary but the illegal operation message will occur and FoxPro will
	be shut down. Another error message that might be returned is "DBC is
	corrupted."
	
	RESOLUTION
	==========
	
	In Visual FoxPro 5.0, close any open projects, open the database designer and
	remove the views.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been corrected in Visual FoxPro
	5.0a for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program with the following code.
	
	        CLEAR
	        CLOSE DATA ALL
	        CLOSE ALL
	        SET EXCLUSIVE ON
	        SET SAFETY OFF
	
	        ERASE test.pjx
	        ERASE t1.dbf
	        ERASE t2.dbf
	
	        CREATE DATA test
	
	        CREATE TABLE t1 (name c(10))
	        INSERT INTO t1 (name) VALUES ("test")
	        INSERT INTO t1 (name) VALUES ("TEST")
	        INSERT INTO t1 (name) VALUES ("test")
	        INSERT INTO t1 (name) VALUES ("test")
	
	        CREATE TABLE T2 (addr c(10))
	        INSERT INTO t2 (addr) VALUES ("addr")
	        INSERT INTO t2 (addr) VALUES ("addr")
	        INSERT INTO t2 (addr) VALUES ("addr")
	        INSERT INTO t2 (addr) VALUES ("addr")
	
	        CREATE SQL VIEW xx as SELECT * FROM t1
	        CREATE SQL VIEW x2 AS SELECT * FROM t1
	        CREATE SQL VIEW x3 AS SELECT * FROM t1
	        CREATE SQL VIEW x4 AS SELECT * FROM t1
	        CREATE SQL VIEW x5 AS SELECT * FROM t1
	        CREATE SQL VIEW x6 AS SELECT * FROM t1
	
	        CLOSE TABLES
	        MODI PROJ TEST NOWAIT
	
	2. After running the code, add the test database to the project.
	
	3. While in the project manager, remove two or three views by selecting the view
	  and choosing Remove.
	
	4. From the project manager, modify the database and select "Clean Up Database"
	  from the Database menu. This will pack the .dbc file.
	
	5. Close the Database Designer window, and return to the project. Click on a
	  view.
	
	The error may not be returned on the first view. Click on a few views and the
	error eventually occurs.
	
	Additional query words: data base
	
	======================================================================
	Keywords          : kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

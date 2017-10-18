---
layout: page
title: "Q238518: PRB: SQL Select Statement w/Outer Join Clause Adds NULL Values"
permalink: kb/238/Q238518/
---

## Q238518: PRB: SQL Select Statement w/Outer Join Clause Adds NULL Values

	Article: Q238518
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbSQL kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnipp
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Executing a SQL Select statement using an OUTER JOIN clause results in null
	values being inserted into the fields of the output for which no matching record
	is found.
	
	RESOLUTION
	==========
	
	If the SQL Select statement is being used to output data to a table, one
	workaround is to issue an ALTER TABLE command and set the columns of the table
	to NOT NULL. The following code illustrates this workaround:
	
	  SELECT ALIAS()
	  FOR i=1 TO FCOUNT(ALIAS())
	     ALTER TABLE (ALIAS()) ALTER COLUMN (FIELDS(i)) NOT NULL
	  ENDFOR
	
	This workaround is implemented in the code example in the MORE INFORMATION
	section following.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file called OUTJOIN.PRG using the following code:
	
	  SET SAFETY OFF
	
	  CREATE TABLE test1 (pid c(10), nvar1 N(10,2) NULL, dvar2 d, nvar2 N(10,2) NULL, mvar m)
	  INSERT INTO test1 VALUES ('ABCDEFGHIK',3,DATE(),3,REPLICATE('ABCDE ',5))
	  INSERT INTO test1 VALUES ('ABCDEFGHIJ',3,DATE(),3,REPLICATE('ABCDE ',5))
	  INSERT INTO test1 VALUES ('ABCDEFGHIL',3,DATE(),3,REPLICATE('ABCDE ',5))
	
	  CREATE TABLE test2 (pid c(10), nvar1 T, nvar2 Y, fvar1 F(10,2), fvar2 F(10,2))
	  INSERT INTO test2 VALUES ('ABCDEFGHIJ',DATETIME(),45,3,4)
	  INSERT INTO test2 VALUES ('ABCDEFGHIL',DATETIME(),45,3,4)
	  INSERT INTO test2 VALUES ('ABCDEFGHIZ',DATETIME(),45,3,4)
	
	  SELECT test1.pid, test1.nvar1, test1.dvar2, test1.nvar2, test1.mvar, ;
	      test2.pid AS testa, test2.nvar1 AS ntesta, test2.nvar2 AS ntestb, ;
	      test2.fvar1 AS ftesta, test2.fvar2 AS ftestb ;
	      FROM test1 ;
	      LEFT OUTER JOIN test2 ;
	      ON test2.pid=test1.pid ;
	      INTO TABLE test3
	
	  SELECT test2.pid, test2.nvar1, test2.nvar2, test2.fvar1, test2.fvar2, ;
	      test1.pid AS testa, test1.nvar1 AS ntesta, test1.dvar2 AS ntestb, ;
	      test1.nvar2 AS ftesta, test1.mvar AS ftestb ;
	      FROM test1 ;
	      RIGHT OUTER JOIN test2 ;
	      ON test1.pid=test2.pid ;
	      INTO TABLE test4
	
	  SELECT test3
	  BROWSE
	
	  SELECT test4
	  FOR i=1 TO FCOUNT(ALIAS())
	      ALTER TABLE (ALIAS()) ALTER COLUMN (FIELDS(i)) NOT NULL
	  ENDFOR
	  BROWSE
	
	2. Execute OUTJOIN.PRG.
	
	Note that when the Test3 Browse window appears, the last five columns of the
	first row are set to .NULL.
	
	Note that when the Test4 Browse window appears, the last five columns of the
	third row are empty.
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbSQL kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

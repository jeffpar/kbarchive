---
layout: page
title: "Q271492: PRB: EVAL() Function in WHERE Clause May Return Incorrect Data"
permalink: /kb/271/Q271492/
---

## Q271492: PRB: EVAL() Function in WHERE Clause May Return Incorrect Data

{% raw %}

	Article: Q271492
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbSQL kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbD
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the EVALUATE() function in the WHERE clause of a SELECT - SQL
	command, Visual FoxPro may fail to return all matching rows. This may happen if
	there are matching rows but the record pointer is not on one of them at the time
	the SELECT is run.
	
	RESOLUTION
	==========
	
	For standard SELECT statements, this can be solved by using macro substitution
	instead of the EVALUATE() function, or by doing a LOCATE before the SELECT, as
	shown in the "Steps to Reproduce Behavior" section.
	
	For views, the following syntax has been shown to work in some cases. First, set
	up the database as shown in "Steps to Reproduce Behavior," and then run the
	following code from the Command window or a program file:
	
	  lcCriteria = '.T.'
	  CREATE SQL VIEW macroTestView AS ;
	     SELECT * ;
	        FROM testTable ;
	        WHERE &?lcCriteria
	
	  CLEAR
	
	  USE macroTestView
	  ? "All records"
	  LIST
	
	  lcCriteria = "BETWEEN(testTable.code, 'a', 'c')"
	  ? lcCriteria
	  =REQUERY()
	  LIST
	
	  lcCriteria = "BETWEEN(testTable.code, 'd', 'f')"
	  ? lcCriteria
	  =REQUERY()
	  LIST
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code from the Command window or a program file to see the
	preceding behavior:
	
	  CREATE DATABASE testDBC
	  CREATE TABLE testTable (code C(4))
	
	  INSERT INTO testTable VALUES ("a")
	  INSERT INTO testTable VALUES ("b")
	  INSERT INTO testTable VALUES ("c")
	  INSERT INTO testTable VALUES ("d")
	  INSERT INTO testTable VALUES ("e")
	  INSERT INTO testTable VALUES ("f")
	  INSERT INTO testTable VALUES ("g")
	  INSERT INTO testTable VALUES ("h")
	  INSERT INTO testTable VALUES ("i")
	
	  GO TOP
	  CLEAR
	
	  lcCriteria = 'BETWEEN(code, "a", "c")'
	  ? lcCriteria
	  SELECT * ;
	     FROM testTable ;
	     INTO CURSOR crsr1 ;
	     WHERE EVALUATE(lcCriteria)
	  LIST
	  *!* Three records are displayed
	
	  lcCriteria = 'BETWEEN(code, "d", "f")'
	  ? lcCriteria
	
	  SELECT * ;
	     FROM testTable ;
	     INTO CURSOR crsr2 ;
	     WHERE EVALUATE(lcCriteria)
	
	  IF _TALLY > 0
	     LIST
	  ELSE
	     ? "   No records found."
	  ENDif
	  *!* No records are displayed.
	  *!* You would expect three records to be returned. 
	
	  SELECT testTable
	  LOCATE FOR EVALUATE(lcCriteria)
	  ? lcCriteria + ": LOCATEd first"
	
	  SELECT * ;
	     FROM testTable ;
	     INTO CURSOR crsr3 ;
	     WHERE EVALUATE(lcCriteria)
	  LIST
	  *!* Correct records are displayed
	
	REFERENCES
	==========
	
	For additional information about using the EVALUATE() function and the SELECT -
	SQL statement, click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
	  Q125046 INFO: Macro Substitution, Name Expressions, and EVALUATE() Runtime
	  Evaluation
	
	  Q114670 HOWTO: Pass Variables to SELECT-SQL w/o Using Macro Substitution
	
	  Q193079 FIX: Syntax Error with EVAL of ALL or LTRIM in SELECT-SQL
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbSQL kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q246656: PRB: SQL SELECT Cursor Resultset Changes when Variable Changes"
permalink: /kb/246/Q246656/
---

## Q246656: PRB: SQL SELECT Cursor Resultset Changes when Variable Changes

{% raw %}

	Article: Q246656
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbSQL kbvfp300b kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbSQLProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The resultset of a cursor does not match the selection criteria from a SQL
	SELECT statement that includes a variable in the WHERE clause.
	
	-or-
	
	An error message similar to the one below is displayed when attempting to browse
	a cursor created with a SQL SELECT statement that includes a variable that is
	out of scope in the WHERE clause.
	
	  Variable 'MyVariable' not found
	
	CAUSE
	=====
	
	This behavior occurs when SET EXACT is set to OFF.
	
	RESOLUTION
	==========
	
	1. Set EXACT to ON.
	
	2. Use a SQL SELECT statement that does not set a filter condition:
	
	  MyVariable="Test"
	  SELECT * FROM MyTable WHERE MyField=MyVariable AND .T. INTO CURSOR MyCursor
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file named DEMOPRG using the following code:
	
	  luExact_Value=SET('EXACT')
	  CLOSE ALL
	  IF !FILE('testa.dbf')
	  	CREATE TABLE testa (col1 c(5),col2 c(5))
	  	INDEX ON col1 TAG col1 OF testa
	  	INSERT INTO testa (col1,col2) VALUES ("1","a")
	  	INSERT INTO testa (col1,col2) VALUES ("2","b")
	  	INSERT INTO testa (col1,col2) VALUES ("3","c")
	  	INSERT INTO testa (col1,col2) VALUES ("3","d")
	  	INSERT INTO testa (col1,col2) VALUES ("4","e")
	  	INSERT INTO testa (col1,col2) VALUES ("4","f")
	  	INSERT INTO testa (col1,col2) VALUES ("5","g")
	  ENDIF
	  IF !FILE('testb.dbf')
	  	CREATE TABLE testb (col1 c(5),col2 c(5))
	  	INSERT INTO testb (col1,col2) VALUES ("1","a")
	  	INSERT INTO testb (col1,col2) VALUES ("2","b")
	  	INSERT INTO testb (col1,col2) VALUES ("3","c")
	  	INSERT INTO testb (col1,col2) VALUES ("3","d")
	  	INSERT INTO testb (col1,col2) VALUES ("4","e")
	  	INSERT INTO testb (col1,col2) VALUES ("4","f")
	  	INSERT INTO testb (col1,col2) VALUES ("5","g")
	  ENDIF
	  *!* SET EXACT ON
	  SET EXACT OFF
	  DO demoa WITH '1'
	  BROWSE TITLE DBF() TIMEOUT 10 && Get variable MyVariable_a not found message with the index
	
	  MyVariable="3"
	  DO demob
	  BROW TITLE DBF()+" Note values in COL1" TIMEOUT 10
	  MyVariable="2"
	  BROWSE TITLE DBF()+" Now note values in COL1" TIMEOUT 10
	
	  MyVariable="4"
	  DO alt_method
	  BROW TITLE DBF()+" Alternate Method Note values in COL1" TIMEOUT 10
	  MyVariable="3"
	  BROWSE TITLE DBF()+" Alternate Method Now note values in COL1" TIMEOUT 10
	  SET EXACT &luExact_Value
	  CLOSE ALL
	
	  PROCEDURE demoa
	  PARAMETER MyVariable_a
	  SELECT * FROM testa NOWAIT WHERE col1=MyVariable_a INTO CURSOR cursortesta
	
	  PROCEDURE demob
	  SELECT * FROM testa NOWAIT WHERE col1=MyVariable INTO CURSOR cursortesta
	
	  PROCEDURE alt_method
	  *!* This illustrates a SQL SELECT statement that does not set a filter condition
	  SELECT * FROM testa NOWAIT WHERE col1=MyVariable AND .T. INTO CURSOR cursortesta
	
	2. Run the program and note that when the first BROWSE command is executed, the
	  following error message is displayed:
	
	  Variable 'MyVariable_a' not found
	
	  When this error message appears, select Ignore.
	
	3. Note the number of records and the values displayed when the second BROWSE
	  command is executed. The values displayed should be as follows:
	
	+-------------+
	| col1 | col2 | 
	+-------------+
	| 3    | c    | 
	+-------------+
	| 3    | d    | 
	+-------------+
	
	4. Note the number of records and the values displayed when the third BROWSE
	  command is executed. The values displayed should be as follows:
	
	+-------------+
	| col1 | col2 | 
	+-------------+
	| 2    | b    | 
	+-------------+
	
	5. Note the number of records and the values displayed when subsequent BROWSE
	  commands are executed. The values displayed should be as follows:
	
	+-------------+
	| col1 | col2 | 
	+-------------+
	| 4    | e    | 
	+-------------+
	| 4    | f    | 
	+-------------+
	
	6. Change the following line of code from:
	
	  SET EXACT OFF
	
	  to:
	
	  SET EXACT ON
	
	and re-run the program. Note that the Variable Not Found error message does not
	occur and also note that the second and third times the BROWSE command is
	executed the cursor resultset remains constant.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbSQL kbvfp300b kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}

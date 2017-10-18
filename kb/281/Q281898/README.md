---
layout: page
title: "Q281898: BUG: SQL Statement Missing Integers When Collate Set to Russian"
permalink: kb/281/Q281898/
---

## Q281898: BUG: SQL Statement Missing Integers When Collate Set to Russian

	Article: Q281898
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbDSupport kbCodeSni
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set the collation sequence to Russian (instead of Machine), queries in
	Visual FoxPro that compare integer fields in the WHERE clause of a SQL SELECT
	statement between two or more tables may not return all matching records.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following three workarounds:
	
	- Create index tags on the integer fields before you run the query.
	
	- Set the collation sequence to Machine before you run the query. To do this,
	  issue the SET COLLATE TO "Machine" command in the program before you run the
	  query.
	
	- Use a numeric field without decimal places instead of an integer field.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Config.fpw file (the Config.fpm file for a Macintosh), set the
	  CodePage to Russian with the following command:
	
	        CODEPAGE=1251
	
	2. Save the Config.fpw file, and then quit and restart Visual FoxPro.
	
	3. In a program (.prg) file, run the following code:
	
	     CLEAR ALL
	     CLEAR
	
	     ** Store the current collation sequence to the variable yyy.
	
	     yyy=SET("collate")
	
	     ** Set collate to Russian, a collation sequence that illustrates
	     ** the problem.
	
	     * Comment the next line for the second workaround.
	     SET COLLATE TO "Russian"
	     * Uncomment the next line for the second workaround.
	     *SET COLLATE TO "Machine"
	
	     ** Create two cursors, each with one integer field.
	
	     CREATE CURSOR t1 (in1 i)
	     * Uncomment the next line for the first workaround.
	     *INDEX ON in1 TAG in1
	     CREATE CURSOR t2 (in2 i)
	     * Uncomment the next line for the first workaround.
	     *INDEX ON in2 TAG in2
	
	     ** Populate each cursor with 2000 records, inserting the loop counter
	     ** into the integer field.
	
	     FOR x=1 TO 2000
	        INSERT INTO t1 (in1) VALUES(x)
	        INSERT INTO t2 (in2) VALUES(x)
	     ENDFOR
	
	     ** Use the SELECT statement to join the two tables.
	
	     SELECT * FROM t1,t2 WHERE in1=in2 INTO CURSOR t3
	
	     ** Check  _Tally to see how many records the query returned.
	
	     WAIT WINDOW STR(_Tally)+" records returned by the query"
	
	     ** Start the loop to determine what records are missing.
	
	     x=0
	     SCAN
	     x=x+1
	     IF NOT in1=x
	     WAIT WINDOW "Missing integer"+ STR(x)
	     x=in1
	     ENDIF
	     ENDSCAN
	
	     ** Set collate back to its original setting.
	
	     SET COLLATE TO yyy
	
	The query should return 2000 records; however, only 1,993 records appear.
	Integers 22, 278, 534, 790, 1046, 1558, and 1814 are missing.
	
	REFERENCES
	==========
	
	This problem is very similar to that described in the following Microsoft
	Knowledge Base article. Only the missing integers are different.
	
	  Q176884 PRB: Problems with SET COLLATE and Queries with Integer Fields
	
	For additional information on related problems, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q164869 SET COLLATE TO "GENERAL" May Affect Search Results
	
	  Q281876 FIX: Missing Integers with SQL Statement When You SET COLLATE TO
	  "Hungary"
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Mark
	Barnard, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbDSupport kbCodeSnippet 
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

---
layout: page
title: "Q181085: BUG: SET COLLATE &amp; Queries - Additional Problem Scenarios"
permalink: /kb/181/Q181085/
---

## Q181085: BUG: SET COLLATE &amp; Queries - Additional Problem Scenarios

	Article: Q181085
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp kbvfp600fix kbDSupport
	Last Modified: 21-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Queries in Visual FoxPro that compare integer fields in the WHERE clause of a
	SQL Select statement between two or more tables may not return all matching
	records. This problem occurs when the collation sequence is set to anything but
	Machine.
	
	This article provides some additional known scenarios where this happens in
	addition to the scenarios described in the articles listed in the REFERENCES
	section.
	
	RESOLUTION
	==========
	
	Use one of the following three workarounds to resolve this problem:
	
	- Create index tags on the integer fields before running the query.
	
	- Set the collation sequence to Machine before running the query. To do this
	  issue the SET COLLATE TO "Machine" command in the program before running the
	  query.
	
	- Use a numeric field without any decimal places instead of an integer field.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The SET COLLATE command, according to the Visual FoxPro Online help, "Specifies
	a collation sequence for character fields in subsequent indexing and sorting
	operations." The command should not have any affect on numeric or integer type
	fields or their comparison.
	
	Steps to Reproduce Behavior
	---------------------------
	
	The Hungarian Scenario
	----------------------
	
	This scenario may be called the "Hungarian Scenario" since it only seems to be a
	problem with the CodePage set to 1250 - Hungarian.
	
	1. In the Config.fpw (or Config.fpm on a Macintosh), use the following command
	  to set the codepage to Hungarian:
	
	  CODEPAGE=1250
	
	2. Save the Config.fpw, quit, and then restart Visual FoxPro.
	
	3. Run the following code in a program file:
	
	     SET COLLATE TO "Hungary"
	     *SET COLLATE TO "Machine"
	     CREATE CURSOR cur1 (field_a I)
	     **INDEX ON field_a TAG field_a
	     CREATE CURSOR cur2 (field_b I)
	     **INDEX ON  field_b TAG field_b
	     SELECT 0
	
	     INSERT INTO cur1 VALUES (2838)
	     INSERT INTO cur2 VALUES (2830)
	     INSERT INTO cur2 VALUES (2838)
	
	     IF "05.00.00" $ VERSION()
	        SELECT * FROM cur1 INNER JOIN cur2 ON cur1.field_a=cur2.field_b
	     ELSE
	        SELECT * FROM cur1, cur2 WHERE cur1.field_a=cur2.field_b
	     ENDIF
	
	4. The value of the non-matching record can vary from 2816 to 2831 (the INSERT
	  INTO command with 2830 as the value) and the query will not return any
	  records. Changing the values of the matching records to 2837 or 2839 causes
	  the query to work properly.
	
	5. Use one of the following two workarounds:
	
	  a. Set the Collation Sequence to Machine by commenting out the following line
	     of code:
	
	       SET COLLATE TO "Hungary"
	
	     Remove the comment from the following line of code:
	
	      *SET COLLATE TO "Machine"
	
	     Now, run the program. It should return one record.
	
	  b. In this second workaround, set the Collation Sequence back to Hungary by
	     reversing the comments made above. Then remove the comments from the INDEX
	     ON commands that follow the creation of the cursors:
	
	        CREATE CURSOR cur1 (field_a I)
	        **INDEX ON field_a TAG field_a
	        CREATE CURSOR cur2 (field_b I)
	        **INDEX ON  field_b TAG field_b
	
	     Save and run the program. It should return one record.
	
	The Russian Scenario
	--------------------
	
	This scenario may be named "The Russian Scenario" since its behavior is specific
	to when the CodePage is set to 1251 - Russian. It is very similar to the problem
	described in the following Microsoft Knowledge Base article, which is listed in
	the REFERENCES section: Q176884 Only the missing integers are different.
	
	1. In the Config.fpw (or Config.fpm if on a Macintosh), use the following
	  command to set the codepage to Russian:
	
	        CODEPAGE=1251
	
	2. Save the Config.fpw, quit, and then restart Visual FoxPro.
	
	3. Run the code given below in a program file:
	
	     CLEAR ALL
	     CLEAR
	
	     ** Store the current collation sequence to the variable yyy.
	
	     yyy=SET("collate")
	
	     ** Setting collate to Russian, a collation sequence that illustrates
	     ** the problem.
	
	     SET COLLATE TO "Russian"
	     *SET COLLATE TO "Machine"
	
	     ** Create two cursors with one integer field in each.
	
	     CREATE CURSOR t1 (in1 i)
	     *INDEX ON in1 TAG in1
	     CREATE CURSOR t2 (in2 i)
	     *INDEX ON in2 TAG in2
	
	     ** Populate each cursor with 2000 records, inserting the loop counter
	     ** into the integer field.
	
	     FOR x=1 TO 2000
	        INSERT INTO t1 (in1) VALUES(x)
	        INSERT INTO t2 (in2) VALUES(x)
	     ENDFOR
	
	     ** The SELECT statement to join the two tables.
	
	     SELECT * FROM t1,t2 WHERE in1=in2 INTO CURSOR t3
	
	     ** Checking  _Tally to see how many records the query returned.
	
	     WAIT WINDOW STR(_Tally)+" records returned by the query"
	
	     ** Start of loop to determine what records are missing.
	
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
	
	4. The query returns 2,000 records. However, only 1,993 records should appear.
	  Integers 22, 278, 534, 790, 1046, 1558 and 1814 should be missing. These
	  compare to the missing integers listed in Microsoft Knowledge Base article
	  Q176884. They are just a few digits off.
	
	5. Try out the workarounds by changing the Collation Sequence to Machine or
	  indexing the cursors when they are created. The commands to do this are
	  commented out in the program just like in The Hungarian Scenario.
	
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q176884 PRB: Problems with SET COLLATE and Queries with Integer Fields
	
	  Q164869 SET COLLATE TO "GENERAL" May Affect Search Results
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbvfp kbvfp600fix kbDSupport 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

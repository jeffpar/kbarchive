---
layout: page
title: "Q164869: FIX: SET COLLATE TO &quot;GENERAL&quot; May Affect Search Results"
permalink: /kb/164/Q164869/
---

## Q164869: FIX: SET COLLATE TO &quot;GENERAL&quot; May Affect Search Results

	Article: Q164869
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After issuing a SET COLLATE TO "GENERAL" command, the BROWSE FOR, COUNT, and
	SQL-SELECT commands may return incorrect search results. This problem also
	occurs if SET COLLATE is set to "GERMAN".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro for
	Windows version 5.0a.
	
	MORE INFORMATION
	================
	
	Issuing SET COLLATE TO GENERAL causes routine searches using SELECT-SQL, COUNT,
	and BROWSE FOR statements to act erratically in Visual FoxPro for Windows 5.0.
	All of the searches listed in the program below should return two records.
	However, several only return one record. Slight variations in the search
	criteria that normally make no difference, such as an additional space
	character, now produce quite different results.
	
	
	This code example creates a table and populates it with three records. A WAIT
	WINDOW appears before each search, both to slow down program execution and to
	show the nature of the search about to be conducted.
	
	Steps to Reproduce Behavior
	---------------------------
	
	     * This section of code creates the table used for testing.
	     CLOSE DATA ALL
	     SET COLLATE TO "General"   && or "German"
	     CREATE TABLE test50 ( Field1 C(10), Field2 C(4) )
	     INDEX ON Field1 TAG Field1
	     INDEX ON Field2 TAG Field2
	     INSERT INTO test50 (field1,field2) VALUES ( "fpw26", "Ja" )
	     INSERT INTO test50 (field1,field2) VALUES ( "vfp50", "Kb" )
	     INSERT INTO test50 (field1,field2) VALUES ( "vfp30", "Ja" )
	     USE
	
	     *  NOTE: In the following segment, only ONE record is displayed
	     *        whereas there should be 2.
	     USE test50 SHARED
	     WAIT WINDOW 'it will do a BROWSE FOR on "Ja"'
	     BROWSE FOR Field2 = "Ja"
	
	     *  In this example, COUNT doesn't find anything.
	     WAIT WINDOW 'it will do a COUNT FOR on "Ja"'
	     COUNT FOR Field2 = "Ja" TO x
	     WAIT WINDOW "Total records found by Count: "+ALLTRIM(STR(x))
	
	     *  Once again, only one record is displayed in the following select
	     *  statement:
	     WAIT WINDOW "this will do an SQL WHERE Field2='Ja'"
	     SELECT * FROM test50 WHERE Field2 = "Ja"
	
	     *  This SQL outputs 2 records.
	     WAIT WINDOW "this will do an SQL WHERE Field2='J'"
	     SELECT * FROM test50 WHERE Field2 = "J"
	
	     *  This SQL outputs one record.
	     WAIT WINDOW "this will do an SQL WHERE Field2='Ja '"
	     * NOTE: There is one space after the 'Ja.'
	     SELECT * FROM test50 WHERE Field2 = "Ja "
	
	     *  This SQL outputs 2 records
	     WAIT WINDOW "this will do an SQL WHERE Field2='Ja  '"
	     *  NOTE: There are 2 spaces after the 'Ja.'
	     SELECT * FROM test50 WHERE Field2 = "Ja  "
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

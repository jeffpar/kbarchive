---
layout: page
title: "Q163957: FIX: APPEND FROM TYPE SDF Brings in Older Dates Incorrectly"
permalink: /kb/163/Q163957/
---

## Q163957: FIX: APPEND FROM TYPE SDF Brings in Older Dates Incorrectly

	Article: Q163957
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbList kbvfp kbvfp500aBUG kbvfp500bug
	Last Modified: 25-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When appending from a text file using the TYPE SDF clause of the APPEND FROM
	command, older dates do not append into the table properly. (This assumes that
	the field in the table is defined as a date field. If the field is defined as a
	character field, then the dates in the text file append properly.)
	
	As the date in the text file is appended to the date field, the following
	occurs:
	
	- The month of the date in the text file is placed into the year section of the
	  date field.
	
	- The second digit in the day of the date in the text file is placed into the
	  month section of the date field with a zero replacing the first digit.
	
	- The year of the date in the text file is placed into the day section of the
	  date field.
	
	RESOLUTION
	==========
	
	When creating the structure of the table, define the field that holds the date
	as a character field. This character field can be changed to a date field after
	the text file has been appended into the table.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.This bug was corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a table with two fields: a character field with a width of 8, and a
	  date field.
	
	2. Create a text file called Test.txt with the following data:
	
	  RecordA 02/14/05
	  RecordB 11/25/15
	  RecordC 04/02/25
	  RecordD 01/20/35
	  RecordE 12/16/45
	
	3. Issue the command:
	
	  APPEND FROM test.txt TYPE SDF
	
	4. Browse the table and note that some of the older dates are rearranged as was
	  mentioned in the SYMPTOMS section of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbList kbvfp kbvfp500aBUG kbvfp500bug 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

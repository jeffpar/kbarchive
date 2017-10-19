---
layout: page
title: "Q174584: BUG: Scrolling in Grid May Be Slow with Filtered Cursor"
permalink: /kb/174/Q174584/
---

## Q174584: BUG: Scrolling in Grid May Be Slow with Filtered Cursor

	Article: Q174584
	Product(s): Microsoft FoxPro
	Version(s): Win:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp500 kbvfp600
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Scrolling in a grid might be slow if the RecordSource of the grid points to a
	cursor, which actually is a filter of the table.
	
	RESOLUTION
	==========
	
	Use the following steps to work around the problem:
	
	1. Use the SET KEY TO command to filter the data instead of using a SQL SELECT
	  command.
	
	  For example if you wanted to find all the records that have CA for the region
	  field, use the following code:
	
	        SET ORDER TO xregion
	        SET KEY TO "CA"
	
	  This is assuming that there is a index tag on the region field called
	  "xregion."
	
	2. Use the NOFILTER clause in the SQL STATEMENT to ensure that the cursor
	  created will not be a filter. This clause is only valid in Visual FoxPro 5.0.
	  In Visual FoxPro 3.0 you can add a ".T." to the field list to prevent the
	  filter. For example:
	
	        SELECT *,.t. FROM Customer WHERE country = "USA" INTO CURSOR test
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem occurs only with cursors created with the SQL SELECT command. A
	local view will not create a filtered cursor.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use a large table with more than 200,000 records.
	
	2. Create a simple SQL SELECT statement such as the following:
	
	        SELECT * FROM Customer WHERE country = "USA" INTO CURSOR test
	
	3. Create a form with a grid on it.
	
	4. Set the RecordSource property of the grid to the cursor test.
	
	5. Run the form.
	
	6. Drag the scroll button of the grid all the way to the bottom.
	
	The grid takes a long time to refresh. The larger the table, the longer it will
	take.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by David
	Botzenhart, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : Win:3.0,3.0b,5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	

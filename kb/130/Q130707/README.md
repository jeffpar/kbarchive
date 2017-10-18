---
layout: page
title: "Q130707: HOWTO: Use Criteria to Limit Records Displayed in a Grid"
permalink: kb/130/Q130707/
---

## Q130707: HOWTO: Use Criteria to Limit Records Displayed in a Grid

	Article: Q130707
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDesigner kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to display only those records that meet a
	given criteria in a grid on a form.
	
	MORE INFORMATION
	================
	
	To display only those records that meet a given criteria, use one of the
	following three methods described below.
	
	Method One
	----------
	
	1. If you want to restrict the output to records where status='Y', select the
	  table being displayed in the grid.
	
	2. Next, use the SET FILTER TO <expression> command, as in this example:
	
	        SELECT <TableName>
	        SET FILTER TO status = 'Y'
	
	Method Two
	----------
	
	1. Create a query that selects the required records, and save the query.
	
	2. Set the grid's RecordSourceType property to 3 - Query and the RecordSource
	  property to the .QPR file for your query.
	
	Method Three
	------------
	
	Use a parameterized view. To create a parameterized view, choose View Parameters
	from the Query menu in the View Designer, or use the CREATE SQL VIEW command
	with a "?" symbol and a parameter name, as in this example:
	
	     CREATE SQL VIEW customer_data;
	        AS SELECT * FROM customer WHERE customer.country = ?cCountry
	
	This example includes all records where the Country field in the Customer table
	match the value in the cCountry memory variable. If cCountry did not exist at
	the time the form was created, a dialog box would appear asking for the value of
	cCountry. To use a parameterized query as the source of data for the grid, set
	the RecordSource property to 1 - Alias and the RecordSource property to the name
	of the view.
	
	Additional query words: browse key
	
	======================================================================
	Keywords          : kbDesigner kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	

---
layout: page
title: "Q133023: How to List Number of Records in Each Group of a SQL Group By"
permalink: /kb/133/Q133023/
---

## Q133023: How to List Number of Records in Each Group of a SQL Group By

{% raw %}

	Article: Q133023
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to find out how many records occur in each
	group of a query that groups the records. You can do this by using the Query
	Designer or the SQL statement it creates.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	This example uses the CUSTOMER.DBF table found in the VFP\SAMPLES\DATA
	subdirectory. The example groups the table by Country, and produces a cursor
	that has a record for each country with the number of records that appear in
	that country.
	
	1. On the File menu, click New, and then click Query. Base the query on
	  VFP\SAMPLES\DATA\CUSTOMER.DBF.
	
	2. Select the Fields tab on the Query Designer. Drag the Customer.country field
	  onto the Selected Output box. In the Functions/Expressions combo box, select
	  the COUNT() function, to count the Customer.country field. Click the Add >
	  button to move this expression into the Selected Output box.
	
	3. Select the Group By tab, and drag the Customer.country field onto the Group
	  By Fields box.
	
	4. Click the SQL button on the Query Designer toolbar to see the SQL statement
	  that was just created. It should look like this:
	
	     SELECT customer.country, COUNT(customer.country);
	        FROM testdata!customer;
	        GROUP BY customer.country
	
	5. Close the SQL statement window. Click the exclamation button on the standard
	  toolbar to run the query.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: VFoxWin Structured Query Language akz
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}

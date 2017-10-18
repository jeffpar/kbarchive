---
layout: page
title: "Q268906: HOWTO: Filter in a JOIN Condition"
permalink: kb/268/Q268906/
---

## Q268906: HOWTO: Filter in a JOIN Condition

	Article: Q268906
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbSQL kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet kbSQLProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are doing OUTER JOINs on tables, you might occasionally want to filter
	on the side of the table that would otherwise return NULLs. However, if you
	filter by using a WHERE or HAVING clause, you eliminate all the records on the
	parent side of the join that do not match the condition.
	
	To get the desired results, you can add the filter condition to the JOIN clause.
	
	MORE INFORMATION
	================
	
	As an example, you might want a list of all your customers, but want to pay
	special attention to the customers who have spent over $500 in freight.
	Typically, the first attempt at this looks similar to the following code, which
	you can paste into a .prg file or the Command window:
	
	  lcVersion = VERSION()
	  DO CASE
	     CASE "5.00" $ lcVersion
	        CD HOME() + "samples\data"
	     CASE "6.00" $ lcVersion
	        CD HOME(2) + "data"
	  ENDcase
	  SET NULLDISPLAY TO ""
	
	  SELECT customer.cust_id, order_id, freight ;
	     FROM customer ;
	        LEFT OUTER JOIN orders ON orders.cust_id = customer.cust_id ;
	        WHERE orders.freight >= 500.00
	
	The result shows only the customers who have the high freight amount, and omits
	all of those with lower amounts. There are ways to get around this by using
	UNIONed SELECTs with WHERE...NOT IN clauses, but by far the simplest solution is
	to replace the SELECT in the above code with the following:
	
	  SELECT customer.cust_id, order_id, freight ;
	     FROM customer ;
	        LEFT OUTER JOIN orders ON orders.cust_id = customer.cust_id ;
	           AND orders.freight >= 500.00
	
	REFERENCES
	==========
	
	For more information about the SELECT - SQL command, please see the Visual
	FoxPro Language Reference.
	
	For additional information about filtering OUTER JOINS, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q268022 PRB: SELECT Returns Invalid Rows When Filtering Outer Join on Child
	  Table
	
	(c) Microsoft Corporation 2000, All Rights Reserved.
	Contributions by Garrett Fitzgerald, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSQL kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

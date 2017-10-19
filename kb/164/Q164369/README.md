---
layout: page
title: "Q164369: PRB: View Designer Rewrites WHERE Clause"
permalink: /kb/164/Q164369/
---

## Q164369: PRB: View Designer Rewrites WHERE Clause

	Article: Q164369
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp600
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a local SQL view is created from a CREATE SQL VIEW command with SELECT -
	SQL statement, the parenthetical WHERE clause is rewritten in View Designer.
	
	CAUSE
	=====
	
	According to the SQL lexicon, there is no parentheses support in SQL.
	
	RESOLUTION
	==========
	
	In View Designer, the parenthetical HAVING clause is parsed correctly. Since
	HAVING sets conditions for the GROUP BY clause similarly to the way that WHERE
	sets conditions for the SELECT clause; and HAVING without GROUP BY has the same
	filtering effect as WHERE. The workaround for this problem is to replace WHERE
	clause with HAVING, whenever it is applicable.
	
	STATUS
	======
	
	This behavior is by design. The view designer was not built to handle
	parenthetical WHERE clauses.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open Tastrade sample project and database.
	
	2. At the Command window, issue the following command:
	
	        CREATE SQL View Test1 AS ;
	          SELECT * FROM customer ;
	          WHERE (customer.country = "USA"  OR customer.country = "Mexico") ;
	               AND max_order_amt > 10000
	
	3. Open View Designer to modify view Test1.
	
	4. Select "View SQL" under Query menu. The SQL code is rewritten as the
	  following. Note that the WHERE clause is wrongly parsed:
	
	        SELECT *;
	        FROM tastrade!customer;
	        WHERE customer.country = "USA";
	        OR (customer.country = "Mexico";
	        AND customer.max_order_amt > 10000)
	
	However, at step 2, if you replace WHERE with HAVING, the View Designer parses
	the SQL statement correctly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

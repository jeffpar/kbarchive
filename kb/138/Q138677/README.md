---
layout: page
title: "Q138677: BUG: CREATE SQL VIEW Scrambles the Parentheses in SQL Command"
permalink: kb/138/Q138677/
---

## Q138677: BUG: CREATE SQL VIEW Scrambles the Parentheses in SQL Command

	Article: Q138677
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbvfp600bug kbDSupportkbbuglist
	Last Modified: 27-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If, in a CREATE SQL VIEW command, there are parentheses and a logical OR
	expression, once the view is added to the database (.dbc file), the parentheses
	will appear to be moved.
	
	CAUSE
	=====
	
	The parser for the view will group the OR statements until it reaches another OR
	or the end of the statement. It has to do this in order to look correctly in the
	Selection Criteria of the View Designer.
	
	RESOLUTION
	==========
	
	To work around this problem, write the SQL statement without any parenthesis, or
	if the SQL statement is to complex, break up the statement with the UNION or
	UNION ALL clauses.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Create a program with the following code, with the Tastrade.dbc database file
	open:
	
	     CREATE SQL VIEW test AS SELECT * FROM customer ;
	        WHERE customer.city='London' ;
	        AND (customer.country='UK'  ;
	        OR customer.postal_code='EC23NT')
	
	This will create a view called Test. If the Test view is modified and on the
	Query menu, you click View SQL, you'll see that the generated SQL statement
	looks like this:
	
	   SELECT *  ;
	    FROM tastrade!customer;
	    WHERE Customer.city = "London";
	      AND Customer.country = "UK";
	      OR (Customer.postal_code = "EC23NT")
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbvfp600bug kbDSupport kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

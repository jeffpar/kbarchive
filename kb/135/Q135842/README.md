---
layout: page
title: "Q135842: DOC: SQL Statement Disagrees with Text Description"
permalink: kb/135/Q135842/
---

## Q135842: DOC: SQL Statement Disagrees with Text Description

	Article: Q135842
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbdocfix
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 355 in the Developer's Guide has a text description followed by code to
	display companies that have more than $50,000 in total orders for the year.
	However, the SQL statement displays companies with more than $1,000 in total
	orders for the year.
	
	This documentation error has been fixed in Visual FoxPro 5.0 for Windows.
	
	MORE INFORMATION
	================
	
	The SQL statement currently reads as follows:
	
	SELECT customer.company_name, SUM(orders.freight) ;
	
	     FROM tastrade!customer, tastrade!orders ;
	     WHERE customer.customer_id = orders.customer_id ;
	     GROUP BY customer.company_name ;
	     HAVING SUM(orders.freight) > 1000 ;
	     ORDER BY 2 DESC
	
	This SQL statement's HAVING clause should be changed to the following to display
	companies with more than $50,000 in total orders for the year and to match the
	text description:
	
	     HAVING SUM(orders.freight) > 50000 ;
	
	Additional query words: 3.00 docerr VFoxWin 5.00
	
	======================================================================
	Keywords          : kbdocfix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

---
layout: page
title: "Q148249: DOC: Help File Example for SELECT SQL UNION Does Not Work"
permalink: kb/148/Q148249/
---

## Q148249: DOC: Help File Example for SELECT SQL UNION Does Not Work

	Article: Q148249
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbdocfix
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro's Help information for SELECT - SQL gives an incorrect example of
	how to use the UNION clause. It will return the following error if you try to
	run it:
	
	  SELECTs are not UNION compatible
	
	This documentation error has been fixed in Visual FoxPro 5.0 for Windows.
	
	MORE INFORMATION
	================
	
	The placeholders for orders.order_id and orders.emp_id in the second SELECT are
	for the wrong data type. The placeholders are for numeric fields and they should
	be for character fields. The example should read as follows:
	
	     SELECT customer.company, orders.order_id, orders.emp_id ;
	        FROM customer, orders ;
	        WHERE customer.cust_id = orders.cust_id ;
	     UNION ;
	        SELECT customer.company, '', '' ;
	        FROM customer ;
	        WHERE customer.cust_id NOT IN ;
	        (SELECT orders.cust_id FROM orders)
	
	Additional query words: docerr VFoxWin 5.00
	
	======================================================================
	Keywords          : kbdocfix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

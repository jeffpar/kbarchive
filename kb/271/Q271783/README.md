---
layout: page
title: "Q271783: Readiness Review 70-029: Designing and Implementing Databases wi"
permalink: /kb/271/Q271783/
---

## Q271783: Readiness Review 70-029: Designing and Implementing Databases wi

	Article: Q271783
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 23-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS MCSE Readiness Review Exam 70-029 Designing and Implementing Databases with Microsoft SQL Server 7.0 ISBN 0-7356-0673-0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book MCSE Readiness Review: Exam 70-029:
	Designing and Implementing Databases with Microsoft SQL Server 7, ISBN
	0-7356-0673-0.
	
	The following topics are covered:
	
	- Pages 117 And 118: Missing Space In The Transact-SQL Batch
	
	- Page 175: Change "ORDER BY line_item_id" To "ORDER BY product_id"
	
	- Pages 181-186: "Inventory" Should Be "Product"
	
	- Page 228: Error In Answer D
	
	MORE INFORMATION
	================
	
	Pages 117 And 118: Missing Space In The Transact-SQL Batch
	----------------------------------------------------------
	
	On pages 117 and 118, in question 70-029.03.01.005, the listed Transact-SQL batch
	contains an error. There should be a space before the SELECT command in order
	for the batch to run correctly.
	
	Change:
	"N'SELECT"
	
	To:
	"N' SELECT"
	
	
	Page 175: Change "ORDER BY line_item_id" To "ORDER BY product_id"
	-----------------------------------------------------------------
	
	On page 175, in question 70-029.03.05.006, change:
	
	"ORDER BY line_item_id"
	
	To:
	"ORDER BY product_id"
	
	
	Pages 181-186: "Inventory" Should Be "Product"
	----------------------------------------------
	
	Pages 181-186 contain three questions with the same error. In questions
	70-029.03.06.001, 70-029.03.06.002 and 70-029.03.06.003, the last sentence
	should be changed from:
	
	"Each manufacturer_id column in the inventory table is a foreign key set to..."
	
	To:
	"Each manufacturer_id column in the product table is a foreign key set to..."
	
	
	Page 228: Error In Answer D
	---------------------------
	
	On page 228 in answer D, change:
	
	"The SELECT clause identifies the first_name and last_name columns. These are the
	values that will be returned in the result set."
	
	To:
	"The SELECT clause identifies the salary column. This is the value that will be
	returned in the result set."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: TKBOOK RRBOOK BKOFFICE SQL 0-7356-0673-0
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

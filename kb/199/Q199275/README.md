---
layout: page
title: "Q199275: Inside SQL Server 6.5: Comments and Corrections"
permalink: /kb/199/Q199275/
---

## Q199275: Inside SQL Server 6.5: Comments and Corrections

	Article: Q199275
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 30-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Inside Microsoft SQL Server 6.5 ISBN 1-57231-331-5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Inside Microsoft SQL Server 6.5, ISBN
	1-57231-331-5.
	
	The following topics are covered:
	
	- Page 84, Figure 3-3: Nonclustered Index Should Be Indid > 1
	
	- Page 85, Figure 3-4: Clustered Index Should Be Indid = 1
	
	- Page 228: cust_id should be set to NOT NULL
	
	- Page 303: Last line in query not necessary
	
	MORE INFORMATION
	================
	
	Page 84, Figure 3-3: Nonclustered Index Should Be Indid > 1
	-----------------------------------------------------------
	
	Page 84, figure 3-3:
	A representation of a non-clustered index in sysindexes should be indid >1.
	
	Change: indid = 0
	
	To: indid > 1
	
	
	Page 85, Figure 3-4: Clustered Index Should Be Indid = 1
	--------------------------------------------------------
	
	Page 85, figure 3-4: A representation of the clustered index in sysindexes should
	be indid=1.
	
	Change: indid = 0
	
	To: indid = 1
	
	
	Page 228: cust_id should be set to NOT NULL
	-------------------------------------------
	
	On page 228, cust_id field is specified as IDENTITY, and should not be set to
	NULL. It should be NOT NULL.
	
	Change:
	
	  CREATE TABLE customer 
	  ( 
	  cust_id smallint IDENTITY(100, 20) NULL, 
	  cust_name varchar(50) NOT NULL, 
	  ) 
	
	To:
	
	  CREATE TABLE customer 
	  ( 
	  cust_id smallint IDENTITY(100, 20) NOT NULL, 
	  cust_name varchar(50) NOT NULL, 
	  ) 
	
	
	Page 303: Last line in query not necessary
	------------------------------------------
	
	On page 303, under "Correlated Subqueries", the last line in the example query is
	not necessary, and deleting the last line will not change the results of the
	query.
	
	This example can also be written:
	
	  SELECT T.title_id, title
	  FROM titles T
	  WHERE PRICE <= 19.99
	  and T.title_id IN (
	  SELECT S.title_id FROM sales S, stores ST
	  WHERE S.stor_id=ST.stor_id
	  AND ST.state='CA' AND S.qty*T.price > 250
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: ms_press 1-57231-331-5
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

---
layout: page
title: "Q309095: MCSE Readiness Review Exam 70-229: Microsoft SQL Server 2000 Dat"
permalink: /kb/309/Q309095/
---

## Q309095: MCSE Readiness Review Exam 70-229: Microsoft SQL Server 2000 Dat

	Article: Q309095
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 06-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS MCSE Readiness Review Exam 70-229 Microsoft SQL Server 2000 Database Design and Implementation ISBN 0-7356-1251-X 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book MCSE Readiness Review Exam 70-229:
	Microsoft SQL Server 2000 Database Design & Implementation, ISBN
	0-7356-1251-X.
	
	The following topics are covered:
	
	- Page 62: Correction To Question 70-229-02.02.012
	
	- Pages 137 & 209: @@ROWS Should Be @@ROWCOUNT
	
	MORE INFORMATION
	================
	
	Page 62: Correction To Question 70-229-02.02.012
	------------------------------------------------
	
	On page 62, the correct answer for question 70-229.02.02.012 should be A, not B.
	
	Change the text to be:
	
	"Correct Answers: A
	
	A. Correct: When a unique index exists, UPDATE or INSERT statements that would
	generate duplicate key values are rolled back, and SQL Server displays an error
	message. This is true even if the UPDATE or INSERT statement changes many rows
	but causes only one duplicate. If an attempt is made to enter data for which
	there is a unique index and the IGNORE_DUP_KEY clause is specified, only the
	rows violating the UNIQUE index fail. When processing an UPDATE statement,
	IGNORE_DUP_KEY has no effect.
	
	SQL Server does not allow the creation of a unique index on columns that already
	include duplicate values, whether or not IGNORE_DUP_KEY is set. If attempted,
	SQL Server displays an error message; duplicates must be eliminated before a
	unique index can be created on the column(s).
	
	B. Incorrect: see explanation for A.
	
	C. Incorrect: see explanation for A."
	
	
	Pages 137 & 209: @@ROWS Should Be @@ROWCOUNT
	--------------------------------------------
	
	On page 137, in the first answer B, and on page 209, in the second entry under
	Symbols, change:
	"@@ROWS"
	
	To:
	"@@ROWCOUNT"
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: TKBOOK RRBOOK BKOFFICE SQL 0-7356-1251-X BJELETICH HAHN
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

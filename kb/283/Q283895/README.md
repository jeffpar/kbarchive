---
layout: page
title: "Q283895: Inside SQL Server 2000 Comment and Corrections"
permalink: /kb/283/Q283895/
---

## Q283895: Inside SQL Server 2000 Comment and Corrections

	Article: Q283895
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 11-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Inside Microsoft SQL Server 2000 ISBN 0-7356-0998-5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Inside Microsoft SQL Server 2000, ISBN
	0-7356-0998-5.
	
	The following topics are covered:
	
	- Page 319: Incorrect Reference To Appendix D
	
	- Page 356: Code Lines Repeated
	
	- Page 365: Incorrect Syntax in Table 7-5
	
	MORE INFORMATION
	================
	
	Page 319: Incorrect Reference To Appendix D
	-------------------------------------------
	
	On page 319, the Note section makes a reference to Appendix D. There is no
	Appendix D.
	
	Change:
	"...please see Appendix D for suggestions on further reading..."
	
	To:
	"...please see Bibliography and Suggested Reading on page 987 for suggestions on
	further reading..."
	
	
	Page 356: Code Lines Repeated
	-----------------------------
	
	On page 356, in the query, 13 lines from the page top, two lines of code are
	repeated. Delete the first instance of the following two lines:
	
	  WHERE NOT EXISTS
	             (SELECT * FROM titles T1
	
	
	Page 365: Incorrect Syntax in Table 7-5
	---------------------------------------
	
	On page 365, in Table 7-5, the first three entries should not contain question
	marks.
	
	Change:
	
	  LIKE  'Mc?%'
	  LIKE '?%inger'
	  LIKE '?%en?%'
	
	To:
	
	  LIKE 'Mc%'
	  LIKE '%inger'
	  LIKE '%en%'
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: DEVBOOK 0-7356-0998-5 DELANEY SQL
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

---
layout: page
title: "Q282766: SQL Server 2000 Administrator's Pocket Consultant Comments and C"
permalink: kb/282/Q282766/
---

## Q282766: SQL Server 2000 Administrator's Pocket Consultant Comments and C

	Article: Q282766
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 21-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft SQL Server 2000 Administrator's Pocket Consultant ISBN 0-7356-1129-7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft SQL Server 2000 Administrator's
	Pocket Consultant, ISBN 0-7356-1129-7.
	
	The following topics are covered:
	
	- Page 89: Incorrect Description Of "Blocked By" And "Blocking" Categories
	
	MORE INFORMATION
	================
	
	Page 89: Incorrect Description Of "Blocked By" And "Blocking" Categories
	------------------------------------------------------------------------
	
	On page 89, in Table 3-1, the descriptions for "Blocked By" and "Blocking"
	categories are incorrect.
	
	Change:
	
	+----------------------------------------------------------------------------+
	| Category   | Description                                                   | 
	+----------------------------------------------------------------------------+
	| Blocked By | The number of connections blocking this process.              | 
	+----------------------------------------------------------------------------+
	| Blocking   | The number of connections waiting for this process to finish. | 
	+----------------------------------------------------------------------------+
	
	To:
	
	+-----------------------------------------------------------------+
	| Category   | Description                                        | 
	+-----------------------------------------------------------------+
	| Blocked By | The Process ID blocking this process.              | 
	+-----------------------------------------------------------------+
	| Blocking   | The Process ID waiting for this process to finish. | 
	+-----------------------------------------------------------------+
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: SQL TKBOOK Stanek
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

---
layout: page
title: "Q189199: Inside Distributed COM Comments and Corrections"
permalink: kb/189/Q189199/
---

## Q189199: Inside Distributed COM Comments and Corrections

	Article: Q189199
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Inside Distributed COM ISBN 1-57231-849-X 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Inside Distributed COM, ISBN
	1-57231-849-X.
	
	The following topics are covered:
	
	- Page 52: Reflexive and Symmetric Used Incorrectly
	
	MORE INFORMATION
	================
	
	Page 52: Reflexive and Symmetric Used Incorrectly
	-------------------------------------------------
	
	The terms "Reflexive" and "Symmetric" are used incorrectly to describe
	QueryInterface rules. The correct meaning of these terms is as follows:
	
	  Reflexive: (A=A)
	  Symmetric: (if A=B, then B=A)
	
	To correct the book, the terms should be swapped. Specifically, page 52 should be
	changed in the following ways:
	
	  QueryInterface must be reflexive. If a client holds a pointer to an interface
	  and queries for that same interface, the call must succeed. QueryInterface
	  must be symmetric. If a client holding a pointer to one interface queries
	  successfully for a second interface, the client must be able to call
	  QueryInterface through the second pointer for the first interface.
	
	Swap Reflexive and Symmetric labels on Figure 2-4.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: ms_press
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	
	=============================================================================
	

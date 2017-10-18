---
layout: page
title: "Q242515: ALS TCP/IP For Windows NT Comments and Corrections"
permalink: kb/242/Q242515/
---

## Q242515: ALS TCP/IP For Windows NT Comments and Corrections

	Article: Q242515
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 12-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Academic Learning Series TCP/IP for Microsoft Windows NT ISBN 0-7356-0522-X 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book TCP/IP for Microsoft Windows NT, Academic
	Learning Series, ISBN 0-7356-0522-X.
	
	The following topics are covered:
	
	- Lab Manual, Page 43: Errors In "Defining a Subnet Mask" Section
	
	MORE INFORMATION
	================
	
	Lab Manual, Page 43: Errors In "Defining a Subnet Mask" Section
	---------------------------------------------------------------
	
	The section under the chart on page 43 incorrectly states that the value of x
	must be at least 5, and the value of y must be at least 7. It should state that
	the value of x must be at least 7, and the value of y must be at least 8. Also,
	the last bullet should be ignored because it incorrectly states that you could
	use 9 and 7. Using 7 bits would not produce a result greater than the required
	200.
	
	Change:
	"Therefore, for the problem above, the value of x must be at least 5, and the
	value of y must be at least 7. Further, x+y must be 16. You could choose to
	use:
	
	   7 bits for subnetting and 9 bits for hosts per subnet, or
	   8 bits for subnetting and 8 bits for hosts per subnet, or
	   9 bits for subnetting and 7 bits for hosts per subnet."
	
	To:
	"Therefore, for the problem above, the value of x must be at least 7, and the
	value of y must be at least 8. Further, x+y must be 16. You could choose to
	use:
	
	   7 bits for subnetting and 9 bits for hosts per subnet, or
	   8 bits for subnetting and 8 bits for hosts per subnet." 
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: TKBOOK ALS NT40 0-7356-0522-X
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

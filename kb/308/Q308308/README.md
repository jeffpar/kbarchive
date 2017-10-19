---
layout: page
title: "Q308308: Designing Solutions with COM+ Technologies Comments and Correcti"
permalink: /kb/308/Q308308/
---

## Q308308: Designing Solutions with COM+ Technologies Comments and Correcti

	Article: Q308308
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Designing Solutions with COM+ Technologies ISBN 0-7356-1127-0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Designing Solutions with COM+ Technologies,
	ISBN 0-7356-1127-0.
	
	The following topics are covered:
	
	- Page 440: Incorrect Code in Method
	
	MORE INFORMATION
	================
	
	Page 440: Incorrect Code in Method
	----------------------------------
	
	On page 440, modify the printed source code to remove the next-to-last line of
	code on the page.
	
	Change:
	
	  _ASSERTE (! tStreamPos.HighPart
	  	        && tStreamPos.LowPart < UCHAR_MAX);
	
	To:
	
	  _ASSERTE (! tStreamPos.HighPart);
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 0-7356-1127-0 BROWN BARON CHADWICK
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

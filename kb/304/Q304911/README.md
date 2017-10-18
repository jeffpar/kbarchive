---
layout: page
title: "Q304911: Inside C# Comments And Corrections"
permalink: kb/304/Q304911/
---

## Q304911: Inside C# Comments And Corrections

	Article: Q304911
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 01-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Inside C# ISBN 0-7356-1288-9 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Inside C#, ISBN 0-7356-1288-9.
	
	The following topics are covered:
	
	- Page 16: Error In Code Sample
	
	- Page 132: Incorrect Information About Two Dimensional Array
	
	MORE INFORMATION
	================
	
	Page 16: Error In Code Sample
	-----------------------------
	
	The code sample on page 16 contains errors on line 11 and 21. Change:
	
	  public void CalculatePay (int hoursWorked)
	
	To:
	
	  public double CalculatePay (int hoursWorked)
	
	
	Page 132: Incorrect Information About Two Dimensional Array
	-----------------------------------------------------------
	
	On page 132, in the first paragraph after the the code shown on the page,
	
	Change:
	"Therefore, in the case of a two dimensional array of 5 by 4, the Length property
	would return 9."
	
	To:
	"Therefore, in the case of a two dimensional array of 5 by 4, the Length property
	would return 20."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	REFERENCES
	==========
	
	DEVBOOK ARCHER 0-7356-1288-9
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	

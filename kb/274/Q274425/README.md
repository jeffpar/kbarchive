---
layout: page
title: "Q274425: Visual Basic Design Patterns Comments and Corrections"
permalink: kb/274/Q274425/
---

## Q274425: Visual Basic Design Patterns Comments and Corrections

	Article: Q274425
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Visual Basic Design Patterns ISBN 1-57231-957-7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft Visual Basic Design Patterns,
	ISBN 1-57231-957-7.
	
	The following topics are covered:
	
	- Page 14-15: Code Sample Should Include Equal Signs
	
	MORE INFORMATION
	================
	
	Pages 14-15: Code Sample Should Include Equal Signs
	---------------------------------------------------
	
	On pages 14 and 15, the code sample should include equal signs to be more
	accurate.
	
	Change:
	
	  Public Function ClientSalaryRange(Psn As Person, _
	   SR As SalaryRange) As Boolean
	      Select Case SR
	      Case UNDER_20K
	          ClientSalaryRange = Psn.AnnualIncome < 20000
	      Case BETWEEN_20K_AND_50K
	          ClientSalaryRange = (Psn.AnnualIncome > 20000 And _ 
	                               Psn.AnnualIncome < 50000)
	      Case OVER_50K
	          ClientSalaryRange = Psn.AnnualIncome > 50000
	      End Select
	  End Function
	
	To:
	
	  Public Function ClientSalaryRange(Psn As Person, _
	   SR As SalaryRange) As Boolean
	      Select Case SR
	      Case UNDER_20K
	          ClientSalaryRange = Psn.AnnualIncome < 20000
	      Case BETWEEN_20K_AND_50K
	          ClientSalaryRange = (Psn.AnnualIncome >= 20000 And _ 
	                               Psn.AnnualIncome <= 50000)
	      Case OVER_50K
	          ClientSalaryRange = Psn.AnnualIncome > 50000
	      End Select
	  End Function
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: DEVBOOK VSTUDIO VB STAMATAKIS
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Issue type        : kbinfo
	
	=============================================================================
	

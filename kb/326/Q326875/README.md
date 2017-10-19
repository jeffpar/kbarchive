---
layout: page
title: "Q326875: MCAD/MCSD Self-Paced Training Kit: Developing Windows-Based Appl"
permalink: /kb/326/Q326875/
---

## Q326875: MCAD/MCSD Self-Paced Training Kit: Developing Windows-Based Appl

	Article: Q326875
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 13-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS MCAD/MCSD Self-Paced Training Kit Developing Windows-Based Applications With Microsoft Visual Basic.Net And Microsoft Visual C#.Net, ISBN 0-7356-1533-0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book MCAD/MCSD Self-Paced Training Kit:
	Developing Windows-Based Applications with Microsoft Visual Basic .NET and
	Microsoft Visual C# .NET, ISBN 0-7356-1533-0.
	
	The following topics are covered:
	
	- Page 11: Missing As
	
	- Page 11: Incorrect Statement About Variable Default Initialization in C#
	
	- Page 11: Incorrect Statement About Default Initialization
	
	- Page 13: Incorrect Information About Aliasing in Visual Basic.NET
	
	- Page 31: Object1 Should Be Object2
	
	- Page 59: Deactivated Should Be Deactivate
	
	- Page 60: CancelEventArgsCancel Should Be CancelEventArgs.Cancel
	
	- Page 64: Tab Index Should Be Tab Order
	
	- Page 96: Libby Should Be Joe
	
	- Pages 104 And 505: Shortcut Should Be Context
	
	MORE INFORMATION
	================
	
	Page 11: Missing As
	-------------------
	
	On page 11, under "Using Value Type and Reference Type Variables",
	
	change:
	"Dim x, y Integer"
	
	to:
	"Dim x, y As Integer"
	
	
	Page 11: Incorrect Statement About Variable Default Initialization in C#
	------------------------------------------------------------------------
	
	On page 11, in the paragraph above "Using Value Type and Reference Type
	Variables", please remove:
	
	"In C#, variables are not given default initialization. Any attempt to use an
	uninitialized variable, whether at a class level or a method level, will result
	in an error."
	
	
	Page 11: Incorrect Statement About Default Initialization
	---------------------------------------------------------
	
	On page 11, the final paragraph of the section "Reference Types" incorrectly
	states that in C# variables are not given default initialization. In fact,
	variables of a reference type have a default value of null.
	
	Change:
	"In C#, variables are not given default initialization. Any attempt to use an
	uninitialized variable, whether at a class level or a method level, will result
	in an error."
	
	To:
	"In C#, variables of a reference type have a default value of null. It is
	generally not recommended that you rely on the default value, and these
	variables should not be used uninitialized."
	
	
	Page 13: Incorrect Information About Aliasing in Visual Basic.NET
	-----------------------------------------------------------------
	
	On page 13, remove the line above "Referencing External Libraries":
	
	"Aliasing is not available in Visual Basic.NET."
	
	
	Page 31: Object1 Should Be Object2
	----------------------------------
	
	On page 31, in the last line,
	
	Change:
	"Object1.MyField = 20"
	
	To:
	"Object2.MyField = 20"
	
	
	Page 59: Deactivated Should Be Deactivate
	-----------------------------------------
	
	On page 59, in the "Activated/Deactivated" section, the form event "Deactivate"
	is incorrectly referred as "Deactivated". All instances of "Deactivated" should
	be changed to "Deactivate" in this section.
	
	
	Page 60: CancelEventArgsCancel Should Be CancelEventArgs.Cancel
	---------------------------------------------------------------
	
	On page 60, under "Visual C#",
	
	Change:
	"CancelEventArgsCancel = true;"
	
	To:
	"CancelEventArgs.Cancel = true;"
	
	
	Page 64: Tab Index Should Be Tab Order
	--------------------------------------
	
	On page 64, in the second step 1,
	
	Change:
	"1. From the View menu, choose Tab Index."
	
	To:
	"1. From the View menu, choose Tab Order."
	
	
	Page 96: Libby Should Be Joe
	----------------------------
	
	On page 96, in Table 2.2,
	
	Change:
	"Libby's Doughnut Factory"
	
	To:
	"Joe's Doughnut Factory"
	
	
	Pages 104 And 505: Shortcut Should Be Context
	---------------------------------------------
	
	On pages 104 and 505, in question 6,
	
	Change:
	"shortcut menu"
	
	To:
	"context menu"
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: TKBOOK VC VSTUDIO VB 0-7356-1533-0 Stoecker
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

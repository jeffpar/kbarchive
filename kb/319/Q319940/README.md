---
layout: page
title: "Q319940: Upgrading Microsoft Visual Basic 6.0 to Microsoft Visual Basic ."
permalink: kb/319/Q319940/
---

## Q319940: Upgrading Microsoft Visual Basic 6.0 to Microsoft Visual Basic .

	Article: Q319940
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 21-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Upgrading Microsoft Visual Basic 6.0 to Microsoft Visual Basic.NET ISBN 0-7356-1587-X 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Upgrading Microsoft Visual Basic 6.0 to
	Microsoft Visual Basic .NET, ISBN 0-7356-1587-X.
	
	The following topics are covered:
	
	- Page 41: Correction To Code Sample
	
	MORE INFORMATION
	================
	
	Page 41: Correction To Code Sample
	----------------------------------
	
	On page 41, in the code sample at the top,
	
	Change:
	
	  Dim v As Variant
	  Dim s As String
	  v  = "My varant contains a string"
	  s = CStr(v)
	
	To:
	
	  Dim o As Object
	  Dim s As String
	  o = "My object contains a string"
	  s = CStr(o)
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: DEVBOOK 0-7356-1587-X Robinson Bond Oliver
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

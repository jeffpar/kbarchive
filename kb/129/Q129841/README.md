---
layout: page
title: "Q129841: DEVELOPING MS EXCEL 5 SOLUTIONS Corrections and Comments"
permalink: kb/129/Q129841/
---

## Q129841: DEVELOPING MS EXCEL 5 SOLUTIONS Corrections and Comments

	Article: Q129841
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 16-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Developing Microsoft Excel 5 Solutions ISBN 1-55615-684-7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Developing Microsoft Excel 5 Solutions,
	ISBN 1-55615-684-7.
	
	The following topics are covered:
	
	The following topics are covered:
	
	- Various Locations: Author Comments and Corrections
	
	- Pages 58-59: TypeDef Blocks Don't Use "Dim" Prefix
	
	- Page 456: Functions are not volatile by default
	
	- Book Idea: Add SolverReset to Appendix H
	
	- Page 644: Eighth Argument Changed from Search to SearchOption
	
	MORE INFORMATION
	================
	
	In addition to a description of the book's problems, this document might also
	include sections labeled "Correction" and "Comments." Please note that the
	"Correction" section is worded for correcting the book and does not necessarily
	address the problem introduced by the book error. The "Comments" section
	contains specific information for working around problems.
	
	Various Locations: Author Comments and Corrections
	--------------------------------------------------
	
	- Inside front cover:
	
	  In the object model diagrams on the inside front cover and on page 18, there
	  is an object listed as "online"; this object should actually be "OutLine."
	
	- Pages 600 and 601:
	
	  The Windows API calls listed on pages 600 and 601 don't work under Microsoft
	  Windows NT. A disclaimer should be added where necessary to state this fact.
	
	  Information on the appropriate 32-bit calls will be addressed in the next
	  edition.
	
	Pages 58-59: TypeDef Blocks Don't Use "Dim" Prefix
	--------------------------------------------------
	
	The code in CHAP02.XLS in module Chap02d runs flawlessly and contains the
	following TypeDef block:
	
	     Type PersonalData
	        PName as String
	        PAge as Integer
	        PBirthDate as Date
	     End Type
	
	However, the same block, as written on pages 58 and 59, will produce syntax
	errors if typed in as written. The TypeDef block as written on these pages is as
	follows:
	
	     Type PersonalData
	        Dim PName as String
	        Dim PAge as Integer
	        Dim PBirthDate as Date
	     End Type
	
	NOTE: This TypeDef block is the same on both pages 58 and 59.
	
	Correction:
	
	Remove the "Dim" prefix from the TypeDef blocks on pages 58 and 59.
	
	Page 456: Functions Are not Volatile By Default
	-----------------------------------------------
	
	The FYI on page 456 states that functions are volatile by default. This is
	incorrect; functions are nonvolatile by default.
	
	Add SolverReset to Appendix H
	-----------------------------
	
	Information on the SolverReset function will be added to the "Programming with
	Solver" appendix in the next edition of this book.
	
	Page 644: Eighth Argument Changed from Search to SearchOption
	-------------------------------------------------------------
	
	In Appendix H, on page 644, under "SolverOptions," the eighth argument for the
	SolverOptions function is listed as "Search," when it should be listed as
	"SearchOption."
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: mspress ms_press press bookbug 5.0 5.00 Macintosh Windows ISBN 1-55615-684-7
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

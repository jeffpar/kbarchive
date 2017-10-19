---
layout: page
title: "Q125971: INSIDE VISUAL C++ VERSION 1.5 Corrections and Comments"
permalink: /kb/125/Q125971/
---

## Q125971: INSIDE VISUAL C++ VERSION 1.5 Corrections and Comments

	Article: Q125971
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Inside Visual C++, second edition ISBN 1-55615-661-8 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press book "Inside Visual C++," second edition.
	
	The following topic is covered:
	
	- Page 186: Piece of Code Missing
	
	MORE INFORMATION
	================
	
	In addition to a description of the error or comment, there are sometimes
	additional sections labeled "Correction" and "Comments." Please note that the
	"Correction" section is worded for correcting the book and does not necessarily
	address the problem introduced by the book error. The "Comments" section
	contains specific information for working around problems.
	
	Page 186: Piece of Code Missing
	-------------------------------
	
	Line 9 of the code listing on page 186 is missing a member function call.
	
	The existing line is:
	
	     if (m_pDisplayMemDC == NULL) {
	
	Correction:
	
	The correct line should be:
	
	     if (m_pDisplayMemDC->GetSafeHdc() == NULL) {
	
	Comments:
	
	If a program includes the incorrect version of this line of code, you will be
	able to compile it, but it will not run correctly.
	
	The source code provided with the CD-ROM in file EX10AVW.CPP contains the correct
	code, and this example file can be compiled and executed without any problems.
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: mspress ms_press press bookbug ed 2nd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	
	=============================================================================
	

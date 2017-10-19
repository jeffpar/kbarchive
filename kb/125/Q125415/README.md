---
layout: page
title: "Q125415: PROGRAMMING WINDOWS 3.1: 3rd Edition Corrections"
permalink: /kb/125/Q125415/
---

## Q125415: PROGRAMMING WINDOWS 3.1: 3rd Edition Corrections

	Article: Q125415
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Programming Windows 3.1, third edition ISBN 1-55615-395-3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press book "Programming Windows 3.1," third edition.
	
	The following topics are covered:
	
	- Page 81: SYSMETS3.C Missing Vertical Scroll Bar
	
	MORE INFORMATION
	================
	
	In addition to a description of the book's problems, this document might also
	include sections labeled "Correction" and "Comments." Please note that the
	"Correction" section is worded for correcting the book and does not necessarily
	address the problem introduced by the book error. The "Comments" section
	contains specific information for working around problems.
	
	Page 81: SYSMETS3.C Missing Vertical Scroll Bar
	-----------------------------------------------
	
	SYSMETS3.C, as shown in the book and on the companion disk, does not show a
	vertical scroll bar.
	
	Correction:
	
	Below are the two omitted lines (with previous 3 lines to provide context):
	
	  Case WM_SIZE:
	     cxClient = LOWORD (lParam) ;
	     cyClient = HIWORD (lParam) ;
	
	     nVscrollMax = max (0, NUMLINES + 2 - cyClient / cyChar) ;
	     nVscrollPos = min (nVscrollPos, nVscrollMax) ;
	
	Comments:
	
	SYSMETS3.C is missing two lines from the code both in the book and on the
	companion disk.
	
	Insert the following lines below the cyClient definition in the CASE WM_SIZE
	section of SYSMETS3.C:
	
	  nVscrollMax = max (0, NUMLINES + 2 - cyClient / cyChar) ;
	  nVscrollPos = min (nVscrollPos, nVscrollMax) ;
	
	When you recompile this code, scroll bars will be present in the resulting
	program.
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: mspress ms_press press bookbug
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	
	=============================================================================
	

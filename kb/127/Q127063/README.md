---
layout: page
title: "Q127063: ADVANCED WINDOWS NT: Corrections and Comments"
permalink: kb/127/Q127063/
---

## Q127063: ADVANCED WINDOWS NT: Corrections and Comments

	Article: Q127063
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Advanced Windows NT ISBN 1-55615-567-0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press book "Advanced Windows NT."
	
	The following topics are covered:
	
	- Page 203: WAIT_OBJECTS_0 Should Be OBJECT
	
	- Pages 207 and 208: == Used to Assign Values to g_dwTimes[]
	
	MORE INFORMATION
	================
	
	In addition to a description of the book's problems, this document might also
	include sections labeled "Correction" and "Comments." Please note that the
	"Correction" section is worded for correcting the book and does not necessarily
	address the problem introduced by the book error. The "Comments" section
	contains specific information for working around problems.
	
	Page 203: WAIT_OBJECTS_0 Should Be OBJECT
	-----------------------------------------
	
	In the table on page 203, the WAIT_OBJECT_0 return value has an extra S.
	
	Correction:
	
	On page 203, change
	
	        WAIT_OBJECT_0 to (WAIT_OBJECTS_0 _ cOBJECTS - 1)
	
	to the following:
	
	        WAIT_OBJECT_0 to (WAIT_OBJECT_0 _ cOBJECTS - 1)
	
	Pages 207 and 208: == Used to Assign Values to g_dwTimes[]
	----------------------------------------------------------
	
	Pages 207 and 208 incorrectly use == to assign values to
	
	        g_dwTimes[g_nIndex] and g_dwTimes[g_nIndex-1].
	
	Correction:
	
	The lines on page 207 and 208 which read
	
	        g_dwTimes[g_nIndex] == GetTickCount();
	
	  -and-
	
	        g_dwTimes[g_nIndex-1] == GetTickCount();
	
	should read as follows:
	
	        g_dwTimes[g_nIndex] = GetTickCount();
	
	  -and-
	
	        g_dwTimes[g_nIndex-1] = GetTickCount();
	
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
	

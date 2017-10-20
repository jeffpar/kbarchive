---
layout: page
title: "Q306372: Microsoft Excel 2002 Visual Basic for Applications Step by Step"
permalink: /kb/306/Q306372/
---

## Q306372: Microsoft Excel 2002 Visual Basic for Applications Step by Step

{% raw %}

	Article: Q306372
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Excel 2002 Visual Basic For Applications Step By Step ISBN 0-7356-1359-1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft Excel 2002 Visual Basic for
	Applications Step by Step, ISBN 0-7356-1359-1.
	
	The following topics are covered:
	
	- Page xii: Delete Sentence At End Of Step 4
	
	- Page xiii: Two Corrections To Filenames In Table
	
	- Page 93: Correction To Step 7
	
	MORE INFORMATION
	================
	
	Page xii: Delete Sentence At End Of Step 4
	------------------------------------------
	
	At the top of page xii in Step 4, delete the sentence "Within that folder are
	subfolders for each chapter."
	
	No subfolders are created by the Setup program.
	
	
	Page xiii: Two Corrections To Filenames In Table
	------------------------------------------------
	
	In the table that continues at the top of page xiii, make the following two
	changes:
	
	Change:
	"Finished\Chapter12.xls"
	
	To:
	"EIS.xls"
	
	Also, add the filename "Code12H.txt" to the end of the list.
	
	
	Page 93: Correction To Step 7
	-----------------------------
	
	On page 93, in step 7,
	
	Change:
	"Type Cells.Item(16777216). Select and press Enter.
	This selects cell IV65535, the lower right cell in the worksheet. You could
	select the same cell by using two arguments with the Cells collection --
	Cells.Item(65535,255) -- or by using the Range property -- Range('IV65535')."
	
	To:
	"Type Cells.Item(16777216). Select and press Enter.
	This selects cell IV65536, the lower right cell in the worksheet. You could
	select the same cell by using two arguments with the Cells collection --
	Cells.Item(65536,256) -- or by using the Range property -- Range('IV65536')."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 0-7356-1359-1 EUBOOK EUSBS JACOBSON
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

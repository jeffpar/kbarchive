---
layout: page
title: "Q197614: Visual Basic 6.0 Programmer's Guide Comments and Corrections"
permalink: kb/197/Q197614/
---

## Q197614: Visual Basic 6.0 Programmer's Guide Comments and Corrections

	Article: Q197614
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Visual Basic 6.0 Programmer's Guide ISBN 1-57231-863-5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft Visual Basic 6.0 Programmer's
	Guide, ISBN 1-57231-863-5.
	
	The following topics are covered:
	
	- Page 28: Errors in code
	
	MORE INFORMATION
	================
	
	Page 28: Errors in code
	-----------------------
	
	The following changes in the event code are necessary to make the application run
	properly. Change:
	
	   Private Sub Data1_Reposition()
	     Data1.Caption = Data1.Recordset("ProductName")
	   End Sub
	
	To:
	
	   Private Sub Data1_Reposition()
	     Data1.Caption = Data1.Recordset("Title")
	   End Sub
	
	Also change:
	
	   Private Sub MSFLexGrid1_DblClick()
	     List1.AddItem MSFlexGrid.Text
	   End Sub
	
	To:
	
	   Private Sub MSFlexGrid1_DblClick()
	     List1.AddItem MSFlexGrid1.Text
	   End Sub
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: ms_press 1-57231-863-5
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

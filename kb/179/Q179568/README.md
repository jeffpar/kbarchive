---
layout: page
title: "Q179568: Understanding ActiveX and OLE Corrections and Comments"
permalink: kb/179/Q179568/
---

## Q179568: Understanding ActiveX and OLE Corrections and Comments

	Article: Q179568
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 12-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Understanding ActiveX and OLE ISBN 1-57231-216-5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press book "Understanding ActiveX and OLE," ISBN
	1-57231-216-5.
	
	Contents:
	
	- Page xiii, 132, 143: Miscellaneous Edits
	
	- Figure 4-4: Functions in Wrong Order
	
	- Page 152: MkParseDisplayName Should Be MkParseDisplayNameEx
	
	- Page 290: Code Sample: Quote Marks Outside Parenthesis
	
	MORE INFORMATION
	================
	
	Page xiii, 132, 143: Miscellaneous Edits
	----------------------------------------
	
	Corrections:
	Page xii, 3rd paragraph:
	Change: "Joe Quaglian"
	To: "Joe Quagliani"
	
	Page 132, first line:
	Change: "the monitor does more than create the object"
	To: "the moniker does more than create the object"
	
	Page 143, 3rd paragraph, 2nd sentence:
	Change: "The previous call to IOleItemContainer::BindToObject..."
	To: "The previous call to IOleItemContainer::GetObject..."
	
	
	Figure 4-4: Functions in Wrong Order
	------------------------------------
	
	The functions in Figure 4-4 should be in this order from top to bottom:
	
	QueryInterface, AddRef, Release, GetTypeInfoCount, GetTypeInfo, GetIDsOfNames,
	Invoke.
	
	
	Page 152: MkParseDisplayName Should Be MkParseDisplayNameEx
	-----------------------------------------------------------
	
	On page 152, in the sidebar,
	
	Change:
	"The newer of the two, MkParseDisplayName ..."
	
	To:
	"The newer of the two, MkParseDisplayNameEx ..."
	
	
	Page 290: Code Sample: Quote Marks Outside Parenthesis
	------------------------------------------------------
	
	In the code sample on page 290, the quote marks included in the MsgBox statements
	are in the wrong place in the SpinButton_Spinup() and SpinButton_SpinDown()
	subroutines. Change the routines to read as follows:
	
	     Sub SpinButton_SpinUp()
	        MsgBox ("Up arrow clicked")
	     End Sub
	     Sub Spinbutton_SpinDown()
	        MsgBox ("Down arrow clicked")
	     End Sub
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of the book, it may already
	contain the above corrections.
	
	Additional query words: press ms_press bookbug 1-57231-216-5
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

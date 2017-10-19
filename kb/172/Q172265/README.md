---
layout: page
title: "Q172265: Running Microsoft Excel 97 Comments and Corrections"
permalink: /kb/172/Q172265/
---

## Q172265: Running Microsoft Excel 97 Comments and Corrections

	Article: Q172265
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Running Microsoft Excel 97 ISBN 1-57231-321-8 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains corrections, comments, and information on known errors
	relating to the Microsoft Press book Running Microsoft Excel 97, ISBN
	1-57231-321-8.
	
	Contents:
	
	- Back Cover: Online book does not have Search feature
	
	- Page 1025: Triangle function returns errors
	
	- Page 1043: Code error
	
	MORE INFORMATION
	================
	
	Online Book Does Not Have Search Feature
	----------------------------------------
	
	The back cover of "Running Microsoft Excel 97" states that you can "Find
	information fast with a searchable version of the book on disc."
	
	The online version of "Running Microsoft Excel 97" provides you with an interface
	that will allow you to browse through the Table of Contents of the book and
	locate the section you are interested in. Hyperlinks also allow the user to
	quickly jump to related topics throughout the book. However, there is no
	"Search" button or feature in the book.
	
	Correction:
	Back Cover, 2nd-to-last bullet:
	Change: "Find information fast with a searchable version of the book on disc."
	To: "Find information fast with an online version of the book."
	
	
	Page 1025: Triangle Function Returns Errors
	-------------------------------------------
	
	In Microsoft Excel 97, running the Triangle function code on page 1025 returns an
	error for these calls on page 1026:
	
	       =Triangle(,4,5) 
	       =Triangle(3,,5) 
	       =Triangle(A4,B4,C4)
	
	Microsoft Excel 97 will return #VALUE? as the value for the cell. This is caused
	by a problem with the IsMissing function in Microsoft Excel 97. The Triangle
	function expects IsMissing to return True when the value of the variant is Null.
	On computers affected by this problem, IsMissing will always return False
	whether or not the variant is Null. Consequently, the function does not evaluate
	correctly.
	
	Because of the structure of the function, the only arguments that will evaluate
	correctly are:
	
	       =Triangle(arg1,arg2)
	
	Microsoft Press is currently researching this problem and will post further
	information when it becomes available.
	
	
	Page 1043: Code error
	---------------------
	
	Correction:
	Page 1043, code block 1:
	Change to:
	
	        "RiverReport version" + CStr(MyAppVersion)
	   
	     End With
	   
	     'Present the dialog box.<BR/>
	     UserForm1.Show
	  End Sub
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: mspress ms_press press
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Solution Type     : kbfix
	
	=============================================================================
	

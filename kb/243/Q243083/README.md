---
layout: page
title: "Q243083: Learn Microsoft Visual C++ 6.0 Now Comments and Corrections"
permalink: kb/243/Q243083/
---

## Q243083: Learn Microsoft Visual C++ 6.0 Now Comments and Corrections

	Article: Q243083
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 20-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Learn Microsoft Visual J++ 6.0 Now ISBN 1-57231-923-2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Learn Microsoft Visual C++ 6.0 Now, ISBN
	1-57231-965-8.
	
	The following topics are covered:
	
	- Page 7: Text Error In First Bullet
	
	- Page 18: Text Error
	
	- Page 20: "Edit" Should Not Be Capitalized
	
	- Page 41: Text Error In Third Bullet
	
	- Page 68: Code Alignment Error
	
	- Page 71: Comment In Code Should Not Wrap
	
	MORE INFORMATION
	================
	
	Page 7: Text Error In First Bullet
	----------------------------------
	
	On page 7, the first bullet, in the first sentence contains a typo.
	
	Change:
	"This is the quickest way is to obtain help."
	
	To:
	"This is the quickest way to obtain help."
	
	
	Page 18: Text Error
	-------------------
	
	On page 18, under the subheading Creating A Project, the 3rd sentence contains a
	text error.
	
	Change:
	"After Chapter 5, we'll use another other project type, an MFC application."
	
	To:
	"After Chapter 5, we'll use another project type, an MFC application."
	
	
	Page 20: "Edit" Should Not Be Capitalized
	-----------------------------------------
	
	On page 20, in the first sentence change:
	"Visual C++ creates a project directory in the location you specified in the
	Location Edit box of the New dialog box."
	
	To:
	"Visual C++ creates a project directory in the location you specified in the
	Location edit box of the New dialog box."
	
	
	Page 41: Text Error In Third Bullet
	-----------------------------------
	
	On page 41, the third bullet, in the first sentence contains a text error.
	
	Change:
	"You can use regular expressions like those used with Unix-style Grep command."
	
	To:
	"You can use regular expressions like those used with the Unix-style Grep
	command."
	
	
	Page 68: Code Alignment Error
	-----------------------------
	
	In the code on this page, the closing curly brace should align with the opening
	curly brace.
	
	  void MyFunction ()
	  {
	     char* szCpp = "C++!";      // String
	     int nInt;                  // Integer
	     double dSalary = 80000.0;  // Double
	     MyClass arMyC[10];         // Array of objects
	     MyClass* arMyC2[10];       // Array of pointers
	  }
	
	
	Page 71: Comment In Code Should Not Wrap
	----------------------------------------
	
	Lines 9 and 10 of the code should be on a single line.
	
	     delete arInt[k];   \\Delete each pointer element individually.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 1-57231-965-8 DEVBOOK VC60
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch kbZNotKeyword2
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

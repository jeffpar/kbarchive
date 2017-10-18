---
layout: page
title: "Q143433: BUG: Setup Does Not Validate First Three Digits of CD Key"
permalink: kb/143/Q143433/
---

## Q143433: BUG: Setup Does Not Validate First Three Digits of CD Key

	Article: Q143433
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2 5.0
	Operating System(s): 
	Keyword(s): kbsetup kbVC500bug
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During installation of Visual C++, at the Registration dialog, setup will accept
	any three characters entered for the first field of the CD Key. Setup will
	continue and eventually brand a possibly incorrect CD Key into the "About
	Developer Studio" dialog box of the installed product.
	
	RESOLUTION
	==========
	
	To correct an installation with an invalid CD Key, delete all files ending with
	the .pkg extension in the \Msdev\Bin\Ide directory installed on the hard drive.
	Then re-install Visual C++. At the Registration dialog, manually verify that the
	first three digits of the CD Key are correct.
	
	NOTE: You will have to re-install other components as well, such as Test,
	Fortran, or MSDN.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The setup for this version of Visual C++ now correctly validates the second part
	of the CD Key, the seven-digit serial field. Setup will not continue unless
	these seven digits are entered correctly in the Registration dialog.
	
	The CD Key for the product can be found on a yellow tag affixed inside the back
	of the plastic CD case on the liner notes.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jason Strayer, Microsoft Corporation
	
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbsetup kbVC500bug 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC32bitSearch kbVC500Search
	Version           : 4.0 4.1 4.2 5.0
	Issue type        : kbbug
	
	=============================================================================
	

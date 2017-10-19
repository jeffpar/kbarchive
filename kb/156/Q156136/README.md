---
layout: page
title: "Q156136: FIX: F1 Help Not Hooked to Some New Dialog Boxes"
permalink: /kb/156/Q156136/
---

## Q156136: FIX: F1 Help Not Hooked to Some New Dialog Boxes

	Article: Q156136
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:4.2
	Operating System(s): 
	Keyword(s): kbEEdition kbVC kbVC500fix
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the F1 key (context-sensitive help) is pressed when certain dialog boxes are
	displayed, the following error message may appear:
	
	  Cannot find <path>\Msdev.hlp, do you want to try to find this file
	  yourself?
	
	CAUSE
	=====
	
	Some of the dialog boxes that get displayed during SQL operations are not hooked
	to F1 help. Also, the error message indicates a missing Msdev.hlp file, which is
	incorrect.
	
	WORKAROUND
	==========
	
	Use the Help button on the dialog boxes to get Help.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Microsoft Visual C++,
	Enterprise Edition, version 5.0.
	
	Additional query words: kbVC420bug
	
	======================================================================
	Keywords          : kbEEdition kbVC kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : WINDOWS:4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

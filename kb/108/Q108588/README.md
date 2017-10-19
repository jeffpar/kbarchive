---
layout: page
title: "Q108588: FIX: ID_APP_EXIT Used for a Button Will Exit App Studio"
permalink: /kb/108/Q108588/
---

## Q108588: FIX: ID_APP_EXIT Used for a Button Will Exit App Studio

	Article: Q108588
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbResourceEd kbVC kbVC100bug kbVC150bug kbVC151bug kbVC152bug kbVC200fix kbGrpDSToolskb
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The App Studio, used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ for Windows* use 1699 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If ID_APP_EXIT is used as the resource identifier for a button control in a
	dialog box, it will exit App Studio when the dialog box is tested. In App Studio
	for Windows NT, if the dialog box is tested, it will exit and cause an
	application exception in App Studio.
	
	Some other resource identifiers that may cause side effects while being tested
	inside App Studio are:
	
	  ID_WINDOW_NEW
	  ID_WINDOW_CASCADE
	  ID_WINDOW_TILE_HORZ
	  ID_WINDOW_TILE_VERT
	  ID_HELP_INDEX
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article.
	
	This problem was corrected in Visual C++ version 2.0, which includes MFC version
	3.0. However, the problem still exists in the 16-bit product line.
	
	MORE INFORMATION
	================
	
	Steps to reproduce the problem:
	
	1. Open App Studio.
	
	2. Open an existing .RC file (use any of Scribble's resource scripts).
	
	3. Open the About dialog box.
	
	4. Add a button.
	
	5. Change the button's ID to ID_APP_EXIT.
	
	6. Test the dialog box and choose the new button.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbResourceEd kbVC kbVC100bug kbVC150bug kbVC151bug kbVC152bug kbVC200fix kbGrpDSTools kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

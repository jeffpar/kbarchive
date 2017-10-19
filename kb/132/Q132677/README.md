---
layout: page
title: "Q132677: How to Place Insertion Point at Far Left of Field on Entry"
permalink: /kb/132/Q132677/
---

## Q132677: How to Place Insertion Point at Far Left of Field on Entry

	Article: Q132677
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When entering data, a user may click a field and end up placing the insertion
	point into the middle of the field instead of the beginning. This article
	describes a simple method a developer can use to ensure that the insertion point
	is always placed at the far left of a data entry field anytime it is entered.
	
	MORE INFORMATION
	================
	
	In the Click Event of the object where this functionality is desired, type the
	following as a User Procedure:
	
	     KEYBOARD '{HOME}'
	
	This causes the insertion point (cursor) to always go to the far left upon entry
	of this object.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

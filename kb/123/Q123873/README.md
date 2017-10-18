---
layout: page
title: "Q123873: PRB: Lower Half of Menu Bar Covered by Client Area"
permalink: kb/123/Q123873/
---

## Q123873: PRB: Lower Half of Menu Bar Covered by Client Area

	Article: Q123873
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,2.0,4.0
	Operating System(s): 
	Keyword(s): kbVC100 kbVC150 kbVC151 kbVC200 kbVC400 kbGrpDSTools
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Resource Editor, included with:
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In an application created using Visual C++, the lower half of the menu bar is
	covered by the client area of the main window. If there is a toolbar present,
	the lower half of the menu bar is covered by the toolbar.
	
	CAUSE
	=====
	
	This problem can be caused by a command with a null menu string or separator as
	described in the following article in the Microsoft Knowledge Base:
	
	  Q109539 BUG: Menu Bar Covered By Main Window Client Area
	
	This problem can be produced in the Resource Editor (or App Studio) by improperly
	removing an item in the main menu bar.
	
	RESOLUTION
	==========
	
	When removing an item in the main menu bar, you must:
	
	1. Click on that item so it is highlighted.
	
	2. Delete the item.
	
	Following this procedure ensures that the complete menu item is deleted instead
	of only the caption string being deleted. This avoids the possibility of having
	a hidden menu item with a NULL string caption.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Double-click the main menu item to be deleted. This will open the Property
	  Box associated with that menu item.
	
	2. Either select the text in the caption edit box and delete it or backspace
	  over the text in the caption edit box to eliminate the main menu item. This
	  will leave a menu item approximately one character wide, which could be
	  overlooked if it is not highlighted.
	
	This procedure leaves a hidden menu item with a NULL caption in the resource
	file.
	
	Additional query words: cutoff overlayed view
	
	======================================================================
	Keywords          : kbVC100 kbVC150 kbVC151 kbVC200 kbVC400 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch kbResourceEd
	Version           : :1.0,1.5,1.51,2.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	

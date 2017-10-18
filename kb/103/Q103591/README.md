---
layout: page
title: "Q103591: How to Use _GetNewItemId() API Function"
permalink: kb/103/Q103591/
---

## Q103591: How to Use _GetNewItemId() API Function

	Article: Q103591
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0; :2.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro Library Construction Kit for Windows, version 2.5 
	- Microsoft FoxPro Library Construction Kit for MS-DOS, version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After calling _GetNewItemId(), add the item to the menu before calling
	_GetNewItemId() again. If the item is not added to the menu, subsequent calls to
	_GetNewItemId() return the same item ID.
	
	REFERENCES
	==========
	
	"Developer's Guide," version 2.5, pages 178-179
	
	Additional query words: VFoxWin FoxWin FoxDos 2.50 LCK API menu
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxProLibCK250DOS kbFoxProLibCK250 kbVFP300
	Version           : WINDOWS:3.0; :2.5
	
	=============================================================================
	

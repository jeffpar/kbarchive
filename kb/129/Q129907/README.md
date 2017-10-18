---
layout: page
title: "Q129907: PRB: Clicking a Tab Does Not Activate Page in a Tabbed Dialog"
permalink: kb/129/Q129907/
---

## Q129907: PRB: Clicking a Tab Does Not Activate Page in a Tabbed Dialog

	Article: Q129907
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click a page in a tabbed dialog, the caption of the Tab becomes bold.
	However, the page is not activated until the mouse button is released.
	
	CAUSE
	=====
	
	The page is activated in a two-step process. It becomes active when the mouse is
	released, which is when the MouseUp event occurs. This design provides
	flexibility by allowing users to drag the mouse off without selecting the tab.
	
	WORKAROUND
	==========
	
	If, as with tabbed dialogs in Microsoft Excel and Word for Windows, you want to
	activate a page as soon as you click the tab, you can trap for the MouseDown
	event on the page frame. Then locate the position of the mouse in relation to
	the pageframe, and activate the correct page by setting the ACTIVEPAGE property
	of the page frame to the desired page.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

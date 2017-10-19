---
layout: page
title: "Q132226: PRB: Clicking a Tab of Tabbed Dialog Box Doesn't Activate Page"
permalink: /kb/132/Q132226/
---

## Q132226: PRB: Clicking a Tab of Tabbed Dialog Box Doesn't Activate Page

	Article: Q132226
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	To activate a page in a tabbed dialog box, you must click the page you want and
	complete the click by completely releasing the mouse button.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The "activate" event does not occur until you release the mouse button. This
	design allows you to think about the action and even change your mind without
	activating the page. The mouse can be moved off the tab while the left mouse
	button is still down and the Mouseup event won't be interpreted by Visual FoxPro
	as an activate on the tab item.
	
	This behavior is different from the way tabs behave in Microsoft Excel and
	Microsoft Word.
	
	Additional query words: VFoxWin tabbed pages dialog
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

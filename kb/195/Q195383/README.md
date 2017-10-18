---
layout: page
title: "Q195383: WD97: Page Setup Not Available on File Menu"
permalink: kb/195/Q195383/
---

## Q195383: WD97: Page Setup Not Available on File Menu

	Article: Q195383
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Page Setup command (on the File menu) is not available.
	
	CAUSE
	=====
	
	The Page Setup command is not available when any of the following conditions is
	true:
	
	- You do not have a printer driver selected in Windows Control Panel.
	
	- The installed printer driver is damaged or corrupted.
	
	- The insertion point is inside a frame. Frames cannot span multiple pages.
	
	- The document is protected for forms. With the exception of completing an
	  online form, you cannot make changes to the document.
	
	- The insertion point is inside a text box or callout. The text box and callout
	  are objects that do not have page properties.
	
	- You are in-place editing in the Equation Editor or WordArt. Equation Editor
	  and WordArt do not have page properties.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the appropriate method for your situation.
	
	- Select a printer driver.
	
	- Remove and reinstall the printer driver.
	
	- Move the insertion point outside of the frame.
	
	- Unprotect the document.
	
	- Move the insertion point outside of the textbox or callout.
	
	- Close WordArt or Equation Editor.
	
	Additional query words: disabled unavailable grey gray dim dimmed greyed grayed can't cannot
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

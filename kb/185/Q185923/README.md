---
layout: page
title: "Q185923: WD97: Text Formatted with &quot;Drop Cap&quot; in Wrong Place on Page"
permalink: kb/185/Q185923/
---

## Q185923: WD97: Text Formatted with &quot;Drop Cap&quot; in Wrong Place on Page

	Article: Q185923
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97 kbframe
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you format the first letter of a paragraph as a large initial (or
	"dropped") capital letter, the letter is not aligned correctly to the left of
	the paragraph. The large initial letter may appear at the top of the page or in
	some other unexpected location away from the paragraph.
	
	NOTE: To create a large initial capital letter, click Drop Cap on the Format
	menu.
	
	CAUSE
	=====
	
	This behavior occurs when you have changed the section vertical alignment in
	document to center or justified.
	
	Large initial capital letters are inserted with the use of frames. Frames are not
	affected by center or justified vertical alignment.
	
	WORKAROUND
	==========
	
	To work around this behavior, change the vertical alignment of the section to
	top. To do this, use the following steps:
	
	1. On the File menu, click Page Setup.
	
	2. Click the Layout tab.
	
	3. Change the Vertical Alignment box to Top, and then click OK.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q185813 WD97: Drop Cap Jumps to Previous Column
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 kbframe 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

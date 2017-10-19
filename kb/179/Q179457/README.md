---
layout: page
title: "Q179457: Bookshelf 98: Footnote Number Is Displayed Beneath Pasted Text"
permalink: /kb/179/Q179457/
---

## Q179457: Bookshelf 98: Footnote Number Is Displayed Beneath Pasted Text

	Article: Q179457
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbinterop kbimu
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 98 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Copy To Word feature in Microsoft Bookshelf 98, the footnote
	number may be displayed on the line beneath the pasted text.
	
	NOTE: The Copy To Word feature is not included in Microsoft Bookshelf 99.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions exist:
	
	- The last character of the pasted text is a space.
	
	- The space is immediately to the left of the right margin in Microsoft Word.
	
	RESOLUTION
	==========
	
	To resolve this behavior, use one of the following methods:
	
	Method 1
	--------
	
	Make sure the last character of the selected text is not a space.
	
	Method 2
	--------
	
	Adjust the right margin in Word so that the space is not the last character on
	the line.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Bookshelf 98 for
	Windows. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When you use the Copy To Word feature in Bookshelf, a footnote containing
	Bookshelf copyright information is added to the pasted text. This behavior is by
	design.
	
	Additional query words: 98 multi media multimedia multi-media mmtitles
	
	======================================================================
	Keywords          : kbinterop kbimu 
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1998
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

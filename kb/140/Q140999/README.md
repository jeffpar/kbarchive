---
layout: page
title: "Q140999: Bookshelf 95: Copy To: Copies to First Instance of Word, Excel"
permalink: /kb/140/Q140999/
---

## Q140999: Bookshelf 95: Copy To: Copies to First Instance of Word, Excel

{% raw %}

	Article: Q140999
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:7.0; Win95:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf '95 for Windows 95 
	- Microsoft Excel for Windows 95 
	- Microsoft Word for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If multiple copies of Microsoft Word or Excel are running and you attempt to use
	the Copy To (Word or Excel) integration feature in Bookshelf, the information
	copies to the first instance (session) of Word or Excel opened.
	
	The Word or Excel program first opened and shown on the taskbar, flashes. The
	Copy To function will take place in this application.
	
	The expected behavior is for the copy to take place in the current, open session.
	
	CAUSE
	=====
	
	Bookshelf 95 (32-bit) always copies to the first instance of Word or Excel,
	regardless of which instance has the current focus.
	
	RESOLUTION
	==========
	
	Click the flashing taskbar button and complete the Copy To operation.
	
	If you want to copy directly to an instance of Excel or Word other than the first
	opened application, close the first instance.
	
	MORE INFORMATION
	================
	
	This problem does not occur with the Bookshelf 95 (16-bit) Copy To Word 6.0
	command.
	
	Word may behave differently. The first instance, or the current session, may open
	if you choose to Copy To the "current location."
	
	Additional query words: 95 multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbExcelSearch kbWord700Search kbHomeMMsearch kbBookshelfSearch kbExcel95Search kbWord700 kbBookShelf1995
	Version           : WINDOWS:7.0; Win95:
	
	=============================================================================
	

{% endraw %}

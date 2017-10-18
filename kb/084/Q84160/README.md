---
layout: page
title: "Q84160: Help Screen Replaced When QuicKeys Is Activated"
permalink: kb/084/Q84160/
---

## Q84160: Help Screen Replaced When QuicKeys Is Activated

	Article: Q84160
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,1991 edition,1992 edition,1992 editions
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows versions 1991 edition, 1992 edition 
	- Microsoft Cinemania 1992 editions, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Multimedia Viewer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a QuicKeys combination is activated when a Help screen has the focus,
	Microsoft Multimedia Viewer will replace the Help screen with the book specified
	from the QuicKeys combination.
	
	STATUS
	======
	
	This is by design. To prevent the replacement of the window is to do the
	following:
	
	1. Load QuicKeys.
	
	2. From the Edit menu, choose Preferences.
	
	3. In the Viewer QuicKeys Preferences dialog box, clear the Use One Viewer
	  Window Only check box.
	
	
	STEPS TO REPRODUCE PROBLEM
	--------------------------
	
	1. Load QuicKeys.
	
	2. Open a Viewer book, such as the Hammond Atlas.
	
	3. From the Help menu, choose Help Contents.
	
	4. After Help Contents is loaded, activate a QuicKeys combination. Viewer loads
	  the appropriate book into the Help window.
	
	Additional query words: 1.00 1.00a quickkeys quick keys viewer win usage
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbBookshelfSearch kbCineManiaSearch
	Version           : :1.0,1991 edition,1992 edition,1992 editions
	
	=============================================================================
	

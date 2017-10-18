---
layout: page
title: "Q151659: Bookshelf '96-'97: Bookshelf Not Added to Shortcut Bar"
permalink: kb/151/Q151659/
---

## Q151659: Bookshelf '96-'97: Bookshelf Not Added to Shortcut Bar

	Article: Q151659
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbmm kbsetupkbfaq
	Last Modified: 22-MAY-2001
	
	'96-'97
	WINDOWS
	kbsetup kbmm kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 1996-97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Bookshelf '96-'97 does not add a Bookshelf button to the Office Shortcut Bar.
	
	After you upgrade to Bookshelf '96-'97, when you open an Office Shortcut Bar with
	an existing Bookshelf 95 button, the button is automatically updated after a
	brief delay. If you click the button before the update occurs, you receive the
	following message:
	
	  Microsoft Office Shortcut Bar
	  This button is no longer available. The underlying file has been deleted.
	
	CAUSE
	=====
	
	By design, Bookshelf '96-'97 does not add a Bookshelf button to the Office
	Shortcut Bar (OSB).
	
	NOTE: This is a change from Microsoft Bookshelf '95 for Windows 95.
	
	If you setup Bookshelf '95 for Windows 95 on a computer with OSB installed, a
	QuickShelf 95 button is added to the bar. If you then upgrade to Bookshelf
	'96-'97, Setup asks you if you want to remove Bookshelf '95. This does not
	remove the QuickShelf 95 button from OSB. OSB updates this button to a Bookshelf
	96 button when you click the button.
	
	After you receive the error message and click OK, OSB searches for the closest
	match to the removed file. When it finds Bookshelf 96, the button is updated.
	
	If the button is removed from the Office Shortcut Bar at any time, reinstalling
	Bookshelf '96-'97 does not return the button.
	
	RESOLUTION
	==========
	
	If you want to add a Bookshelf 96 button to the Office Shortcut Bar, do the
	following:
	
	1. Click the Office symbol in the upper left corner of the Shortcut Bar, and
	  then click Customize.
	
	2. On the Buttons tab, click Add File.
	
	3. Open the Bookshelf 96 folder. This is usually:
	
	  C:\Program Files\Microsoft Reference\Bookshelf 96
	
	4. Click Bshelf96.exe, and then click Add.
	
	5. Click OK.
	
	MORE INFORMATION
	================
	
	For more information about customizing the Office Shortcut Bar, please see
	Office 95 online Help.
	
	Additional query words: multi-media mmtitles kbmm preparing toolbar .lnk
	
	======================================================================
	Keywords          : kbmm kbsetup kbfaq
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1996 kbBookShelf1997
	Version           : WINDOWS:7.0
	Issue type        : kbprb
	
	=============================================================================
	

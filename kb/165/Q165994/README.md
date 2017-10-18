---
layout: page
title: "Q165994: Cinemania 96: Film Clips Do Not Play When Clicked"
permalink: kb/165/Q165994/
---

## Q165994: Cinemania 96: Film Clips Do Not Play When Clicked

	Article: Q165994
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1996 edition
	Operating System(s): 
	Keyword(s): kbmm kbsound
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cinemania for Windows 1996 edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you double-click a title to start playing a film clip, the insertion point
	changes to an hourglass and then changes back to a cursor.
	
	The film clip does not play, nor is there an error message displayed.
	
	CAUSE
	=====
	
	This problem will occur if the entry:
	
	  avi=AVIVideo
	
	found in the [mci extensions] section of the WIN.INI file, is missing or is
	spelled incorrectly.
	
	RESOLUTION
	==========
	
	To correct this problem, make sure the line is entered in the [mci extensions]
	section of the Win.ini file, as follows:
	
	  avi=AVIVideo
	
	If this line is not in your Win.ini file, add it.
	
	For more information about modifying .ini files in Windows, see your Windows
	printed documentation or online help.
	
	Additional query words: 1996 multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          : kbmm kbsound 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbCineManiaSearch kbCinemania1996
	Version           : :1996 edition
	Issue type        : kbprb
	
	=============================================================================
	

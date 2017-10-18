---
layout: page
title: "Q64936: Update of WordPerfect 5.1 for Expanded Memory Problems"
permalink: kb/064/Q64936/
---

## Q64936: Update of WordPerfect 5.1 for Expanded Memory Problems

	Article: Q64936
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Unless you specify otherwise, WordPerfect version 5.1 first uses all available
	conventional memory, then available expanded memory. It does not recognize
	extended memory. Microsoft Windows version 3.0 has the ability to provide
	expanded memory.
	
	MORE INFORMATION
	================
	
	Release 11-06-89 of the WP.EXE program did not handle expanded memory properly.
	WordPerfect is aware of this problem and will issue a free upgrade to registered
	users. Contact WordPerfect for more information.
	
	You may find the release date of the version by pressing the F3 key (Help). The
	date is in the upper-right corner of the screen. Press your space bar to leave
	the Help screen. You can search the directory of the file to find the date.
	
	WORKAROUND
	==========
	
	You can work around the problem by starting WordPerfect with "/ne" (without the
	quotation marks) in the Optional Parameters line in the PIF Editor. This tells
	WordPerfect to start without using the expanded memory.
	
	NOTE: This parameter may also help with other releases of WordPerfect, and may
	also correct a problem where Windows stops responding (hangs) after starting
	WordPerfect.
	
	The parameter "/32" (without the quotation marks) may help in releases dated
	later than 11-06-89. This parameter tells WordPerfect to apply the 3.2 LIM
	specifications. Other problems regarding screen display may be resolved with
	this option also.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

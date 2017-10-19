---
layout: page
title: "Q125877: WinWord 16 Cannot Open File When Path Contains Special Chars"
permalink: /kb/125/Q125877/
---

## Q125877: WinWord 16 Cannot Open File When Path Contains Special Chars

	Article: Q125877
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Word for Windows on Windows NT version 3.5 and you
	attempt to open a file in a directory with a name containing a character in the
	extended set (such as ALT+0228), you cannot open the file or you cannot see any
	files even though you are in the correct directory location.
	
	RESOLUTION
	==========
	
	Changes were made to WOW32.DLL that resolved the issue.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A fix to
	this problem is in development, but has not been regression- tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	

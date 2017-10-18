---
layout: page
title: "Q72446: Emerson 386 Cannot Run Enhanced Mode"
permalink: kb/072/Q72446/
---

## Q72446: Emerson 386 Cannot Run Enhanced Mode

	Article: Q72446
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
	
	According to Emerson Technical Support, some Emerson computers may have
	difficulty running Microsoft Windows version 3.0 in enhanced mode. The computer
	may stop responding (hang) or drop to MS-DOS.
	
	MORE INFORMATION
	================
	
	The extended features in the CMOS on some Emerson computers conflict with
	Windows in enhanced mode. To disable these features:
	
	1. From MS-DOS, press ALT+CTRL+S to access the CMOS setup.
	
	2. Press F3 to access the Extended Features.
	
	3. Disable both the Extended Features and the cache by selecting OFF or
	  DISABLED.
	
	4. Remove any references to Xfeats (Extended Features) in the CONFIG.SYS file.
	
	For further information, contact Emerson Computer Corporation.
	
	The Emerson products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.00 win30 3rdparty KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

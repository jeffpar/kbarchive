---
layout: page
title: "Q82347: GP Fault in Ami Pro when Viewing Facing Page Is Selected"
permalink: /kb/082/Q82347/
---

## Q82347: GP Fault in Ami Pro when Viewing Facing Page Is Selected

	Article: Q82347
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Ami Pro may cause a general protection (GP) fault under Microsoft Windows
	version 3.1 when Facing Page view is selected with certain data files. Lotus
	development is aware of this problem and it has been corrected in Ami Pro
	version 2.0a.
	
	Windows 3.0 generates an Unrecoverable Application Error (UAE) in the same
	situation.
	
	MORE INFORMATION
	================
	
	The file PRINTEST.SAM, a sample data file provided with Ami Pro, is an example
	of a data file that may cause a GP fault. Once this file is loaded, choosing
	Facing Pages from the View menu may cause a GP fault. This problem seems to only
	occur with this particular file and may not be reproduced during every test.
	
	
	The Ami Pro product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.1 3.11 amipro ami pro
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

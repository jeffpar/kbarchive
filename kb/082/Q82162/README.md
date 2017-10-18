---
layout: page
title: "Q82162: Incorrect Fonts Are Displayed in MS-DOS Window Using Graphics"
permalink: kb/082/Q82162/
---

## Q82162: Incorrect Fonts Are Displayed in MS-DOS Window Using Graphics

	Article: Q82162
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an MS-DOS (non-Windows) application that uses graphics characters is run in
	a window under Microsoft Windows versions 3.0 and 3.0a, incorrect graphics
	characters are displayed.
	
	CAUSE
	=====
	
	The code page of the font used by Windows does not match the code page
	anticipated by the application, thus the wrong characters are displayed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows versions 3.0 and 3.0a.
	This problem was corrected and does not occur in later versions.
	
	Additional query words: 3.00 3.00a 3.0 3.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

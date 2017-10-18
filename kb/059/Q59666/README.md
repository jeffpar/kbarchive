---
layout: page
title: "Q59666: Control Panel: Desktop Pattern/Color Scheme Not Saved"
permalink: kb/059/Q59666/
---

## Q59666: Control Panel: Desktop Pattern/Color Scheme Not Saved

	Article: Q59666
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you modify your Microsoft Windows desktop, the custom patterns and color
	schemes aren't saved when you exit Windows.
	
	CAUSE
	=====
	
	The Windows Control Panel saves its Desktop patterns and custom color schemes in
	a file called CONTROL.INI. However, it does not verify that information was
	successfully written to the file. Therefore, if CONTROL.INI is missing,
	corrupted, or marked Read-Only (perhaps on a read-only network directory), color
	schemes and desktop patterns are lost.
	
	RESOLUTION
	==========
	
	Verify that CONTROL.INI is valid and that it can be written to.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.0. This problem was
	corrected in later versions of Windows.
	
	Additional query words: 3.00 3.0 3.0a 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

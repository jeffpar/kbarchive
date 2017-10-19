---
layout: page
title: "Q181752: Unable to Save Contents of the Clipboard Using Clipboard Viewer"
permalink: /kb/181/Q181752/
---

## Q181752: Unable to Save Contents of the Clipboard Using Clipboard Viewer

	Article: Q181752
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use Clipboard Viewer to save the contents of the Clipboard, you
	may be unable to do so.
	
	CAUSE
	=====
	
	This behavior can occur for either of the following reasons:
	
	- You try to save the contents of the Clipboard using a long file name.
	
	- You try to save the contents of the Clipboard to a folder that has a long
	  file name.
	
	Because Clipboard Viewer is a 16-bit program, it is unable to correctly interpret
	long file names.
	
	RESOLUTION
	==========
	
	To work around this issue, do not save the contents of the Clipboard using a
	long file name, or to a folder that has a long file name.
	
	======================================================================
	Keywords          : kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

---
layout: page
title: "Q113176: SET PATH TO Syntax for Folder Names with Spaces"
permalink: /kb/113/Q113176/
---

## Q113176: SET PATH TO Syntax for Folder Names with Spaces

	Article: Q113176
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Macintosh operating system allows the use of spaces and other special
	characters within folder and file names. The SET PATH command, which specifies a
	path for file searches, requires special syntax if folder names containing
	spaces are used.
	
	If a folder in the path contains a space character in the name, the entire path
	name must be enclosed in quotation marks. Within the quotation marks, each
	separate folder to search should be separated by semicolons or commas as shown
	in the following example:
	
	     SET PATH TO "Mac HD:FoxPro 2.5B; tutorial; goodies"
	
	Additional query words: vFoxMac FoxMac directory
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	

---
layout: page
title: "Q74591: Search Command in File Manager Finds Hidden Files"
permalink: /kb/074/Q74591/
---

## Q74591: Search Command in File Manager Finds Hidden Files

{% raw %}

	Article: Q74591
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Windows versions 3.0 and 3.0a File Manager, searching for a file
	will find hidden files in addition to unhidden files, regardless of the File
	Manager settings. This also occurs in Windows version 3.1, although file icons
	indicate that they are read only. Files are not indicated as hidden.
	
	MORE INFORMATION
	================
	
	To view hidden files within individual directories, from the File Manager View
	menu, choose Include and select Show Hidden/System Files.
	
	Whether this setting is chosen or not, choosing Search from the File Manager File
	menu, selecting Search, and then typing the hidden filename will return the
	hidden file.
	
	Example
	-------
	
	1. Choose Search from the File Manager File menu (without selecting Show
	  Hidden/System Files).
	
	2. Search for "*.SYS" (without the quotation marks).
	
	At a portion of the search, the hidden system files IO.SYS and MSDOS.SYS will be
	found within the root directory of drive C.
	
	Additional query words: 3.0 3.00 3.0a 3.00a 3.1 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}

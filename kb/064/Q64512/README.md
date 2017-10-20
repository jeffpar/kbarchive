---
layout: page
title: "Q64512: Loading a .TXT File from File Manager into Word 5.0"
permalink: /kb/064/Q64512/
---

## Q64512: Loading a .TXT File from File Manager into Word 5.0

{% raw %}

	Article: Q64512
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To load a .TXT file from Microsoft Windows 3.0 File Manager and load it into
	Microsoft Word for MS-DOS version 5.0, create a PIF file for Word 5.0 and
	associate the .TXT file to the PIF file in File Manager.
	
	MORE INFORMATION
	================
	
	Follow these steps to load the .TXT file into Word 5.0:
	
	1. Create a PIF file for Word 5.0. (Refer to pages 444-482 in the "Microsoft
	  Windows User's Guide" for information on creating PIF files.) The Start Up
	  Directory line should NOT contain an entry. If ANY entry is listed in this
	  line of the PIF file, Word 5.00 will not load the desired file.
	
	2. In File Manager, choose a file that has a .TXT extension.
	
	3. From the File menu, choose Associate.
	
	4. Enter the path and name of the Word 5.0 PIF file. For example,
	  "C:\WORD5\WORD.PIF" (without the quotation marks) if WORD.PIF is located in
	  the Word directory.
	
	REFERENCES
	==========
	
	For more information about the File Associate option, see pages 135-137 of the
	"Microsoft Windows User's Guide." This method may be used for any extension (for
	example, .TXT, .C, .DOC) and for any MS-DOS editor or application (for example,
	WordStar, WordPerfect, Microsoft Editor, etc.).
	
	Additional query words: 3.00 3.0 3.0a 3.00a WP word perfect star
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}

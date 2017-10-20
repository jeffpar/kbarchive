---
layout: page
title: "Q92945: Bookshelf: How to Restore Word for Windows Integration"
permalink: /kb/092/Q92945/
---

## Q92945: Bookshelf: How to Restore Word for Windows Integration

{% raw %}

	Article: Q92945
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1992 edition,1993 edition; WINDOWS:2.0a-CD,2.0c-CD,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows versions 1992 edition, 1993 edition 
	- Microsoft Word for Windows, versions 2.0a-CD, 2.0c-CD 
	- the operating system: Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the Bookshelf button is missing from the toolbar, the Bookshelf command is
	missing from the Tools menu, or the Quote Of The Day feature has been disabled
	in Microsoft Word for Windows & Bookshelf, Multimedia Edition, one of the
	following conditions may be the cause:
	
	- The NORMAL.DOT file has been changed or is missing.
	
	  -or-
	
	- The DOT-Path setting in the [Microsoft Word 2.0] section of the Windows
	  WIN.INI file does not point to the directory containing the NORMAL.DOT file.
	
	  -or-
	
	- The V2TBAR.BMP (for VGA displays) or the 82TBAR.BMP (for 8514 displays) is
	  missing from the Word for Windows program directory.
	
	MORE INFORMATION
	================
	
	Use the following steps to restore the Bookshelf button on the Word for Windows
	toolbar:
	
	1. Make sure V2TBAR.BMP or 82TBAR.BMP exists in the Word program directory. You
	  can copy these files from the WORD subdirectory on the Microsoft Word for
	  Windows & Bookshelf CD-ROM.
	
	2. Make sure the BOOKSHLF.DOT exists in the directory pointed to by the DOT-Path
	  option in the [Microsoft Word 2.0] section of the WIN.INI file. You can copy
	  this file from the WORD subdirectory on the CD-ROM.
	
	3. Start Word for Windows and open the BOOKSHLF.DOT file.
	
	4. From the Tools menu, choose Macro. Select the Template Macros option button.
	
	5. From the Macro list, select wabSetup, and choose the Run button. After the
	  macro runs, the Bookshelf button appears on the toolbar.
	
	6. From the File menu, choose Save All. Choose the Yes button when you are
	  prompted to save global glossary and command changes.
	
	Additional query words: bookshelf integration word macros winword
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbOSWinSearch kbHomeMMsearch kbZNotKeyword6 kbZNotKeyword2 kbBookshelfSearch kbWord200a kbWord200c kbBookShelf1992 kbBookShelf1993 kbOSWin310
	Version           : :1992 edition,1993 edition; WINDOWS:2.0a-CD,2.0c-CD,3.1
	
	=============================================================================
	

{% endraw %}

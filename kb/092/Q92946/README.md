---
layout: page
title: "Q92946: Bookshelf Button on Toolbar Appears as a Piggy Bank"
permalink: /kb/092/Q92946/
---

## Q92946: Bookshelf Button on Toolbar Appears as a Piggy Bank

{% raw %}

	Article: Q92946
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1992 edition,1993 edition; WINDOWS:2.0a-CD,2.0c-CD
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows versions 1992 edition, 1993 edition 
	- Microsoft Word for Windows, versions 2.0a-CD, 2.0c-CD 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Word for Windows & Bookshelf, Multimedia Edition, the Bookshelf
	button on the toolbar is mis-represented by a piggy bank graphic on the button
	face if the V2tbar.bmp or 82tbar.bmp files are corrupt or missing from the Word
	for Windows program folder.
	
	You can copy these two files to the Word program folder from the Word folder on
	the Microsoft Word for Windows & Bookshelf CD. At the MS-DOS Prompt type the
	following two commands:
	
	  "COPY X:\WORD\82TBAR.BMP C:\WINWORD" (without the quotation marks)
	
	  "COPY X:\WORD\V2TBAR.BMP C:\WINWORD" (without the quotation marks)
	
	Where X is the CD-ROM drive letter and C:\Winword is the location of the Word for
	Windows, version 2.0 program files.
	
	MORE INFORMATION
	================
	
	The .bmp file you need depends on the type of video display driver used by
	Windows for your computer. Use the following chart to determine the file you
	need:
	
	  Filename     Display Type
	  --------     ------------
	
	  V2tbar.bmp   Any video display using "VGA res" fonts, which are
	               known as "Small Fonts"
	
	  82tbar.bmp   Any video display using "8514 res" fonts, which are
	               known as "Large Fonts"
	
	If you don't know which type of display you have, copy both files to the Word for
	Windows program folder. Word for Windows selects the correct file based on your
	video driver.
	
	These files provide the bitmap images necessary to display the Bookshelf button
	in the toolbar. Both files represent the same bitmap information, at different
	resolutions.
	
	For more information about how to perform this task in Windows, see your Windows
	printed documentation or online Help.
	
	Additional query words: 2.00a-CD piggy bank tool bar pig missing wrong incorrect mmwinword 2.00c-cd cd kbmm viewer 2.0
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbHomeMMsearch kbZNotKeyword2 kbBookshelfSearch kbWord200a kbWord200c kbBookShelf1992 kbBookShelf1993
	Version           : :1992 edition,1993 edition; WINDOWS:2.0a-CD,2.0c-CD
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q87875: Bookshelf: Word Integration Tools Not Installed"
permalink: kb/087/Q87875/
---

## Q87875: Bookshelf: Word Integration Tools Not Installed

	Article: Q87875
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1992 edition,1993 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows versions 1992 edition, 1993 edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Bookshelf 1992 Edition contains setup integration tools to integrate
	Bookshelf and Microsoft Word for Windows. These tools will not install if you
	have an invalid programdir= entry in the [Microsoft Word] section of the WIN.INI
	file.
	
	The [Microsoft Word] section in the WIN.INI file must contain a valid
	programdir=<path to Word for Windows> entry. Bookshelf's SETUP.EXE program
	uses the programdir= entry to determine if and where Word for Windows is
	installed on the system.
	
	If this entry is not set correctly, the WIN.INI file can be modified to contain
	this entry by either editing the WIN.INI directly using a text editor or by
	using the Word for Windows Edit Options command. For more information on the
	Edit Options command, refer to your Word for Windows documentation.
	
	Additional query words: 1.00 book shelf winword features kbmm viewer 1.0 2.0
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1992 kbBookShelf1993
	Version           : :1992 edition,1993 edition
	
	=============================================================================
	

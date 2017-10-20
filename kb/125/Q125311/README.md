---
layout: page
title: "Q125311: Bookshelf Fails on Second Print Attempt Using HP 4/ML Printer"
permalink: /kb/125/Q125311/
---

## Q125311: Bookshelf Fails on Second Print Attempt Using HP 4/ML Printer

{% raw %}

	Article: Q125311
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1994 edition; WINDOWS:3.1x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	1994
	WINDOWS
	kbmm kbprint kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows 1994 edition 
	- the operating system: Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After successfully printing the first print job from within Bookshelf 1994, all
	subsequent print jobs will fail. Further attempts will display an hourglass
	followed by no response.
	
	CAUSE
	=====
	
	This problem has been confirmed when using the PostScript driver version 3.5
	shipped with Microsoft Windows 3.1, and the Microsoft PostScript driver version
	3.58 obtained from the Microsoft Download Services (BBS).
	
	The HP 4/ML is a Level 2 PostScript printer. The PostScript driver that comes
	with Windows only supports PostScript level 1.
	
	RESOLUTION
	==========
	
	Change the printer driver to the HP 4/ML driver that is available from
	Hewlett-Packard.
	
	-or-
	
	Install the HP LaserJet III printer driver.
	
	MORE INFORMATION
	================
	
	Adobe PostScript is a page description language (PDL). A PDL has several
	components that allow it to manipulate fonts, raster graphics, vector graphics,
	color, and peripheral support (that is, sheet feeders and other resources).
	There are two levels of the PostScript language:
	
	Level 1 PostScript Language
	---------------------------
	
	This is the industry standard used by desktop publishing (DTP) companies, service
	bureaus, and supported by the PostScript printer driver version 3.5 that ships
	with Windows 3.1.
	
	Level 2 PostScript Language
	---------------------------
	
	This is an enhanced version of Level 1 that comes with additional support for
	color imaging, fax PostScript documents, data compression, improved forms
	handling, cache patterns and forms between multiple printings of the same
	document. It also generates accurate screen angles for smoother halftone
	printing. Level 2 also compresses and decompresses documents.
	
	This level is currently supported by only a few printers, such as the Apple
	LaserWriter IIF. The PostScript driver for Windows 3.1 does not support Level
	2.
	
	If you have questions about your printer or printer driver, call Hewlett- Packard
	technical support at (208) 323-2551
	
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: msn_bookshelf 1994 multi media multimedia multi- mmtitles
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbHomeMMsearch kbZNotKeyword6 kbBookshelfSearch kbBookShelf1994 kbOSWin310 kbOSWin311
	Version           : :1994 edition; WINDOWS:3.1x
	
	=============================================================================
	

{% endraw %}

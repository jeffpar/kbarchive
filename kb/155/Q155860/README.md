---
layout: page
title: "Q155860: Wine Guide 2.0: Unable to Print or Copy Text"
permalink: /kb/155/Q155860/
---

## Q155860: Wine Guide 2.0: Unable to Print or Copy Text

	Article: Q155860
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Wine Guide for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose to Print Text or Copy Text from the Options menu in Wine Guide,
	only some sections print or copy the title of a section and the copyright
	information.
	
	CAUSE
	=====
	
	Many of the printable sections in Wine Guide are graphic images and are not
	printable as text. The Print Text and Copy Text options are available if the
	area you are trying to print contains text. Wine Guide cannot tell if the text
	portion of a page is limited to the title of a section or a picture copyright
	information.
	
	STATUS
	======
	
	This behavior is by design. When there is text available in a section, the Print
	Text and Copy Text options will be available.
	
	RESOLUTION
	==========
	
	On the Options menu, select the Print Window or Copy Window feature to print the
	entire viewable area.
	
	MORE INFORMATION
	================
	
	The areas of the program where the Print Text and Copy Text options are
	available but do not provide useful or complete information are:
	
	- World Atlas of Wine.
	
	- Wine Tasting with Oz.
	
	- All About Wine.
	
	In World Atlas of Wine, each wine-producing area only prints the name of the
	region you are viewing and the copyright information for the map graphic when
	you choose Print Text or Copy Text.
	
	In Wine Tasting With Oz, when you choose Print Text or Copy Text, the four
	sections available in the How To Taste Wine section print or copy only the
	portions of the viewable area that are considered text.
	
	When you choose the Print Text or Copy Text option in All About Wine, the
	sections for In The Vineyard, In The Winery, Matching Food & Wine, Classic
	Grape Varieties, and Reading The Label also print varying amounts of text.
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbWine200
	Version           : WINDOWS:2.0
	
	=============================================================================
	

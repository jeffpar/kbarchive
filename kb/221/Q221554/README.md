---
layout: page
title: "Q221554: Polish Windows NT Displays Microsoft Sans Serif Font Incorrectly"
permalink: /kb/221/Q221554/
---

## Q221554: Polish Windows NT Displays Microsoft Sans Serif Font Incorrectly

{% raw %}

	Article: Q221554
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0a,6.0
	Operating System(s): 
	Keyword(s): kbenv kbprogramming
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 4.0a, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some Polish characters are displayed incorrectly in dialog boxes in Microsoft
	Windows NT 4.0 when the Microsoft Sans Serif font is selected.
	
	CAUSE
	=====
	
	Most Windows NT localizations assume that the fonts being displayed are
	proportional. If the font is not proportional, Windows NT uses kerning pairs
	from their English counterparts, and the fonts are not displayed correctly.
	
	The Microsoft Sans Serif font is not a proportional font.
	
	RESOLUTION
	==========
	
	There are two possible solutions:
	
	- Delete the Microsoft Sans Serif font and let the font mapper choose one by
	  default. This is especially important with Cyrillic localizations (such as
	  Russian).
	
	- Install Visual C++ on Polish Windows NT 4.0. Recompile under the Polish
	  localization.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbprogramming 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : winnt:4.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

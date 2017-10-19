---
layout: page
title: "Q95841: The Four Levels of Font Embedding in Windows"
permalink: /kb/095/Q95841/
---

## Q95841: The Four Levels of Font Embedding in Windows

	Article: Q95841
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes font embedding and its four levels.
	
	MORE INFORMATION
	================
	
	Font embedding allows a user to create a document containing TrueType fonts,
	open the document on another machine that does not have the font installed, and
	use that font with certain limitations.
	
	These limitations are determined by the vendor of the font and are built into the
	font. Although this technology is built into the font, some users may not be
	able to use the font because the application must support the ability to embed
	the fonts when the document is saved.
	
	There are four levels of embedding:
	
	1. None - This level of embedding does not allow for embedding. Another font is
	  substituted for the selected font.
	
	2. Preview & Print - This level of embedding allows the selected font to be
	  seen on the screen and printed from the document in which the font was
	  embedded.
	
	3. Editable - At this level, the selected font can be seen on screen, printed,
	  and edited (but only in the host document).
	
	4. Installable - This level includes attributes of all previous levels. The
	  selected fonts can be installed on the computer and used in other documents
	  and applications.
	
	Additional query words: 3.11 true type ttf tt 3.10 Q82825
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

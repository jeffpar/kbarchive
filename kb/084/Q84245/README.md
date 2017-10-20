---
layout: page
title: "Q84245: Greek Symbols Appear Instead of Selected Fonts in Windows 3.1"
permalink: /kb/084/Q84245/
---

## Q84245: Greek Symbols Appear Instead of Selected Fonts in Windows 3.1

{% raw %}

	Article: Q84245
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Fonts display as Greek symbols in Microsoft Windows version 3.1.
	
	This font-mapping problem may occur only in certain applications or after
	choosing certain options within an application.
	
	RESOLUTION
	==========
	
	The fonts in the [fonts] section of the WIN.INI file may need to be reordered.
	
	This problem occurs most commonly with the Symbol font. To correct this problem,
	edit the WIN.INI file and move the SYMBOLx.FON line (where "x" represents a
	letter A-F) to end of the [fonts] section.
	
	MORE INFORMATION
	================
	
	When this problem occurs, the application is requesting a font by font family
	rather than by font name. In this case, Windows provides the first font in that
	family from the [fonts] section of the WIN.INI file. When you upgrade to Windows
	3.1, Setup upgrades the [fonts] section and deletes all Windows 3.0 fonts that
	no longer apply. This can cause font display problems for applications that ask
	for raster fonts by family rather than by name.
	
	Moving fonts in the list can cause different font-mapping problems with other
	fonts if you order the fonts incorrectly. When you move fonts, make sure that
	the plain text or "normal" version of a font appears first in the list. If you
	position italic or bold first, an application may incorrectly map to the italic
	or bold font instead of the plain text font. Many applications request the font
	name when they want the "normal" version of that font.
	
	
	Additional query words: 3.10 Aldus PageMaker Storybook Story Book regular windrvr 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}

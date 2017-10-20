---
layout: page
title: "Q167599: 8 x 16 TrueType Font for MS-DOS Not Available"
permalink: /kb/167/Q167599/
---

## Q167599: 8 x 16 TrueType Font for MS-DOS Not Available

{% raw %}

	Article: Q167599
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbui win95
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	- Microsoft Plus! 98, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Plus!, the 8 x 16 TrueType font may no longer be
	available in the Font box when you run an MS-DOS-based program.
	
	CAUSE
	=====
	
	The font list built from the [TTFontDimenCache] section in the System.ini file
	has been changed.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Use any text editor (such as Notepad) to open the System.ini file in the
	  Windows\System folder.
	
	2. Add the following line to the [TTFontDimenCache] section of the file:
	
	  0 15=8 16
	
	3. Change the line numbering for the existing lines 0 15 and 0 16 to 0 16 and 0
	  17.
	
	4. Save and then close the System.ini file, and then restart Windows 95.
	
	MORE INFORMATION
	================
	
	Installing Microsoft Plus! installs the Lucida Console TrueType font, which
	changes the font dimension settings, overwriting the default settings.
	
	======================================================================
	Keywords          : kbui win95 
	Technology        : kbWin95search _IKkbbogus kbGamesSearch kbPlus98 kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	

{% endraw %}

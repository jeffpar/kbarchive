---
layout: page
title: "Q85682: WRK Incorrectly Documents TTIfCollisions="
permalink: /kb/085/Q85682/
---

## Q85682: WRK Incorrectly Documents TTIfCollisions=

{% raw %}

	Article: Q85682
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 176 of the "Microsoft Windows Resource Kit" (WRK) guide for Windows 3.1
	incorrectly documents the TTIfCollisions= entry of the [TRUETYPE] section of the
	WIN.INI file. The same error occurs in the WININI.WRI file.
	
	MORE INFORMATION
	================
	
	Both page 176 and WININI.WRI state the following about the TTIfCollisions= entry
	in the WIN.INI file:
	
	  If you set this value to 0, Windows will use the TrueType version.
	
	The correct statement should be:
	
	  If you set this value to 1, Windows will use the TrueType version.
	
	The TTIfCollisions= entry specifies whether to use TrueType fonts in place of
	other fonts if both types of fonts are installed on the system and have the same
	font name.
	
	Additional query words: 3.1 3.11 3.10 wrkit rkit
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}

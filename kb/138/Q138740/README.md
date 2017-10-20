---
layout: page
title: "Q138740: SHUTGUI Window May Not Be Visible In Large Fonts"
permalink: /kb/138/Q138740/
---

## Q138740: SHUTGUI Window May Not Be Visible In Large Fonts

{% raw %}

	Article: Q138740
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the SHUTGUI.EXE utility that is included in the Windows NT Resource
	Kit version 3.51 in Large Fonts, portions of the application window may not be
	visible. Large system fonts may create large dialog boxes that is larger than
	the application window.
	
	CAUSE
	=====
	
	When Large Fonts are used, the system font is changed to a larger font. Dialog
	boxes use the system font to display text.
	
	RESOLUTION
	==========
	
	To work around this problem, change your system font back to Small Fonts. To
	change the fonts in Windows NT version 3.51, go into Control Panel Display and
	change the Font Size to Small Fonts.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Windows NT Resource Kit
	version 3.51. This problem was corrected and will be included in the next
	release of the Windows NT Resource Kit.
	
	
	Additional query words: prodnt shutdown missing button
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbMSPressSearch kbWinNTS351search kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword5
	
	=============================================================================
	

{% endraw %}

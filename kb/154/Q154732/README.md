---
layout: page
title: "Q154732: World Atlas 96: Text in Cosmo's Dialog Box Is Corrupt or Missing"
permalink: /kb/154/Q154732/
---

## Q154732: World Atlas 96: Text in Cosmo's Dialog Box Is Corrupt or Missing

{% raw %}

	Article: Q154732
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kbmm
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 96 World Atlas for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Encarta World Atlas, the displayed text in Cosmo's dialog box is
	missing or replaced by symbols.
	
	CAUSE
	=====
	
	This problem can occur if the Msgeonr1.ttf (Arial Narrow Special G1) font is
	improperly registered during Encarta World Atlas installation.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, do the following:
	
	1. Close Encarta World Atlas.
	
	2. Click the Start button, point to Settings, and then click Control Panel.
	
	3. Double-click the Fonts Control Panel.
	
	4. Select the True Type fonts with a date of 7-11-95 or earlier, as well as all
	  Arial fonts (including Msgeonr1.ttf), and drag them to the Windows 95
	  Desktop. To select multiple fonts, press and hold down the CONTROL keyboard
	  key while you select the font with your mouse.
	
	5. After you have moved the fonts to the desktop, move the Msgeonr1.ttf font
	  into the Fonts Control Panel. This registers Msgeonr1.ttf as the first font
	  in the Arial family.
	
	6. Move all of the remaining fonts on the desktop back into the Fonts Control
	  Panel.
	
	For more information about how to accomplish these tasks in Windows, see your
	Windows printed documentation or online Help.
	
	MORE INFORMATION
	================
	
	For more information or troubleshooting tips, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q141252 Corrupted or Symbol Font Used for Text
	
	Additional query words: 1996 multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          : kbenv kbmm 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaWorldAtlas1996
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

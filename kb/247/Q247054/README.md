---
layout: page
title: "Q247054: How to Change the Blinking Rate of the Insertion Point"
permalink: /kb/247/Q247054/
---

## Q247054: How to Change the Blinking Rate of the Insertion Point

{% raw %}

	Article: Q247054
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95,98,98 Second Edition
	Operating System(s): 
	Keyword(s): kbenv kbui win95 win98 win98se kbEnableSight
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to change the insertion point blinking rate.
	
	NOTE: Configuring the insertion point blinking rate may be helpful to people with
	seizure disorders.
	
	MORE INFORMATION
	================
	
	You can change the insertion point using the Keyboard tool in Control Panel or
	using Registry Editor.
	
	Keyboard Tool
	-------------
	
	To change the insertion point blinking rate, follow these steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Keyboard.
	
	2. Move the "Cursor blink rate" slider where you want it.
	
	NOTE: When you move the slider to the notch closest to Slow, the insertion point
	blinks 1.2 times per second. When you move the slider to the notch closest to
	Fast, the insertion point blinks 5 times per second. Each notch changes the the
	blinking rate by 100 milliseconds. Each time you move the slider, the blinking
	insertion point left of the slider immediately represents the blinking rate
	change. 3. Click Apply, and then click OK.
	
	Registry Editor
	---------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	You can make more detailed incremental changes using Registry Editor. In Registry
	Editor, change the value data for the CursorBlinkRate value in the following
	registry key:
	
	  HKEY_CURRENT_USER\Control Panel\Desktop
	
	NOTE: If the CursorBlinkRate value does not exist, add a new String Value.
	After you edit the CursorBlinkRate value in the Registry, you need to restart
	your computer.
	
	If you lower the value data number (the default is 500) for the CursorBlinkRate
	value, the insertion point blinks faster. If you use a larger number for the
	value data, the insertion point blinks slower.
	
	For example, the value data 1000 causes the insertion point to blink
	approximately one time per second. Likewise, if you use the value data 2000, the
	insertion point blinks approximately one time every two seconds. If you do not
	want the insertion point to blink, use the value data -1.
	
	NOTE: People who experience seizures in response to flashing lights or patterns
	may have problems with the blink rate of the insertion point if it is set at a
	frequency above 3 to 5 times per second.
	
	Additional query words: text epilepsy cursor
	
	======================================================================
	Keywords          : kbenv kbui win95 win98 win98se kbEnableSight 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95,98,98 Second Edition
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}

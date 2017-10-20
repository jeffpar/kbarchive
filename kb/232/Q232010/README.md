---
layout: page
title: "Q232010: 3D Text Screen Saver Does Not Display Custom Text"
permalink: /kb/232/Q232010/
---

## Q232010: 3D Text Screen Saver Does Not Display Custom Text

{% raw %}

	Article: Q232010
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv win95 win98 win98se
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure the 3D Text screen saver to display custom text, the text you
	enter may not be displayed correctly.
	
	CAUSE
	=====
	
	This issue can occur when you type "volcano" (without the quotation marks) in
	the Text box in the 3D Text Setup dialog box.
	
	RESOLUTION
	==========
	
	To resolve this issue, type an additional character before or after the word
	volcano. For example, you could type something similar to any of the following
	alternate text strings:
	
	  volcano.
	
	  !volcano
	
	  volcanoes
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This behavior is a feature of the 3D Text screen saver. When you type the word
	"volcano" (without the quotation marks) in the 3D Text Setup dialog box and the
	screen saver starts, the names of volcanoes from around the world are displayed
	on your screen.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv win95 win98 win98se 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbWinNTSsearch kbWinNTS400xsearch kbWinNTS400 kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

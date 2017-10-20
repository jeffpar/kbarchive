---
layout: page
title: "Q140156: No Floppy Access on Presario 140/774/972/982/992 with MS Plus!"
permalink: /kb/140/Q140156/
---

## Q140156: No Floppy Access on Presario 140/774/972/982/992 with MS Plus!

{% raw %}

	Article: Q140156
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Plus! on a Compaq Presario 140, 774, 972, 982, or
	992 computer, access to the computer's floppy disk drives may be slow or
	unavailable.
	
	CAUSE
	=====
	
	This behavior is caused by a conflict between the computer's floppy disk drive
	controller and the visual enhancements in Microsoft Plus!.
	
	RESOLUTION
	==========
	
	Disable the protected-mode floppy disk drive controller in Device Manager. To do
	so, follow these steps:
	
	1. In Control Panel, double-click the System icon.
	
	2. On the Device Manager tab, double-click the Floppy Disk Controller branch to
	  expand it.
	
	3. Click Standard Floppy Disk Controller, and then click Properties.
	
	4. Click the Original Configuration (Current) check box to clear it.
	
	5. Click OK or Close until you return to Control Panel.
	
	6. Restart Windows 95
	
	If the problem persists, rename the Hsflop.pdr file to Hsflop.w95 in the
	Windows\System\Iosubsys folder and restart Windows 95.
	
	NOTE: If this resolution does not work, you must select the Windows Default theme
	in Desktop Themes to regain access to the floppy disk drives.
	
	STATUS
	======
	
	Microsoft is aware of the issue described in this article and is working with
	Compaq to resolve it.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	

{% endraw %}

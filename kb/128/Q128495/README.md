---
layout: page
title: "Q128495: System Hangs with Audio CD and NEC Intersect CDR-37 Drive"
permalink: /kb/128/Q128495/
---

## Q128495: System Hangs with Audio CD and NEC Intersect CDR-37 Drive

{% raw %}

	Article: Q128495
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer stops responding (hangs) when you try to use an audio compact disk
	(CD) in a NEC Intersect CDR-37 CD-ROM drive. Ejecting the CD causes the error
	message "Drive Not Ready" to occur. You can use the system normally once you
	close the error message box.
	
	CAUSE
	=====
	
	The NEC Intersect CDR-37 CD-ROM drive is not supported for CD Audio when you are
	using the Windows 95 protected-mode drivers because it does not respond
	correctly to CD Audio commands.
	
	RESOLUTIONS
	-----------
	
	This drive should function correctly with audio CDs when you are using real- mode
	CD-ROM and MSCDEX.EXE drivers. To use real-mode drivers instead of the Windows
	95 protected-mode drivers, load the CD-ROM driver in the CONFIG.SYS file, and
	load MSCDEX.EXE in the AUTOEXEC.BAT file following the manufacturer's
	instructions. Note that if these drivers were already installed when you
	installed Windows 95, they may still be in the CONFIG.SYS and AUTOEXEC.BAT
	files, but be remarked out.
	
	If using the real-mode drivers does not resolve the problem, you may need to
	disable the CD-ROM drive in Device Manager. To do so, follow these steps:
	
	1. Double-click My Computer.
	
	2. Double-click Control Panel.
	
	3. Double-click the System icon.
	
	4. Click the Device Manager tab.
	
	5. Click the CD-ROM drive, then click the Properties button. Note that you may
	  need to expand a branch of the hardware tree by double- clicking the branch
	  or by clicking the plus sign (+) to the left of the branch before you can
	  click the CD-ROM drive.
	
	6. Click the Original Configuration (Current) check box to remove the check
	  mark.
	
	7. Click the OK button.
	
	8. Click OK.
	
	NOTE: If the CD-ROM drive is on its own controller, you may also need to disable
	the controller. To do so, follow the steps above but choose the CD-ROM
	controller card in step 5.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}

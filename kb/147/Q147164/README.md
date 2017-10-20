---
layout: page
title: "Q147164: Problems with NEC CDR-C251 CD-ROM Changer in Windows 95"
permalink: /kb/147/Q147164/
---

## Q147164: Problems with NEC CDR-C251 CD-ROM Changer in Windows 95

{% raw %}

	Article: Q147164
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install a NEC CDR-C251 MultiSpin 4-disc CD-ROM changer on a computer
	running Windows 95, your computer may stop responding (hang) when you start
	Windows 95, or the CD-ROM changer may continuously cycle through the discs in
	the changer.
	
	CAUSE
	=====
	
	This behavior can occur if the Auto Insert Notification option is enabled in
	Windows 95 and one or more of the CD-ROMs in the changer contains an Autorun.inf
	file. The Autorun.inf file causes Windows 95 to try to start a program on the
	CD-ROM.
	
	RESOLUTION
	==========
	
	To work around this behavior, disable the Auto Insert Notification feature. To
	do so, follow these steps:
	
	1. In Control Panel, double-click System.
	
	2. On the Device Manager tab, double-click the CD-ROM branch, and then
	  double-click NEC CDR-C251 CD-ROM.
	
	3. On the Settings tab, click the Auto Insert Notification check box to clear
	  it.
	
	4. Click OK or Close until you return to Control Panel. When you are prompted to
	  restart your computer, click Yes.
	
	NOTE: All four of the CD-ROM drives associated with the NEC CDR-C251 CD-ROM
	changer should be listed in Device Manager. The above procedure should be
	repeated for each of the four CD-ROM drives.
	
	MORE INFORMATION
	================
	
	When you use the NEC CDR-C251 MultiSpin 4-disc CD-ROM changer on a computer
	running Windows 95, all four drives may not be available in Windows 95 unless
	you use the real-mode CD-ROM drivers included with the changer. The problem
	described in this article is known to occur when the real-mode CD-ROM drivers
	provided by NEC are used.
	
	
	For additional information about running CD-ROMs and playing audio CDs
	automatically in Windows 95, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q126025 How to Disable Automatic CD-ROM Running and Audio CD Playing
	
	For additional information about using CD-ROM changers with Windows 95, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q123612 Support for CD-ROM Changers in Windows 95
	
	Additional query words: c251 jukebox
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	
	=============================================================================
	

{% endraw %}

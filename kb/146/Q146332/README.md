---
layout: page
title: "Q146332: Display Driver May Not Reset Refresh Rate During Setup"
permalink: /kb/146/Q146332/
---

## Q146332: Display Driver May Not Reset Refresh Rate During Setup

{% raw %}

	Article: Q146332
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbdisplay kbhw kbsetup kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	There are video drivers in Windows NT 4.0 which do not properly switch back to
	standard VGA mode (640 x 480, 16 colors, 60 Hz) after you test a different
	display mode. This only happens when the display mode tested has the same
	resolution as your current display mode but a higher refresh rate. The driver
	does not switch back to 60 Hz and may cause problems with monitors that do not
	support higher frequencies.
	
	This has been observed with the Cirrus 5428, Matrox Impression, and Matrox
	Millennium drivers.
	
	RESOLUTION
	==========
	
	NOTE: Turn off the monitor so it is not damaged.
	
	If this is happening during Setup, it is OK to turn the computer off and then
	turn it back on. If you want to preserve the settings you made, you can try to
	complete Setup by pressing Y when you are prompted whether you saw the display.
	Then you need to press ENTER twice. After several minutes, Setup should be
	completed and you can press ENTER to restart the computer. If you have specified
	that you want to create an Emergency Repair Disk (ERD), you need to insert the
	disk in the floppy disk drive and press ENTER two additional times. You should
	see the floppy disk drive LED flash to indicated that it is active.
	
	If you experience this problem when detecting display adapters, you should shut
	down the computer by doing the following:
	
	1. Press CTRL-ALT-DEL.
	
	2. Press the RIGHT ARROW key twice.
	
	3. Press ENTER.
	
	4. Press the DOWN ARROW key, and then press ENTER again.
	
	When the computer restarts, choose the standard VGA entry in the boot menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbdisplay kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q83077: Troubleshooting an Unsuccessful Windows 3.1 Installation"
permalink: /kb/083/Q83077/
---

## Q83077: Troubleshooting an Unsuccessful Windows 3.1 Installation

{% raw %}

	Article: Q83077
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article discusses troubleshooting unsuccessful installations of the
	Microsoft Windows operating system version 3.1 by examining the BOOTLOG.TXT
	file.
	
	MORE INFORMATION
	================
	
	When Windows SETUP.EXE completes the character or text portion of Setup, and the
	system appears to hang, consider the following:
	
	1. Wait from 30 to 60 seconds to ensure Windows has not hung. Windows may take
	  up to 1 minute to switch from the text mode to the graphics mode of Setup.
	
	2. If the screen still shows the character mode message, the problem occurred
	  before the Windows display driver initialized.
	
	  If the system is hung, restart your system and examine the BOOTLOG.TXT file by
	  typing the following at the MS-DOS command prompt:
	
	  type BOOTLOG.TXT | more
	
	  If the BOOTLOG.TXT shows that the display driver or some other driver is not
	  finished initializing, rerun Setup and select Custom Setup to explicitly
	  select drivers. Also, select no network and no mouse (and reboot the machine
	  without network software) to eliminate these possibilities. Make sure the
	  display selected is valid.
	
	3. If the screen becomes light gray when the hourglass appears, the display
	  driver has finished initializing. Check BOOTLOG.TXT for other devices that
	  have not initialized.
	
	4. If the screen looks like the graphical portion of Setup has started, the user
	  name and company screen is displayed. Check to ensure the correct keyboard is
	  selected. Also, check to see if the reboot message appears when CTRL+ALT+DEL
	  is pressed. If the screen displays "garbage" characters, an incorrect display
	  driver is probably causing the problem, although this behavior may also be
	  caused by hardware/software that is incompatible with DOSX.EXE, or another
	  selected driver. Check BOOTLOG.TXT.
	
	5. If BOOTLOG.TXT is missing, then most likely there is a problem with access to
	  extended memory, or there is some software loading that does not work when
	  protected mode is initiated.
	
	6. If BOOTLOG.TXT exists, then the last thing listed should indicate the problem
	  area. If BOOTLOG.TXT looks fine, then the problem could be a corrupt
	  SETUP.EXE or SETUP.INF.
	
	Additional query words: tshoot 3.10 locks lock up
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}

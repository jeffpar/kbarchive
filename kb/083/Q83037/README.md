---
layout: page
title: "Q83037: Common Problems with Font Packages and Windows 3.1"
permalink: /kb/083/Q83037/
---

## Q83037: Common Problems with Font Packages and Windows 3.1

{% raw %}

	Article: Q83037
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some third-party font packages may have problems under certain circumstances
	when running with Microsoft Windows operating system version 3.1. This article
	discusses some of the common problems and possible solutions.
	
	MORE INFORMATION
	================
	
	COMMON FONT PACKAGE PROBLEMS
	----------------------------
	
	- When installing Windows 3.1 to upgrade from Windows 3.0, the SYSTEM.INI
	  [boot] section's display.drv= may not get updated if a font package has
	  changed this line from one of Windows 3.0 drivers to its own driver.
	  Hewlett-Packard (HP) Intellifont and Bitstream FaceLift do this.
	
	  EGA Machines
	  ------------
	
	  On an EGA machine, the symptoms of this problem are not being able to start
	  Windows and an error message asking for Setup to be run again.
	
	  To correct this problem, run the Windows MS-DOS maintenance mode Setup to
	  update the display driver.
	
	
	  Bitstream FaceLift
	  ------------------
	
	  With Bitstream FaceLift, the symptoms of the display driver not being updated
	  are (a) an aborted setup where you are dropped back into MS-DOS, or (b) after
	  setup completes you attempt to restart and restart Windows, and you are
	  dropped back into MS-DOS.
	
	  To correct the problem:
	
	  a. At the MS-DOS command prompt from outside Windows, change to your Windows
	     directory.
	
	     Type the following and then press ENTER:
	
	  setup
	
	  b. Select the Display option, and press ENTER.
	
	  c. Choose your display type, then press ENTER.
	
	  d. Press ENTER again, then press ESC. (This replaces the existing display
	     driver.)
	
	  e. Insert the correct Windows 3.1 disk, or change the drive and directory to
	     point to the correct driver.
	
	  f. Restart Windows.
	
	
	- Third-party fonts do not appear in the Installed Fonts list box in the Fonts
	  option accessed from Control Panel.
	
	  Third-party fonts will not appear here unless the font is installed using
	  Control Panel, Fonts, Add. With Windows 3.0, this action is reserved for
	  screen fonts. With Windows 3.1, TrueType fonts are installed this way. Most
	  third-party font packages do not install in this way; therefore, it is
	  unlikely you will see third-party fonts here.
	
	
	The HP, Bitsream, and AT&T products included here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	KBCategory: kbprint kbdisplay kb3rdparty
	KBSubcategory: win31
	
	Additional query words: 3.10 3.1 ATM PowerPak SuperPrint morefonts FaceLift
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : :3.1,3.11
	
	=============================================================================
	

{% endraw %}

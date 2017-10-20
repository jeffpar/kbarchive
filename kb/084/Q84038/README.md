---
layout: page
title: "Q84038: Assigning a Shortcut Key to a Windows 3.1 Screen Saver"
permalink: /kb/084/Q84038/
---

## Q84038: Assigning a Shortcut Key to a Windows 3.1 Screen Saver

{% raw %}

	Article: Q84038
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Windows, you can assign a shortcut key to a screen saver.
	
	MORE INFORMATION
	================
	
	The following steps demonstrate how to assign a Program Manager shortcut key to
	a Windows 3.1x or Windows for Workgroups 3.1x screen saver:
	
	1. Using a text editor such as Notepad, change the line in the WIN.INI file that
	  reads
	
	  Programs=com exe bat pif
	
	  to:
	
	  Programs=com exe bat pif scr
	
	  If you made this change from within Windows, quit and then restart Windows.
	
	2. Add a screen saver icon to a program group using these steps:
	
	  a. Open Program Manager.
	
	  b. From the File menu, choose New.
	
	  c. Select the Program Item option button.
	
	  d. Choose OK.
	
	  e. Enter the description in the Description box. Enter the command line in
	     the Command Line box (see the table below).
	
	  f. To assign a shortcut key in the Shortcut Key box, press and hold down the
	     CTRL key and then press the key you want to use as a shortcut.
	
	The following table lists the command line to use for each screen saver included
	with Windows 3.1:
	
	  Screen Saver            Command Line
	  ------------------------------------
	  Blank Screen            SCRSAVE.SCR
	  Flying Windows          SSFLYWIN.SCR
	  Marquee                 SSMARQUE.SCR
	  Mystify                 SSMYST.SCR
	  Starfield Simulation    SSSTARS.SCR
	
	Configuring the Screen Saver's Options
	--------------------------------------
	
	To configure the screen saver's options, press the shortcut key or double- click
	the screen saver's icon and make changes in the dialog box that appears.
	
	Starting the Screen Saver
	-------------------------
	
	To start the screen saver by double-clicking the icon or pressing the shortcut
	key, edit the screen saver icon's properties to include the "/s" switch on the
	command line. To do this, select the icon, choose Properties from the File menu,
	and add the switch to the end of the command line in the Command Line box. For
	example, a screen saver icon's Command Line might read:
	
	        ssflywin.scr /s
	
	Notes
	-----
	
	You can activate the same screen saver or a different one in the normal fashion
	using the Desktop dialog box in Control Panel.
	
	You can activate the screen saver when Windows starts by adding its icon to the
	Startup program group. (Note that pressing and holding down the SHIFT key while
	Windows starts will prevent the screen saver from starting.)
	
	The Program Manager must be the current application for the shortcut keys to
	function.
	
	
	KBCategory: kbusage kbtool
	KBSubcategory: wfw win31 wfwg win95
	
	Additional query words: short cut short-cut hotkey hot-key hot key
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : :3.1,3.11
	
	=============================================================================
	

{% endraw %}

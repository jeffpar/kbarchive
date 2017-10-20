---
layout: page
title: "Q81606: Disabling the Startup Group in Windows"
permalink: /kb/081/Q81606/
---

## Q81606: Disabling the Startup Group in Windows

{% raw %}

	Article: Q81606
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 28-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To disable the Startup group when starting Microsoft Windows version 3.1, do the
	following:
	
	1. Start Windows as usual. (At the MS-DOS command prompt, type "WIN" (without
	  the quotation marks) and press the ENTER key.)
	
	2. Immediately after pressing ENTER, press and hold down the SHIFT key.
	
	To start Windows 95 without processing the Startup folder, press and hold down
	the SHIFT key when you see the "Starting Windows 95" message. This also prevents
	programs from being run by the "Load=" and the "Run=" lines listed in the
	Win.ini file.
	
	MORE INFORMATION
	================
	
	At Windows startup, Program Manager executes all programs that have an icon in
	the Startup group. The programs are executed according to their placement in the
	Startup group, with Windows applications taking precedence over MS-DOS
	applications. Windows starts executing from the upper left and goes across to
	the right and then down one line.
	
	NOTE: The Startup group is independent of the LOAD= and RUN= lines in the WIN.INI
	file.
	
	You can also disable the Startup group by putting the line "startup=" (without
	the quotation marks) in the [settings] section of your PROGMAN.INI file. If you
	leave this entry blank (that is, you don't put anything on the right side of the
	equals sign), there is no Startup group.
	
	For more information on the application load order for programs in the Startup
	group, refer to article Q91204 in the Microsoft Knowledge Base.
	
	Additional query words: tshoot 3.10 3.11 win31
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}

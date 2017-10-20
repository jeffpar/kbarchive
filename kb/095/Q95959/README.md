---
layout: page
title: "Q95959: Intersvr Resets Screen Mode"
permalink: /kb/095/Q95959/
---

## Q95959: Intersvr Resets Screen Mode

{% raw %}

	Article: Q95959
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Intersvr resets the screen to 25-line mode and may not display information on
	the lower part of the screen when you are loading XANSI.SYS and using an Orchid
	ProDesigner IIs in 80-characters-per line/60-lines-per-screen mode. There is no
	work around at this time.
	
	This problem does not occur with ANSI.SYS and MODE.COM when they are used with
	the video modes they support.
	
	MORE INFORMATION
	================
	
	For more information on MODE and video support, type the following at the MS-DOS
	command prompt and press ENTER:
	
	  " help mode (set display mode)" (without the quotation marks)
	
	Intersvr is a component of the MS-DOS file transfer utility Interlnk. For more
	information on Interlnk, type the following command at the MS-DOS command prompt
	or see Chapter 7, "Features for Your Laptop Computer," in the "MS-DOS 6 User's
	Guide":
	
	  " help interlnk" (without the quotation marks)
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	
	Additional query words: 6.22 6.0 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}

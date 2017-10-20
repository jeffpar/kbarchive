---
layout: page
title: "Q78442: MS-DOS Shell Task Swapper and Framework III/Frameword IV"
permalink: /kb/078/Q78442/
---

## Q78442: MS-DOS Shell Task Swapper and Framework III/Frameword IV

{% raw %}

	Article: Q78442
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Borland/Ashton-Tate has confirmed that Framework III and Framework IV may
	display garbled characters when task swapping within MS-DOS 5.0 or later Shell.
	
	This problem can be resolved by loading the IBM EGA screen driver from the
	Framework setup program, SETUPFW.EXE.
	
	MORE INFORMATION
	================
	
	Borland/Ashton-Tate Framework III and Framework IV may display garbled
	characters on the Framework screen when task swapping within Shell. Framework
	needs to be running in EGA 80/25 text mode with the IBM EGA driver installed to
	successfully swap in and out of Shell.
	
	The SETUPFW.EXE file that is provided with the Framework software package will
	allow you to change the display setting to EGA 80/25 (80 characters-by-25 lines)
	text mode.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 5.00 5.00a 6.00 3rdparty dosshell
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	

{% endraw %}

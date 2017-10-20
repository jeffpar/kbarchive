---
layout: page
title: "Q68003: Peculiarities with Edlin's Line Display"
permalink: /kb/068/Q68003/
---

## Q68003: Peculiarities with Edlin's Line Display

{% raw %}

	Article: Q68003
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Edlin appears to treat lines containing 69 characters as though they visually
	wrap on the screen. To see this behavior, use Edlin's "L" command.
	
	Normally, without line wrapping, Edlin's "L" command displays one full screen of
	text. If a line containing 69 characters is contained within the lines being
	displayed, the following prompt is displayed:
	
	  Continue (Y/N)?
	
	The number of lines displayed on the screen at this point is fewer than one full
	screen, even though screen wrapping has not occurred.
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 4.0, 4.01, and
	5.0. Edlin is not included with later versions of MS-DOS.
	
	Additional query words: 4.00 4.01 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS500 kbMSDOS401
	Version           : MS-DOS:4.x,5.0
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q75414: Explanation of SPECIAL=DEFAULT in DOSSHELL.INI"
permalink: /kb/075/Q75414/
---

## Q75414: Explanation of SPECIAL=DEFAULT in DOSSHELL.INI

{% raw %}

	Article: Q75414
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
	
	SPECIAL=DEFAULT in the DOSSHELL.INI file specifies which program item or group
	item within MS-DOS Shell Program Manager will be selected (highlighted) at
	startup. Note that there should be only one such line within DOSSHELL.INI.
	
	The group or program item that was last specified within Shell when Shell was
	exited will be tagged within DOSSHELL.INI with the SPECIAL=DEFAULT line.
	Therefore, after exiting Shell completely, the last program or group item is
	still tagged.
	
	To find more information on the DOSSHELL.INI file, query on the following words:
	
	  " MS-DOS and DOSSHELL " (without the quotation marks)
	
	Additional query words: 5.00 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	

{% endraw %}

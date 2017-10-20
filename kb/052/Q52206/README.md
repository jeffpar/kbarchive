---
layout: page
title: "Q52206: MS-DOS Hangs when &quot;Relative&quot; PATH Is Used"
permalink: /kb/052/Q52206/
---

## Q52206: MS-DOS Hangs when &quot;Relative&quot; PATH Is Used

{% raw %}

	Article: Q52206
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In MS-DOS versions 3.1x-4.x, if a "PATH \;.." statement is used and an
	executable (or .BAT) file is found in the directory that translates to the "\"
	portion of the PATH statement, the system stops (hangs).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 3.1, 3.11, 3.2,
	3.21, 3.22, 3.3, 4.0, 4.0a, and 4.01. This problem does not occur in later
	versions of MS-DOS.
	
	RESOLUTION
	==========
	
	Reversing the order of the path items (to read ..;\) eliminates the problem.
	
	MORE INFORMATION
	================
	
	This type of path is common when software is organized onto logical drives and
	all necessary files are loaded in the root or in a directory below the working
	directory.
	
	Additional query words: 3.10 3.20 3.30 3.30a 4.00 4.00a 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x
	
	=============================================================================
	

{% endraw %}

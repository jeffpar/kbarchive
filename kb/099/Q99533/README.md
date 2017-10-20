---
layout: page
title: "Q99533: DIRECTORY Command Returns Incorrect 0 Bytes Free Message"
permalink: /kb/099/Q99533/
---

## Q99533: DIRECTORY Command Returns Incorrect 0 Bytes Free Message

{% raw %}

	Article: Q99533
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	
	For high performance file system (HPFS) drives with partitions larger than 2 GB,
	the MS-DOS Directory command sometimes shows 0 bytes free even if plenty of free
	space is left. You can read, write, restore, and backup, but some applications
	that write automatically to the hard disk crash if there is no free space.
	
	CAUSE
	=====
	
	This problem is not completely understood, but possible causes are:
	
	- MS-DOS may simply return a zero because it is incapable of dealing with
	  numbers larger than the 2 GB its local partitions are limited to.
	
	- The program may miscalculate the free disk space from the numbers provided by
	  MS-DOS; this is a very common problem.
	
	RESOLUTION
	==========
	
	If the problem persists, try to get a register dump of the MS-DOS function Int
	21h, AH=36h, DL=drive (1 based), and contact Microsoft.
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}

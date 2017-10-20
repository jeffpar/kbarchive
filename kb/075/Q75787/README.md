---
layout: page
title: "Q75787: MS-DOS 5.0 and IBM AT with BIOS dated 1/10/84"
permalink: /kb/075/Q75787/
---

## Q75787: MS-DOS 5.0 and IBM AT with BIOS dated 1/10/84

{% raw %}

	Article: Q75787
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Microsoft MS-DOS version 5.0 is installed on an IBM AT with a BIOS dated
	1/10/84, disk access may be noticeably slower. Increasing the disk interleave
	should solve this problem.
	
	MORE INFORMATION
	================
	
	A third-party utility, such as Spinrite or Norton Utilities, can be used to
	modify a disk's interleave. Increasing the disk's interleave by one should solve
	the problem. For example; if the interleave is 2:1, change it to 3:1.
	
	Disk interleave is:
	
	  "the physical arrangement of data sectors on a disk in such a way that
	  sequentially read sectors are not necessarily contiguous. A disk, especially
	  a hard disk, usually spins so fast that the computer cannot process the data
	  from one sector before the next sector passes the head. Interleaving
	  alternates sectors in a pattern that increases the likelihood that when the
	  computer is ready for the next sector in numeric sequence, it will be the
	  sequence just arriving at the head."
	
	This definition was obtained from "Computer Dictionary," published by Microsoft
	Press.
	
	More information on disk interleave can be found in "The MS-DOS Encyclopedia" or
	"Advanced MS-DOS Programming," which is published by Microsoft Press.
	
	The products included here, Spinrite and Norton Utilities, are manufactured by
	vendors independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x
	
	=============================================================================
	

{% endraw %}

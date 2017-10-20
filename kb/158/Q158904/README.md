---
layout: page
title: "Q158904: CD-ROM Benchmark Program May Not Disable Read Ahead or Caching"
permalink: /kb/158/Q158904/
---

## Q158904: CD-ROM Benchmark Program May Not Disable Read Ahead or Caching

{% raw %}

	Article: Q158904
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a CD-ROM benchmark program to test the file transfer rate of
	a CD-ROM drive, the program may not disable read ahead and caching for the
	CD-ROM drive, which may result in an inaccurate measurement of the drive's
	transfer rate
	
	RESOLUTION
	==========
	
	Disable read ahead and caching for the CD-ROM drive. To do so, follow these
	steps:
	
	1. In Control Panel, double click System.
	
	2. Click the Performance tab.
	
	3. Click File System.
	
	4. Click the CD-ROM tab and move the Supplemental Cache Size slider all the way
	  to the left (to Small).
	
	5. In the Optimize Access Pattern For box, click No Read Head.
	
	
	Additional query words: 95
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	

{% endraw %}

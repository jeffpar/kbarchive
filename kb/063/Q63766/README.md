---
layout: page
title: "Q63766: File Manager Displays Minutes as Even in Windows"
permalink: /kb/063/Q63766/
---

## Q63766: File Manager Displays Minutes as Even in Windows

{% raw %}

	Article: Q63766
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you choose File Details from the View menu of Microsoft Windows File
	Manager, the seconds portion of the last modification time is displayed as an
	even number. If you open the View menu, choose Sort By, and select Last
	Modification Date, the files are displayed in properly sorted order, according
	to last date and time modified.
	
	Seconds are always rounded to an even number because there are only 5 bits to
	represent seconds for a filename. They are stored in 2 second increments (0 to
	29).
	
	REFERENCES
	==========
	
	"The MS-DOS Encyclopedia," Microsoft Press, page 266.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}

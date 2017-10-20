---
layout: page
title: "Q140678: How Windows 95 Manages the Size of the Disk Cache"
permalink: /kb/140/Q140678/
---

## Q140678: How Windows 95 Manages the Size of the Disk Cache

{% raw %}

	Article: Q140678
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbenv win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how Windows 95 manages the size of the disk cache, and
	how you can change it.
	
	MORE INFORMATION
	================
	
	In Windows 95, the disk cache changes size dynamically in response to the
	current needs of the system. Windows 95 manages the size of the disk cache by
	computing the following values once each second:
	
	- How fast the computer is running.
	
	- How fast the computer would be running if the disk cache were larger.
	
	- How fast the computer would be running if the disk cache were smaller.
	
	Windows 95 adjusts the size of the disk cache as needed to maintain the fastest
	computer speed. Windows 95 can adjust the size of the disk cache up to the
	maximum size established at system startup, or down to the minimum size
	established at system startup.
	
	For information about changing the maximum and minimum cache sizes in Windows 95,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q108079 32-Bit File Access Maximum Cache Size
	
	Additional query words: maxfilecache minfilecache
	
	======================================================================
	Keywords          : kbenv win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}

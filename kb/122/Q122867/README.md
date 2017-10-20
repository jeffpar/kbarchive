---
layout: page
title: "Q122867: Registry Keys Are Limited to 60 KB Each"
permalink: /kb/122/Q122867/
---

## Q122867: Registry Keys Are Limited to 60 KB Each

{% raw %}

	Article: Q122867
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows 95 registry is limited to approximately 60 kilobytes (KB) per key.
	This limit consists of value names, value data, and some fixed overhead.
	
	MORE INFORMATION
	================
	
	This limitation has been removed in Microsoft Windows 98. However, if you create
	a registry hive with a key larger than 60 KB in Windows 98 and then load the
	hive on a Windows 95-based computer, extra information (values and their data)
	is lost.
	
	Additional query words: size 64
	
	======================================================================
	Keywords          : kbenv win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}

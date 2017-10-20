---
layout: page
title: "Q168977: Time Suffix Appears Distorted in Windows 95 Clock"
permalink: /kb/168/Q168977/
---

## Q168977: Time Suffix Appears Distorted in Windows 95 Clock

{% raw %}

	Article: Q168977
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbtool kbui win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the Windows 95 clock, or view files with the time stamp displayed,
	you may see characters other than AM or PM. For example, the clock may look like
	this:
	
	  8:30 yiu
	
	If you view a file with the time stamp displayed, the file may look like this:
	
	  Morning.txt     123k    9:00 yiu
	
	CAUSE
	=====
	
	The regional settings have been changed or become damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click Regional Settings, and then click the Time tab.
	
	3. In the AM Symbol box, type "AM" (without the quotation marks).
	
	4. In the PM Symbol box, type "PM" (without the quotation marks).
	
	5. Click OK.
	
	======================================================================
	Keywords          : kbtool kbui win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}

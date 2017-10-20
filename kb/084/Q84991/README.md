---
layout: page
title: "Q84991: Write Has Display Problems with WingDings"
permalink: /kb/084/Q84991/
---

## Q84991: Write Has Display Problems with WingDings

{% raw %}

	Article: Q84991
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Windows Write fails to correctly display the WingDings font on the screen when
	certain printers that have a large number of device fonts, such as the Panasonic
	KX-P 1124, are installed.
	
	CAUSE
	=====
	
	Write tries to enumerate the entire set of fonts available to it (TrueType and
	device fonts). If there are more than 50 TrueType and device fonts, Write fails
	to correctly display the fonts.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows version 3.1. We are
	researching this problem and will post new information here as it becomes
	available.
	
	
	Additional query words: 3.10 3.11 true type
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}

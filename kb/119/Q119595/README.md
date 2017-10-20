---
layout: page
title: "Q119595: Function Not Supported on This Computer"
permalink: /kb/119/Q119595/
---

## Q119595: Function Not Supported on This Computer

{% raw %}

	Article: Q119595
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Typing "MODE COMx:19200" (without the quotation marks) results in the following
	error message:
	
	  Function not supported on this computer.
	
	CAUSE
	=====
	
	IBM PS/2-style computers support extended INT 14h services that allow the baud
	rate to be set up to 19200. MODE uses this extended function support to
	initialize COM ports on PS/2-style systems.
	
	Most non-PS/2-class machines do not have a ROM BIOS that supports this extended
	functionality.
	
	WORKAROUND
	==========
	
	Rather than using MODE to set the baud rate, use an application that controls
	the COM port to set the baud rate.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This information is true for previous versions of MODE.COM as well the version
	in Windows 95.
	
	Additional query words: 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

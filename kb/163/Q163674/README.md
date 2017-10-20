---
layout: page
title: "Q163674: LapLink Does Not Recognize Infrared COM Port"
permalink: /kb/163/Q163674/
---

## Q163674: LapLink Does Not Recognize Infrared COM Port

{% raw %}

	Article: Q163674
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use LapLink with virtual COM ports created by an infrared
	adapter, you may receive the following error message:
	
	  This port is unavailable: it may not be physically present in this computer.
	  If no other communications program is currently running, check for a mouse or
	  other serial device on this port."
	
	CAUSE
	=====
	
	LapLink accesses the hardware directly to determine the status of the COM port
	and does not recognize virtual COM ports created using the infrared adapter.
	
	RESOLUTION
	==========
	
	To work around this problem, use either of the following methods:
	
	- Contact LapLink for a possible resolution.
	
	- Use the Direct Cable Connection tool included with Windows 95.
	
	MORE INFORMATION
	================
	
	LapLink for Windows is manufactured by Traveling Software, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 95
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	
	=============================================================================
	

{% endraw %}

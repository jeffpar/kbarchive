---
layout: page
title: "Q86855: System Hangs When Running MS-DOS Prompt with IBM LAN Server"
permalink: /kb/086/Q86855/
---

## Q86855: System Hangs When Running MS-DOS Prompt with IBM LAN Server

{% raw %}

	Article: Q86855
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are running IBM LAN Server software version 1.11 or 1.2, the file
	DXMT0MOD.SYS may cause Windows 3.1 to hang when you attempt to run MS-DOS Prompt
	or any MS-DOS-based application.
	
	CAUSE
	=====
	
	DXMT0MOD.SYS is a NETBIOS API file that may not be needed for correct network
	operation with Windows 3.1. To work around the system-hang problem, do not load
	this file.
	
	Microsoft is researching this problem and will post new information here as it
	becomes available.
	
	Additional query words: 3.10 3.11 3rdparty lanserver
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}

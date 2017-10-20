---
layout: page
title: "Q106432: MEM Reports Incorrect Value for Used Extended (XMS) Memory"
permalink: /kb/106/Q106432/
---

## Q106432: MEM Reports Incorrect Value for Used Extended (XMS) Memory

{% raw %}

	Article: Q106432
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On systems with more than 16 megabytes (MB) of memory, if you are in Windows
	when you run the MEM command, it may report an incorrect number of bytes for the
	used extended memory (XMS) value. This problem may also occur when you are not
	in Windows if you are using a third-party XMS memory manager.
	
	CAUSE
	=====
	
	This problem occurs when you have more than 16 MB of memory and your ROM BIOS
	reports a maximum of 15 MB via interrupt 15h, function 88h.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 6.0, 6.2, and
	6.21. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 6.22 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}

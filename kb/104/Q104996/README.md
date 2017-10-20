---
layout: page
title: "Q104996: Divide By Zero Error with MS-DOS FORMAT Command"
permalink: /kb/104/Q104996/
---

## Q104996: Divide By Zero Error with MS-DOS FORMAT Command

{% raw %}

	Article: Q104996
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to format a 255-head drive you receive a "divide by zero" error
	message.
	
	CAUSE
	=====
	
	MS-DOS FORMAT does not support drives with more than 254 heads.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 5.x, 6.0, 6.2,
	and 6.21. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 6.22 5.0, 5.0a 5.00 5.00a 6.00 6.20 max_head command
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}

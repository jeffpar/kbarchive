---
layout: page
title: "Q96955: RENAME Drops Character If Wildcard Is Used"
permalink: /kb/096/Q96955/
---

## Q96955: RENAME Drops Character If Wildcard Is Used

{% raw %}

	Article: Q96955
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive unexpected behavior from the RENAME (REN) command if you use
	wildcard characters. This occurs only if the old and new names have different
	character lengths. For example, suppose you want to rename the following two
	files:
	
	  ndcsend.cm
	  ndcsend.obj
	
	Rename them both using the following command:
	
	  ren ndc*.* tran*.*
	
	The expected result is the following filenames:
	
	  transend.c
	  transend.obj
	
	However, the following filenames are generated:
	
	  tranend.c
	  tranend.obj
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 5.x, 6.0, 6.2,
	and 6.21. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}

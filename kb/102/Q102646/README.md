---
layout: page
title: "Q102646: REPLACE.EXE Checks and Copies Only 255 Files"
permalink: /kb/102/Q102646/
---

## Q102646: REPLACE.EXE Checks and Copies Only 255 Files

{% raw %}

	Article: Q102646
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the MS-DOS 6.x REPLACE command with the /A switch and at least one
	file exists in the destination directory that matches a file in the source
	directory, REPLACE.EXE checks and copies only the first 255 pattern matches
	(files) in the source directory.
	
	To work around this problem, either use REPLACE without any switches, or use it
	with the /U switch.
	
	Microsoft has confirmed this to be a problem in MS-DOS 6.0, 6.2, 6.21, and 6.22.
	We will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	
	Additional query words: 6.0 6.2 6.22 6.00 6.20 6.21
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}

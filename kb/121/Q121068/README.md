---
layout: page
title: "Q121068: When Removing Read-Only Directory, No Warning Message Appears"
permalink: /kb/121/Q121068/
---

## Q121068: When Removing Read-Only Directory, No Warning Message Appears

{% raw %}

	Article: Q121068
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.3x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Remove Directory command (RMDIR or RD) removes read-only directories without
	generating a warning message or error.
	
	CAUSE
	=====
	
	Before a directory can be removed using the RD or RMDIR command, all files and
	subdirectories, including any files or subdirectories with set attributes
	(Read-Only, System, Hidden, and/or Archive) must be deleted. However, when the
	directory itself has a Read-Only attribute set, RMDIR or RD deletes the empty
	directory with no warning or error messages.
	
	The ATTRIB <file or directory> +R command sets Read-Only attributes to
	files and directories. The RMDIR and RD commands ignore any ATTRIB-set
	attributes (Read-Only, System, Hidden, Archive) directories.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 3.3x, 4.x, 5.x,
	6.0, 6.2, 6.21, and 6.22. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.3x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}

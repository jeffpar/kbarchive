---
layout: page
title: "Q109848: MS-DOS Shell Err Msg: Invalid Path"
permalink: /kb/109/Q109848/
---

## Q109848: MS-DOS Shell Err Msg: Invalid Path

{% raw %}

	Article: Q109848
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to copy files to a floppy disk with Microsoft MS-DOS Shell, the
	following error message may be generated:
	
	  Invalid path.
	
	  -or-
	
	  Copying file: <filename> 1 of 1
	
	  Invalid path.
	
	1. Skip this file or directory and continue
	
	2. Try this file or directory again.
	
	CAUSE
	=====
	
	This problem occurs if the floppy disk is damaged or is not formatted.
	
	RESOLUTION
	==========
	
	Format the floppy disk, or replace it with a floppy disk known to be reliable,
	then try to copy the files again.
	
	MORE INFORMATION
	================
	
	Quit MS-DOS Shell and run a DIR command on the floppy disk. If the error message
	"General Failure Reading Drive" is displayed, format the floppy disk using the
	MS-DOS FORMAT command and try again. If the error still appears, the floppy disk
	may be physically damaged and should be replaced with a different disk.
	
	
	Additional query words: 5.00 5.00a, 6.00 dosshell invalid
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q124854: XCOPY Results in Data Loss When Copying Extremely Large Files"
permalink: /kb/124/Q124854/
---

## Q124854: XCOPY Results in Data Loss When Copying Extremely Large Files

{% raw %}

	Article: Q124854
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running the XCOPY command results in data loss when you try to copy a
	15-megabyte (MB) or larger file, such as a compressed volume file (CVF) or
	Microsoft Mail folder (MMF).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 5.00, 6.00,
	6.20, 6.21, and 6.22. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When you use XCOPY to copy a file 15 MB or larger to another location on the
	same drive and that drive has insufficient disk space to do so, XCOPY eventually
	reports that there is insufficient disk space, and that no files were copied.
	However, the results of a DIR command indicate a new file was created--and that
	it takes up approximately the amount of free disk space that existed before you
	ran XCOPY. The directory listing also shows that the original file was deleted
	and that the system now has the same amount of free disk space as the original
	file occupied before running XCOPY.
	
	
	Additional query words: 5.0 6.0 6.20 6.2 6.21 6.22 5.x 6.x
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500
	Version           : MS-DOS:5.0,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}

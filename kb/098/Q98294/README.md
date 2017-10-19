---
layout: page
title: "Q98294: DELTREE Identifies a Directory Name as a Filename"
permalink: /kb/098/Q98294/
---

## Q98294: DELTREE Identifies a Directory Name as a Filename

	Article: Q98294
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the DELTREE command to delete a directory that has any of the four
	MS-DOS file attributes (archive, read-only, system, or hidden) set, DELTREE
	incorrectly identifies the directory name as a filename when asking for
	confirmation. For example, if you delete the subdirectory TEST with the
	following command
	
	  deltree c:\test
	
	DELTREE responds with:
	
	  Delete file "test"? [yn]
	
	This problem does not affect the result; DELTREE still deletes the subdirectory
	as directed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 6.0, 6.2, and
	6.21. We are researching this problem and will post new information here as it
	becomes available.
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

---
layout: page
title: "Q126572: DELTREE Command Does Not Remove DIR000&lt;x&gt; Directory"
permalink: /kb/126/Q126572/
---

## Q126572: DELTREE Command Does Not Remove DIR000&lt;x&gt; Directory

	Article: Q126572
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MS-DOS DELTREE command does not remove directories named DIR000<x>
	where x is an integer number. For example, the DELTREE command does not remove a
	directory called DIR0001.
	
	WORKAROUND
	==========
	
	You must use a third-party disk utility to remove DIR000<x> directories.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Microsoft ScanDisk creates DIR000<x> directories when it finds directory
	structures that are damaged beyond repair. All the files in these directories
	have read-only and hidden attributes. The MS-DOS ATTRIB command does not change
	the attributes on these files.
	
	Additional query words: 6.22 scandisk.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	

---
layout: page
title: "Q105255: Err Msg with Removable Media: Dblspace Cannot Mount Drive..."
permalink: /kb/105/Q105255/
---

## Q105255: Err Msg with Removable Media: Dblspace Cannot Mount Drive...

	Article: Q105255
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to mount a DoubleSpace-compressed removable media disk, you receive
	the following error message:
	
	  Dblspace cannot mount drive <letter>: The <letter>:\Dblspace.000
	  file is not a valid compressed volume file. To fix it, type scandisk
	  <letter>:\Dblspace.000 at the command prompt.
	
	If you run ScanDisk, it will likely report no errors.
	
	
	CAUSE
	=====
	
	This problem occurs when the DoubleSpace-compressed removable media disk is
	write protected.
	
	RESOLUTION
	==========
	
	To work around this problem, remove the write protection from the removable
	media disk.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS DoubleSpace version 6.2.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 6.20 Bernoulli floptical floppy diskette
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : MS-DOS:6.2
	
	=============================================================================
	

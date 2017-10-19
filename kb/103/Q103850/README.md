---
layout: page
title: "Q103850: PC Adm: Compress Storage Results in Negative Bytes Recovered"
permalink: /kb/103/Q103850/
---

## Q103850: PC Adm: Compress Storage Results in Negative Bytes Recovered

	Article: Q103850
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With versions 3.0, 3.0b, and 3.2 of Microsoft Mail for PC Networks, when the
	Mail administrator recovers disk space by choosing Local-Admin, Storage,
	Compress, the status may show negative bytes recovered.
	
	CAUSE
	=====
	
	This problem occurs because the statistics are based on the free space available
	on the server, not on the amount of space Mail occupies. The statistics can also
	be affected by disk usage by other network users. Even if no one else is using
	the network, the actual space can be affected because during the process of
	compressing mailbags, copies of existing mailbags and some temporary mailbags
	(such as COPY.MBG) are created.
	
	RESOLUTION
	==========
	
	On a Novell server, the negative number of bytes recovered is usually a multiple
	of the block size, and varies depending on the number and size of the temporary
	files created. To avoid skewing the statistics due to the creation of temporary
	files, the Mail Admin should flag the MBG subdirectory for Purge using the
	flagdir command, before doing the compression.
	
	As a result, temporary files will be deleted immediately and a more accurate
	report will be generated. The network administrator can then change or restore
	the attributes in the MBG subdirectory to the setting prior to the compression.
	
	NOTE: Even with this setting, the statistics will be affected by disk usage of
	other network users.
	
	If the postoffice is copied to a local drive before the compression is run, this
	problem does not occur.
	
	Additional query words: 3.00 3.20 compress admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

---
layout: page
title: "Q112303: PC DirSync: Err Msg: Warning 128 Could Not Process Requestor"
permalink: /kb/112/Q112303/
---

## Q112303: PC DirSync: Err Msg: Warning 128 Could Not Process Requestor

{% raw %}

	Article: Q112303
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0a,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0a, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error may occur when you run Directory Synchronization (Dir-
	Sync):
	
	  Warning [128] Could not process requestor status report
	
	CAUSE
	=====
	
	This error can be caused by a missing attachment directory (ATT or one of the
	subdirectories under ATT), a missing message directory (MAI or one of the
	subdirectories under MAI), a missing INQUEUE.MBG, or a read-only CONTROL.GLB
	file.
	
	RESOLUTION
	==========
	
	Verify that the ATT and MAI directories exist and that there are 16
	subdirectories under both the ATT directory (AT0 through ATF) and the MAI
	directory (MA0 through MAF). If any of these directories does not exist, use the
	Microsoft Windows File Manager or the following MS-DOS command to create it:
	
	  mkdir <directory-name>
	
	Then allow Dispatch to cycle through the postoffices.
	
	NOTE: You may want to restore these directories from tape backup if you have
	MS-DOS Mail clients.
	
	Additional query words: 3.00 3.00a 3.20 3.50 warning128 error128
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a kbMailPCN350
	Version           : WINDOWS:3.0,3.0a,3.2,3.5
	
	=============================================================================
	

{% endraw %}

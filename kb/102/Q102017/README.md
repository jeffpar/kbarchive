---
layout: page
title: "Q102017: PC DirSync: Running REBUILD.EXE Enables the GAL"
permalink: /kb/102/Q102017/
---

## Q102017: PC DirSync: Running REBUILD.EXE Enables the GAL

	Article: Q102017
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0a,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0a, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After the REBUILD.EXE program is run, the Global Address List (GAL) will be
	enabled, even if it was disabled.
	
	CAUSE
	=====
	
	This can happen when running REBUILD.EXE or by running directory synchronization
	(Dir-Sync), which runs REBUILD.EXE.
	
	RESOLUTION
	==========
	
	You can avoid having Dir-Sync run REBUILD.EXE by renaming REBUILD.EXE to
	REBUILD.XXX.
	
	STATUS
	======
	
	Microsoft has confirmed this is to be a problem in versions 3.0, 3.0a, 3.2, 3.2a
	and 3.5 of Microsoft Mail for PC Networks. We are researching this problem and
	will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: 3.00 3.00a 3.20 3.20a 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a kbMailPCN350
	Version           : WINDOWS:3.0,3.0a,3.2,3.5
	
	=============================================================================
	

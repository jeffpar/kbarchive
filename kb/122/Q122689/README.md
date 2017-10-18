---
layout: page
title: "Q122689: PC DirSync: IMPORT.EXE Hangs When Processing Corrupt RESYNC.GLB"
permalink: kb/122/Q122689/
---

## Q122689: PC DirSync: IMPORT.EXE Hangs When Processing Corrupt RESYNC.GLB

	Article: Q122689
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Import program (IMPORT.EXE) may stop responding (hang) when it tries to
	process a RESYNC.GLB file that contains invalid entries and may report the
	following error
	
	  Error [ 081] Error Message #81 is not defined <NAME>
	  <NET>/<PO>
	
	where <NAME> is the friendly name of the group, <NET> is the network
	name and <PO> is the name of the postoffice.
	
	IMPORT.EXE may hang when it attempts to process several such errors in the
	RESYNC.GLB file.
	
	CAUSE
	=====
	
	In the GROUP.GLB file, a TID value for a group that points to an invalid entry
	in the ADMIN.NME will cause IMPORT.EXE to generate the above error, or may lock
	the computer running IMPORT.EXE, requiring the PC to be rebooted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	for PC Networks. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.20 freeze
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

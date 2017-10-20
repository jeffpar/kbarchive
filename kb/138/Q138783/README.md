---
layout: page
title: "Q138783: PC DirSync: ErrMsg: Error &#91;115&#93; Failure to Read Mail from NULL"
permalink: /kb/138/Q138783/
---

## Q138783: PC DirSync: ErrMsg: Error &#91;115&#93; Failure to Read Mail from NULL

{% raw %}

	Article: Q138783
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a requester processes updates received from the Directory Synchronization
	(Dir-Sync) server, the following error may be reported in the DIRSYNC.LOG file.
	
	  Error [115] Failure to read mail from NULL
	
	CAUSE
	=====
	
	You will get the above error if the SYSTEM.MBG file being locked open by another
	process when REQMAIN.EXE is run as part of the T3 component in Dir- Sync.
	
	
	RESOLUTION
	==========
	
	Ensure that no process locks the SYSTEM.MBG file prior to Dir-Sync taking place.
	
	Additional query words: 3.50 dirsync reqmain 115 error
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : WINDOWS:3.5
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q136487: PC DirSync: Err Msg: Fatal [161] Server Configuration Busy"
permalink: kb/136/Q136487/
---

## Q136487: PC DirSync: Err Msg: Fatal [161] Server Configuration Busy

	Article: Q136487
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0a,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0a, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error may be recorded in the DIRSYNC.LOG on a requestor
	postoffice:
	
	  Fatal 161 Server configuration busy
	
	CAUSE
	=====
	
	The above error indicates that the postoffice was once designated a server;
	however, it was later changed to a requestor. When this occurs, the SRVCONF.GLB
	and MSTTRANS.GLB files are removed, but the T2 processes that were scheduled
	still remain in the PROCESS.GLB. When Dispatch runs, it finds the NSDA -s
	process scheduled and tries to launch it. However, because this is a requestor,
	the postoffice records an error.
	
	RESOLUTION
	==========
	
	Reset the PROCESS.GLB file using DEBUG:
	
	  " debug process.glb <ENTER>
	  -rcx <ENTER>
	  xxxx
	  :200 <ENTER>
	  -w <ENTER>
	  -q <ENTER> " (without the quotation marks)
	
	Then schedule the T1 and T3 processes on this postoffice using the
	Administrator's program (ADMIN.EXE) or the DSSCHED.EXE program included in the
	"Directory Synchronization (Dir-Sync)" document. For more information about how
	to obtain this document, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q96060 PC DirSync: Directory Synchronization (Dir-Sync)
	
	MORE INFORMATION
	================
	
	If this error appears on the Dir-Sync server postoffice, make sure that
	SRVCONF.GLB is not locked open or missing.
	
	Additional query words: pcmailfaq
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a kbMailPCN350
	Version           : WINDOWS:3.0,3.0a,3.2,3.5
	
	=============================================================================
	

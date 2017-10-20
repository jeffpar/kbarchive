---
layout: page
title: "Q132731: PC DirSync: Err Msg: NSDA Terminated with Exit Code 2"
permalink: /kb/132/Q132731/
---

## Q132731: PC DirSync: Err Msg: NSDA Terminated with Exit Code 2

{% raw %}

	Article: Q132731
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the DISPATCH.LOG file, the following error may be displayed:
	
	  NSDA -xx terminated with exit code 2
	
	where xx could be RT, RR, or S.
	
	CAUSE
	=====
	
	Dispatch is unable to locate the Directory Synchronization (Dir-Sync) files.
	
	RESOLUTION
	==========
	
	Make sure that all the following Dir-Sync files are available and in the same
	directory location.
	
	  DISPATCH.EXE
	  NSDA.EXE
	  REQMAIN.EXE
	  SRVMAIN.EXE
	  IMPORT.EXE
	  REBUILD.EXE
	
	NOTE: Do not rely on a search path to launch DISPATCH.EXE, as it will not be able
	to find the rest of the Dir-Sync executables. Only run DISPATCH.EXE from its own
	directory location.
	
	MORE INFORMATION
	================
	
	When Dispatch finds a ready process to execute, it launches the appropriate NSDA
	process.
	
	  At T1, DISPATCH launches NSDA -RT
	  At T2, DISPATCH launches NSDA -S
	  At T3, DISPATCH launches NSDA -RR
	
	NSDA in turn launches other programs.
	
	  At T1, NSDA launches REQMAIN -t
	  At T2, NSDA launches SRVMAIN -r and SRVMAIN -t
	  At T3, NSDA launches REQMAIN -r, IMPORT... and REBUILD...
	
	Additional query words: 3.20 3.20a 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q124744: Command Prompt Err Msg: All Pipe Instances Are Busy"
permalink: kb/124/Q124744/
---

## Q124744: Command Prompt Err Msg: All Pipe Instances Are Busy

	Article: Q124744
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you print to a locally attached printer from Command Prompt (CMD.EXE) or a
	virtual MS-DOS machine (VDM) while Print Manager is printing, the following
	error message may appear at the command prompt:
	
	  All Pipe Instances Are Busy
	
	After this message appears, you can no longer print from any Command Prompt or
	VDM (even if they were started after the error message appeared).
	
	
	RESOLUTION
	==========
	
	To restore printing, stop and restart the Spooler service or reboot your
	computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt lpt com
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

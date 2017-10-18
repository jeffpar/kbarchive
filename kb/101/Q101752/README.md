---
layout: page
title: "Q101752: PC Ext: Dispatch Cannot Spawn Batch File Without COMMAND.COM"
permalink: kb/101/Q101752/
---

## Q101752: PC Ext: Dispatch Cannot Spawn Batch File Without COMMAND.COM

	Article: Q101752
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Dispatch program specifies a batch file with multiple executables as
	the idle process and COMMAND.COM cannot be found, only the first executable is
	performed; the others are ignored.
	
	CAUSE
	=====
	
	The Dispatch program searches for COMMAND.COM after completing the first
	executable. The program returns to Dispatch from the idle process when it fails
	to locate COMMAND.COM. This can be seen when running Dispatch > ERROR.TXT;
	the ERROR.TXT file records the error:
	
	  Invalid COMMAND.COM
	  Cannot start COMMAND, exiting
	
	On a fast computer, Dispatch can overwrite this error, thus overwriting the need
	to record it in a text file.
	
	This problem occurs only for certain versions of MS-DOS. The following table
	shows which versions cause Dispatch to fail to spawn the second batch file
	executable:
	
	  Dispatch version     MS-DOS version        Result
	  --------------------------------------------------------------
	
	    3.0                3.3, 5.0, 6.0      Success in all cases
	    3.2                3.3, 6.0           Success if COMMAND.COM
	                                            is in the current
	                                            directory of focus
	    3.2                5.0                Failure
	
	RESOLUTION
	==========
	
	Ensure that a copy of the current version of COMMAND.COM is available in the
	directory from which dispatch is executed. Also check your version of MS-DOS
	against the above table.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	for PC Networks. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.20 schdist
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

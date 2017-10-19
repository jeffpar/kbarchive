---
layout: page
title: "Q164430: Access Denied When Saving Event Log"
permalink: /kb/164/Q164430/
---

## Q164430: Access Denied When Saving Event Log

	Article: Q164430
	Product(s): Microsoft Windows NT
	Version(s): 3.51 SP5,4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51 SP5, 4.0 
	- Microsoft Windows NT Server versions 3.51 SP5, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to save the Event Log as part of the Clear All Events procedure,
	and select a network drive as the destination, you will receive an access denied
	error message.
	
	WORKAROUND
	==========
	
	Instead of saving the Event Log as part of the Clear All Events procedure, use
	Save As from the Log menu to save the Event Log, and then use Clear All Events
	to delete the events without using the save option.
	
	Alternatively, on a computer running Windows NT 3.51, replace the Eventlog.dll
	file installed by Service Pack 5 with the Eventlog.dll file from Service Pack 4
	and restart the computer to resolve the problem. This procedure can be
	accomplished by the following steps:
	
	1. In the SYSTEM32 directory, rename the Eventlog.dll file to Eventlog.sp5.
	
	2. Copy the Eventlog.dll file from Service Pack 4 to the SYSTEM32 directory.
	
	3. Shut down and restart the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 and
	4.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351search kbWinNTS351sp5 kbWinNTW351sp5
	Version           : :3.51 SP5,4.0
	Issue type        : kbbug
	
	=============================================================================
	

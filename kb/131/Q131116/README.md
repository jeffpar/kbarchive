---
layout: page
title: "Q131116: PC Ext: Err Msg: Mail Was Received...Addressed to Unknown..."
permalink: kb/131/Q131116/
---

## Q131116: PC Ext: Err Msg: Mail Was Received...Addressed to Unknown...

	Article: Q131116
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a mail message on one postoffice to a new user on another
	postoffice, the mail message is returned with the following error:
	
	  [002] Mail was received that was addressed to unknown address
	
	This error occurs when you address the mail from either the Global Address List
	(GAL) or the Network List.
	
	CAUSE
	=====
	
	The problem may be due to mail being sent to a new external user before the
	External program has a chance to poll the postoffice for address list and
	network information updates.
	
	RESOLUTION
	==========
	
	Adjust the IntervalUpdate parameter in the EXTERNAL.INI or command line:
	
	1. Wait for the IntervalUpdate period to expire and try again. The default is
	  five minutes; however, another period may be specified on the command line or
	  the EXTERNAL.INI file.
	
	2. Verify that the IntervalUpdate period is not set to zero. This will prevent
	  updates from occurring. If this parameter is necessary, then follow step 3.
	
	3. Exit and restart the External program. This will force External to reload the
	  network lists into memory.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

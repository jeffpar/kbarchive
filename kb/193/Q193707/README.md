---
layout: page
title: "Q193707: XADM: Error Message: Could not open the file named Mdbmsg.dll"
permalink: /kb/193/Q193707/
---

## Q193707: XADM: Error Message: Could not open the file named Mdbmsg.dll

	Article: Q193707
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade from Exchange Server 5.5 to Exchange Server 5.5 Service Pack 1,
	the following error message may appear:
	
	  Could not open the file named <drive>:exchsrvr\res\mdbmsg.dll
	
	  Abort Retry Fail
	
	CAUSE
	=====
	
	The Mdbmsg.dll file is being held open by some process, usually the Event
	Viewer.
	
	WORKAROUND
	==========
	
	Close the process that is holding the Mdbmsg.dll file open and click Retry. The
	Exchange 5.5 SP1 Setup will continue.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	

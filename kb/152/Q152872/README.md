---
layout: page
title: "Q152872: Err Msg: The New Item Could Not be Inserted"
permalink: /kb/152/Q152872/
---

## Q152872: Err Msg: The New Item Could Not be Inserted

	Article: Q152872
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-SEP-1999
	
	4.00
	WINDOWS
	kbusage kbbug4.00 kbfix4.00.sp2
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run Microsoft Schedule+ without a local .scd file and the network
	connection is lost, when Microsoft Schedule+ is launched again, you will not be
	able to save changes to the calendar file.
	
	The following error will be reported:
	
	  The new item could not be inserted. The schedule is being used by someone
	  else. Try again later.
	
	CAUSE
	=====
	
	When network connections are lost, your calendar file can retain stream locks.
	The Microsoft Exchange Server can maintain a stream lock until the network
	timeout is reached. The network timeout for TCP can be up to two hours.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: 4.00 stream access deny busy SP2
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2 kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0; winnt:4.0
	
	=============================================================================
	

---
layout: page
title: "Q168139: XFOR: IMS Inbound Mail Communication Problem"
permalink: kb/168/Q168139/
---

## Q168139: XFOR: IMS Inbound Mail Communication Problem

	Article: Q168139
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 24-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to log on to Microsoft Exchange Server using Microsoft Exchange
	Client, the attempt does not complete. You cannot use Mdbvu32.exe to log on
	either. You may notice that the Internet Mail Service (IMS) shuts down without
	logging any error messages.
	
	CAUSE
	=====
	
	A message with bad MIME headers and bad TNEF causes the store to go into an
	infinite rewind loop. This causes store deadlock once Windows NT Server
	terminates the bad thread.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	U.S. Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Inbound messages will not be moved to MTS-IN and outbound messages will not be
	picked up from MTS-OUT.
	
	You can see which Windows NT services are running by using the Control Panel
	Services tool. You will notice that the Internet Mail service has shut down. You
	can see that it did not log any events in the Windows NT Event Log by running
	the Windows NT Event Viewer.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

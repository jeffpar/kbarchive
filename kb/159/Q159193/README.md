---
layout: page
title: "Q159193: XCON: MTA Terminates Unexpectedly with Event ID 9405"
permalink: /kb/159/Q159193/
---

## Q159193: XCON: MTA Terminates Unexpectedly with Event ID 9405

	Article: Q159193
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Message Transfer Agent (MTA) terminates unexpectedly with
	an event similar to the following (as viewed in the Application Event Log):
	
	  Event Id: 9405
	  Source: MSExchangeMTA
	  Type: Error
	  Category: Field Engineering
	  Description:
	  An unexpected error has occurred which may cause the MTA to terminate. Error:
	  Exception c0000005 occurred at Address 0x02163E04. (16)
	
	This failure may be coincident with the addition of a new Directory Replication
	Connector, or at MTA startup.
	
	CAUSE
	=====
	
	The MTA code that generates the text file GWART0.MTA did not use a data
	structure large enough to accommodate the routing information obtained through
	directory replication.
	
	WORKAROUND
	==========
	
	There is no workaround for this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange version 4.0. This
	problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: failure crash gwart routing directory replication
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

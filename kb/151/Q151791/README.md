---
layout: page
title: "Q151791: XFOR: MSMI Stops Processing When Submitting Bad Address"
permalink: /kb/151/Q151791/
---

## Q151791: XFOR: MSMI Stops Processing When Submitting Bad Address

	Article: Q151791
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail Connector interchange (MSMI) appears to stop processing
	inbound mail; thread activity as viewed in Performance Monitor declines on all
	but thread 5 (single CPU). After a period of time the MSMI service may
	completely stop. On active mail systems, P1 files may back up in the P1
	directory of the shadow postoffice. Additionally, maximum MSMI logging level
	will repeatedly log the following sequence:
	
	
	  Event ID: 2384
	  Source: MSExchangeMSMI
	  Description: MS Mail Connector Interchange has established an MTA
	  session for uploading messages to the Exchange server.
	
	  Event ID: 10000
	  Source: MSExchangeMSMI
	  Description: ...value=:      <<< note, this could vary
	
	  Event ID: 2342
	  Source: MSExchangeMSMI
	  Description: MS Mail Connector Interchange failed to put into XOM
	  stream.
	  Return code is 0x15.
	
	  Event ID: 2553           <<< logged at level 0
	  Source: MSExchangeMSMI
	  Description: The thread in MS Mail Connector that delivers to Exchange
	  has failed writing out data to the MTA.
	
	CAUSE
	=====
	
	A message containing an invalid address is being submitted to the message
	transfer agent (MTA) by the MSMI. The MTA returns an error, so the MSMI
	refreshes the submitting thread (possibly submitting the same message again).
	This cycle can block the inbound processing thread.
	
	
	WORKAROUND
	==========
	
	No workaround exists. However, stopping and restarting the MSExchangeMTA and
	MSExchangeMSMI services typically allows some inbound processing to continue
	until the bad message is submitted once again (event log will start logging the
	above listed sequence).
	
	On multiprocessor computers, there can be additional inbound processing threads,
	therefore until all inbound threads become blocked, some inbound processing can
	continue.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

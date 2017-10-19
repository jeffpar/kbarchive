---
layout: page
title: "Q156796: XADM: Forward Rule Causes MTA to NDR When Submitting Msg to IS"
permalink: /kb/156/Q156796/
---

## Q156796: XADM: Forward Rule Causes MTA to NDR When Submitting Msg to IS

	Article: Q156796
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Microsoft Exchange Inbox rule that forwards mail from a user in Site A to a
	user in Site B may fail when the sites are not replicating but are connected
	only via an address space. After carrying out the rule, the Information Store
	will attempt to submit the message to the Message Transfer Agent (MAT) for
	delivery, and then the MTA will produce a message similar to the following in
	the application log:
	
	  An error occurred while transferring in message C=US;A= ;P=Organization;
	  L=DMSBLD-960824032321Z-45 because the directory name could not be expanded to
	  an O/R address. An X.400 API Association (XAPIA) unable-to- transfer reason
	  code and unrecognized-OR-name diagnostic code were returned. [MTA SUBMIT 9
	  73] (14)
	
	CAUSE
	=====
	
	When a message is delivered by the MTA to the Information Store, it has the MAPI
	property PR_ORIGINATOR_* stamped on it. The existing rules code does not exclude
	the PR_ORIGINATOR_* information and this caused the originator information to be
	included in the P1 envelope on an autoforwarded message. Because the originator
	does not exist in the Directory where the message is being forwarded, the MTA
	generates the NDR.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below. The rules code was
	modified to exclude the PR_ORIGINATOR_* information on an autoforwarding rule.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

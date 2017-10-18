---
layout: page
title: "Q164136: XCON: MSMail Read Receipts Missing Subject: and To: Information"
permalink: kb/164/Q164136/
---

## Q164136: XCON: MSMail Read Receipts Missing Subject: and To: Information

	Article: Q164136
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 25-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When sending a message from an MS Mail 3.x client with a Read Receipt (RR)
	request, the RR reply may come back to the client without the To and Subject
	fields.
	
	MORE INFORMATION
	================
	
	There are three instances in which this will happen.
	
	Case 1
	------
	
	Microsoft Exchange Server is connecting to another Exchange organization or third
	party messaging platform via X.400 connectors.
	
	Case 2
	------
	
	The Microsoft Exchange Server is connecting to the same Exchange organization,
	however, the X.400 site addressing between the sites is different at the ADMD
	and/or PRMD level. An example of this would be:
	
	  Site A
	     C=US;A=TELCO1;P=SiteA
	
	  Site B
	     C=US;A=TELCO2;P=SiteB
	
	The Read Receipt sent by the MS Mail client is in a MAPI format. This MAPI
	request is converted by Microsoft Exchange Server to an X400 Read Receipt
	request that does not support some of the MAPI fields for the To and Subject
	lines.
	
	This situation is by design because the MS Mail client was not designed with
	X.400 in mind.
	
	
	Case 3
	------
	
	If the Microsoft Exchange Server computers are connected with X.400 connectors
	using the Connected Sites tab, and directory replication is enabled, there is a
	chance that the MAPI information will be stripped from the message during a
	conversion. The Microsoft Exchange Server computers should pass the information
	along, however, if more than two hops are required, an X400 conversion may take
	place.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 4.0 and 5.0 of
	Microsoft Exchange. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	
	MORE INFORMATION
	================
	
	Setting up Site Connectors in place of the X.400 connectors will fix this
	problem and is recommended if the existing topology warrants such a change.
	
	Additional query words: rr reply mail x400 p2 tnef
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

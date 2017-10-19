---
layout: page
title: "Q177867: XCON: NDR Not Received When Sending to Bad PAB Entry"
permalink: /kb/177/Q177867/
---

## Q177867: XCON: NDR Not Received When Sending to Bad PAB Entry

	Article: Q177867
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Microsoft Exchange user sends a message to a recipient in his or her
	Personal Address Book (PAB), the user does not receive a non-delivery report
	(NDR) if the PAB entry is invalid. This problem only occurs in the following
	circumstance:
	
	1. The message has been addressed to an Exchange user in another Microsoft
	  Exchange site whose address is in the originator's PAB. The PAB entry has
	  become invalid either because they have been deleted from the system or their
	  original site no longer exists in the Microsoft Exchange organization.
	
	2. The connector that routes this message is a X.400 Connector configured as
	  1984.
	
	3. The connector does not have any Connected Sites information.
	
	The message to the invalid PAB entry can be tracked by setting the X.400 Service
	category of the MSExchangeMTA to Maximum logging in the Exchange Administrator
	program. By looking for the 271 and 272 events in the Windows NT Event Viewer
	Application log, you see that the message is sent to the destination Exchange
	message transfer agent (MTA) successfully, a 271 event, then the resulting NDR
	from this system is received, a 272 event, and finally the MTA passes this on to
	the Exchange information store, another 271 event. However, the originator of
	the message does not receive the NDR.
	
	If you turn on maximum logging for the information store, specifically:
	
	  MSExchangeISPriv/Transport Sending & Transport Delivering
	  MSExchangeISPriv/Transport/General/<all categories>
	
	you see the following error in the Event Log:
	
	  Event ID : 2026
	  Source : MS Exchange Private
	  Type : Information
	  Category : Transport
	  Description : The delivery of a report failed due to error 00000BB8.
	  The report has been deleted.
	
	CAUSE
	=====
	
	The MTA was not correctly handling Distinguished Name (DN) addresses. The MTA
	now checks these before sending and will NDR the message back to the originator
	with the following diagnostic information:
	
	  The recipient could not be transferred because it could not be
	  downgraded.
	
	WORKAROUND
	==========
	
	The workaround for this is to use versions of the MTA greater than or equal to
	the following:
	
	  Exchange 4.0 : 996.56
	  Exchange 5.0 : 1459.72
	  Exchange 5.5 : 2110.00
	
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
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: DN NDR 84 GWART X.500 one-off
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0 5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

---
layout: page
title: "Q177862: XCON: Messages Fail Downgrade, Bounce Between X.400 Connectors"
permalink: /kb/177/Q177862/
---

## Q177862: XCON: Messages Fail Downgrade, Bounce Between X.400 Connectors

{% raw %}

	Article: Q177862
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
	
	In some Microsoft Exchange topologies, there may be cases where a message is
	constantly re-routed. The configuration where this occurs is as follows:
	
	1. There must be at least two X.400 Connectors that the message can be routed
	  to. Typically each connector will have the route c=* in the Address Space tab
	  of their Properties page in the Microsoft Exchange Administrator program.
	
	2. These connectors do not have any Connected Sites information.
	
	3. These connectors are configured as 1984.
	
	4. The message has been addressed to an Exchange user in another site whose
	  address is in another user's personal address book (PAB). The PAB entry has
	  become invalid either because they have been deleted from the system or their
	  original Exchange site no longer exists in the organization. If you use the
	  Message Tracking feature in the Exchange Administrator program, this shows up
	  as a Distinguished Name (DN); in other words:
	
	     /O=<org>/OU=<site>/CN=Recipients/CN=<DN of recipient>.
	
	The tracking log shows that the failing message is constantly re-routed, and the
	Windows NT Event Log shows the following events every time a re- route occurs:
	
	  Event ID: 175
	  Source: MSExchangeMTA
	  Category: X.400 Service
	  Description:
	     (MTA DISP:RESULT(23) Proc 147) 11-17-97 01:41:11pm
	     Transfer-Out failure, failed to downgrade per-rcpt-info
	     X.400 reason code     unable-to-transfer
	     X.400 diagnostic code unable-to-downgrade
	     MTS Identifier C=US;A= ;P=MICROSOFT;L=JUNWIN03-971117134110Z-4
	
	  Event ID : 287
	  Source : MSEXchangeMTA
	  Category : X.400 Service
	  Description:
	     (MTA DISP:RESULT(22) Proc 436) 11-17-97 01:41:11pm
	     Successful rerouting
	     MTS Identifier    C=US;A= ;P=MICROSOFT;L=JUNWIN03-971117134110Z-4
	     New Connector     /O=MICROSOFT/OU=MILTON
	KEYNES/CN=CONFIGURATION/CN=CONNECTIONS/CN=X400 84 TCP TO MARGATE
	     New Target entity /O=MICROSOFT/OU=MILTON
	KEYNES/CN=CONFIGURATION/CN=CONNECTIONS/CN=X400 84 TCP TO MARGATE
	     Old Connector
	     Old Target entity /O=MICROSOFT/OU=MILTON
	KEYNES/CN=CONFIGURATION/CN=CONNECTIONS/CN=X400 84 TCP TO MARGATE 2
	
	The sender of the message will eventually receive a non-delivery report (NDR)
	containing the following diagnostic information:
	
	  Either the size of this message exceeds your maximum allowed message
	  size or you have exceeded the storage limit on your mailbox.
	
	CAUSE
	=====
	
	The message is being re-routed to the other connector, and this looping
	continues until the diagnostic information on the message eventually grows too
	big and the message is NDR'ed. The message is routed to the group of connectors
	that can send the message, but in this case only the 1984 connectors can do
	this, and they do not have Connected Sites information. The Microsoft Exchange
	message transfer agent (MTA) cannot downgrade the message to be sent and should
	NDR it with:
	
	  The recipient could not be transferred because it could not be
	  downgraded.
	
	WORKAROUND
	==========
	
	The workaround for this is to use versions of the MTA greater than or equal to
	the following:
	
	  Exchange 4.0 : 996.56 - or use Exchange 4.0 SP5 Exchange 5.0 : 1459.72 - or
	  use Exchange 5.0 SP2 Exchange 5.5 : 2110.00 - or use Exchange 5.5 SP1
	
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
	
	Additional query words: DN NDR 84 GWART X.500 BOUNCE
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0 5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q154108: XADM: Dead Letter Functionality with Exchange Server 4.0"
permalink: /kb/154/Q154108/
---

## Q154108: XADM: Dead Letter Functionality with Exchange Server 4.0

	Article: Q154108
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Dead Letter functionality is not included with Exchange server 4.0. This existed
	on the release candidate builds but it was removed from the final product. A
	server that has been upgraded through the release builds can exhibit some
	problems when sending mail to invalid addresses. For example, when sending a
	message to an invalid MS Mail address chosen from the personal address book, the
	message may be sent to the Administrator's Mailbox defined in the MS Mail
	Connector Properties. The sender does not receive a Non-Delivery Report
	indicating address unknown. The recipient does not receive the message.
	
	CAUSE
	=====
	
	This occurs if the Exchange Server has been upgraded from Release Candidate 1 to
	Release Candidate 2 to Exchange 4.0. In Release Candidate 1, an Object Attribute
	called DOMAIN-DEF-ALT-RECIP was used to define a Dead Letter recipient. This
	attribute was deleted from Release Candidate 2; however, the upgrading process
	may not have deleted this attribute.
	
	RESOLUTION
	==========
	
	1. Launch the Exchange Administrator in raw mode by adding a forward slash and
	  an r (/r) to the end of the command line.
	
	2. Highlight the Configuration Object and select MTA Site Configuration.
	
	3. On the File menu, select Raw Properties.
	
	4. Locate the attribute DOMAIN-DEF-ALT-RECIP and delete the entry in the Edit
	  Value field.
	
	5. Press the Set button and click OK to exit the Raw Properties.
	
	6. Using the Services tool in Control Panel, stop and restart the Microsoft
	  Exchange Message Transfer Agent service.
	
	MORE INFORMATION
	================
	
	The Dead Letter recipient functionality provided a recipient for messages that
	could not be delivered to the intended recipient. This functionality was deleted
	in the Release Candidate 2.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152446 Dead Letter Recipient Button is Missing
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

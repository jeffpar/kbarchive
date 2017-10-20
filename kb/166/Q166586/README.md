---
layout: page
title: "Q166586: XCON: Incoming Attachments Lost from Wang X.400 Connector"
permalink: /kb/166/Q166586/
---

## Q166586: XCON: Incoming Attachments Lost from Wang X.400 Connector

{% raw %}

	Article: Q166586
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0 SP1
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a message with attachments over a Wang X.400 Connector,
	attachments are lost. You can open the mail message using any client, but no
	attachments are present. Wang sends a Winmail.dat file with the attachment. The
	Winmail.dat file and attachments are seen as bilaterally- defined attributes in
	the P2 portion of an ASN.1 parsed message. An example is shown below:
	
	  P2_Bilat_defined_prim [...attachment data here...]
	  P2_Bilat_defined_prim [...IPM.Microsoft Mail.Note....]
	
	The first line includes the attachment information and the second line contains
	the Winmail.dat attachment. The Winmail.dat attachment holds properties of the
	attachment such as file name and it's exact position in the message. These
	properties are described using Transport Neutral Encapsulation Format, or TNEF.
	
	CAUSE
	=====
	
	The incoming Winmail.dat file from Wang does not include a display name
	property, PR_DISPLAY_NAME, as part of the description for the attachment.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0 SP1. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2 kbExchange500SP1
	Version           : winnt:4.0,5.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

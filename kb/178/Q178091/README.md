---
layout: page
title: "Q178091: XFOR: Message from Client Not Homed on Server Crashes IMC"
permalink: /kb/178/Q178091/
---

## Q178091: XFOR: Message from Client Not Homed on Server Crashes IMC

{% raw %}

	Article: Q178091
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	E-mail sent through the Internet Mail Service by a user with no valid
	credentials on the Exchange Server computer causes the Internet Mail Service to
	crash.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	If the "Clients can only submit if homed on this server" option is selected on
	the Connections page of the Internet Mail Service properties, authentication of
	inbound connections is required. However, you can bypass this by using a
	per-host setting that allows a host to bypass the authentication. This may be
	set in the "Accept Connections" dialog on the Connections page.
	
	Mail sent from the exempt host that fails the "homed on this server" check will
	result in an Non-delivery report (NDR) to the administrator, which will cause a
	crash because there is no authentication information.
	
	The following event will be logged on the Exchange Server computer:
	
	  Event 4037
	  MSExchangeIMC
	  Error
	  An exception has occurred which was handled internally by the Internet
	  Mail Service. This may have resulted in a message not being delivered.
	  Code: 0xc0000005 Flags: 0x00000000 Address: 0x00462f42
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

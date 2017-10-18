---
layout: page
title: "Q193782: XADM: Internet Mail Service Stops with Event IDs 4182, 12800"
permalink: kb/193/Q193782/
---

## Q193782: XADM: Internet Mail Service Stops with Event IDs 4182, 12800

	Article: Q193782
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1
	Operating System(s): 
	Keyword(s): exc55sp2fix exc55 exc55sp1
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the Internet Mail Service receives an inbound Internet message that
	contains a corrupted encapsulation address, it generates the following error
	messages in the event log and shuts down:
	
	  Event: 4182
	  Source: MSExchangeIMC
	  Type: Error
	  Category: Internal Processing
	  Description: A serious error has occurred while trying to send mail
	  into the Exchange Information Store. The Internet Mail Service is being
	  shut down.
	
	  Event: 12800
	  Source: MSExchangeIS
	  Type: Error
	  Category: Content Engine
	  Description: Message processing failed because there is not enough
	  available memory (8007000E-F20000FF).
	
	CAUSE
	=====
	
	The Internet Mail Service submits a message to the information store, which in
	turn parses the addresses to get the corresponding display names. It detects the
	corrupted address and generates MAPI_E_CALL_FAILED, but later this error is
	overwritten as MAPI_E_NOT_ENOUGH_MEMORY.
	
	The information store logs an Event ID: 12800, and the error is returned to the
	Internet Mail Service. The Internet Mail Service detects this as a serious error
	and logs an Event ID: 4182, shutting itself down.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Information Store
	
	  File Name    Version
	  -----------------------
	  Gapi32.dll   5.5.2417.0
	  Mdbmsg.dll   5.5.2417.0
	  Store.exe    5.5.2417.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	MORE INFORMATION
	================
	
	When a message containing one-off addresses goes through several connectors, it
	is encapsulated to its native format. For example, when the SMTP address
	someone@microsoft.com goes through an X.400 Connector, it is encapsulated as:
	
	  IMCEAEX-_O=Organization_OU=Site_CN=ContainerName_CN=
	  someone@microsoft.com
	
	NOTE: The above address is one string; it has been wrapped for readability.
	
	Further, the container name is encapsulated as follows: Any non- alphanumeric
	characters (with the exception of "=", "-", and "/") are encoded as "+xx"
	(without quotation marks), where xx is hexadecimal digit of that character. So
	":" is encapsulated as +3b, where 3b is the ASCII representation of ":".
	
	The fix is to correct the code that overwrites the error.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix exc55 exc55sp1 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5,5.5 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

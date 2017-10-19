---
layout: page
title: "Q232279: XFOR: Internet Mail Service Stops with Event IDs 4102 and 4182"
permalink: /kb/232/Q232279/
---

## Q232279: XFOR: Internet Mail Service Stops with Event IDs 4102 and 4182

	Article: Q232279
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): EXC55SP3Fix
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Internet Mail Service may shut down when receiving a malformed message and
	the following Event IDs will be logged in the Windows NT Server event log:
	
	  Event ID: 4182
	  Source: MSExchangeIMC
	  Type: Error
	  Category: Internal Processing
	  Description: An error was returned from the messaging software the Internet
	  Mail Service uses to process messages on the Microsoft Exchange Server. As a
	  result, the message in spool file HBWK2Q2P will be retried when the server is
	  restarted.
	
	  Event ID: 4102
	  Source: MSExchangeIMC
	  Type: Error
	  Category: Internal Processing
	  Description: A serious error has occurred while trying to send mail into the
	  Exchange Information Store. The Internet Mail Service is being shut down.
	
	When trying to restart the Internet Mail Service, the following error message is
	displayed:
	
	  INTERNAL WINDOWS NT ERROR 2140.
	
	To restart the service, the offending message must be deleted manually from the
	Exchsrvr\Imcdata directory. The message that must be deleted is the one listed
	in the Event ID 4182, HBWK2Q2P in this example.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Gapi32.dll | 5.5.2619.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2619.0 | 
	+-------------------------+
	| Netif.dll  | 5.5.2619.0 | 
	+-------------------------+
	| Store.exe  | 5.5.2619.0 | 
	+-------------------------+
	
	Component: Directory
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Dsamain.exe | 5.5.2600.0 | 
	+--------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: IMC IMS hang stop crash malfunction invalid corrupt Imail
	
	======================================================================
	Keywords          : EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

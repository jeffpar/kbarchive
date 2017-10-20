---
layout: page
title: "Q163020: XFOR: MSMail Connector NDR Message with Event ID 2117"
permalink: /kb/163/Q163020/
---

## Q163020: XFOR: MSMail Connector NDR Message with Event ID 2117

{% raw %}

	Article: Q163020
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following non-delivery report (NDR) from the system
	administrator when you send a message to a Microsoft Mail 3.x recipient:
	
	  [008] Failure delivering user mail due to mailbag contention.
	  Mail item was not delivered to:
	
	When you look at the Windows NT Event Viewer, the following Event IDs are present
	in the Application Log:
	
	  Event 2010     MSExchangeMSMI    Debug Data
	  Disk error encountered while inserting data into 00000004.MBG from
	  00004950.
	
	  Event 2117     MSExchangeMSMI    Warning
	
	  Non delivery report generated.
	
	  From: MICROSOFT/NETPO/USER
	  Subject: Message from User
	
	  [008] Failure delivering user mail due to mailbag contention.
	  Mail item was not delivered to:
	
	CAUSE
	=====
	
	This condition usually means that the .mbg (mailbag) file on the Exchange
	Connector postoffice is over the 4096 record limit.
	
	There is a 4096 record limit built into the .mbg file in Microsoft Mail and also
	on the Exchange Connector postoffice.
	
	The Microsoft Exchange PC-MTA service may stop and the Microsoft Mail Connector
	Interchange service (MSMI) continues to move mail to the .mbg file for the
	downstream Microsoft Mail postoffice. Once this reaches 4096 messages, the MSMI
	returns an NDR for all new messages.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Check to make sure the PC-MTA service is running on the Exchange Server
	  computer.
	
	Additional query words: 4k 400 bytes msmail
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

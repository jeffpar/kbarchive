---
layout: page
title: "Q175447: XFOR: Looping Message from Microsoft Mail to Inet List Server"
permalink: /kb/175/Q175447/
---

## Q175447: XFOR: Looping Message from Microsoft Mail to Inet List Server

{% raw %}

	Article: Q175447
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article assumes that the Microsoft Exchange Internet Mail Connector, (IMC),
	or Internet Mail Service (IMS) and the Microsoft Mail connector are both
	installed and working correctly. This article also assumes that the IMC or IMS
	is providing Internet connectivity for Microsoft Mail for PC Networks users via
	Microsoft Exchange Server's Microsoft Mail connector.
	
	When Microsoft Mail users send mail to a list server on the Internet, there is a
	possibility that a looping message can be generated.
	
	MORE INFORMATION
	================
	
	The following configuration results in the possibility of generating a looping
	message:
	
	  A Microsoft Exchange Server email environment with an IMC or IMS,
	  and a Microsoft Mail connector installed and running.
	
	  The Microsoft Mail connector provides connectivity for Microsoft
	  Mail users to send mail to the Internet.
	
	In this example, a user on Microsoft Mail sends a subscription request to the
	list server. The list server sends back an acknowledgement that the user was
	added to the list. However, if while the message is being routed back to the
	Microsoft Mail user's mailbox, the Microsoft Exchange PCMTAs (or MSMail MTAs)
	encounter a problem delivering the mail to a Microsoft Mail 3.x Postoffice (PO),
	this LISTSERVE acknowledgement message will be sent back to the list server from
	POSTMASTER (PCMTA or MSMail MTA) with a Non-Delivery Report (NDR).
	
	Causes of a PCMTA or MSMail MTA NDRing a message include:
	
	- Mailbag contention on the INQUEUE3, outbound PO queue, or the user's KEY and
	  MBG
	
	- Either the INQUEUE3.KEY, <outbound PO queue>.KEY, or
	  <user-id>.KEY file is full (already containing pointers to 4096 active
	  messages).
	
	This is expected behavior from Microsoft Mail and from the Microsoft Exchange
	PCMTA service. If the message is not delivered to the recipient, the message is
	NDR'd.
	
	The problem occurs when the NDR message gets delivered to the list server. The
	message is now from Microsoft Mail's POSTMASTER to the list server. When the
	list server receives this email, it is parsed and interpreted as malformed
	subscription request instead of an NDR. Since the message does not contain the
	proper syntax for list server "subscription", the list server responds to the
	email with a new message, typically including instructions and syntax for the
	proper way to join a list. This response is now destined for the POSTMASTER
	(PCMTA or Microsoft Mail MTA) account at the PO where the mailbag contention
	occurred, not to the Microsoft Mail user. So the mail will travel into Microsoft
	Exchange via the IMC or IMS, get routed to the Microsoft Mail connector (where
	the address is translated to valid Microsoft Mail
	<10>/<10>/POSTMASTER syntax) and will route to the POSTMASTER's PO.
	Unless there has been a POSTMASTER mailbox created on this Microsoft Mail PO
	(and assuming this mailbox is not full, in other words, less than 4096 messages
	pending), the message will again NDR because there is no POSTMASTER account on
	the Microsoft Mail PO.
	
	This loop can be generated every time there is failure to deliver mail from a
	list server to a Microsoft Mail user. Mailbag contention, and retry timeouts can
	occur in Microsoft Mail environments, and this can result in the loop.
	
	Detection:
	
	If a loop is suspected, enabling maximum logging on the MSMI service and
	performing a "View, Find..." on the application event log specifying the
	following criteria may aid in tracking down the problem Microsoft Mail file, and
	the source of the loop on the Internet:
	
	  Source: MSExchangeMSMI
	  Description: POSTMASTER
	
	Considerable recurrence of the following events with the same details may
	indicate the loop endpoints:
	
	  2444
	  Source: MSExchangeMSMI
	  Category: Routing
	  Description:
	
	     Message ID <xxxxxxxx> processed from INQUEUE
	
	     From: [encapsulated X.400<listserv subscription alias>@<domain>]
	     To: <network name>/<po name>/POSTMASTER
	
	  2448
	  Source: MSExchangeMSMI
	  Category: Sent
	  Description:
	
	     Message ID
	     <C=xx;A= ;P=xxxx;l=xxxx>
	     received from Exchange
	
	     Message ID <xxxxxxxx> created in MS Mail
	
	     From: [encapsulated X.400<listserv subscription alias>@<domain>]
	     To: <network name>/<po name>/POSTMASTER
	
	  10000
	  Source: MSExchangeMSMI
	  Category: Debug Data
	  Description
	
	     Recipient is MS:<network name>/<po name>/POSTMASTER
	
	Once the Internet email domain that is the source of the loop has been
	identified, the IMC, IMS, or firewall host can be configured to refuse mail from
	the specific host until the Microsoft Mail file problem is remedied. For the
	Microsoft Exchange Server, version 5.0 IMS, the IMS Properties, Connections,
	Accept or Reject by Host, can be configured to reject connections based on IP
	address. If using an intermediary host between Microsoft Exchange Server and the
	Internet, consult that host's documentation for information regarding forced
	connection rejection.
	
	1. Create a POSTMASTER account on every Microsoft Mail post office so that the
	  message can be delivered. Maintain these mailboxes to ensure they don't fill
	  up.
	
	2. Create a Microsoft Exchange mailbox to receive the mail. The mailbox should
	  have a Microsoft Mail proxy address created for *each* Microsoft Mail PO. An
	  example is NETWORK/PO1/POSTMASTER. Adding this for each PO as a proxy on the
	  Microsoft Exchange mailbox will enable the list server's mail to be
	  delivered.
	
	NOTE: The MSPROXY.DLL will not generate a POSTMASTER proxy if you create a
	Microsoft Exchange mailbox called POSTMASTER. Instead, it will generate the
	Microsoft Mail address of NETWORK/PO/POSTMAST0.
	
	Additional query words: NDR error codepage code page
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

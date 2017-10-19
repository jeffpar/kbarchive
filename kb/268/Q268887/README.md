---
layout: page
title: "Q268887: XADM: Delivery Receipts Contain &quot;Unknown&quot; for Detail"
permalink: /kb/268/Q268887/
---

## Q268887: XADM: Delivery Receipts Contain &quot;Unknown&quot; for Detail

	Article: Q268887
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbExchange kbExchange500 kbExchange550 exc4 exc5 exc55
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Exchange Server computer may return a delivery receipt to the message sender
	that contains the string "Unknown" in the To, Subject, and Sent lines.
	
	CAUSE
	=====
	
	This problem can occur because of a limitation in X.400 delivery receipt
	functionality. A feature to improve X.400 delivery receipt is included in
	Exchange Server, but if a message path follows certain architectures, this
	limitation is unavoidable. Exchange Server also attempts to resolve the delivery
	receipt message fields from information in the message ID. The message transfer
	agent (MTA) attempts to match the message ID to a message in the local Exchange
	Server store. If the message is not available in the local Exchange Server
	store, the message generates the "Unknown" string.
	
	WORKAROUND
	==========
	
	To work around this problem, use only X.400 site connectors and Exchange Server
	computers in an organization, or use only Internet Mail Service or remote
	procedure call (RPC) site connectors to reduce or eliminate the architectures
	that lead to this problem. If you create a replication connector, you can also
	alleviate the problem in some configurations.
	
	MORE INFORMATION
	================
	
	The X.400 specification generates reports based on the information in the
	message envelope. The envelope may not contain the To, Subject, or Sent
	information in the delivery report, and in the case of a delivery receipt,
	Exchange Server does not use the envelope to fill the fields. Therefore, this
	information is not returned by the X.400 system that receives the message.
	
	To overcome this limitation of the X.400 specification, Exchange Server uses the
	Content Correlator attribute. This attribute is returned in the envelope to the
	originating system, which then attempts to map this by using the MTS-ID to the
	original message, which allows the receiving system to extract the To, Subject,
	and Sent information from the original message.
	
	This does not work if the original message no longer exists on the originating
	system.
	
	Certain architectures also prohibit this system from working. The Exchange Server
	Internet Mail Service does not preserve this attribute, and so any architecture
	that crosses both an X.400 connector and an Internet Mail Service connector does
	not provide fully populated delivery receipt fields.
	
	Even if this attribute is preserved, the attribute relies on a mechanism at the
	receiving end to match the Content Correlator attribute and MTS-ID that is
	similar to the current Exchange Server X.400 mechanism, and as such is Exchange
	Server-specific and does not work on any non-Exchange Server mail system.
	
	Ideally, any Internet Mail Service in the message path would be able to retrieve
	and translate the original message information when the Internet Mail Service
	receives mail from an X.400 system. However, this is not feasible when using any
	variation on this mechanism because the relay server almost certainly does not
	contain a copy of the original message.
	
	For additional information about this feature implementation, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q147545 XADM: Delivery Receipt Has Unknown for To, Subject, and Sent
	
	
	
	Additional query words: DR Delivery Receipt Unknown IMS foreign cc
	
	======================================================================
	Keywords          : kbExchange kbExchange500 kbExchange550 exc4 exc5 exc55 
	Component         : IMail IMC IMS SMTP TransportCore
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

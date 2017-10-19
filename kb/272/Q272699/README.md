---
layout: page
title: "Q272699: XCON: Consequences of Non-Standard Class Message on X.400 Msgs."
permalink: /kb/272/Q272699/
---

## Q272699: XCON: Consequences of Non-Standard Class Message on X.400 Msgs.

	Article: Q272699
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 21-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the consequences of when you customize the Message Class
	with a script. The Exchange Server computer receives X.400 messages that request
	a read receipt from a foreign X.400 message transfer agent (MTA). These messages
	are sent to a mailbox where a script (run by the Exchange Server Event Scripting
	service) changes the incoming message class from IPM.NOTE to IPM.NOTE.XXXX.
	
	When the recipient reads the incoming message, the read receipt that is generated
	is not an X.400 IPN as expected but an X.400 IPM. The user that sends an e-mail
	message with a read receipt from this foreign MTA then receives a normal message
	and not a standard read receipt.
	
	MORE INFORMATION
	================
	
	Avoid altering the message class, PR_MESSAGE_CLASS MAPI property; it is a very
	sensitive property.
	
	MSDN provides instructions for changing the message class (and other properties),
	but all consequences must be checked because it means the usual behavior is
	modified internally. For example:
	
	- If the original message is sent locally, there is no problem when reading it
	  with the message class modified, as the originator receives a MAPI message.
	  All tasks are performed in the information store, so there is no X.400
	  translation done with the MTA.
	
	- If the original message is sent from another Exchange Server computer through
	  an X.400 connector, reading it with the message class modified generates an
	  IPM message instead of an IPN message. This IPM has the information "Read" in
	  the Subject field and "REPORT.IPM.NOTE.XXXX.IPNRN" in the body part.
	  Translation from MDBEF to X.400 in the XAPI part of the MTA causes this
	  result.
	
	- If the original message is sent from a foreign X.400 MTA, reading it with the
	  message class modified generates an IPM instead of an IPN.
	  This IPM has the information "Read" in the Subject field but no body part,
	  which is unusual but X.400-compliant (zero-length SEQUENCE OF--that is, no
	  body--is strictly legal).
	  Translation from MDBEF to X.400 in XAPI part of the MTA causes this result.
	
	- Many other cases occur with Reply, Forward and other actions on the modified
	  message. If the recipient reads the message before the script changes the
	  PR_MESSAGE_CLASS, we have a correct X.400 read receipt, and so on.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

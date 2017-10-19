---
layout: page
title: "Q181921: XADM: Sending Encrypted Mail to Users with Different Encryption"
permalink: /kb/181/Q181921/
---

## Q181921: XADM: Sending Encrypted Mail to Users with Different Encryption

	Article: Q181921
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using the Microsoft Exchange Key Management Server, users have the ability to
	encrypt messages. The North American version of the Exchange client can encrypt
	messages using a 64-bit encryption key. This level of encryption cannot be
	exported out of the United States and Canada; therefore, international Exchange
	clients are only enabled with 40-bit encryption.
	
	This article describes what happens when a user with 64-bit encryption tries to
	send a messages to other users, some of whom have 64-bit encryption and others
	have 40-bit encryption.
	
	MORE INFORMATION
	================
	
	The level of encryption that a mailbox is enabled with is stored in the Exchange
	directory. When you send a message to a user, it is possible to determine what
	level of encryption that user has.
	
	When a user with 64-bit encryption sends an encrypted message to a mixed group of
	users with 40-bit encryption and 64-bit encryption, Exchange uses the strongest
	encryption level that all recipients have in common. In this case, it selects
	40-bit encryption. A 64-bit client can read a message encrypted with a 40-bit
	key.
	
	If any one of the recipients is not security-enabled, then the Exchange client
	displays a message asking the sender either to send the message without
	encryption or to remove the users who are not security-enabled from the list of
	recipients.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

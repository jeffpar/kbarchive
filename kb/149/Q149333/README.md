---
layout: page
title: "Q149333: XADM: The Basics of Advanced Security"
permalink: /kb/149/Q149333/
---

## Q149333: XADM: The Basics of Advanced Security

{% raw %}

	Article: Q149333
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If Advanced Security is enabled on a user's mailbox, they can enable the
	Advanced Security features of Microsoft Exchange by using either the Microsoft
	Exchange Administrator program or a Microsoft Exchange client. To do this, they
	will need to check the Message Encryption and Digital Signatures options
	available by choosing Tools, Options, and the Security tab.
	
	If these features are enabled and another user also has these features enabled,
	messages sent between those users are encrypted and they cannot be "sniffed" on
	the network. These features prevents potential security breaches such as reading
	or modifying the messages on the network. However, the message cannot be sent in
	encrypted format if the recipient has not enabled the Advanced Security
	features.
	
	Once the encrypted message arrives at the recipient's mailbox, the message can be
	opened by typing in a password. The message is then decrypted and appears as a
	normal message to the recipient. The message can be modified and forwarded to
	other users. As long as the message is sent to users that have the Advanced
	Security features turned on, the message will be encrypted again on the network
	each time it is sent.
	
	MORE INFORMATION
	================
	
	Advanced Security features can be enabled by installing the Microsoft Exchange
	Key Management server from the Microsoft Exchange Server CD in the
	SETUP\<platform>\EXCHKM directory. Once installed, a new service will be
	available in Control Panel-Services. This is the Microsoft Exchange Key Manager
	service.
	
	The following processes must occur for these features to work:
	
	1. The Key Manager service must be running on a single server in the
	  organization.
	
	2. Each individual mailbox must have the Advanced Security features enabled
	  using the Microsoft Exchange Administrator program.
	
	3. The client must receive a special token from the administrator so they can
	  enable the Advanced Security features for their mailbox (a local.EPF file is
	  created containing the security information of the client).
	
	4. The client must turn on Message Encryption and Digital Signature features in
	  the Microsoft Exchange Client by choosing the Tools menu, Options, and the
	  Security tab.
	
	There are three different encryption formats are available in the North American
	version of Microsoft Exchange:
	
	- CAST-64
	
	- DES
	
	- CAST-40
	
	Only CAST-40 is available for localized versions of Microsoft Exchange.
	
	If there is a potential breach of security occurring with the Microsoft Exchange
	messaging system, the format can be changed at any point.
	
	There will be no limitations on what can be done to the messages once they are
	opened.
	
	The following are the changes noticeable by the clients:
	
	1. If the message sender has Advanced Security enabled and is sending to other
	  users with the features enabled, the sender will be prompted for a password
	  when sending the message.
	
	2. If message recipients have the Advanced Security features disabled, the
	  sender has to send the message unencrypted or Cancel the message.
	
	3. If the message sender has Advanced Security enabled and sends a message to
	  some users with Advanced Security enabled and other users with this feature
	  disabled, the sender has three options:
	
	   - The sender can remove the recipients without the Advanced Security
	     features enabled from the list.
	
	   - Send the message unencrypted to all recipients on the list.
	
	   - Cancel sending the message.
	
	4. If the message sender has the Advanced Security features disabled, messages
	  are sent unencrypted. The recipient of the message can open the message,
	  whether Advanced Security is enabled or disabled.
	
	REFERENCES
	==========
	
	Microsoft Exchange Administrator's Guide, Microsoft Exchange Concepts and
	Planning Guide (Chapter 4).
	
	Additional query words: KM Server
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}

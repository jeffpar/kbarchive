---
layout: page
title: "Q274241: XADM: Digitally Signed Messages  Received Without Signature"
permalink: /kb/274/Q274241/
---

## Q274241: XADM: Digitally Signed Messages  Received Without Signature

	Article: Q274241
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message that has a digital signature, the message may be
	received without the signature.
	
	CAUSE
	=====
	
	In Exchange Server 5.5, the Internet Mail Service does not deliver signed
	messages by default. Messages that are sent with a digital signature are
	modified by the Internet Mail Service and delivered without the signature.
	
	RESOLUTION
	==========
	
	To resolve this issue, change the Internet Mail Service to allow S/MIME
	signatures:
	
	1. Start the Exchange Server Administrator program, and go to the Connectors
	  container.
	
	2. Double-click Internet Mail Service.
	
	3. Click the Internet Mail tab.
	
	4. Click to select the "Clients support S/MIME signatures" check box.
	
	5. Restart the Internet Mail Service.
	
	CLIENT-SIDE WORKAROUND
	
	If you are sending messages from a client computer, you can encode the signature
	and message to prevent the signature from being removed:
	
	1. Start Outlook Express, and on the Tools menu, click Options.
	
	2. Click the Security tab and click the Advanced button.
	
	3. Click to select the "Encode message before signing (opaque signing)" check
	  box.
	
	When you use this option to encode the message, the process is similar to
	encrypting the message. However, this option does not require the receiver to
	have a certificate to decode the message. An S/MIME-aware client can decode and
	view the message. Non-S/MIME-aware clients receive the message in an attached
	file, Smime.p7m.
	
	MORE INFORMATION
	================
	
	The mail icon for a message that is sent with a digital signature is marked with
	a red ribbon. If you save a copy of the message in the Sent Items folder, you
	can check if the message that was sent has a digital signature by checking to
	see whether the message is marked with a red ribbon.
	
	The following information about the "Clients support S/MIME signatures" option
	can be found in the Exchange Administrator program Online Help:
	
	  Enable if your clients support S/MIME signatures (MIME multipart/singed).
	  Disable to convert messages with S/MIME signatures (MIME signed messages) to
	  MIME unsigned messages. This allows recipients using e-mail client programs
	  that don't support S/MIME to view signed messages.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

---
layout: page
title: "Q153039: XFOR: Non-TNEF Attachments Inbound From IMC at Top of Message"
permalink: /kb/153/Q153039/
---

## Q153039: XFOR: Non-TNEF Attachments Inbound From IMC at Top of Message

{% raw %}

	Article: Q153039
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Attachments to MIME encoded mail messages that arrive to a Microsoft Exchange
	recipient from the Microsoft Exchange Internet Mail Connector (IMC) might appear
	at the top of the message body. This can occur for any message originating from
	a non-MAPI compliant email client.
	
	MORE INFORMATION
	================
	
	MIME RFCs 1521 and 1522 do not include a recommendation for representing where
	or how attachments will be presented to the user within client user interfaces
	(email client software). This decision is left to the discretion of the client
	software developer.
	
	The experimental RFC1826 advances an enhancement to MIME that includes, among
	other things, the ability to position attachments or representations of
	attachments (tokens, icons, pointers, and so forth) in a particular location
	within the message body.
	
	Microsoft's current implementation:
	
	When receiving non-MAPI client originated messages with attachments, the
	Microsoft Mail 3.x Windows client and Microsoft Exchange client present all
	attachments as icons at the top of the mail message, with the most recent
	attachment first and, in the case of a multiply forwarded message [with
	forwarders adding additional attachments], subsequent attachments following
	chronologically.
	
	Sending messages from MAPI compliant email clients to MAPI clients can exploit
	proprietary methods (TNEF) that enable the attachment to be presented as an icon
	within the message body, positioned wherever the sender desires. This is the
	default action for handling attachments when composing messages with the
	Microsoft Mail or Microsoft Exchange clients.
	
	This action is not configurable from within the Microsoft Mail 3.x client, but is
	configurable when using Microsoft Exchange in two different ways:
	
	1. From within the Microsoft Exchange client.
	
	2. From the IMC property pages in Microsoft Exchange Administrator program.
	
	Controlling the feature from within the Microsoft Exchange client:
	
	This feature is manipulated using the Always Send to This Recipient in Microsoft
	Exchange Rich-Text Format (TNEF) checkbox. This property can be specified on a
	per recipient basis for several address types, including Internet addresses,
	when you define entries in the Personal Address Book (PAB).
	
	You can also manipulate this per recipient property on a per message basis. This
	is convenient when you reply to Internet email or compose one-off messages to
	Internet recipients that aren't defined in the PAB. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q136204 XCLN: Sending Messages in Rich-Text Format
	
	Controlling the feature from the Microsoft Exchange Administrator program:
	
	The Microsoft Exchange Administrator program provides manipulation of this
	property for all outbound mail via the IMC in two ways: Globally (all mail is
	encoded with the specified option), which overrides the originators selection,
	or per destination domain (messages sent to a specific domain are encoded using
	a specified option).
	
	Each of these two considerations share three options:
	
	1. Encode based on whatever the originator has specified (User).
	
	2. [Always] send in Microsoft Exchange Rich Text format (TNEF).
	
	3. [Never] send in Microsoft Rich Text format.
	
	The global setting is found on the Internet Mail tab of the IMC properties page
	under Message Content Information, Sending Attachments Using, and the
	Interoperability button. In addition to specifying TNEF, the Microsoft Exchange
	administrator can specify other options such as the encoding method (MIME or
	UUEncode) and Character Set translation.
	
	The same configuration details can be independently specified for specific target
	domains by adding an entry under the E-mail Domain button and defining the
	target domain name with the desired options.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q176453: XCON: Problems with Attachments Using Boldon James Encoding"
permalink: /kb/176/Q176453/
---

## Q176453: XCON: Problems with Attachments Using Boldon James Encoding

{% raw %}

	Article: Q176453
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a message that contains an attachment over a 1984 X.400 connection
	to a foreign message transfer agent (MTA) that uses Boldon James manifest
	encoding, the attachment name may not appear in the message when it is received.
	The attachment itself is transferred successfully, but the attachment's name,
	date, and time are not. When you receive a message over this connection, the
	attachment name may be changed to Att.dat or a similar generic name.
	
	CAUSE
	=====
	
	By default, Microsoft Exchange Server does not create Boldon James manifests for
	attachments. When you send a message that contains an attachment over an X.400
	connection that uses this type of encoding, information about the attachment is
	not encoded into a manifest. Therefore, the foreign MTA does not receive this
	information.
	
	In addition, by default, Microsoft Exchange Server does not decode and apply
	attachment information in Boldon James manifests when receiving messages from
	foreign MTAs. As a result, attachment names may be changed to generic names such
	as Att.dat.
	
	STATUS
	======
	
	This is a design limitation of the 1984 X.400 specification that Boldon James
	manifest encoding is designed to overcome. Although the creation and decoding of
	manifests are not officially supported by the X.400 specification, Microsoft has
	enhanced the Microsoft Exchange Server 5.0 MTA to support this feature.
	
	This feature is included in the latest U.S. Service Pack for Microsoft Exchange
	Server version 5.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The 1984 X.400 specification provides poor support for encoding attachment
	information, resulting in multiple proprietary attachment encoding schemes.
	Boldon James manifest encoding is a method of encoding attachments in which an
	additional attachment, referred to as a manifest, is included with the message.
	The manifest provides information about the original attachment, including the
	attachment name.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

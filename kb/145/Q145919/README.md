---
layout: page
title: "Q145919: XFOR: MIME Headers for Attachment Filenames Supported by IMC"
permalink: kb/145/Q145919/
---

## Q145919: XFOR: MIME Headers for Attachment Filenames Supported by IMC

	Article: Q145919
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Internet Mail Connector (IMC) supports the Multipurpose Internet
	Message Extentions (MIME) standard. This allows the IMC to send and receive
	messages with attachments to and from other MIME compliant systems.
	
	The IMC is compliant with RFC 1521 "MIME (Multipurpose Internet Mail Extensions)
	Part One: Mechanisms for Specifying and Describing the Format of Internet
	Message Bodies." This RFC document sets standards for the format of message
	bodies to allow multi-part textual and non-textual message bodies to be
	represented and exchanged without loss of information.
	
	As per this RFC, the IMC expects messages received from the Internet to specify
	attachment filenames using the "filename=" parameter on the "Content-Type" MIME
	header. The IMC also uses this format to specify attachment filenames when
	sending out messages containing attachments.
	
	The IMC also recognizes the "Content-Disposition" MIME header and can read
	attachment filenames in incoming messages if they are specified with this
	header. However, the IMC will not use this header when sending messages out to
	the Internet.
	
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0
	
	=============================================================================
	

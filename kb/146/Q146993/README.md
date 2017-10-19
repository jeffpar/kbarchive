---
layout: page
title: "Q146993: XFOR: Quoted-Printable Encoded Messages Stay in IMC"
permalink: /kb/146/Q146993/
---

## Q146993: XFOR: Quoted-Printable Encoded Messages Stay in IMC

	Article: Q146993
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server version 4.0 Internet Mail Connector (IMC) may have
	problems sending outbound messages that are encoded quoted-printable. In
	addition, the IMC's performance will gradually degrade until it is no longer
	capable of delivering additional messages past the message stuck in the queue.
	
	CAUSE
	=====
	
	Messages sent with an attachment that have a Content-Transfer-Encoding type of
	quoted-printable get stuck in the outgoing IMC queue indefinitely and eventually
	cause the IMC to hang. In order for a message to have a content encoding type of
	quoted-printable, a message must be sent with an attachment that contains the
	proper ratio of ASCII to extended ASCII characters.
	
	The problem occurs because IMAIL is not appending the appropriate "carriage
	return line feed" (CR LF) at the end of the message. The IMC appends the "dot
	carriage return line feed" (. CR LF) but since this isn't an appropriate end of
	message character string, the host keeps waiting for more data which never
	arrives.
	
	All SMTP messages should always end in CRLF.CRLF. The hex representation for this
	ending sequence is:
	
	  0D 0A 2E 0D 0A
	
	Archived IMC messages can be analyzed using a hex editor tool such as List. The
	hex dump below is the end of an actual message that was stuck in an IMC's
	outgoing queue:
	
	  00000110 3E 33 3E 3E 59 3E 4E 3E 34 2F 39 37 3E 3E 3E 3E
	  00000120 33 3E 0D 0A 3D 31 41 2E 0D 0A
	
	Note that the last 5 bytes of the example message above were:
	
	  31 41 2E 0D 0A
	
	The first two bytes were actual message data. The last three bytes were appended
	to the message by the IMC as part of the ending sequence. However, the first two
	bytes (CRLF or 0D 0A in hex) were not appended to the end of the message by
	IMAIL. Thus, the ending sequence was invalid and the host didn't know that the
	IMC was finished sending data.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

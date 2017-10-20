---
layout: page
title: "Q167393: XFOR: UUENCODED Sections Are Not Decoded into Attachments"
permalink: /kb/167/Q167393/
---

## Q167393: XFOR: UUENCODED Sections Are Not Decoded into Attachments

{% raw %}

	Article: Q167393
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you receive messages from the Internet that contain UUencoded sections,
	these UUencoded sections may appear as attachments in the message body. At other
	times, these sections will be left as UUencoded text within the message and will
	require manual decoding before you can view them.
	
	CAUSE
	=====
	
	The above behaviour is caused when a UUencoded section is embedded within a MIME
	body part specified as text/plain.
	
	STATUS
	======
	
	This behaviour is by design. Any lines of text within a text/plain MIME body
	part are treated as text and not subject to further processing. If UUencoded
	sections are to be decoded, they should not be sent within text/plain MIME body
	parts. The attachments should be MIME encoded instead.
	
	MORE INFORMATION
	================
	
	This behaviour was not seen in previous versions of Microsoft Exchange Server
	because versions prior to 5.0 incorrectly processed the text/plain section of a
	MIME body part and converted the UUencoded section to an attachment. This action
	violated RFC-1522 concerning the decoding of a MIME-encoded message.
	
	
	Additional query words: 5.00 IMS MIME UUENCODE
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}

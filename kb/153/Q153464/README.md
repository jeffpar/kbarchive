---
layout: page
title: "Q153464: XFOR: Unexpected Text Attachment in Mail Received from Internet"
permalink: /kb/153/Q153464/
---

## Q153464: XFOR: Unexpected Text Attachment in Mail Received from Internet

{% raw %}

	Article: Q153464
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 31-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you receive mail by way of the Internet Mail Connector (IMC), there is a
	file attachment with a name such as ATT00000.txt; the attachment contains only
	text.
	
	CAUSE
	=====
	
	A multipart/mixed MIME document is received that contains more than one text
	section. Only the first text section appears in the message body; all remaining
	text sections are interpreted as text file attachments.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	This happens most commonly with an Internet mail client that is sending an
	attachment and also appending an auto-signature. For example, here is a fragment
	of a multi-part mime message:
	
	  Content-Type: multipart/mixed;
	  boundary="=====================_856378041==_"
	  Content-Type: text/plain; charset="us-ascii"
	
	This sentence will be seen in the body of the message.
	
	  --=====================_856378041==_
	  Content-Type: application/msword; name="WORD.DOC";
	  x-mac-type="42494E41"; x-mac-creator="4D535744"
	  Content-Transfer-Encoding: base64
	  Content-Disposition: attachment; filename="WORD.DOC"
	
	  0M8R4KGxGuEAAAAAAAAAAAAAAAAAAAAAOwADAP7/CQAGAAAAAAAAAAAAAAABAAAAAQA
	     AAAAAAAAA
	
	  <Base64 MIME Encoding - Removed for Brevity>
	
	  /v8JAAYAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAAQAAACAAA=
	  --=====================_856378041==_
	  Content-Type: text/plain; charset="us-ascii"
	
	This paragraph will be seen in the text file attachment. Frequently this text
	contains the auto-signature text sent by Internet mail clients, such as Eudora
	Light 3.0.
	
	  --=====================_856378041==_--
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

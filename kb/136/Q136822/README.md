---
layout: page
title: "Q136822: Cannot Open E-mail Attachment Using MSN or Attachment Is Missing"
permalink: /kb/136/Q136822/
---

## Q136822: Cannot Open E-mail Attachment Using MSN or Attachment Is Missing

{% raw %}

	Article: Q136822
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0,2.5,2.6
	Operating System(s): 
	Keyword(s): kbmsn
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0, 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you receive e-mail with text indicating the e-mail includes an attachment,
	the attachment may be missing, or you may be unable to open the attachment.
	
	CAUSE
	=====
	
	This behavior may occur for either of the following reasons:
	
	- The attachment was damaged before the e-mail was received at MSN, The
	  Microsoft Network.
	
	- You are using the MSN MAPI servers, which do not support the method used to
	  encode the attachment. The MSN MAPI servers support only the UUENCODE method.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method:
	
	MSN 2.0 or Earlier Installed
	----------------------------
	
	Inform people who send you e-mail with attachments that the attachments must be
	correctly encoded using the UUENCODE format.
	
	MSN 2.5 or Later Installed
	--------------------------
	
	Use any of the following methods:
	
	- Migrate your MSN e-mail account to the new MSN POP3 e-mail servers, or have
	  the sender send the message in the UUENCODE format.
	
	- Change the "read font" to Universal Alphabet.
	
	- Ask the sender to save the attachment as an HTML file before attaching it.
	
	MORE INFORMATION
	================
	
	For related information, please click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q176276 Frequently Asked Questions About Mail Migration on MSN
	
	Additional query words: 1.30 2.00 2.50 2.60
	
	======================================================================
	Keywords          : kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN260 kbMSN250 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0,2.5,2.6
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

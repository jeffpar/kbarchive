---
layout: page
title: "Q183415: XFOR: NNTP JIS Message Converted to SJIS, Displayed Incorrectly"
permalink: /kb/183/Q183415/
---

## Q183415: XFOR: NNTP JIS Message Converted to SJIS, Displayed Incorrectly

{% raw %}

	Article: Q183415
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, Japanese version 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you compose a message using a double-byte character set (DBCS) and then post
	the message to a public folder that is configured as a newsgroup with a default
	character set of JIS, the message may be converted to SJIS when you open it in
	an e-mail client. As a result, the message is displayed incorrectly. This
	problem only occurs if you post the message in Multipurpose Internet Mail
	Extensions (MIME) plain text format, instead of encoding it using UUENCODE.
	
	CAUSE
	=====
	
	This problem can occur for the following reasons:
	
	- If the message contains a Request for Comments (RFC) 1522 header, the
	  character set for which the newsgroup is configured is ignored.
	
	- If the character set for which the newsgroup is configured is used, the
	  Internet codepage may be set incorrectly. The Internet codepage may be set to
	  the Microsoft Exchange Server codepage instead of the Windows codepage.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Japanese
	Server version 5.5. This problem has been corrected in the latest U.S. Service
	Pack for Microsoft Exchange Server version 5.5. For information about obtaining
	the Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	For information about a similar problem that occurs when you retrieve messages
	using a post office protocol version 3 (POP3) e-mail client, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q179152 XFOR: Mail Retrieved w/ POP3 Client Shows in SJIS Not JIS
	
	Additional query words: network news transport protocol
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHLangJapanese kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

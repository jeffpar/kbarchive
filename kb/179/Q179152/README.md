---
layout: page
title: "Q179152: XFOR: Mail Retrieved w/ POP3 Client Shows in SJIS Not JIS"
permalink: /kb/179/Q179152/
---

## Q179152: XFOR: Mail Retrieved w/ POP3 Client Shows in SJIS Not JIS

	Article: Q179152
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	This problem occurs with the Japanese version of Microsoft Exchange Server.
	Messages originally composed using a Japanese double-byte character set (DBCS)
	and then retrieved from an Exchange Server using a POP3 mail client such as
	Outlook Express are displayed incorrectly or in an unreadable format. The
	character set is being converted incorrectly from JIS to SJIS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	NOTE: This problem only occurs when you use the Japanese version of Exchange
	Server version 5.0 installed on Japanese Windows NT Server version 4.0 and you
	retrieve mail with the Japanese Outlook Express client.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

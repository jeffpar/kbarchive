---
layout: page
title: "Q235219: XADM: Too Many Consecutive CRLFs Truncate Message"
permalink: /kb/235/Q235219/
---

## Q235219: XADM: Too Many Consecutive CRLFs Truncate Message

	Article: Q235219
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the IMS receives an inbound SMTP message that includes a large number of
	consecutive carriage-return line-feed (CRLF) characters in Japanese encoding,
	the message may be truncated at the CRLF characters, or the Information Store
	may stop responding. If the message is very large, stack overflow occurs and the
	Information Store stops responding.
	
	CAUSE
	=====
	
	When a whole series of CRLF characters are copied at one time, the operation
	will fail if the CRLF characters do not fit in the output buffer. On the other
	hand, if the free space in the output buffer exceeds the margin (256 bytes), the
	buffer is not reallocated. This problem always occurs when the series of CRLF
	characters exceeds the buffer size (4096 bytes = 2048 CRLF pairs), and in
	certain circumstances, it may occur with as little as 128 CRLF pairs, or with
	any number in between.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Gapi32.dll | 5.5.2637.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2637.0 | 
	+-------------------------+
	| Netif.dll  | 5.5.2637.0 | 
	+-------------------------+
	| Store.exe  | 5.5.2637.0 | 
	+-------------------------+
	
	Component: Directory
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Dsamain.exe | 5.5.2600.0 | 
	+--------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: internet
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

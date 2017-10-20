---
layout: page
title: "Q185592: XCON: Recipient Address Corrupted on Messages to EDK Gateway"
permalink: /kb/185/Q185592/
---

## Q185592: XCON: Recipient Address Corrupted on Messages to EDK Gateway

{% raw %}

	Article: Q185592
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix exc55 EXC55SP3Fix
	Last Modified: 06-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Recipient addresses on messages sent through an EDK (Exchange Development Kit)
	gateway are corrupted. As a result, the message cannot be delivered to the
	recipient. This occurs if the address is in the form:
	
	  FAX:username@(xxx)xxxxxxx
	
	where (xxx)xxxxxxx is a phone number with an area code in parentheses that starts
	with a 0, 1, or 2. Also, where FAX is the address type defined by the EDK
	gateway. The recipient name is corrupted to:
	
	  FAX:username@E9368080
	
	The corruption, in this case the letter E, is different depending on the areacode
	provided.
	
	CAUSE
	=====
	
	The use of parentheses in the address triggers the corruption. Parentheses are
	used in an X.400 address to portray characters such as the at sign (@), the
	exclamation mark (!), or the percent sign (%) in an address. The area code of
	this fax address is incorrectly interpreted as a non-printable string of
	characters. This occurs for any three digits enclosed in parentheses, where the
	first digit is a 0, 1, or 2.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5.
	This problem was first corrected in Exchange Server 5.5 Service Pack 3.
	
	MORE INFORMATION
	================
	
	Exchange Server uses RFC 987 to interpret parentheses in an address. RFC 987
	provides a method of mapping non-printable characters to printable ones for a
	legal X.400 address. Most X.400 address attributes have to be printable
	characters as defined in Table 4 of Recommendation X.409. For example, RFC 987
	specifies the following:
	
	  Non-Printable Characters      X.400 Printable Characters
	  @                            (a)
	  %                            (p)
	  !                            (b)
	  "                            (q)
	  _                            (u)
	  3digits                       3digits
	
	Exchange Server implements RFC 987 in Escprint.dll. The fixed files for this
	issue add implementation for a more recent RFC that obsoletes RFC. The current
	RFC is RFC 2156.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q272714 XFOR: Fax Sent to 1(262)xxx-xxxx by the BISCOM Fax EDK Gateway Gets
	  Addressed to 1Cxxx-xxxx
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

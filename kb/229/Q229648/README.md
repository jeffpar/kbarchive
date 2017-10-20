---
layout: page
title: "Q229648: XADM: Sent Field Displayed Incorrectly in Forwarded Message"
permalink: /kb/229/Q229648/
---

## Q229648: XADM: Sent Field Displayed Incorrectly in Forwarded Message

{% raw %}

	Article: Q229648
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:98; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a message using the Chinese Traditional version of an e-mail
	client and send the message to a computer that is running the U.S. version of
	Microsoft Exchange Server, and then a rule is applied that forwards the message,
	the Sent field in the copy of the original message that is included in the
	forwarded message may be displayed similar to the following:
	
	  ????: date
	
	where date is the date on which the original message was sent. That is, the word
	"Sent" is displayed as four question marks.
	
	Note that this problem only occurs when the rule is processed on the server. If
	you are running the Internet Mail Only (IMO) version of Microsoft Outlook 98 or
	the rule is configured to notify you using a specific message, the rule is not
	processed on the server. However, the problem occurs regardless of whether the
	original message is formatted as plain text, Rich Text Format (RTF), or
	Hypertext Markup Language (HTML).
	
	CAUSE
	=====
	
	This problem occurs when the server uses the wrong code page conversion routine
	while converting the original message.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, click the following article number to
	view the article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: MDB
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Store.exe  | 5.5.2587.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2587.0 | 
	+-------------------------+
	| Gapi32.dll | 5.5.2587.0 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: cht cpid rules wizard inbox assistant
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:98; winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

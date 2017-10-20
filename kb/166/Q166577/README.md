---
layout: page
title: "Q166577: XFOR: Subject Field for SMTP Outbound Mails not ECU-KR Encoded"
permalink: /kb/166/Q166577/
---

## Q166577: XFOR: Subject Field for SMTP Outbound Mails not ECU-KR Encoded

{% raw %}

	Article: Q166577
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the Korean Microsoft Exchange Client that is connected to US Exchange Server
	version 5.0 with the Build 1458.15 sends an SMTP mail message with Korean
	characters in the subject field, the Korean characters are not readable although
	KSC-5601 is set on the Character Set Translation for both MIME and non-MIME in
	the Internet Mail tab of the Internet Mail Service Properties.
	
	CAUSE
	=====
	
	The "euc-kr" label should be used to encode SMTP mails with Korean characters in
	the subject field. If you turn on the Message Archival on the Diagnostics
	Logging tab, the outbound SMTP messages with Korean characters in the subject
	saved in the IMCDATA\OUT\ARCHIVE directory should have "euc- kr" label in the
	subject field. One correctly encoded header is as follows:
	
	  Message-ID: <6180A23D98B7D011BD4800A0C90D616D051C@server.company1.com>
	  From:  <user1@company1.com>
	  To: "'user2@company2.com'" <user2@company2.com>
	  Subject: =?euc-kr?B?Rlc6IL7GufbB9g==?=
	  Date: Thu, 22 May 1997 15:55:46 -0700
	  X-Priority: 3
	  MIME-Version: 1.0
	  X-Mailer: Internet Mail Service (5.0.1457.3)
	  Content-Type: text/plain; charset="iso-2022-kr"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: kbkorea
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

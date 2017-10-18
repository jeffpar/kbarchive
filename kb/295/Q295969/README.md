---
layout: page
title: "Q295969: XADM: The Information Store Service Is Caught in Deadlock"
permalink: kb/295/Q295969/
---

## Q295969: XADM: The Information Store Service Is Caught in Deadlock

	Article: Q295969
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP4
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you upgrade to Exchange Server 5.5 Service Pack 4 (SP4), the Internet Mail
	Service queues may back up, and the information store cannot be shut down
	properly.
	
	CAUSE
	=====
	
	This problem occurs because of a thread deadlock. This problem is very similar
	to the issue that is described in the following Microsoft Knowledge Base
	article:
	
	  Q279798 XADM: Information Store Service Hangs After You Apply Service Pack 4
	
	However, this problem was detected later, so version 5.5.2654.29 of Store.exe
	(which was released in response to the isssue that is described in Q279798) does
	not contain the fix for the deadlock that is described in this article.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server 5.5 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name | Version     | 
	+-------------------------+
	| Store.exe | 5.5.2654.94 | 
	+-------------------------+
	
	NOTE: Because of file dependencies, this fix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	MORE INFORMATION
	================
	
	This problem can affect any Exchange Server 5.5 computer that uses IMAIL
	conversion for Network News Transport Protocol (NNTP), Post Office Protocol 3
	(POP3), and Internet Message Access Protocol 4 (IMAP4) functionality, or any
	connector that is based on the Exchange Development Kit (EDK), which uses
	IMAIL.
	
	You may first notice this problem on Internet Mail gateway servers. The Internet
	Mail Service seems to stop processing Simple Mail Transfer Protocol (SMTP) mail.
	Normal troubleshooting procedures suggest that you restart the Internet Mail
	Service or Information Store service. When you attempt to stop the service,
	either the Internet Mail Service or Information Store service stops responding
	(hangs) and will not restart until you restart the server.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP4
	Version           : :5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

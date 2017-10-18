---
layout: page
title: "Q279798: XADM: Information Store Service Hangs After You Apply SP4"
permalink: kb/279/Q279798/
---

## Q279798: XADM: Information Store Service Hangs After You Apply SP4

	Article: Q279798
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you upgrade to Microsoft Exchange Server 5.5 Service Pack 4 (SP4), the
	Internet Mail Service queues may back up, and the information store may not shut
	down properly.
	
	CAUSE
	=====
	
	This behavior may be caused by a thread deadlock. Two threads are contending for
	each other's critical section, and this causes the Internet mail (IMAIL)
	conversion process to halt, which causes the Internet Mail Service to stop
	processing e-mail messages, and the mail to queue up. This may also prevent the
	information store from shutting down properly.
	
	
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
	| Store.exe | 5.5.2654.29 | 
	+-------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This behavior can effect any Exchange 5.5 Server which uses IMAIL conversion for
	Network News Transport Protocol, Post Office Protocol 3 and Internet Message
	Access Protocol 4 functionality or any Exchange Development Kit (EDK)-based
	connector which utilizes IMAIL.
	
	The behavior may first be noticed on Internet Mail Gateway servers. The Internet
	Mail Service will appear to stop processing Simple Mail Transfer Protocol (SMTP)
	mail. Normal troubleshooting procedures suggest that you restart the Internet
	Mail Service or Information Store service. When you attempt to stop the service,
	the Internet Mail Service or Information Store service will stop responding
	(hang) and not restart until the server is restarted.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

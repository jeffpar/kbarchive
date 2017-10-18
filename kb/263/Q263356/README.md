---
layout: page
title: "Q263356: SMS: Outbox Sending Times and Priorities Lost During Upgrade"
permalink: kb/263/Q263356/
---

## Q263356: SMS: Outbox Sending Times and Priorities Lost During Upgrade

	Article: Q263356
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbnetwork kbsms200 kbsms200bug kbsms120 kbHMan kbReplMgr kbScheduler kbSender kbsms200p
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade from Microsoft Systems Management Server (SMS) 1.2 to SMS 2.0,
	all time restrictions and priorities set for outboxes are removed. This removal
	pertains to all types of senders, for example, the local area network (LAN)
	sender and the Remote Access Service (RAS) sender.
	
	WORKAROUND
	==========
	
	To work around this issue, re-create the time restrictions and priorities on the
	new SMS 2.0 site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	In SMS 1.2 you can define the times and priorities for each type of outbox, for
	example, standard or asynchronous RAS. The equivalent settings for SMS 2.0 are
	standard, asynchronous, ISDN RAS, X25 RAS, SNA RAS, and courier senders. The
	sender's times and priorities are set in the Address properties on the Schedule
	tab.
	
	Chapter 8 of the Systems Management Server Administrator's Guide discusses these
	different sender types and how to configure them.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsms200 kbsms200bug kbsms120 kbHMan kbReplMgr kbScheduler kbSender kbsms200preSP3 kbSMSSender 
	Technology        : kbSMSSearch kbSMS120 kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:1.2,2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

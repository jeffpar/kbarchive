---
layout: page
title: "Q303462: Access Violation in the SMS_OFFER_STATUS_SUMMARIZER Thread"
permalink: /kb/303/Q303462/
---

## Q303462: Access Violation in the SMS_OFFER_STATUS_SUMMARIZER Thread

{% raw %}

	Article: Q303462
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP3
	Operating System(s): 
	Keyword(s): kberrmsg kbsms120 kbsms120bug kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SMS_Executive service may stop responding (hang), you may receive an access
	violation in the SMS_OFFER_STATUS_SUMMARIZER thread, and the following error
	message may be logged in the Offersum.log file:
	
	  ---->: Processing the incoming replication file:
	  F:\SMS\inboxes\OfferSum.Box\X06JN0BM.SUM
	  STATMSG: ID=4502 SEV=I LEV=M SOURCE="SMS Server"
	  COMP="SMS_OFFER_STATUS_SUMMARIZER" SYS=SE2-USRGEN1 SITE=CN5 PID=519 TID=96
	  GMTDATE=Wed Jun 20 12:42:07.596 2001
	  ISTR0="F:\SMS\inboxes\OfferSum.Box\X06JN0BM.SUM" ISTR1="" ISTR2="" ISTR3=""
	  ISTR4="" ISTR5="" ISTR6="" ISTR7="" ISTR8="" ISTR9="" NUMATTRS=0
	  Info>: Processing replication file...
	
	CAUSE
	=====
	
	This problem occurs because an access violation occurs when a damaged .sum file
	is received from a child site.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	Additional query words: prodsms av offersum
	
	======================================================================
	Keywords          : kberrmsg kbsms120 kbsms120bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP3
	Version           : :2.0 SP3
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

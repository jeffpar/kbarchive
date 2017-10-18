---
layout: page
title: "Q283130: CCIM Verify Cycle Can Interrupt Software Distributions"
permalink: kb/283/Q283130/
---

## Q283130: CCIM Verify Cycle Can Interrupt Software Distributions

	Article: Q283130
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbsms200 kbsms200bug kbAdvertisement kbAppMan kbPackage kbsmsUtil kbS
	Last Modified: 17-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an advertisement runs when the Client Configuration Installation Manager
	(CCIM) verify cycle is initiated (usually once, approximately every 30 days),
	the running advertisement may be interrupted and no error messages, such as,
	10006, or 10007, are generated on the client indicating that the advertisement
	did not work.
	
	CAUSE
	=====
	
	This behavior can occur when CCIM attempts to perform the verification process
	which interrupts the Systems Management Server Advertised Programs Manager
	(Smsapm32). When this situation occurs, the software distribution that is
	currently in progress is abruptly stopped. If the software installation is
	interrupted prematurely, unpredictable results can occur. In some cases, the
	advertisement is rescheduled and installed.
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the Cliverify.exe utility that is specific
	to the Service Pack level of your site hierarchy. You can use this utility to
	manually configure or to disable the verification cycle.
	
	For additional information about this utility, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q246040 SMS: How to Configure the Client Verify Cycle for SMS 2.0 Clients
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	You must resend the advertisement that did not work.
	
	
	Additional query words: prodsms smsapm32 exe
	
	======================================================================
	Keywords          : kbClient kbConfig kbsms200 kbsms200bug kbAdvertisement kbAppMan kbPackage kbsmsUtil kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

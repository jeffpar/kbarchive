---
layout: page
title: "Q213321: SMS: Site Server Performance Is Degraded with NetWare Redirector"
permalink: /kb/213/Q213321/
---

## Q213321: SMS: Site Server Performance Is Degraded with NetWare Redirector

	Article: Q213321
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbConfig kbServer kbsms200 kbsms200bug kbBindery kbNDS kbOSNovell
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Novell NetWare redirector components are installed on the Microsoft Systems
	Management Server (SMS) site server, performance may progressively decline.
	Performance Monitor may appear to reveal a memory leak in the SMS_Executive
	component, indicating that handles are being opened and not closed by the SMS
	Executive component.
	
	CAUSE
	=====
	
	This behavior can occur when a native NetWare application programming interface
	(API) call to evaluate a server role is unable to determine if the server is a
	NetWare server or a tree.
	
	WORKAROUND
	==========
	
	This handle leak was fixed in the 4.6 version of the NetWare redirector. If you
	are using an earlier version of the NetWare redirector, contact NetWare
	technical support and request a fix, referencing SPD # 219843.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbConfig kbServer kbsms200 kbsms200bug kbBindery kbNDS kbOSNovell 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

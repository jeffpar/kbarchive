---
layout: page
title: "Q297522: SMS: Unpredictable &quot;Only When No User Logged On&quot; Advertisements"
permalink: kb/297/Q297522/
---

## Q297522: SMS: Unpredictable &quot;Only When No User Logged On&quot; Advertisements

	Article: Q297522
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advertisements for packages that specify that programs can run "only when no
	user is logged on" may run at unpredictable times on Systems Management Server
	(SMS) client computers. The programs can run when a user is logging on or when
	the computer is shutting down:
	
	- When logging on:
	
	  After an advertisement for a "only when no user is logged on" program can be
	  run, no subsequent checks are made to determine whether a user is still
	  logged off. Consequently, if multiple advertisements for "logged off"
	  programs are made available to a client and the first of these advertisements
	  runs correctly while in a "logged off" state, each of the subsequent
	  advertisements are incorrectly run if a user logs back on when the first
	  program is running.
	
	- When shutting down:
	
	  Advertisements for "logged off" programs may also be inadvertently run while a
	  client is in the process of shutting down. Advanced Power Management (APM)
	  checks to see if the Launch32.exe process is running to verify whether a user
	  is logged off. If Launch32.exe process is not running (as a result of being
	  stopped during shutdown), one of the prerequisites to start a "logged off"
	  program advertisement is met.
	
	Under most circumstances the client shutdown procedure proceeds and is finished
	before an advertisement starts. However, if other processes and programs stop
	responding (hang), the advertisement may start before the client shuts down.
	
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
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

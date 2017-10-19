---
layout: page
title: "Q260522: SMS: Cannot Target Software to Windows NT 4.0 SP6 x86 Computers"
permalink: /kb/260/Q260522/
---

## Q260522: SMS: Cannot Target Software to Windows NT 4.0 SP6 x86 Computers

	Article: Q260522
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 19-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are trying to distribute software specifically to computers that are
	running Microsoft Windows NT 4.0 Service Pack 6 (SP6), you cannot target these
	computers by using the "This program can run only on specified platforms" option
	on the Requirements tab in the Program properties for a package.
	
	The options currently available for Windows NT 4.0 service packs are x86-based
	Windows NT 4.0 Service Pack 1 through Service Pack 5 clients.
	
	WORKAROUND
	==========
	
	To work around this behavior, create a query-based collection that includes only
	x86-based Windows NT 4.0 SP6 computers. Target the package distribution to this
	collection.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

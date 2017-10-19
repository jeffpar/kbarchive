---
layout: page
title: "Q263409: Admin Console: WinNT Diagnostics/Perform Mon. Attach Incorrectly"
permalink: /kb/263/Q263409/
---

## Q263409: Admin Console: WinNT Diagnostics/Perform Mon. Attach Incorrectly

	Article: Q263409
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200preSP3
	Last Modified: 02-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run Microsoft Windows NT Diagnostics or Windows NT
	Performance Monitor against a remote Windows NT or a Microsoft Windows 2000
	system listed in a collection of the SMS Administrator's Console (to do this,
	you use the "Action->All Tasks" menu option), the Windows NT Diagnostics or
	Windows NT Performance Monitor snap-in will open with focus set on the local
	system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	This problem occurs only if you run the Systems Management Server (SMS)
	Administrator's Console on a Windows 2000 system. It does not occur if you run
	the SMS Administrator's Console from a Windows NT 4.0 Workstation or Windows NT
	4.0 Server system.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

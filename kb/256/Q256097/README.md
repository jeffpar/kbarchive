---
layout: page
title: "Q256097: Clients Do Not Generate &quot;Failed to Start Program&quot; Error Message"
permalink: kb/256/Q256097/
---

## Q256097: Clients Do Not Generate &quot;Failed to Start Program&quot; Error Message

	Article: Q256097
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool kbsms200 kbsms200bug
	Last Modified: 10-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a program is advertised to both Microsoft Windows NT-based and Microsoft
	Windows 98/95-based clients by using the "Only when no user is logged on" option
	on the Environment tab of your package's program item, administrators do not
	receive an error message from Windows 98/95-based clients if the program does
	not run.
	
	CAUSE
	=====
	
	This problem occurs because the "Only when no user is logged on" option is
	designed to be used only by Windows NT-based clients.
	
	WORKAROUND
	==========
	
	To work around this problem, make 2 advertisements, one for Windows NT-based
	clients, and one for Windows 98/95-based clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbtool kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	

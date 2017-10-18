---
layout: page
title: "Q226831: SMS: Slow File Transfer from Alpha Servers to Win95/98 Clients"
permalink: kb/226/Q226831/
---

## Q226831: SMS: Slow File Transfer from Alpha Servers to Win95/98 Clients

	Article: Q226831
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use remote tools to transfer a file from Alpha servers to Microsoft
	Windows 95 or Windows 98 clients without using TCP/IP, you may experience slow
	performance.
	
	WORKAROUND
	==========
	
	To work around this behavior, ensure that when you transfer a file using remote
	tools from Alpha servers to Windows 95 or Windows 98, you use TCP/IP.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 2.0.
	
	MORE INFORMATION
	================
	
	NOTE: This behavior can also occur in the Japanese versions of Windows 95 and
	Windows 98, but is not exhibited on any Intel platform.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

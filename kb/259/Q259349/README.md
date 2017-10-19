---
layout: page
title: "Q259349: IIS Binds To All Available IP Addresses When It Starts"
permalink: /kb/259/Q259349/
---

## Q259349: IIS Binds To All Available IP Addresses When It Starts

	Article: Q259349
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport kbiis500
	Last Modified: 22-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Internet Information Services (IIS) 5.0, IIS appears to bind to
	all Internet Protocol (IP) addresses on a server, not just the IP addresses that
	are assigned to Web sites. In addition, when you run another service that uses
	port 80 on an unused IP address, IIS may return an error.
	
	CAUSE
	=====
	
	To enhance performance, IIS 5.0 uses "socket pooling", in which IIS binds to all
	IP addresses when it starts.
	
	WORKAROUND
	==========
	
	To work around this behavior, disable socket pooling in IIS as follows:
	
	1. At a command prompt, switch to the "C:\InetPub\AdminScripts" folder.
	
	2. Type the following command:
	
	  " CSCRIPT ADSUTIL.VBS SET W3SVC/DisableSocketPooling TRUE " (without the
	  quotation marks)
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q238131 How to Disable Socket Pooling
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport kbiis500 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

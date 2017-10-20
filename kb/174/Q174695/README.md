---
layout: page
title: "Q174695: XCON: How to Find the Version of MTA on Exchange Server"
permalink: /kb/174/Q174695/
---

## Q174695: XCON: How to Find the Version of MTA on Exchange Server

{% raw %}

	Article: Q174695
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When several versions of the message transfer agent (MTA) are in use, it is
	important to determine the version or build of the MTA installed on a Microsoft
	Exchange Server computer. This article explains the process of identifying the
	MTA build. When the MTA stops or restarts, it generates the following events in
	the Event Viewer application log.
	
	The description line of these events contains the MTA build.
	
	  Event ID: 9298
	  Source: MSExchangeMTA
	  Type: Information
	  Category: X.400 Service
	  Description: Microsoft Exchange Server MTA Service startup complete,
	  version 5.0 (build 1457.8). [BASE IL MAIN BASE 31 490] (14)
	
	  Event ID: 9299
	  Source: MSExchangeMTA
	  Type: Information
	  Category: X.400 Service
	  Description: Service closedown complete, version 5.0 (build 1457.8).
	    [BASE IL MAIN BASE 31 490] (16)
	
	MORE INFORMATION
	================
	
	If you need to determine what version of the MTA is installed on an Exchange
	Server computer, perform the following steps:
	
	1. In Control Panel, double-click the Services icon.
	
	2. Select the MTA Service and click Stop.
	
	3. Click Close, and then close Control Panel.
	
	4. Open the application log file and find the description that contains the
	  version and build information.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}

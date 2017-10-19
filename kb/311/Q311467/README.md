---
layout: page
title: "Q311467: SMS: Clients Do Not Download Large Excluded Programs Lists"
permalink: /kb/311/Q311467/
---

## Q311467: SMS: Clients Do Not Download Large Excluded Programs Lists

	Article: Q311467
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) software metering clients may be unable to
	download the excluded programs list from the site if the list becomes very
	large. The client tries to download the list for an extended period of time, and
	the client's CPU usage may be spiked by the Remodbc.exe process while this is
	happening. In the Liccli.log file on the client, the following sequence of
	messages is logged:
	
	  Copying reintegration data to server...
	  OK
	  Offline upload successful
	  Downloading client configuration...
	  Download failed: Failed to get ignorable exes
	  +ON +: Synchronized FAILED.
	  Switching OFFLINE ...
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The excluded programs list corresponds to the contents of the IGNORE table in
	the software-metering database. It is recommended that the contents of the
	NONLIC table (unlicensed products) be moved periodically to the excluded
	programs list; this improves software metering's scalability by preventing
	clients from tracking every unlicensed product that is started locally. For
	additional information about how to scale software metering, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q263023 SMS: Information on Scaling Software Metering
	
	Because the NONLIC table can grow very large, this means that the excluded
	programs list can become very large as well which leads to this problem. The
	exact size of the excluded programs list that will cause this problem is not
	known, but the problem has occurred with excluded program lists that are 3.5
	megabytes or larger.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

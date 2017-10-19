---
layout: page
title: "Q223044: SMS: Remote Control Agent Not Found"
permalink: /kb/223/Q223044/
---

## Q223044: SMS: Remote Control Agent Not Found

	Article: Q223044
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbHelpDesk
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Remote.exe file to remote control a client using a RAS link, the
	attempt to connect to the client fails and gives the following error message:
	
	  Remote Control Agent Not found.
	
	Furthermore, upon using Network Monitor to capture the network data sent to the
	client through the RAS link, no TCP data is visible. Some User Datagram Protocol
	(UDP) frames are sent but they fail with the following Internet Control Message
	Protocol (ICMP) error:
	
	  Destination unreachable
	
	WORKAROUND
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server 2.0. For additional information, click the following article number to
	view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Systems Management Server 2.0.
	This problem was first corrected in Systems Management Server 2.0 Service Pack
	Service Pack 1.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbHelpDesk 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

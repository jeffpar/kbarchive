---
layout: page
title: "Q254644: SMS: Network Monitor Experts Increase CPU Use and Finish Slowly"
permalink: /kb/254/Q254644/
---

## Q254644: SMS: Network Monitor Experts Increase CPU Use and Finish Slowly

	Article: Q254644
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP1
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbsms200bug
	Last Modified: 31-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the TCP Retransmit expert or the Server Response Time expert in
	Microsoft Network Monitor version 5.00.943 on a large (greater than 2 megabytes)
	network capture, it may need 30 or more minutes to complete, and Network Monitor
	may increase central processing unit (CPU) utilization to 100 percent on the
	computer during this time. Note that Network Monitor version 5.00.943 is
	included in Systems Management Server (SMS) version 2.0, Service Pack 1 (SP1).
	
	CAUSE
	=====
	
	This problem can occur because the MSRPC parser in this version of Network
	Monitor continually looks back (recursively) in its recognize function. Because
	of this, every time the parser engine moves on to the next frame, it goes back
	and looks at all previous frames again, causing it to be extremely slow.
	
	WORKAROUND
	==========
	
	To work around this problem, you can disable the MSRPC parser:
	
	1. Quit Network Monitor if it is running, and then open the NETMON\i386\Parsers
	  folder.
	
	2. Rename the Msrpc.dll and Msrpc.ini files in this folder to Msrpc.olddll and
	  Msrpc.oldini.
	
	3. Restart Network Monitor, and then test filtering and the use of experts.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms bloodhound netmon expert netmon.exe
	
	======================================================================
	Keywords          : kbtool kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200SP1
	Version           : winnt:2.0 SP1
	Issue type        : kbbug
	
	=============================================================================
	

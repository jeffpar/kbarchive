---
layout: page
title: "Q262312: Cannot Process More Than 11 Advertisements for the Same Program"
permalink: /kb/262/Q262312/
---

## Q262312: Cannot Process More Than 11 Advertisements for the Same Program

{% raw %}

	Article: Q262312
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP2
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbsms200bug kbsms200fix kbsms200sp2fix
	Last Modified: 24-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a client computer receives more than 11 advertisements from the same
	program, the Offer Data Provider stops responding (hangs). No new offers are
	received until the next reboot, at which point the Offer Data Provider stops
	responding again. This behavior is repeated until the number of advertisements
	to the program is reduced.
	
	CAUSE
	=====
	
	This problem can occur because the Offer Data Providers merge the program
	details and associated offers and then send this information by using an
	anonymous pipe IPC connection to Available Programs Manager for processing. If
	the number of advertisements is greater than 11, the required buffer size
	exceeds 4 kilobytes (KB). The anonymous pipe is created with a default buffer
	size of 4 KB, but the IPC mechanism is configured to transmit blocks up to 6,000
	bytes, so an attempt is made to transmit a buffer that is greater than 4 KB in a
	single block. The problem is that the WriteFile is blocked after 4 KB has been
	sent because the pipe is effectively full. The WriteFile is blocked indefinitely
	until a read is performed on the other end of the pipe. However, a read does not
	occur until it is signaled that the write is finished, which does not happen
	until the WriteFile completes, and WriteFile does not complete until it has
	transmitted the entire buffer. This results in the Offer Data Provider hanging.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0 and 2.0 SP1. This problem was first corrected in Systems Management
	Server version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	The client that is requesting the pipe connection passes its message size in the
	connection request. The server then allocates a pipe with a buffer size that
	permits the client to send the entire message at one time, but the server will
	deny a pipe connection to the client if its message size is greater than 64 KB.
	With this increase in the size of the buffer, it now permits a little over 100
	advertisements per program.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 kbsms200bug kbsms200fix kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : winnt:2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

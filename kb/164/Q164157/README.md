---
layout: page
title: "Q164157: SMS: Kbstuff.sys May Cause a STOP 1E Blue Screen Error"
permalink: kb/164/Q164157/
---

## Q164157: SMS: Kbstuff.sys May Cause a STOP 1E Blue Screen Error

	Article: Q164157
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProgkbfixlist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On some computers running Systems Management Server 1.2 Service Pack 1 under
	Windows NT Server, you may receive an intermittent Blue Screen error when you
	attempt to use Systems Management Server remote control. The Blue Screen is a
	STOP 1E error in Kbstuff.sys.
	
	CAUSE
	=====
	
	This problem seems to be very hardware-dependent, and no single factor has been
	identified as causing this problem. Keyboard switches, loose keyboard
	connectors, and non-standard hardware architectures have been identified, but
	have not been conclusively proven to cause this problem. This Blue Screen error
	occurs when the Kbstuff.sys driver is passed NULL values when it is sent a
	keyboard connect message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server 1.2 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: driver prodsms SP1 kbclass i8042prt
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg kbfixlist
	Technology        : kbSMSSearch kbSMS120SP1
	Version           : :1.2 SP1
	Issue type        : kbbug
	
	=============================================================================
	

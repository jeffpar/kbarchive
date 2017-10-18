---
layout: page
title: "Q286366: SMS: RC White Screen When Trying to Control Client w/ Intel 815"
permalink: kb/286/Q286366/
---

## Q286366: SMS: RC White Screen When Trying to Control Client w/ Intel 815

	Article: Q286366
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2,1.2 SP1,1.2 SP2,1.2 SP3,1.2 SP4
	Operating System(s): 
	Keyword(s): kbinterop kbClient kbConfig kbRemote kbServer kbsms120 kbHelpDesk kbsmsAdmin kbsmsUtil
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 1.2 SP1, 1.2 SP2, 1.2 SP3, 1.2 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect remotely to another computer that is using the Intel
	815 graphics chip set by using TCP/IP as the remote control protocol, the
	computer that is running the Systems Management Server Administrative console
	may stop responding and you see a white screen when you attempt the connection.
	
	CAUSE
	=====
	
	This problem may occur on computers that are running the Intel 815 graphics chip
	set.
	
	WORKAROUND
	==========
	
	To work around this problem, use NetBIOS instead of TCP/IP as the remote control
	communications protocol.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbClient kbConfig kbRemote kbServer kbsms120 kbHelpDesk kbsmsAdmin kbsmsUtil kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120 kbSMS120SP2 kbSMS120SP3 kbSMS120SP4 kbSMS120SP1
	Version           : :1.2,1.2 SP1,1.2 SP2,1.2 SP3,1.2 SP4
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

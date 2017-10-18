---
layout: page
title: "Q280054: SMS: Remote Session Disconnects If Second User Tries to Connect"
permalink: kb/280/Q280054/
---

## Q280054: SMS: Remote Session Disconnects If Second User Tries to Connect

	Article: Q280054
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbtool kbClient kbMMC kbRemote kbSecurity kbsms200 kbsms200bug kbHelpDesk kbsmsAdmin kb
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a target computer is being remote controlled by one Systems Management
	Server (SMS) administrator, and a second SMS administrator ignores the response
	message that reports that the computer is already being remote controlled by
	another viewer, and repeatedly attempts to remote control the computer, the
	first session may be disconnected unexpectedly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	When this problem occurs, users who are not on the Permitted Viewers list are
	unable to access the computer.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbClient kbMMC kbRemote kbSecurity kbsms200 kbsms200bug kbHelpDesk kbsmsAdmin kbsmsUtil kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

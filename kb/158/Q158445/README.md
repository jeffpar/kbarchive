---
layout: page
title: "Q158445: SMS: Remote Control Agent Unable to Get Workstation Name"
permalink: /kb/158/Q158445/
---

## Q158445: SMS: Remote Control Agent Unable to Get Workstation Name

	Article: Q158445
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbtshoot smsremtshoot smshowto kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to load the Remote Control agent on a client computer running
	Windows 95, the Remote Control agent fails with the following error:
	
	  unable to get workstation name: use Lana 0
	
	MORE INFORMATION
	================
	
	This problem generally occurs on Windows 95 clients that have multiple protocols
	loaded, and no protocol is selected as the default. Select the protocol desired
	for Remote Control and set it as the default. You must restart the computer for
	the change to take effect. After that, the Remote Control agent should perform
	normally.
	
	Additional query words: Wuser
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbtshoot smsremtshoot smshowto kbRemoteProg 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

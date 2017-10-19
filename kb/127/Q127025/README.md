---
layout: page
title: "Q127025: Switch Required for USERTSR for WFW 3.1 Clients"
permalink: /kb/127/Q127025/
---

## Q127025: Switch Required for USERTSR for WFW 3.1 Clients

	Article: Q127025
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig smsconfig
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you configure a computer running Windows for Workgroups version 3.1 as a
	Microsoft Systems Management Server version 1.0 client, you may need to add a -W
	switch to USERTSR in the CLIENT.BAT file located at the MS\SMS\Bin directory.
	However, Windows for Workgroups version 3.1 is not a supported client system for
	SMS Server version 1.0.
	
	The -W switch loads USERTSR for clients running Windows for Workgroups. When you
	use the switch, USERTSR waits for the Remote Control Agent (WUSER.EXE) to start
	before initializing itself on the network. Client Setup does not add this switch
	because it handles Windows for Workgroups version 3.1 as if it were a LAN
	Manager client.
	
	Additional query words: prodsms wfw sms
	
	======================================================================
	Keywords          : kbnetwork kbConfig smsconfig 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

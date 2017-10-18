---
layout: page
title: "Q159540: SMS: HelpDesk Cannot Reconnect to Windows 95 with Client32"
permalink: kb/159/Q159540/
---

## Q159540: SMS: HelpDesk Cannot Reconnect to Windows 95 with Client32

	Article: Q159540
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbtool smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to use the HelpDesk functionality for Systems Management
	Server, Chat may work normally, but none of the other HelpDesk icons function.
	If you exit the HelpDesk and choose any other icon (except for Diagnostics), and
	then come back to the HelpDesk, the client will not be found. This problem
	occurs if all of the following conditions are true:
	
	- Systems Management Server is installed onto a computer running Windows NT
	  Server 3.51 Service Pack 4 or Service Pack 5.
	
	- You are using Novell's NetWare 4.1x.
	
	- The client computer is running Windows 95 with Novell's Client32 loaded.
	
	CAUSE
	=====
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. Service Pack for
	Systems Management Server version 1.2. Windows NT Server 3.51 Service Pack 5 or
	Windows NT Server 4.0 is also required. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	Additional query words: prodnt prodsms
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbtool smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

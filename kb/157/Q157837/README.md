---
layout: page
title: "Q157837: SMS: Windows Clients Exit to MS-DOS During Use of Help Desk"
permalink: kb/157/Q157837/
---

## Q157837: SMS: Windows Clients Exit to MS-DOS During Use of Help Desk

	Article: Q157837
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When performing Microsoft Systems Management Server (SMS) help desk functions to
	a remote Windows client, a change of help desk function (such as Remote Control
	to Remote Execute) can cause the client to exit to MS-DOS without warning. An
	EMM386 error can sometimes precede the exit. If this is a Windows 95 Client, the
	client may hang or experience an OE Exception Error.
	
	CAUSE
	=====
	
	The cause of the problem is specific to the following circumstances:
	
	- A slow link, such as RAS, exists between the SMS Administrator site and the
	  client being managed. The lower the speed, the more likely the problem is to
	  occur.
	
	- The protocol used for help desk communication is NETBT (NetBIOS over TCP/IP).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2. This problem has been corrected in the latest U.S. Service
	Pack for Microsoft Systems Management Server version 1.2. For information on
	obtaining the Service Pack, query on the following word in the Microsoft
	Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	Additional query words: prodsms WFW RAS diagnostics transfer workgroups
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	

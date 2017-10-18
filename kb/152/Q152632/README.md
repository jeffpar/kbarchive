---
layout: page
title: "Q152632: Remote Control Using IPX over Routers Fails with NAK"
permalink: kb/152/Q152632/
---

## Q152632: Remote Control Using IPX over Routers Fails with NAK

	Article: Q152632
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you use IPX and NetWare's ODI stack over WellFleet routers, Remote Control
	fails to make clear video. You can make a connection, but the video fails and
	the message "Too many NAK's reported" is returned. NetBIOS clients function
	normally; only the IPX transport code has the problem. The console loses mouse
	and keyboard control after about 1 minute.
	
	CAUSE
	=====
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

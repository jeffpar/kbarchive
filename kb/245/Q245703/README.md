---
layout: page
title: "Q245703: APM Executes Local Program Version If Package Share Unavailable"
permalink: kb/245/Q245703/
---

## Q245703: APM Executes Local Program Version If Package Share Unavailable

	Article: Q245703
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 31-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send an advertisement to a workstation and that workstation is unable
	to reach the package distribution location to execute the program command line,
	the Systems Management Server Available Programs Manager on the client attempts
	to execute the program using the local system path. If the Available Programs
	Manager finds the file specified in the program command line in the path, it
	executes the local version.
	
	CAUSE
	=====
	
	This behavior is caused by the way the Available Programs Manager handles
	unreliable connections. Systems Management Server assumes a fast, reliable
	connection between the clients and their servers. When a fast, reliable
	connection is unavailable, the Available Programs Manager attempts to find the
	program locally.
	
	WORKAROUND
	==========
	
	To work around this issue, follow these steps:
	
	- Assure a fast, reliable connection between the clients and the server.
	
	- If reliable connections are not possible, use unique names for the executable
	  in the command line of the program.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

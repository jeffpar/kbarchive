---
layout: page
title: "Q157037: SMS: Out of Memory Error When Launching Program Group Control"
permalink: /kb/157/Q157037/
---

## Q157037: SMS: Out of Memory Error When Launching Program Group Control

	Article: Q157037
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smsappman smspgc kbSMSAppMankbfixlist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you launch a Program Group Control (PGC) application on a client computer
	running Windows NT, the client may receive an "Out of Memory" error message.
	
	CAUSE
	=====
	
	This error is caused when the path has exceeded 260 characters. In an attempt to
	set a working directory, the Systems Management Server 1.2 Appstart.exe program
	appends the path from which the program was launched to the current path. If
	this new path exceeds 260 characters, the client computer will receive the
	error.
	
	WORKAROUND
	==========
	
	To work around this problem, decrease the size of the path, to have enough space
	to adequately append the path of the program being launched. Generally, a path
	of fewer than 220 characters should be sufficient.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server version 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	Additional query words: prodsms appstart
	
	======================================================================
	Keywords          : kbnetwork kbPGC smsappman smspgc kbSMSAppMan kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	

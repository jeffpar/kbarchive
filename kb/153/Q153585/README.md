---
layout: page
title: "Q153585: SMS: Program Group Not Deleted From Windows NT Client"
permalink: kb/153/Q153585/
---

## Q153585: SMS: Program Group Not Deleted From Windows NT Client

	Article: Q153585
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	A program group created by Systems Management Server for a shared network
	application is not deleted for more than one user on an Windows NT client
	computer.
	
	MORE INFORMATION
	================
	
	If a program group is created by Systems Management Server Program Group Control
	(PGC) for two or more users logging on to the same Windows NT computer (and then
	the program group properties are changed in the SMS Administrator program so
	that it is not available to either user), PGC removes only the group from the
	profile of the first user that runs PGC.
	
	
	WORKAROUND
	==========
	
	To work around this problem, delete the program group manually.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms PGC program group delete remove
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

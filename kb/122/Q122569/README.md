---
layout: page
title: "Q122569: APPCTL Err Msg: Failed to Connect to SMS Network Server..."
permalink: kb/122/Q122569/
---

## Q122569: APPCTL Err Msg: Failed to Connect to SMS Network Server...

	Article: Q122569
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
	
	In Microsoft Systems Management Server, when Application Control (APPCTL) runs
	out of memory trying to allocate a buffer space to determine which user groups a
	user belongs to, the following error message may appear:
	
	  Failed to connect to SMS network server. Cannot determine which user groups
	  the user belongs to.
	
	In addition, if the same behavior occurs during the logon process, APPCTL
	displays a dialog box with the same error message every 15 minutes until the
	allocation of a buffer space is successful.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: sms prodsms appcontrol program control pgc
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

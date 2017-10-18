---
layout: page
title: "Q198728: SMS: Cannot Remote Control Clients Using DirectX"
permalink: kb/198/Q198728/
---

## Q198728: SMS: Cannot Remote Control Clients Using DirectX

	Article: Q198728
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200bug
	Last Modified: 18-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Remote Control session will fail if either of the following conditions are
	true:
	
	- The Remote Control session is attempted from a Systems Management Server 2.0
	  Administrator Console to a Systems Management Server 2.0 client computer
	  while the client computer is running an application that uses DirectX.
	
	  -or-
	
	- An application that uses DirectX is started on the client during the Remote
	  Control session.
	
	This usually results in an exception error in Remote.exe -- access violation
	(0xc0000005) -- on the Administrator Console computer, causing the Remote Tools
	session to be disconnected, but it may also cause the Remote Control viewer on
	the Administrator Console to stop responding.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	- Before attempting to start a Remote Control session, make sure that there are
	  no applications running on the Systems Management Server 2.0 client computer
	  that are using DirectX.
	
	- Do not start any applications on the client that use DirectX while in the
	  Remote Control session.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms rc32 direct x hang hangs hung win95 win9x win 95 9x av
	
	======================================================================
	Keywords          : kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

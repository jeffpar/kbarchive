---
layout: page
title: "Q268473: Cannot Issue the IISRESET Command with the /timeout:0 Switch"
permalink: kb/268/Q268473/
---

## Q268473: Cannot Issue the IISRESET Command with the /timeout:0 Switch

	Article: Q268473
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Internet Information Services (IIS) 5.0 includes a utility named IISRESET that
	gives you the ability to stop and restart IIS without restarting the server.
	Issuing this command with the /timeout:0 switch requires not only administrator
	rights on the Web server, but also the advanced Debug Programs user right.
	
	If a user does not have this right, the following error message is returned:
	
	  Attempting stop...
	  Stop attempt failed.
	  Access denied, you must be an administrator of the remote computer to use this
	  command. Either have your account added to the administrator local group of
	  the remote computer or to the domain administrator global group.
	
	CAUSE
	=====
	
	This behavior is by design. When you issue the /timeout:0 switch effectively,
	IIS kills the running processes. Killing a process requires the Debug Programs
	advanced user right.
	
	RESOLUTION
	==========
	
	To add the Debug Programs advanced user right, perform the following steps:
	
	1. In Administrative Tools, open the Local Security Settings Microsoft
	  Management snap-in.
	
	2. Select the Local Policies container, and then select the User Rights
	  Assignment container. In the right window pane, open the Debug Programs user
	  right.
	
	3. Verify that the required user account has the Debug Programs user right.
	
	  NOTE: As specified in the user interface, if domain-level policy settings are
	  defined, they override local policy settings. If necessary, make this same
	  change to the required user account in the Domain Security Policy snap-in so
	  that it is also in effect at the local server level.
	
	Additional query words: iis 5 iisreset /timeout:0
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

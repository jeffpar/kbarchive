---
layout: page
title: "Q224514: SBS Err Msg: No Email Profile Was Found for the Current User..."
permalink: kb/224/Q224514/
---

## Q224514: SBS Err Msg: No Email Profile Was Found for the Current User...

	Article: Q224514
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0a
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 25-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install BackOffice Small Business Server, the following error message
	may occur when the Administrator account begins creating user accounts:
	
	  No email profile was found for the current user. Please exit this program and
	  create an email profile using the Control Panel application. Then restart
	  this program.
	
	CAUSE
	=====
	
	This behavior occurs because the e-mail profile for the Administrator account is
	not created when you install Small Business Server.
	
	RESOLUTION
	==========
	
	To resolve the issue:
	
	1. Cancel the "Add a New User" process.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Mail.
	
	4. Create an e-mail profile for the Administrator account.
	
	5. Restart Small Business Server.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : winnt:4.0,4.0a
	Issue type        : kbprb
	
	=============================================================================
	

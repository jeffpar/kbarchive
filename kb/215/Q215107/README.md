---
layout: page
title: "Q215107: SMS: Client w/ Non-Admin Rights Doesn't Create CCR for 2nd Site"
permalink: /kb/215/Q215107/
---

## Q215107: SMS: Client w/ Non-Admin Rights Doesn't Create CCR for 2nd Site

	Article: Q215107
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a client with non-administrator rights is assigned to a second site, the
	client does not create a Client Configuration Request file (.ccr) targeted to
	the second site. The client is unable to add additional components or set the
	second site as its primary site.
	
	CAUSE
	=====
	
	If you have one site assigned, and then a user with non-administrator rights
	requires another site, the second site's configuration data is incompletely
	processed because the logged-on user does not have sufficient rights to
	manipulate the registry.
	
	WORKAROUND
	==========
	
	To work around this issue, wait for the Client Component Installation Manager
	(CCIM) to run and reset the registry permissions. After it does so, you are able
	to log on again (as a user with non-administrator rights) and configure the
	second site's information. Run CCIM again (using Setevnt or by waiting for it to
	wake up), and the site is updated for the client.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

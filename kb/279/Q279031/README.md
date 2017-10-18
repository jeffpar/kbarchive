---
layout: page
title: "Q279031: No Method of Installation for Internet Connector Licensing"
permalink: kb/279/Q279031/
---

## Q279031: No Method of Installation for Internet Connector Licensing

	Article: Q279031
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	For Internet sites that use server-based authentication, you may purchase a
	Windows 2000 Internet Connector license as an alternative to individual Windows
	2000 Client Access Licenses (CALs). The license allows an unlimited number of
	authenticated Internet users to access a single Microsoft Windows 2000 server.
	After you purchase the license, you see that no configuration option exists to
	activate the new license.
	
	WORKAROUND
	==========
	
	Because no method exists to distinguish between an authenticated Internet user
	and an authenticated Intranet user, there is no way to filter users out to
	comply with the licensing agreement. To switch to per seat licensing, use the
	following steps:
	
	1. Open Control Panel and open the Licensing applet.
	
	2. In the Product box, click Windows Server.
	
	3. For the licensing mode, select Per Seat.
	
	NOTE: You have only one chance to change from per server to per seat.
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

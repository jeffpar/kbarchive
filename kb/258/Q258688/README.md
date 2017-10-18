---
layout: page
title: "Q258688: WebDAV Doesn't Work with Site Server P&amp;M Forms or Cookie Auth."
permalink: kb/258/Q258688/
---

## Q258688: WebDAV Doesn't Work with Site Server P&amp;M Forms or Cookie Auth.

	Article: Q258688
	Product(s): Internet Information Server
	Version(s): winnt:3.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 11-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Site Server version 3.0 
	- Microsoft Site Server version 3.0, Commerce Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use WWW Distributed Authoring and Versioning (WebDAV) with Microsoft
	Site Server Personalization and Membership (P&M), and your Web site requires
	Membership Authentication, neither the Forms Authentication method nor the
	Cookie Authentication method can be used. WebDAV does not support these
	authentication methods.
	
	MORE INFORMATION
	================
	
	The following Membership Authentication types are used with both the Forms
	Authentication and Cookie Authentication methods:
	
	- Anonymous
	
	- Basic
	
	- Distributed Password Authentication (DPA)
	
	Workaround:
	
	If you use WebDAV for the entire Web site, and either the Forms Authentication
	method or the Cookie Authentication method is used, create a second Web site
	that is configured to use the same content directories, but with a valid and
	supported authentication method.
	
	NOTE: The second site is accessible by the Web developers and other
	administrators only.
	
	Additional query words: iis 5,webdav,authentication,membership,site server
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbSiteServSearch kbiisSearch kbAudDeveloper kbiis500 kbSiteServ300 kbSiteServ300Search
	Version           : winnt:3.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

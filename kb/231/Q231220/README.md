---
layout: page
title: "Q231220: SMS: Unable to Create a Secondary Site of a Child Primary Site"
permalink: kb/231/Q231220/
---

## Q231220: SMS: Unable to Create a Secondary Site of a Child Primary Site

	Article: Q231220
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase kbMMC kbServer kbsms200 kbsms200bug kbsmsAdmin
	Last Modified: 21-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are running a Microsoft Systems Management Server (SMS) 2.0 Administrator
	console that is connected to a central site server, and you attempt to create a
	secondary site attached to a primary child site, the secondary site menu item is
	unavailable (dimmed).
	
	CAUSE
	=====
	
	This behavior occurs because of a limitation of current server architecture.
	
	WORKAROUND
	==========
	
	To work around this issue, follow these steps:
	
	1. Right-click the Systems Management Server icon, point to All Tasks, and then
	  click "Connect to Site Database".
	
	2. Click Next, and then click "Connect to the site database for this site
	  server".
	
	3. Enter the child primary site server name, click Next, and then click Finish.
	
	4. Create the secondary site while you are connected directly to the site
	  database of the child primary site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbDatabase kbMMC kbServer kbsms200 kbsms200bug kbsmsAdmin 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

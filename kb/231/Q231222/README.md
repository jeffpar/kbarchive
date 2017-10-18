---
layout: page
title: "Q231222: SMS: Scripts Not Removed When Logon Point Is Removed"
permalink: kb/231/Q231222/
---

## Q231222: SMS: Scripts Not Removed When Logon Point Is Removed

	Article: Q231222
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbConfig kbMMC kbServer kbsms200 kbsms200bug kbBindery kbDiscovery kb
	Last Modified: 21-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change or remove a Novell Netware Bindery logon point, the changes are
	accepted by the Microsoft Systems Management Server Administrator console,
	although those changes are never actually implemented on the Netware Bindery
	server.
	
	WORKAROUND
	==========
	
	To work around this issue, manually remove the logon scripts and supporting
	files after you disable Novell Netware Logon Installation/Discovery for the site
	from the specific server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbConfig kbMMC kbServer kbsms200 kbsms200bug kbBindery kbDiscovery kbOSNovell kbsmsAdmin 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

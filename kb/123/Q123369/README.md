---
layout: page
title: "Q123369: Adding a Pure LAN Manager Domain to SMS"
permalink: kb/123/Q123369/
---

## Q123369: Adding a Pure LAN Manager Domain to SMS

	Article: Q123369
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbSCMan smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Due to the way the Windows NT Computer Browser service manages LAN Manager/LAN
	Server domains in its browse list, the Site Configuration Manager may fail to
	enumerate a LAN Manager/LAN Server-only domain when adding a LAN Manager/LAN
	Server domain to a Systems Management Server site. It is possible to correct
	this by modifying the configuration of the Computer Browser service on the site
	server domain primary domain controller (PDC).
	
	On the site server domain PDC, the Computer Browser service must be specifically
	configured to include the LAN Manager/LAN Server domain. To do this, use the
	following procedure:
	
	1. In Control Panel, choose the Network icon.
	
	2. In the Network Settings dialog box, select Computer Browser and choose
	  Configure.
	
	3. For Other Domain, type the name of the LAN Manager/LAN Server domain and
	
	choose Add. Choose OK.
	
	This procedure will cause the Computer Browser service for the domain to track
	needed information on the LAN Manager/LAN Server domain, allowing SMS to
	successfully configure the new domain. This is not specific to SMS and may also
	be needed for simple domain and server browsing from within File Manager on a
	network with both Windows NT domains and pure LAN Manager/LAN Server domains.
	
	Additional query words: config sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbSCMan smssiteconfigman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

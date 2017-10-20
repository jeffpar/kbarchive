---
layout: page
title: "Q101835: Mac Srv: New Server in Site Automatically Becomes Access"
permalink: /kb/101/Q101835/
---

## Q101835: Mac Srv: New Server in Site Automatically Becomes Access

{% raw %}

	Article: Q101835
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you use the Gateway Installer for version 3.0 or 3.1 of Microsoft Mail for
	AppleTalk Networks to install a gateway, which supports auto-propagating access
	gateways, access gateway information will be propagated to all other servers in
	the same site. You must check the "All in-site servers can access" check box for
	this to happen.
	
	After auto-propagation has occurred, when a new Mail server appears in the
	gateway server's site, the new server automatically becomes an access gateway,
	like the rest of the servers in the site.
	
	When the master gateway is removed, a server-server classified message titled
	MasterGone is sent to all servers in the same site. This causes each server to
	remove all of its resources related to the gateway.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}

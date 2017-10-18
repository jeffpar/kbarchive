---
layout: page
title: "Q226382: XWEB: WWW Service Crash Causes Server Unavailable Errors w/WLBS"
permalink: kb/226/Q226382/
---

## Q226382: XWEB: WWW Service Crash Causes Server Unavailable Errors w/WLBS

	Article: Q226382
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are connected with a browser to an Outlook Web Access (OWA) server, the
	following error messages may be displayed if this server is also a part of a
	cluster of Windows Load Balancing Servers (WLBS), and the WWW publishing service
	has stopped:
	
	  Sorry! The Microsoft Exchange Server is down or the HTTP service has been
	  disabled by an administrator. Please try your request again later.
	
	-or-
	
	  HTTP/1.0 404 Object Not Found
	
	-or-
	
	The browser screen may be displayed as a white screen and the browser may also
	display an error similar to the following:
	
	  Host Not Found
	
	-or-
	
	  This page cannot be displayed.
	
	MORE INFORMATION
	================
	
	You may get the above error messages if the WWW service has failed on the server
	your client is connected to. After the service fails, you will be unable to
	connect to your Exchange Server computer using the OWA component. Even though
	the OWA server is a part of a WLBS cluster, the WLBS service is not aware that
	the service has stopped, and therefore, cannot redirect you to another on-line
	server. To use OWA to access your Exchange mailbox, you will have to close the
	browser and start again in order to connect to another OWA server.
	
	In version 2.2 for Windows NT 4.0, WLBS does not include application monitoring
	tools or features. Many leading monitoring tools on the market can be easily
	configured by an end-user to provide this support by creating an alert option
	specifically for WLBS. In the alert functions of many monitoring tools, an
	option is provided for running a script in addition to the standard "Page this
	number" or "E-mail this address" options. Using these scripts, WLBS can be tied
	into the existing monitoring infrastructure.
	
	For example, if the Internet Information Service (IIS) application on Server A
	does not respond for X seconds, then run the following script:
	
	  'wlbs stop (cluster IP address):(Server A's host ID or dedicated IP address)
	
	Some examples of third-party tools:
	
	- SiteScope by Freshwater Software (http://www.freshtech.com)
	- AppManager by NetIQ (http://www.netiq.com)
	- WhatsUp Gold by Ipswitch
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

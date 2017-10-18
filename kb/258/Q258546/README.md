---
layout: page
title: "Q258546: Cannot Retrieve Default Web Site from External Network"
permalink: kb/258/Q258546/
---

## Q258546: Cannot Retrieve Default Web Site from External Network

	Article: Q258546
	Product(s): Internet Information Server
	Version(s): winnt:2.0,4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	- Microsoft Proxy Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Proxy Server on a Web server, the Default Web Site
	cannot be retrieved by default from the external network even though the All
	Unassigned option is selected in the properties for the Default Web Site.
	
	The following error messages may occur:
	
	  10053 Software caused connection to abort
	
	  Internet Explorer cannot open the Internet site http://<name>/.
	  The server returned an invalid or unrecognized response
	
	Any other Web site that uses the All Unassigned option or specifies an IP address
	can be viewed on the outside network.
	
	CAUSE
	=====
	
	This behavior occurs because the W3proxy.dll file is running as an ISAPI
	extension in the Default Web Site. The W3proxy.dll file filters out the
	requests, and rejects all incoming connections. It only accepts the incoming
	connections after the Enable Web Publishing setting is selected.
	
	Any other Web site that does not contain the W3proxy.dll file as an ISAPI
	extension is not bound by the Enable Web Publishing setting of Web Proxy.
	
	Web Proxy only runs on the Default Web Site. This behavior is by design for Proxy
	Server 2.0. Also, the Default Web Site should not be changed. In other words, do
	not change the IP addressing, Default Web Site name, or the local path. General
	practice is not to change it at all; however, you can add virtual directories to
	the Default Web Site.
	
	WORKAROUND
	==========
	
	Select the Enable Web Publishing setting in Web Proxy and send all requests to
	the local server.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbAudDeveloper kbiis500 kbiis400 kbProxyServSearch kbProxyServ200
	Version           : winnt:2.0,4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

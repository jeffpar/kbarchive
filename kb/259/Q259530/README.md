---
layout: page
title: "Q259530: Error Message Connecting to Your MMS Server by an HTTP Port"
permalink: /kb/259/Q259530/
---

## Q259530: Error Message Connecting to Your MMS Server by an HTTP Port

	Article: Q259530
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the "http://<localhost>" or "http://MMSservername" syntax to
	connect to your metadirectory in Microsoft Internet Explorer, you may receive
	one of the following error messages.
	
	In Internet Explorer 5:
	
	  The page cannot be displayed
	
	In Internet Explorer 4.01:
	
	  Internet Explorer cannot open the Internet site Http://MMSservername/.
	  A connection with the server could not be established.
	
	CAUSE
	=====
	
	Your Microsoft Metadirectory Services (MMS) server is configured to use an HTTP
	port other than port 80. MMS HTTP and LDP ports are configurable and you can
	modify them from their defaults. The default port for HTTP is port 80 and for
	LDP is port 389.
	
	This problem can occur if you install MMS on a domain controller that is running
	Microsoft Windows 2000 or on the same member server as another program that is
	already using the port (for example, Microsoft Exchange Server). When you
	install MMS on a Windows 2000-based domain controller, the HTTP port must be
	modified to a port other than port 80. For additional information, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q250893 Zoomit Server Service Does Not Start After Installing MMS
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following syntax to connect to the metadirectory
	by using an alternative HTTP port:
	
	- http://<localhost>:<port>
	
	- http://<MMSservername>:<port>
	
	MORE INFORMATION
	================
	
	Generally, for performance reasons, Microsoft does not recommend running MMS on
	a domain controller. For additional information about performance
	recommendations for MMS, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q252995 Performance Recommendations for Microsoft Metadirectory Services
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	

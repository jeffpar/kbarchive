---
layout: page
title: "Q197230: HOWTO: Deploy Visual SourceSafe Across a Proxy Server"
permalink: /kb/197/Q197230/
---

## Q197230: HOWTO: Deploy Visual SourceSafe Across a Proxy Server

	Article: Q197230
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe500 kbSSafe600 kbSSExplorer
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set up deploying from Visual SourceSafe through a
	firewall.
	
	MORE INFORMATION
	================
	
	When setting up a Web project that needs to be deployed outside of your
	firewall, there are two things that have to be set up. First of all you need to
	have a Web project in order to deploy the project. In order to set a project as
	a Web project, please follow the instructions in the following article in the
	Microsoft Knowledge Base:
	
	  Q194826 HOWTO: Designate a Visual SourceSafe project as a Web Project
	
	In the SourceSafe Administrator, under the Tools menu, select Options. Click the
	Web Tab. This tab sets up the settings for deploying a Web project to a remote
	server that is located outside the firewall.
	
	The setting, "Proxy for deploying over ftp:," expects the address of the proxy
	server that is going to be deployed through. The setting may have to be entered
	as an IP address instead of the DNS (Domain Name System) name for it to work
	correctly. This setting, depending on your internal network, may require you to
	enter the protocol as well, for example:
	
	ftp://123.45.67.123
	
	When deploying through a FTP proxy, port 21 is used.
	
	For example, if ftp://123.45.67.123:27 is the proxy server address, port 21 will
	be used instead of the specified port 27.
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q194826 HOWTO: Designate a Visual SourceSafe project as a Web Project
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500 kbSSafe600 kbSSExplorer 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

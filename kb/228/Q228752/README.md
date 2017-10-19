---
layout: page
title: "Q228752: Service Could Not be Started Because It Is Not Correct"
permalink: /kb/228/Q228752/
---

## Q228752: Service Could Not be Started Because It Is Not Correct

	Article: Q228752
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run either the New Web Site Wizard or the New FTP Site Wizard, and
	accept the default IP Address and TCP Port values provided by the wizard, the
	following error occurs when you try to start the new Web site.
	
	  The service could not be started because it is not correctly configured. Make
	  sure that its server bindings do not conflict with other sites running on the
	  same machine.
	
	CAUSE
	=====
	
	Because the wizard defaults to the IP Address and TCP Port values that are
	already in use by the default Web (or FTP) site, the new site attempts to use
	the same settings. IIS does not allow this, because each site must be uniquely
	identified by an IP Address, TCP Port number, or Host Header.
	
	RESOLUTION
	==========
	
	Specify a different IP Address, TCP Port number, or add a Host Header for the
	new site. To do this, perform the following steps:
	
	1. Start the Internet Service Manager (ISM), which loads the Internet
	  Information Server snap-in for the Microsoft Management Console (MMC).
	
	2. Right-click the new service, and then click Properties on the Context menu.
	
	3. For a Web site, click the Web Site tab.
	
	  For an FTP site, click the FTP Site tab.
	
	The default Web site uses TCP Port 80, and the default FTP site uses TCP Port
	21.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q190008 HOW TO: Use Host Header Names to Host Multiple Sites from One IP
	  Address in IIS 5.0
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: hostheader akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

---
layout: page
title: "Q184032: Accessing Internet Site Shows Default Proxy Server Page"
permalink: /kb/184/Q184032/
---

## Q184032: Accessing Internet Site Shows Default Proxy Server Page

	Article: Q184032
	Product(s): Internet Information Server
	Version(s): WINNT:2.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Proxy Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access an Internet Web site via a browser configured to use Web Proxy,
	the default page of Proxy Server version 2.0 is displayed while the requested
	URL appears in the address line and in the title bar of the browser. This is
	evident in Proxy Server computers with multiple netcards.
	
	CAUSE
	=====
	
	There are multiple Web sites (default and any additional) created in the
	Microsoft Management Console (MMC) of Internet Information Server version 4.0,
	and the additional Web sites are configured to use the internal NIC IP
	address(es). You may also get the default Proxy Server page if you have multiple
	Web sites and the default Web site is set to use the external IP address.
	
	WORKAROUND
	==========
	
	Change the IP address(es) of the additional Web site(s) to match an external
	address, and set the default Web site to All Unassigned.
	
	-OR-
	
	Configure the additional Web site(s) to use All Unassigned, and then set the
	default Web site to an internal IP address.
	
	-OR-
	
	Configure a new Web site to host the content in the default Web site and assign
	it an external address.
	
	NOTE: Whenever you modify the IP address of a Web site, it is recommended that
	you stop and restart the Web site to ensure that the changes have been made.
	
	To View the Web Site Properties, perform the following steps:
	
	1. In the Microsoft Management Console, select the Servername icon and click the
	  Action button.
	
	2. Select Properties.
	
	3. Modify the IP Address field to the desired setting.
	
	To Create a New Web Site:
	
	1. In the Microsoft Management Console, select the Servername icon and click the
	  Action button.
	
	2. Select New/Web Site.
	
	3. Follow the instructions in the New Web Site Wizard.
	
	MORE INFORMATION
	================
	
	As a general practice, it is recommended that you do not use the default Web
	site as your main Web page location. Instead, create a new site in the Microsoft
	Management Console, host your information there, and assign it the desired IP
	address setting.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbAudDeveloper kbiis400 kbProxyServSearch kbProxyServ200
	Version           : WINNT:2.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	

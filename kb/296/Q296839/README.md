---
layout: page
title: "Q296839: Administrator Client Fails to Open Subdomain in SNA Manager"
permalink: /kb/296/Q296839/
---

## Q296839: Administrator Client Fails to Open Subdomain in SNA Manager

	Article: Q296839
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupportkbbuglist
	Last Modified: 14-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use SNA Manager to administer a subdomain from a Host
	Integration Server Administrator Client, the subdomain display will not open. A
	message may be returned indicating that the subdomain cannot be found and an
	Application Event ID 5149, "Manage base error - error in accessing the domain
	table" may occur.
	
	WORKAROUND
	==========
	
	To administer a subdomain from an Administrator Client you should either use the
	computer name of the server when you are running the Host Integration Server SNA
	Resource Location Wizard or, when opening the SNA Manager, right-click SNA
	Manager and choose Open Subdomain and then click Remote SNA Subdomain. Several
	choices are offered including UNC name and IP address.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Host Integration Server 2000.
	
	
	MORE INFORMATION
	================
	
	This occurs after you have run the Microsoft Host Integration Server SNA
	Resource Location Wizard and you select a sponsor server by using an IP address
	or a UNC name for the server name instead of the computer name of the server.
	Microsoft SNA Server 4.0 allows a server name to be the computer name, the UNC
	name of the server, or the IP address of the server.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbbuglist
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

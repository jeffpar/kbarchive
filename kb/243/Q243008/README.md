---
layout: page
title: "Q243008: IIS Won't Start if Client for Microsoft Networks Is Uninstalled"
permalink: kb/243/Q243008/
---

## Q243008: IIS Won't Start if Client for Microsoft Networks Is Uninstalled

	Article: Q243008
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbiis500
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you remove the Client for Microsoft Networks, the following services will
	not start: the World Web Publishing Service, the FTP Publishing Service, the
	Simple Mail Transfer Protocol (SMTP) Service, and the Network News Transfer
	Protocol (NNTP) Service.
	
	When you attempt to start these services from the Services Microsoft Management
	Console (MMC) snap-in, the following error message appears:
	
	  Could not start the <ServiceName> service on the Local Computer.
	  Error:1747 The Authentication service is unknown
	
	When you try to start these services from the IIS MMC snap-in, the following
	error message appears:
	
	  The Service did not respond to the Start or Control request in a timely
	  fashion.
	
	CAUSE
	=====
	
	The IIS 5.0 services rely upon the RPC (remote call procedure) Locator service.
	When the Client for Microsoft Networks is uninstalled, the RPC Locator Service
	is also uninstalled.
	
	WORKAROUND
	==========
	
	If Client for Microsoft Networks is no longer needed or desired, simply disable
	it. To do so follow these steps:
	
	1. Right-click My Network Places and click Properties.
	
	2. Right-click Local Area Connection and click Properties.
	
	3. Clear the Client for Microsoft Networks check box.
	
	4. Click OK.
	
	The Client for Microsoft Networks is now disabled. IIS 5.0 will run properly in
	this configuration.
	
	
	Additional query words: iis
	
	======================================================================
	Keywords          : kbiis500 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

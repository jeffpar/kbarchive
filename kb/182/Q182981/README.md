---
layout: page
title: "Q182981: XADM: Performance Optimizer Settings for Small Business Server"
permalink: /kb/182/Q182981/
---

## Q182981: XADM: Performance Optimizer Settings for Small Business Server

	Article: Q182981
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,4.0a,4.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a, 4.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Exchange Performance Optimizer is run automatically at the end of the Small
	Business Server (SBS) Setup in silent mode.
	
	MORE INFORMATION
	================
	
	Performance Optimizer is called with the /m and the /s options, where /m
	specifies the SBS configuration and /s specifies silent mode (without the UI).
	
	The settings for an SBS 4.0 or 4.0a server are as follows:
	----------------------------------------------------------
	
	1. Users on this server is set to 1-25 users.
	
	2. Users in the organization is set to less than 100 users.
	
	3. Type of server is set to private store and public store.
	
	The settings for an SBS 4.5 server are as follows:
	--------------------------------------------------
	
	1. Users on this server is set to less than 500.
	
	2. Users in the organization is set to less then 1,000.
	
	3. Type of server is set to private store and public store.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a kbSBServ450
	Version           : winnt:4.0,4.0a,4.5
	Issue type        : kbinfo
	
	=============================================================================
	

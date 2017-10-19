---
layout: page
title: "Q89436: Changing Computer's Role Causes Workstation to Not Start"
permalink: /kb/089/Q89436/
---

## Q89436: Changing Computer's Role Causes Workstation to Not Start

	Article: Q89436
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	If you change a server's role from backup or primary to standalone and back
	again (as when you synchronize the user accounts database) services such as the
	Remote Access Service (RAS) no longer start.
	
	CAUSE
	=====
	
	When a server's role is changed to standalone, the Netlogon Service is removed.
	(You can confirm this by looking at the srvservices line in the LANMAN.INI
	file.) When the role is changed to backup or primary, the Netlogon service is
	added, but it is added to the end of the srvservices line in the LANMAN.INI
	file, so all services before Netlogon are started first. Some services such as
	the Remote Access Service require Netlogon to be running before they can start,
	so they fail to start, preventing the workstation from starting.
	
	RESOLUTION
	==========
	
	After switching roles on a server (for example, backup -> standalone ->
	backup), examine the LANMAN.INI file and make sure that the Netlogon service is
	listed before any other service, such as RAS.
	
	Additional query words: 2.1 2.10
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

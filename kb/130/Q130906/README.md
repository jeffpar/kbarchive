---
layout: page
title: "Q130906: Site Configuration Manager's Stages of Operation"
permalink: kb/130/Q130906/
---

## Q130906: Site Configuration Manager's Stages of Operation

	Article: Q130906
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbHMan kbSCMan smshierman smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Site Configuration Manager component for Systems Management Server performs
	numerous operations during its "watchdog" cycle. This article describes four
	stages of the cycle. Each stage, as it is performed, can be monitored via the
	service trace log file (SCMAN.LOG) for Site Configuration Manager located in the
	root directory of the drive that Systems Management Server is installed in.
	
	MORE INFORMATION
	================
	
	Stage 1
	-------
	
	a. Calculate if intervals have timed out for logon scripts, status file or user
	  group mif.
	
	b. Write site identification information to registry.
	
	c. Write domains and logon servers to registry.
	
	d. Write site account, addresses, outboxes, misc config information to the
	  registry.
	
	e. Write SQL Server information to registry.
	
	NOTE: Steps b through e are only performed if a site control image (*.CT1) file
	is detected. The alternative is that the Site Configuration Manager woke up due
	to a polling interval, and there is no *.CT1 file present.
	
	Stage 2
	-------
	
	The Site Configuration Manager reads the list of domains for the site (found in
	the registry) and for each domain, it enumerates the servers to find all logon
	servers. The logon servers are added to the registry and are marked as
	pending-install if they are new.
	
	Stage 3
	-------
	
	The Site Configuration Manager now uses the registry as the definition for the
	site installation and verifies that the actual installation of domains and
	components exist as defined. It removes any domains, servers, or components that
	are marked as pending-uninstall and installs any that are marked as pending
	install. For any that are marked as active, it verifies the installation.
	
	Stage 4
	-------
	
	The Site Configuration Manager reports the installation status of the site by
	writing a site control file (*.CT2) and sending this file back to the Hierarchy
	Manager. If this site was installed remotely, a mini-job is used to send the
	file to the parent.
	
	Additional query words: config sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbHMan kbSCMan smshierman smssiteconfigman 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	

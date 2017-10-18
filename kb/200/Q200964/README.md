---
layout: page
title: "Q200964: SMS: Reasons Software Metering Server Fails to Install"
permalink: kb/200/Q200964/
---

## Q200964: SMS: Reasons Software Metering Server Fails to Install

	Article: Q200964
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 23-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When installation of a software metering server fails, there are several areas
	to troubleshoot.
	
	Connectivity and Permissions
	----------------------------
	
	Verify that the License Server Manager on the Systems Management Server site
	server has connectivity to the new software metering server. To do so, perform a
	ping test using the NetBIOS name and then connect to the C$, D$, and Admin$
	shares using a domain administrator account. Verify that the License Server
	Manager account being used by software metering from the Systems Management
	Server site server has administrative rights on the new software metering
	server. This account must have administrative rights on the new server because
	it will need to create file structures, services, and registry entries. For
	additional information, see \Sms\Logs\Licsvcfg.log on the site server.
	
	ODBC Compliance
	---------------
	
	Verify that the ODBC drivers on the software metering server are at least version
	2.52. Confirm this by either checking the version of the drivers or by verifying
	that the Install_ODBC process has completed successfully. License Manager
	Service will not proceed with the software metering server installation until
	the ODBC drivers are version 2.52 or newer.
	
	Inbox and Service Creation
	--------------------------
	
	The License Server Manager should create the required inboxes on the target
	server. Verify that these are present and were installed without problems by
	looking in \Sms\Logs\Inboxmgr.log on the site server. Once the inboxes have been
	created, License Server Manager completes the file transfer and installation,
	creates the SMS_LICENSE_SERVER service on the target server, and starts the
	service. Verify that this has taken place by checking \Sms\Logs\Licsrvc.log.
	
	Additional information pertaining to the target server installation is found in
	\Sms\Logs\Smsprov.log and \SMS\Logs\Sitectrl.log on the site server.
	
	Additional query words: prodsms swmeter
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

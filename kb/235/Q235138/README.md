---
layout: page
title: "Q235138: SMS: Unable to Delete Site System from Administrator UI"
permalink: /kb/235/Q235138/
---

## Q235138: SMS: Unable to Delete Site System from Administrator UI

	Article: Q235138
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 02-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to delete a Site System with the Systems Management Server
	(SMS) Administrator UI under
	
	Systems Management Server
	  Site Database (site code - site name)
	     Site Hierarchy
	        site code - site name
	           Site Settings 
	              Site Systems 
	
	the server disappears, and then reappears when upon refresh.
	
	This problem occurs for systems which once served as a Client Access Point (CAP)
	site system role.
	
	SMS 2.0 (without a service pack) will raise status message errors every hour if
	the server can not be uninstalled successfully.
	
	CAUSE
	=====
	
	The Site System carries the Component Server role and the Administrator UI is
	designed to not remove any site systems which are still serving an active site
	system role.
	
	After all Administrator-definable roles are removed from the Site System
	properties of the system to be removed, Site Component Manager (an SMS core
	service) is instructed to "de-install" and remove the x:\SMS directory
	structure, SMS Executive service, and registry entries from the server in
	question. After the deinstallation of the server is complete, the Site Component
	Server disappears, or 7 days after a retry attempt has failed, at which point
	the Site Component Manager assumes the server is permanently offline, the role
	of Component Server is removed.
	
	The Component Server role is not definable by the Administrator and cannot be
	modified manually.
	
	WORKAROUND
	==========
	
	Wait for Site Component Manager to remove Component Server role after successful
	deinstallation of the Client Access Point or wait for the 7-day retry interval
	to pass, and then delete the server within the SMS Administrator UI.
	
	If the server in question is no longer available and SMS is in use without a
	service pack, upgrade to the latest Service Pack.
	
	
	Additional query words: prodsms sitecomp component delete
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	

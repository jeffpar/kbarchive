---
layout: page
title: "Q156386: SMS: Standalone Servers Report to Site Server Domain"
permalink: kb/156/Q156386/
---

## Q156386: SMS: Standalone Servers Report to Site Server Domain

	Article: Q156386
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory kbSCMan smsinv smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Any standalone computers running Windows NT Server that belong to a second tier
	domain will report their inventory to the Systems Management Server site
	server's domain instead of to their own domain if both of the following
	conditions are true:
	
	- The Systems Management Server sites have two or more Windows NT Server
	  domains.
	
	-and-
	
	- The domain is configured to automatically detect all servers.
	
	CAUSE
	=====
	
	The Systems Management Server Site Configuration Manager is giving the wrong
	domain to the client set up during the initial installation of the server
	through the "Auto-detect all servers" option. Site Configuration Manager always
	specifies the site server's domain, so that the logon server that is used is
	from the site server's domain. This results in an Sms.ini file created on the
	client containing the site server domain instead of its own domain.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	
	A supported fix is now available, but is not fully regression-tested and should
	be applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Technical
	Support for more information.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbInventory kbSCMan smsinv smssiteconfigman 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	

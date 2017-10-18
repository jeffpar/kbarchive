---
layout: page
title: "Q156418: SMS: Standalone Servers Report to Site Server Domain"
permalink: kb/156/Q156418/
---

## Q156418: SMS: Standalone Servers Report to Site Server Domain

	Article: Q156418
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbInventory kbSCMan smsinv smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Systems Management Server sites have two or more Windows NT domains, and
	the domain is configured to auto-detect all servers, any Windows NT standalone
	servers that belong to a second tier domain will report their inventory to the
	Systems Management Server site server's domain, rather than their own domain.
	
	CAUSE
	=====
	
	The Systems Management Server Site Configuration Manager is giving the wrong
	domain to the client set up during the initial installation of the server
	through the auto-detect all servers option. Site Configuration Manager always
	specifies the site server's domain, so that the logon server that is used is
	from the site server's domain. This results in an Sms.ini file containing the
	site server domain (instead of its own domain) being created on the client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. A supported fix is now available, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbInventory kbSCMan smsinv smssiteconfigman 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	

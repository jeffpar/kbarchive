---
layout: page
title: "Q199169: SMS: Secondary Site Has Status Messages From NetWare Components"
permalink: /kb/199/Q199169/
---

## Q199169: SMS: Secondary Site Has Status Messages From NetWare Components

	Article: Q199169
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbBindery kbNDS kbOSNovell kbSiteComp
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A secondary site may be showing system status messages for NetWare components
	unable to start due to the Intranetware Client not being installed on the
	server.
	
	CAUSE
	=====
	
	During a secondary site install from a Primary site server that contains NetWare
	components, the NetWare options are transferred to the secondary site and the
	threads for NetWare are automatically started. This is a problem if that
	secondary site was never meant to work with any NetWare servers.
	
	WORKAROUND
	==========
	
	If the secondary site will have NetWare resources configured as system roles,
	then applying the Intranetware client to the server should stop the system
	status messages from being created.
	
	If the NetWare components are not needed on this secondary site, then uninstall
	the secondary site and reinstall using the CD Installation method. This method
	allows you to not select the NetWare components during the reinstallation.
	
	NOTE: Running the setup program at the secondary site that is producing the
	status messages shows you the checkboxes for the NetWare components. However,
	these components are unable to be deselected and removed as they are dimmed and
	unavailable. Uninstallation and reinstallation of the secondary site through the
	CD method without enabling the NetWare components is the recommended method to
	unable them.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: NDS Bindery prodsms nwroles
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbBindery kbNDS kbOSNovell kbSiteComp 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

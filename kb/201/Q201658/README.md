---
layout: page
title: "Q201658: SMS: No Status Messages If Secondary Site Is Not Installed"
permalink: kb/201/Q201658/
---

## Q201658: SMS: No Status Messages If Secondary Site Is Not Installed

	Article: Q201658
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the installation of a secondary site that is initiated from a parent
	site, the installation status may stop at "Pending." When this occurs, the
	site's status may show that the installation did not succeed. The Bootstrap
	service on the secondary site may be started, or may not have started
	successfully.
	
	CAUSE
	=====
	
	If a problem occurs when the Bootstrap service is starting or in the running of
	the Bootstrap service tasks during the secondary site creation process, no
	status message is sent to the parent site. An entry may or may not be written to
	the Bootstrap log file (Sms_bootstrap.log) to indicate a problem. When this
	occurs, the primary parent site shows the secondary site in a pending state.
	
	This behavior occurs because after the Bootstrap service has been installed and
	an attempt has been made to start it, the Sender thread at the parent site is
	disconnected and no communication path exists between the parent and child site
	until the child site installation is complete.
	
	If the Bootstrap service cannot install the site during the secondary site
	creation, it records that information in the Bootstrap log on the secondary site
	server. The Bootstrap service then quits. No status message is sent to the
	parent site server.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about the secondary site installation process, see
	the "Microsoft Systems Management Server 2.0 Resource Guide," Chapter 19. This
	document is part of Microsoft BackOffice Resource Kit version 4.5.
	
	Additional query words: prodsms smssetup
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

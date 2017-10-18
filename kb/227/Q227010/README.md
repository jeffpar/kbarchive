---
layout: page
title: "Q227010: SMS: Site Comp Mgr Fails to Install/Uninstall a Component; Sitec"
permalink: kb/227/Q227010/
---

## Q227010: SMS: Site Comp Mgr Fails to Install/Uninstall a Component; Sitec

	Article: Q227010
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 10-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server Service SMS_Site_Component_Manager may fail to
	install and or uninstall a component.
	
	The Sitecomp.log will show information similar to the following:
	
	  Starting bootstrap operations...  
	  $$<SMS_SITE_COMPONENT_MANAGER>
	  <Fri Mar 26 10:43:41.547 1999 Eastern Standard Time><thread=281 (0x119)>
	  Component file list item in the install map for component SMS_INBOX_MANAGER_ASSISTANT does not contain Srvboot.exe.  
	  $$<SMS_SITE_COMPONENT_MANAGER><Fri Mar 26 10:43:41.547 1999 Eastern Standard Time><thread=281 (0x119)>
	  Bootstrap operations aborted.  $$<SMS_SITE_COMPONENT_MANAGER>
	  <Fri Mar 26 10:43:41.547 1999 Eastern Standard Time><thread=281 (0x119)>
	
	CAUSE
	=====
	
	The Install.map (in the root of the Systems Management Server install directory)
	is missing information from the component file list.
	
	WORKAROUND
	==========
	
	Contact Product Support Services (PSS) for assistance in modifying the
	Install.map file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	

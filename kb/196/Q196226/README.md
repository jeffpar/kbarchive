---
layout: page
title: "Q196226: SMS: Site Component Manager May Fail When Polling"
permalink: kb/196/Q196226/
---

## Q196226: SMS: Site Component Manager May Fail When Polling

	Article: Q196226
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 21-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In System Management Server 2.0, the Site Component Manager service (similar to
	the Site Configuration Manager service in System Management Server 1.2) is
	responsible for installing and removing services and thread components at a
	Systems Management Server site. By default, the Systems Management Server site
	and SMS database server are Component servers. However, there may be cases where
	the Site Component Manager service fails to install theses components.
	You may see the following error message in the Sitecomp.log file on the site
	server:
	
	  
	
	  Polling multisite component server NCSMSSQL65..
	
	     Installing server...
	        Server's platform type is X86.
	        Server is running Microsoft Windows NT Server 4.0 Service Pack 1.
	        This version of SMS cannot be installed on machines running this
	        operating system.
	     Server installation failed and will be retried in the next polling
	     cycle.
	
	CAUSE
	=====
	
	This error message can appear in the Sitecomp.log file if the Systems Management
	Server site server computer has Windows NT Server 4.0 Service Pack 3 applied,
	but the computer storing the SMS database does not.
	
	WORKAROUND
	==========
	
	To work around this problem, make sure the computer that is storing the SMS
	database has Windows NT Server 4.0 Service Pack 3 applied.
	
	Additional query words: prodsms sp sp3
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

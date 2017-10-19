---
layout: page
title: "Q226843: SMS: Setup Doesn't Fail As Expected in Unsupported Installation"
permalink: /kb/226/Q226843/
---

## Q226843: SMS: Setup Doesn't Fail As Expected in Unsupported Installation

	Article: Q226843
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The installation of a Primary site on a server hosting a database and SQL
	providers from another site is not a supported configuration. However, when you
	install a Primary site (with local SQL only) on a computer that is a remote SQL
	server for another Microsoft Systems Management Server (SMS) site, Setup allows
	you to proceed with the installation. Because this is not a supported
	configuration, Setup should gracefully fail during both Express Setup and Custom
	Setup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	If SMS and SQL are installed on separate computers, Setup prompts you to select
	a location in which to install the SMS provider. For performance reasons,
	consider installing the SMS provider on the same server as the SQL Server
	computers (the default). After all these options have been configured, Setup
	begins copying files, registering DLLs and COM objects, and performing
	installation tasks.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	

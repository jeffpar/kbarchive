---
layout: page
title: "Q263437: Adding Software Metering to a Secondary Site After Installation"
permalink: /kb/263/Q263437/
---

## Q263437: Adding Software Metering to a Secondary Site After Installation

	Article: Q263437
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsetup kbConfig kbServer kbsms200 kbsms200bug kbsmsMeter kbsms200preSP3
	Last Modified: 22-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Software Metering on a secondary site by using the Systems
	Management Server (SMS) CD-ROM, an invalid site system on the secondary site
	server is created. You see "SMS Software Metering Database Server" with a blank
	server name in the Administrator console at the primary site. The server name is
	displayed as "\\" in the console.
	
	CAUSE
	=====
	
	Adding the Software Metering component to a secondary site creates an "SWM SQL
	Database" status object and site system at the secondary site. This site system
	has an empty server name and cannot be changed or deleted. Numerous error
	messages are produced on the system because the status of the site system cannot
	be determined.
	
	WORKAROUND
	==========
	
	You must install Software Metering when the you first create the secondary
	site.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup kbConfig kbServer kbsms200 kbsms200bug kbsmsMeter kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

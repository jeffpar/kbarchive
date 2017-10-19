---
layout: page
title: "Q201762: SMS: Software Metering Clients Receive Error in liccli.log"
permalink: /kb/201/Q201762/
---

## Q201762: SMS: Software Metering Clients Receive Error in liccli.log

	Article: Q201762
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Software Metering is set up on the site but the clients are not responding to
	license limitations and show an error in their liccli.log:
	
	  "ERROR: Registry key missing or corrupt."
	
	MORE INFORMATION
	================
	
	In setting up Software Metering on a site with no server defined as a site
	software metering server, the error above will appear in the client's liccli.log
	if the Software Metering agent is installed on a client. This occurs because
	Software Metering will not install a value for a registry key indicating the
	License servers in HKLM\Software\Microsoft\SMS\Client\Sites\<site
	code>\Client Components\License Metering, and will also be missing its
	necessary sub-key.
	
	To resolve this problem:
	
	1. Go into the SMS Administrator console.
	
	2. Right-click on SMS\Site Database<site name>\Site Hierarchy\<site
	  name>\Site Settings\Site Systems\<site Server\
	
	3. Go to Software Metering Server.
	
	4. Check the box that reads "Use this site system as a software metering
	  server."
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

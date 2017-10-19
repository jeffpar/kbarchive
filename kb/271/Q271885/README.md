---
layout: page
title: "Q271885: SMS: Scripted Site Server Install Allows Lower Case Site Code"
permalink: /kb/271/Q271885/
---

## Q271885: SMS: Scripted Site Server Install Allows Lower Case Site Code

	Article: Q271885
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Setup script to install Systems Management Server (SMS), you are
	able to specify the site code in lowercase within the script file. This
	information is then inserted into the site control file.
	
	Another symptom of this issue is a large quantity of status message "ID=4613"
	warnings for the SMS Component Summarizer component.
	
	CAUSE
	=====
	
	Not all of the SMS components are case-insensitive.
	
	WORKAROUND
	==========
	
	Make sure to use only uppercase when specifying a site code in a scripted site
	server installation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	The Site Component Manager (SMS_COMPONENT_STATUS_SUMMARIZER) expects all
	incoming status messages to be in uppercase. When it receives an incoming status
	message with the site code in lowercase, all incoming status messages from that
	site are deemed invalid, and are placed into the retry queue. Each time it
	places a message into the retry queue, it creates another invalid status
	message, which restarts the cycle. This causes the disk to start filling up very
	quickly, and causes the processor to continue churning indefinitely. This could
	impact your newly installed site within minutes or hours depending on how much
	available disk space is available.
	
	This problem does not occur in a non-scripted installation of a site server
	because the wizard does not accept a lowercase site code.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	
	=============================================================================
	

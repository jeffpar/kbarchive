---
layout: page
title: "Q210366: SMS:Offline Client Shows Multiple Instances of Program Being Run"
permalink: /kb/210/Q210366/
---

## Q210366: SMS:Offline Client Shows Multiple Instances of Program Being Run

	Article: Q210366
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbClient kbConfig kbMMC kbsms200 kbsms200bug kbReport kbsmsAdmin kbsmsMeter
	Last Modified: 21-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Software Metering client is running in offline mode, the Software
	Metering administrative console may show that a client program has been run a
	number of times, even though the program has been run only once. The number of
	instances reported corresponds directly with the configuration of the "Check
	local environment" setting on the client.
	
	For example:
	
	1. Set up a Software Metering server.
	
	2. Register a product and configure the client for offline mode.
	
	3. Navigate to Configuration Components, and then in Software Metering, set the
	  local License balancing frequency to every 15 minutes.
	
	4. Open Notepad.exe and run for one hour.
	
	Notepad appears in Software Metering Summary as having run 4 times, for 15-minute
	durations each time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbClient kbConfig kbMMC kbsms200 kbsms200bug kbReport kbsmsAdmin kbsmsMeter 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

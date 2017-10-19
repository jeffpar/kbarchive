---
layout: page
title: "Q210202: SMS: Software Metering Servers Not Balancing Licenses Correctly"
permalink: /kb/210/Q210202/
---

## Q210202: SMS: Software Metering Servers Not Balancing Licenses Correctly

	Article: Q210202
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms kbsms200
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are running more than one software metering server and licenses are not
	being balanced correctly. This article describes how you can identify the
	problem area.
	
	MORE INFORMATION
	================
	
	Items to Check If Licenses Are Not Being Correctly Balanced
	-----------------------------------------------------------
	
	- Is the schedule configured appropriately?
	
	  If the scheduled balancing is set too far apart, there may be servers with too
	  many available licenses and other servers without any available licenses. You
	  can check to see what the trend is in the log of historical activities, and
	  then set the schedule accordingly.
	
	- Does the License Metering component have access to all software metering
	  servers?
	
	  License Metering connects to each server through Open Database Connectivity
	  (ODBC) and queries each server for its minimum license number and buffer from
	  the reserve pool. License balancing then occurs between servers based on the
	  procured information (LICSRVC.log).
	
	- Does License Metering have to do license balancing too often, which indicates
	  that there are too many clients that need an application license for too many
	  applications at once?
	
	  If License Metering is constantly dealing with instant license balancing,
	  scheduled license balancing and general response speed will suffer. A study
	  of the historical trend in license balancing and user callbacks will help you
	  in designing the system to ensure that License Metering is not constantly
	  distributing licenses on demand from low-activity to high-activity servers.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

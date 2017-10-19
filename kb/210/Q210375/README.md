---
layout: page
title: "Q210375: SMS: Only a Single Site Code Is Displayed Under Collections"
permalink: /kb/210/Q210375/
---

## Q210375: SMS: Only a Single Site Code Is Displayed Under Collections

	Article: Q210375
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Systems Management Server (SMS) network discovery process, the
	subnet search results in only a single site code being displayed under
	Collections on the server where network discovery was initiated.
	
	CAUSE
	=====
	
	Discovery Data Manager assigns site codes by site boundary. If a resource is
	assigned to more than one site code, the Collection Evaluator uses the first
	(lowest) site code for the Site Code column. There is no way for the Collection
	Evaluator to determine which of the site codes to display, if any.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

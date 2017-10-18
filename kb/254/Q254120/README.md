---
layout: page
title: "Q254120: SMS: Following Service Account Name Change, HMAN, &amp; DDM Fail"
permalink: kb/254/Q254120/
---

## Q254120: SMS: Following Service Account Name Change, HMAN, &amp; DDM Fail

	Article: Q254120
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 06-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Hierarchy Manager (HMAN) logs multiple 3304 messages:
	
	- Systems Management Server "HMAN" can not save information to the SMS site
	  database for "KEN", where "KEN" is the site code of the site in question.
	
	Data Discover Manager (DDM) logs multiple 679 messages:
	
	- This component failed to retrieve the list of Systems Management Server sites
	  from the site database.
	
	A backlog of Data Discovery Records (DDRs) located in Inboxes\Ddm.box builds up
	as DDM fails to process the incoming DDRs.
	
	CAUSE
	=====
	
	The Systems Management Server service account has been changed via SETUP and the
	domain of the domain/account name has been removed. For example,
	Sminkypinky\Mssvc is changed to Smssvc.
	
	Although SETUP appears to change the Systems Management Server service account
	successfully Systems Management Server SETUP is rerun and the Service starts
	using the correct domain/account credentials. These changes are subsequently
	undone and the domain name is stripped again.
	
	RESOLUTION
	==========
	
	
	To resolve this issue, remove any backlog of .Ct2 files located in
	Sms\Inboxes\Hman.box, re-run Server Management Server SETUP and change the
	account details to the regular domain/account format.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0, 2.0 SP1.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

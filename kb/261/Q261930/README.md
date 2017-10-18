---
layout: page
title: "Q261930: SMS: Error 679 or 3304 After You Install/Change Service Account"
permalink: kb/261/Q261930/
---

## Q261930: SMS: Error 679 or 3304 After You Install/Change Service Account

	Article: Q261930
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsms200
	Last Modified: 27-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install or change service account information, the following error
	messages may be displayed.
	
	The following status message ID 679 may be displayed in Discovery Data Manager:
	
	  This component failed to retrieve the list of SMS sites from the site
	  database.
	
	The following status message ID 3304 may be displayed in Hierarchy Manager:
	
	  SMS Hierarchy Manager cannot save site information to the SMS site database
	  for site "PSS".
	
	CAUSE
	=====
	
	This behavior occurs because a local account (non-domain account) is specified
	for the SMS service account.
	
	WORKAROUND
	==========
	
	To work around this problem, run SMS Setup and change the service account to a
	domain administrator account.
	
	
	Additional query words: prodsms ServiceAccountName ddm hman
	
	======================================================================
	Keywords          : kberrmsg kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

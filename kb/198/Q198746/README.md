---
layout: page
title: "Q198746: SMS: Courier Sender Must Run Local to Site Server"
permalink: /kb/198/Q198746/
---

## Q198746: SMS: Courier Sender Must Run Local to Site Server

	Article: Q198746
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbSender kbSMSSender
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Create Outgoing Parcel function in Courier Sender is only available when
	running it locally from the Systems Management Server 2.0 site server. A Courier
	Sender icon is present on remote computers running the Systems Management Server
	2.0 Administrator Console and will run, but it gives the following message when
	the Create Outgoing Parcel item is selected:
	
	  The SMS registry indicates no outbox for the sender to scan. Be sure that you
	  are running this application on an SMS Site Server and that at least one site
	  is defined to use the Courier Sender.
	
	WORKAROUND
	==========
	
	To use the Create Outgoing Parcel in Courier Sender, you must be running it
	local to the Systems Management Server 2.0 site server. A possible workaround to
	this is to Remote Control the Systems Management Server 2.0 site server from the
	remote Administrator Console and run the Courier Sender in this way.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms smssvr admin
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbSender kbSMSSender 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

---
layout: page
title: "Q263367: Component Status Summarizer Threshold of Zero Does Not Work"
permalink: kb/263/Q263367/
---

## Q263367: Component Status Summarizer Threshold of Zero Does Not Work

	Article: Q263367
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbStatSum kbsms200preSP3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Component Status Summarizer, you can specify the thresholds for yellow
	Warning or red Critical icons in the Component Status display for each message
	type.
	
	You can set these properties in the Systems Management Server (SMS) Administrator
	console by double-clicking the following items to open them:
	
	  Site Database\Site Hierarchy\<sitecode>\Site Settings\Status
	  Summarizers\Component Status Summarizer\Thresholds tab
	
	Setting the Warning or Critical threshold to 0 (zero) for any component does not
	disable the threshold as described in the online Help that is associated with
	the dialog box. It has the same effect as setting the threshold to 1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbStatSum kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

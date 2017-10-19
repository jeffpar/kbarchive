---
layout: page
title: "Q153572: SMSRUNxx Doesn't Support Redirectors Returning a Null Username"
permalink: /kb/153/Q153572/
---

## Q153572: SMSRUNxx Doesn't Support Redirectors Returning a Null Username

	Article: Q153572
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	SMSRUNxx will not launch any SMS applications.
	
	CAUSE
	=====
	
	SMSRUNxx checks for a null username returned from the network detection process.
	If the username is null, the network detection process determines that there
	isn't an active network connection and SMSRUNxx won't launch any SMS
	applications.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. It has been fixed in Systems Management Server version 1.2.
	
	Additional query words: prodsms null smsrun16 smsrun32
	
	======================================================================
	Keywords          : smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	Issue type        : kbbug
	
	=============================================================================
	

---
layout: page
title: "Q153646: Closing or Canceling a Running Query May Hang the SMS Admin"
permalink: kb/153/Q153646/
---

## Q153646: Closing or Canceling a Running Query May Hang the SMS Admin

	Article: Q153646
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbsmsAdmin smsadmin
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you begin to run a query and then cancel the query or close the query
	results window, the SMS Admin UI may stop responding.
	
	CAUSE
	=====
	
	Microsoft Systems Management Server cannot cancel the query in the middle of a
	single SQL statement. The SMS Admin UI regains control once the SQL statement
	that was currently executing completes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server versions 1.0 and 1.1. It was corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms query UI
	
	======================================================================
	Keywords          : kbnetwork kbsmsAdmin smsadmin 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

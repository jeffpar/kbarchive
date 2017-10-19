---
layout: page
title: "Q156250: SMS: Job Status Remains Active When Sent to Entire Site"
permalink: /kb/156/Q156250/
---

## Q156250: SMS: Job Status Remains Active When Sent to Entire Site

	Article: Q156250
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM kbsmsAdmin smsadmin smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you send a package to an entire site, the package is sent to all clients in
	the site, regardless of the supported platforms selected in the package
	properties. Because the package may not be able to run under all platforms, the
	Job Status remains Active, but the Job Status Details (which displays the SMSIDs
	for the clients that are not able to run the package) shows a status of None.
	
	CAUSE
	=====
	
	Job status is only updated when the client generates a Status MIF, and that MIF
	is put into the database. If a client does not run the job, a status MIF is not
	created.
	
	WORKAROUND
	==========
	
	Only send platform-sensitive packages to clients that can run them. You can send
	these packages by using machine groups, query results, or individual clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbPCM kbsmsAdmin smsadmin smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

---
layout: page
title: "Q255842: Status Manager Loses Status Messages During Shutdown"
permalink: /kb/255/Q255842/
---

## Q255842: Status Manager Loses Status Messages During Shutdown

{% raw %}

	Article: Q255842
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbsms200bug
	Last Modified: 03-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On primary sites, when Status Manager processes status messages, it batches them
	up before committing them to the database for efficiency and scalability
	reasons. The status messages are processed into the site database, but these
	messages may be lost during a shutdown.
	
	CAUSE
	=====
	
	When it processes a message, Status Manager checks the registry to get the next
	ID to use as a primary key to insert the message into the database. If it cannot
	get the next ID key from the registry, it dumps the batched status messages.
	During a system shutdown, there is a possibility that Status Manager will not be
	able to retrieve the registry value. This occurs because the base class registry
	method that Status Manager uses tries to contact the security subsystem and a
	"Cannot connect to RPC server" error message occurs because the security
	subsystem is not available.
	
	WORKAROUND
	==========
	
	To prevent a primary site from losing status messages, stop the SMS_Executive
	service before rebooting the server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

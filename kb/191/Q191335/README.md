---
layout: page
title: "Q191335: SMS: Some Clients Get Event ID 7022 After Applying SP3"
permalink: kb/191/Q191335/
---

## Q191335: SMS: Some Clients Get Event ID 7022 After Applying SP3

	Article: Q191335
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During startup, some client computers running Windows NT may generate an event
	ID 7022 when the SMS Remote Control Agent service attempts to start. Manual
	attempts to start the service fail with a "Failed to initialize network" error
	message, followed by the following:
	
	  Error Msg: Could not start the SMS Remote Control Agent service on
	  \\<machine>.
	
	CAUSE
	=====
	
	This problem may occur if the Systems Management Server site property setting
	for Windows NT Remote Control is configured to use a protocol that is not
	installed on the Windows NT target system.
	
	WORKAROUND
	==========
	
	To work around this problem, change the default Remote Control protocol to an
	option that is supported by the protocols installed in the network environment
	and on all of the Windows NT systems. To do this, open the Systems Management
	Server Administrator utility and do the following:
	
	1. Open Site Properties and click Clients.
	
	2. Select Proposed Properties and click Options.
	
	3. For "Default RC Protocol for NT Clients", choose IP Sockets.
	
	4. Update the site and wait for this change to show as Current. After it is
	  confirmed, the client computers running Windows NT will need to be upgraded
	  for this change to take effect. For more information, see the following
	  article in the Microsoft Knowledge Base:
	
	  Q155680 SMS: Windows NT Remote Control Registry Parameters Not Updated
	
	Additional query words: prodsms rc winnt
	
	======================================================================
	Keywords          : kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	

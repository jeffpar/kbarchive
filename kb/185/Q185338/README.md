---
layout: page
title: "Q185338: SMS: PCM as a Service and Security Context"
permalink: kb/185/Q185338/
---

## Q185338: SMS: PCM as a Service and Security Context

	Article: Q185338
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbPCM
	Last Modified: 15-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Package Command Manager (PCM) as a service, the registry key
	HKEY_CURRENT_USER, is not updated under the context of the profile of the user
	who is logged on.
	
	CAUSE
	=====
	
	The HKEY_CURRENT_USER registry key is updated in the context of the account that
	is making the changes. Thus when you use PCM as a service, the context is that
	of the Systems Management Server or PCM Service account.
	
	WORKAROUND
	==========
	
	You can mount the user's hive with Reg.exe and then place the keys into the
	User's context.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbPCM 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

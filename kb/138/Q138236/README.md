---
layout: page
title: "Q138236: Deinstall of SMS Administrator Does Not Clean Registry"
permalink: kb/138/Q138236/
---

## Q138236: Deinstall of SMS Administrator Does Not Clean Registry

	Article: Q138236
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you deinstalling Systems Management Server Administrator, the registry
	still contain keys for Systems Management Server. The deinstall process leaves
	the Systems Management Server key with Components and Setup subkeys user:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.1 and 1.2. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sms registry
	
	======================================================================
	Keywords          : kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	

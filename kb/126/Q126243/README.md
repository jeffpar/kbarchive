---
layout: page
title: "Q126243: PGC Creates Duplicate Items on Windows 95 Taskbar"
permalink: /kb/126/Q126243/
---

## Q126243: PGC Creates Duplicate Items on Windows 95 Taskbar

{% raw %}

	Article: Q126243
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Program Group Control creates duplicate items on the taskbar when program groups
	are created on Windows 95 clients.
	
	CAUSE
	=====
	
	Program Group Control doesn't check for the prior existence of a shared program
	group on the client before creating a new one.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	

{% endraw %}

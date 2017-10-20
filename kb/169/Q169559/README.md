---
layout: page
title: "Q169559: SMS: Remote Control Agent Shows Memory Leak with 3Com NIC"
permalink: /kb/169/Q169559/
---

## Q169559: SMS: Remote Control Agent Shows Memory Leak with 3Com NIC

{% raw %}

	Article: Q169559
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server Remote Control agent (Wuser32.exe) shows a memory
	leak on systems using a 3COM 3C590 or 3C905 network adapter card with bus
	mastering enabled. A large number of page file bytes are consumed and not
	released, which eventually results in virtual memory errors, and may cause the
	system to stop responding. The problem does not occur if bus mastering is
	disabled on the 3C590 adapter. However, there is no option to disable bus
	mastering on the 3C905 adapter.
	
	WORKAROUND
	==========
	
	To work around this problem, do any of the following:
	
	- Disable bus mastering if possible. For more information on how to do this,
	  see the following article in the Microsoft Knowledge Base:
	
	  Q141299 Disabling Bus Mastering On 3Com 3C590 PCI Network Cards
	
	- Disable the Systems Management Server Remote Control service on the Windows
	  NT client computer.
	
	- Use a different network adapter card.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms wuser32 sms interface
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	

{% endraw %}

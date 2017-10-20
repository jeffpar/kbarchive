---
layout: page
title: "Q157680: SMS: Remote Control Agent Fails on NetWare VLM TR Clients"
permalink: /kb/157/Q157680/
---

## Q157680: SMS: Remote Control Agent Fails on NetWare VLM TR Clients

{% raw %}

	Article: Q157680
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2,3.11
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 01-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	- Microsoft Windows 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the Systems Management Server client Remote Control Agent (Wuser16.exe) is
	started on a Windows 3.11 machine, failures occur such as unexpected restarting,
	exiting to an MS-DOS prompt, or an EMM386 exception error number 6. These
	problems occur if the clients are loaded with a combination of Novell NetWare's
	VLM client software and a Token Ring network adapter.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2. This problem has been corrected in the latest U.S. Service
	Pack for Microsoft Systems Management Server version 1.2. For information on
	obtaining the Service Pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms boot shutdown
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbWin3xSearch kbZNotKeyword3 kbWin311 kbSMS120
	Version           : :1.2,3.11
	
	=============================================================================
	

{% endraw %}

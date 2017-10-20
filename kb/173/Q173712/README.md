---
layout: page
title: "Q173712: SMS: Pause Key Is Mapped to NUMLOCK During Remote Control"
permalink: /kb/173/Q173712/
---

## Q173712: SMS: Pause Key Is Mapped to NUMLOCK During Remote Control

{% raw %}

	Article: Q173712
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbenv kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During a Remote Control session, the Pause key at the administrator's console is
	mapped to the NUMLOCK key. Pressing the Pause key during a Remote Control
	session engages NUMLOCK on both the client and the administrator's workstations.
	This problem only occurs when a 16-bit client running Wuser.exe is being
	controlled.
	
	WORKAROUND
	==========
	
	To work around this problem, have the user on the remote client computer press
	the NUMLOCK key.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms wuser win95 wfw windows workgroups workstation
	
	======================================================================
	Keywords          : kbenv kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}

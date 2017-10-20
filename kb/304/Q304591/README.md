---
layout: page
title: "Q304591: SMS: Mouse and Keyboard May Not Work in Remote Control Session"
permalink: /kb/304/Q304591/
---

## Q304591: SMS: Mouse and Keyboard May Not Work in Remote Control Session

{% raw %}

	Article: Q304591
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP3
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200 kbsms200bug
	Last Modified: 14-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP3 
	- Microsoft Windows XP Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are in a Systems Management Server (SMS) Remote Control session to a
	Windows XP-based client, your mouse and keyboard may not function in the remote
	control session, but you may be able to see screen refreshes.
	
	CAUSE
	=====
	
	This problem can be caused by the start of a Windows XP Remote Desktop session
	to the client computer. When the Remote Desktop session connects, it switches
	the current user context on the client computer. SMS is unable to handle this
	context switch, and loses mouse and keyboard functionality.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods:
	
	- Wait for the Remote Desktop session to end, and then reconnect with the SMS
	  Remote Control feature.
	
	- Use Windows XP Remote Desktop and Remote Assistance as the remote solution
	  for Windows XP-based computers.
	
	STATUS
	
	Microsoft has confirmed this to be a problem in Systems Management Server version
	2.0.
	
	
	Additional query words: prodsms rc rd
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200 kbsms200bug 
	Technology        : kbWinXPPro kbSMSSearch kbSMS200 kbSMS200SP3 kbWinXPProSearch kbWinXPSearch
	Version           : :2.0,2.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q130441: Error Remotely Controlling WFW Computer Using 256 Colors"
permalink: /kb/130/Q130441/
---

## Q130441: Error Remotely Controlling WFW Computer Using 256 Colors

{% raw %}

	Article: Q130441
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to remote control a Windows for Workgroups client that is set
	to use 256 colors, the following error appears:
	
	  Unable to communicate with the client: 0x12 (0x12). Make sure the workstation
	  is running the remote control agent."
	
	WORKAROUND
	==========
	
	To work around this problem, change the video setting on the client so it use 16
	colors.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0 and 1.1. This problem was corrected in the latest US Service Pack
	for Systems Management Server. For information on obtaining this update, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	Additional query words: prodsmms remote control wfw wfwg 25 helpdesk sms
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}

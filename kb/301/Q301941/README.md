---
layout: page
title: "Q301941: SMS: Remote Control Freeze When Remote Desktop Connection Starts"
permalink: kb/301/Q301941/
---

## Q301941: SMS: Remote Control Freeze When Remote Desktop Connection Starts

	Article: Q301941
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbdisplay kbtool kbui kbsms200
	Last Modified: 18-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are initiating a Systems Management Server (SMS) Remote Control session
	into a Microsoft Windows XP client, the screen may freeze if a Remote Desktop
	session is also started from a separate computer to the same Windows XP client.
	When the Remote Desktop session finishes, the SMS administrator can pass
	keyboard and mouse commands to the remote computer, but the administrator may be
	unable to receive any screen refreshes from the client.
	
	CAUSE
	=====
	
	This issue can occur because SMS is not aware of the conventions that are used
	in Windows XP to signal that a Remote Desktop session is starting.
	
	WORKAROUND
	==========
	
	To work around this issue, disconnect the SMS remote control session, and then
	reconnect after the Remote Desktop session finishes.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbdisplay kbtool kbui kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

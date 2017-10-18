---
layout: page
title: "Q167857: SMS: Permission Required Dialog Box Appears Behind Open Windows"
permalink: kb/167/Q167857/
---

## Q167857: SMS: Permission Required Dialog Box Appears Behind Open Windows

	Article: Q167857
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
	
	When you attempt to Remote Control a previously remote controlled client
	computer running Windows 95 with the Permission Required Help Desk option
	enabled, the Remote Control Agent dialog box that asks, "Will you allow
	<Administrator'> to remote control your machine?" appears behind open
	windows on the desktop. Consequently, the user may not be able to see the dialog
	box and answer the prompt without minimizing all open windows.
	
	On the remote control server, the following dialog box appears:
	
	  SMS Remote Control
	  The user did not grant permission before the timeout period elapsed.
	
	WORKAROUND
	==========
	
	To work around this problem, minimize all open windows before initiating a
	second Remote Control session.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms Win95 hidden RC
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	

---
layout: page
title: "Q171039: SMS: File Transfer Window Freezes"
permalink: kb/171/Q171039/
---

## Q171039: SMS: File Transfer Window Freezes

	Article: Q171039
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
	
	While in the midst of a file transfer session with a Windows 95 or 16-bit
	Windows client, the Personal Computer Property Help Desk window freezes and none
	of the Remote buttons work. Dragging the border or moving the window results in
	window "footprinting," and the Local Files and Remote Files lists do not redraw
	completely.
	
	This problem may also occur when a file copy is not in progress.
	
	CAUSE
	=====
	
	The File Transfer Slave window was closed on the client side.
	
	WORKAROUND
	==========
	
	To work around this problem, select another Properties item and then select the
	Help Desk item again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms helpdesk rc win95 wfw win16 terminate sp sp2
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	

---
layout: page
title: "Q174461: SMS: Remote Control Permissions Window Is Not Displayed"
permalink: /kb/174/Q174461/
---

## Q174461: SMS: Remote Control Permissions Window Is Not Displayed

	Article: Q174461
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
	
	When attempting to use Remote Control on a Windows NT client with Permission
	Required set to Yes, the "Will you allow <username> to remote control your
	machine?" dialog window does not appear when the client's computer is at the
	Begin Logon screen, which displays the message "Press Ctrl + Alt + Delete to log
	on".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server 1.2 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The permission window is displayed as soon as someone logs on to the client
	computer. Also note that if the server times out because the client never logs
	on when it is trying to start a Remote Control session, the permission dialog
	box will appear the next time that a user logs on to the computer, even if the
	server is no longer trying to establish a connection.
	
	Additional query words: prodsms rc
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

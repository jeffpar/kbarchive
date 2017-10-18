---
layout: page
title: "Q164879: SMS: Server Name Not Displayed in Permissions Box"
permalink: kb/164/Q164879/
---

## Q164879: SMS: Server Name Not Displayed in Permissions Box

	Article: Q164879
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProgkbfixlist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Remote Control Agent Permission dialog box on a client does not display the
	machine name that initiates the Remote Control session. Remote Control Agent
	displays the account name initiating the Remote Control Session, which can be
	misleading to the user. Displaying the machine name in addition to the user name
	would help identify exactly who is initiating the remote control session.
	
	For example, the dialog box currently displays the following message:
	
	  Will you allow 'SMSAdmin' to Remote Control your machine?
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server version 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms rc netbios server
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	

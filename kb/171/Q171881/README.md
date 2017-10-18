---
layout: page
title: "Q171881: SMS: Remote Control French WinNT 4.0 SP3 Client Has Grey Viewer"
permalink: kb/171/Q171881/
---

## Q171881: SMS: Remote Control French WinNT 4.0 SP3 Client Has Grey Viewer

	Article: Q171881
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP2
	Operating System(s): 
	Keyword(s): kbenv kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When making a second attempt to Remote Control a client computer running French
	Windows NT 4.0 Service Pack 3 with Systems Management Server 1.2 Service Pack 2,
	the Quick Windows Viewer appears empty and the background color is gray.
	
	The Remote Control works fine ONLY the FIRST time.
	
	WORKAROUND
	==========
	
	To work around this problem, do the one of the following:
	
	- Stop and Restart the Remote Control Agent on the Systems Management Server
	  client.
	
	  -or-
	
	- Remove Service Pack 3 for Windows NT 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server 1.2 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodsms helpdesk rc grey sp sp3 sp2 sms uninstall
	
	======================================================================
	Keywords          : kbenv kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120SP2
	Version           : :1.2 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

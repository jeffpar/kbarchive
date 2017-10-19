---
layout: page
title: "Q165787: SMS: Remote Execute Fails When Command Contains Spaces"
permalink: /kb/165/Q165787/
---

## Q165787: SMS: Remote Execute Fails When Command Contains Spaces

	Article: Q165787
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
	
	Remote File execution on a client computer running Windows NT fails to complete
	when the command line selected contains a space in either the file or directory
	name, as in the following example:
	
	  c:\long directory name\kenhom.bat
	
	WORKAROUND
	==========
	
	To work around this problem, do either of the following:
	
	- Enclose the command line within quotation marks, as in the following
	  example:
	
	     "c:\long directory name\kenhom.bat"
	
	-or-
	
	- Use the abbreviated MS-DOS file name displayed in File Manager, as in the
	  following example:
	
	     c:\longdi~1\kenhom.bat
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms helpdesk remote execute
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	

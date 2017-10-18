---
layout: page
title: "Q185917: SMS: Remote Control Agent Installed Regardless of Site Settings"
permalink: kb/185/Q185917/
---

## Q185917: SMS: Remote Control Agent Installed Regardless of Site Settings

	Article: Q185917
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The option to install Systems Management Server Remote Control on clients on a
	site-wide basis can be configured by using the Site Properties in the Systems
	Management Server Administrator program.
	
	In environments where customers do not want to use the Systems Management Server
	Remote Control software, the option for installing it can be canceled by
	clearing the check box.
	
	However, after applying Systems Management Server Service Pack 3 (SP3), the
	Remote Control client software will be installed on all Windows NT clients, even
	if the option is not selected in the site's properties.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

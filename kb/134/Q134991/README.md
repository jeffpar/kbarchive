---
layout: page
title: "Q134991: Unable to Run Windows NT Administrative Tools in SMS Admin UI"
permalink: kb/134/Q134991/
---

## Q134991: Unable to Run Windows NT Administrative Tools in SMS Admin UI

	Article: Q134991
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you run one of the Windows NT Administrative Tools, such as Server Manager
	or User Manager for Domains, from the Systems Management Server Admin user
	interface under Windows NT Workstation version 3.5 or 3.51, the following error
	message appears:
	
	  Unable to start the <Administrative Tool>. SMS either cannot connect to
	  the remote machine or the <Administrative Tool> is not in your path.
	
	CAUSE
	=====
	
	This problem occurs when the Server Manager and User Manager for Domains
	executable files do not exist on the computer running Windows NT Workstation.
	
	WORKAROUND
	==========
	
	To work around this problem, install the Windows NT 3.5 Resource Kit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.1 and 1.2. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	

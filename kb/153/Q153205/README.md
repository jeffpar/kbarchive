---
layout: page
title: "Q153205: Limit to Site Does Not Work if You Distribute to a Site Group"
permalink: /kb/153/Q153205/
---

## Q153205: Limit to Site Does Not Work if You Distribute to a Site Group

	Article: Q153205
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbsmsAdmin smsadmin smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you distribute a package using a Site Group, and you select Limit to Sites
	and clear the include subsites option, the package is distributed to the
	selected sites AND their child sites.
	
	WORKAROUND
	==========
	
	Distribute to a Machine Group rather than a Site Group.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SMS version 1.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsmsAdmin smsadmin smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	

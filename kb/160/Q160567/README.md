---
layout: page
title: "Q160567: SMS: Updating Package Contents Requires Job"
permalink: /kb/160/Q160567/
---

## Q160567: SMS: Updating Package Contents Requires Job

	Article: Q160567
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbusage kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If changes are made to the properties of a package, the message, "Systems
	Management Server will update this package at all sites," appears. However, if
	changes were made to the package source, these changes are not updated at all
	sites.
	
	CAUSE
	=====
	
	This message can be construed to mean that any changes to the contents of the
	source directory of the package will be updated in both the master copy and on
	the master copies on each site. However, no changes to the contents of the
	source directory are actually made until a job is sent with the send phase
	selecting "even if previously sent." The update to the package refers to the
	properties of the package, such as command line changes.
	
	RESOLUTION
	==========
	
	To update the contents of a distributed package (for example, to add files to or
	update files in a package), modify the source directory as appropriate, create a
	new job for the package, and select the "even if previously sent" option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: manager pcm
	
	======================================================================
	Keywords          : kbusage kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	

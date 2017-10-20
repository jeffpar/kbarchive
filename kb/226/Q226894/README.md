---
layout: page
title: "Q226894: SMS: SMS_LOCAL_DIR Must Not Exceed the Maximum of 8 Characters"
permalink: /kb/226/Q226894/
---

## Q226894: SMS: SMS_LOCAL_DIR Must Not Exceed the Maximum of 8 Characters

{% raw %}

	Article: Q226894
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 15-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server (SMS) 2.0, if the environment variable
	SMS_LOCAL_DIR is modified to include a directory with more than eight
	characters, SMS truncates the directory name and creates a new directory for
	client installation.
	
	CAUSE
	=====
	
	This behavior can occur because the directory name must conform to the 8.3
	MS-DOS restriction; that is, MS-DOS programs (like SMSBOOT1) cannot handle file
	or directory names of more than eight characters.
	
	WORKAROUND
	==========
	
	Before installing the client software and setting SMS_LOCAL_DIR, follow these
	steps:
	
	1. Manually create a directory, (for example, SMSINSTALLATION).
	
	2. Set SMS_LOCAL_DIR to the directory short name (SMSINS~1).
	
	SMS installs into the existing SMSINSTALLATION directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

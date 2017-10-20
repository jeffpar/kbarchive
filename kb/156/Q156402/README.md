---
layout: page
title: "Q156402: SMS: PCM Looks in Wrong Path for Default Distribution Server"
permalink: /kb/156/Q156402/
---

## Q156402: SMS: PCM Looks in Wrong Path for Default Distribution Server

{% raw %}

	Article: Q156402
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot kbPCM smsremtshoot smspcm kbRemoteProgkbfixlist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A window for Package Command Manager (PCM) appears, containing the following
	message:
	
	  Unable to connect to \\server\share(s)
	
	The window then lists the distribution servers the client is using as defined in
	the Sms.ini file. This list also contains an incomplete path to the package on
	the logon server (which Package Command Manager tries first by default). The
	following line is how the path reads:
	
	  \\server\share\pcmpkg.src
	
	The following line is how the path should read:
	
	  \\server\share\SMS\pcmpkg.src\packageID
	
	CAUSE
	=====
	
	Package Command Manager looks at the wrong path on the default distribution
	server (the logon server). Furthermore, none of the other distribution servers
	are available, or permissions are not set for the user in question.
	
	WORKAROUND
	==========
	
	To work around this problem, change the permissions on one or more of the
	distribution servers listed in the client computer's Sms.ini file to allow the
	user access to the package.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server version 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	Additional query words: prodsms 1.20
	
	======================================================================
	Keywords          : kbnetwork kbtshoot kbPCM smsremtshoot smspcm kbRemoteProg kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	

{% endraw %}

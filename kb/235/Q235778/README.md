---
layout: page
title: "Q235778: SMS: CCM Fails to Install SMS Client on WinNT Version 3.51"
permalink: /kb/235/Q235778/
---

## Q235778: SMS: CCM Fails to Install SMS Client on WinNT Version 3.51

{% raw %}

	Article: Q235778
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server client installation fails on Windows NT 3.51
	workstations. If logging is enabled for the client configuration manager
	component, the log will contain an error such as the following:
	
	  --> Attempting to connect to administrative share '\\TESTCLI\admin$' using
	  account 'TESTDOM\SMSService' SMS_CLIENT_CONFIG_MANAGER ---> Connected to
	  administrative share on machine TESTCLI using account 'TESTDOM\SMSService'
	  SMS_CLIENT_CONFIG_MANAGER ---> Invalid NT version "3.51" on machine
	  "TESTCLI" SMS_CLIENT_CONFIG_MANAGER
	
	CAUSE
	=====
	
	When the Systems Management Server site server is configured to use an
	alternative "Number-decimal symbol" in regional settings, the client
	configuration manager component (CCM) fails to properly interpret the version of
	the potential client and thus aborts the installation.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

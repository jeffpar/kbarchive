---
layout: page
title: "Q181740: SNA Windows NT/Windows 95 Client Fails When Using Quiet Install"
permalink: /kb/181/Q181740/
---

## Q181740: SNA Windows NT/Windows 95 Client Fails When Using Quiet Install

{% raw %}

	Article: Q181740
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt a Quiet install of the SNA Server Windows NT or Windows 95
	Client, the installation will fail. Windows 95 may indicate a ACMSETUP failure
	message, although Windows NT does not list an error. The command line for the
	Quiet install option is: setup /Q [0|1|T].
	
	If the option to create a log file, /G [logfile.txt], is added to the setup
	command line, the log file is created; however, setup does not appear to
	complete successfully.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, and 3.0 SP2. The Quiet install option (/Q option) is fixed in SNA Server
	4.0.
	
	
	MORE INFORMATION
	================
	
	The Quiet install option is not a valid setup option in SNA Server 3.0 SP3.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

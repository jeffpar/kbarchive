---
layout: page
title: "Q162158: NET ACCOUNTS Command Errors"
permalink: /kb/162/Q162158/
---

## Q162158: NET ACCOUNTS Command Errors

{% raw %}

	Article: Q162158
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you type "NET ACCOUNTS /SYNC" (without the quotation marks) at the command
	prompt, you may receive either of the following error messages:
	
	  System error 1717 has occurred.
	  The interface is unknown.
	
	-or-
	
	  System error 50 has occurred.
	  The network request is not supported.
	
	All the other NET ACCOUNTS switches may generate the following error:
	
	  The request will be processed at the primary domain controller for domain
	  <domain_name>. Could not find domain controller for this domain. More
	  help is available by typing NET HELPMSG 2453.
	
	When you type "NET NELPMSG 2453" (without the quotation marks) you may receive
	the following error message:
	
	  Could not find domain controller for this domain.
	
	CAUSE
	=====
	
	You receive the first error message above (system error 1717) when the Netlogon
	service is not running correctly on the computer from which the command was run.
	The NET ACCOUNTS /SYNC command is supported on a primary or backup domain
	controller. Although it is not supported on a member server or a workstation,
	the same error can occur if the Netlogon service has been stopped.
	
	NOTE: All NET ACCOUNTS switches, other than /SYNC, can be successfully run on the
	primary domain controller (PDC), even when the Netlogon service is not running.
	
	The second error message above (system error 50) can occur when the NET ACCOUNTS
	/SYNC command is run on a member server or workstation. The /SYNC switch is only
	supported on a domain controller.
	
	The third error message above may result when the NET ACCOUNTS command is run on
	a backup domain controller (BDC), a member server, or a workstation if the
	Netlogon service is not running correctly on the PDC. Unlike the /SYNC switch,
	the other switches do not require the Netlogon service to be running on the
	computer from which the command was run.
	
	The fourth error message above occurs if Windows NT cannot find the domain
	controller for the domain. The task cannot be completed unless the domain
	controller runs in the domain.
	
	RESOLUTION
	==========
	
	To resolve these problems, start the Netlogon service on the domain controller.
	
	MORE INFORMATION
	================
	
	You can use the NET ACCOUNTS command to synchronize the user account database
	within a domain, and to set some policies. For all of the switches of the
	command to work properly, the Netlogon service must be running correctly on the
	primary and backup domain controllers.
	
	The following is the syntax of the NET ACCOUNTS command:
	
	  NET ACCOUNTS [/FORCELOGOFF:{minutes | NO}] [/MINPWLEN:length]
	               [/MAXPWAGE:{days | UNLIMITED}] [/MINPWAGE:days]
	               [/UNIQUEPW:number] [/DOMAIN]
	  NET ACCOUNTS [/SYNC]
	
	
	Additional query words: prodnt policy
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

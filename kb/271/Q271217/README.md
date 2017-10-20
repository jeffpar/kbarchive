---
layout: page
title: "Q271217: Password Synchronization Doesn't Work Using Syntax Given in Help"
permalink: /kb/271/Q271217/
---

## Q271217: Password Synchronization Doesn't Work Using Syntax Given in Help

{% raw %}

	Article: Q271217
	Product(s): Microsoft Windows NT
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbdocerr w2000sfu kbUNIXService
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Services for Unix (SFU) version 2.0 Help suggests using the following syntax to
	use the Password Synchronization feature:
	
	  SYNC_HOSTS=(domainController[,portNumber[,encryptionKey]])[,
	  (domainController[,portNumber[,encryptionKey]])]...
	
	For example:
	
	  SYNC_HOSTS=(dc1.domain.com,6677,encryptkey),(dc2.domain.com,6677,encryptkey)
	
	However, when you use this syntax, you may receive the following error message
	when you try to use Password Synchronization:
	
	  newcifs ssod.so7[7559]: Error in config file /etc/sso.conf: invalid ',' found
	  in sync_host values.
	
	If you issue the "grep SYNC_HOSTS /etc/sso.conf" command on the UNIX-based
	computer, you may receive the following error message:
	
	  SYNC_HOSTS=(dc1.domain.com,6677,encryptkey,machine@here),
	  (dc2.domain.com,6677,encryptkey,machine@here) which is incorrect.
	
	CAUSE
	=====
	
	This problem occurs because the syntax mentioned in the "Symptoms" section is
	incorrect.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the correct syntax. There should not be a comma
	between the domain controllers.
	
	The syntax for the entry should appear as the following syntax:
	
	  SYNC_HOSTS=(DomainController[,portNumber[,encryptionKey]])[(DomainController[,portNumber[,encryptkey]])]...
	
	For example:
	
	  SYNC_HOSTS=(dc1.domain.com,6677,encryptkey)(dc2.domain.com,6677,encryptkey)
	
	Note: There is no comma (,) between the two domain controller sections.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 2000.
	
	Additional query words: sync hosts
	
	======================================================================
	Keywords          : kberrmsg kbdocerr w2000sfu kbUNIXService 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

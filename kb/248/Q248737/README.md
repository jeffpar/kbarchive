---
layout: page
title: "Q248737: Unattended Setup of NTOP May Fail on Multiprocessor Systems"
permalink: /kb/248/Q248737/
---

## Q248737: Unattended Setup of NTOP May Fail on Multiprocessor Systems

	Article: Q248737
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Personal Web Server version 4.0 for NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On rare occasions, an unattended setup of the Windows NT Option Pack (NTOP) may
	fail to install on systems with multiple processors.
	
	WORKAROUND
	==========
	
	Set the system to use only one processor by using the /numproc=1 switch in the
	Boot.ini file. Uninstall any partially installed NTOP components, and then run
	the unattended setup again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbPersWebServSearch kbZNotKeyword3 kbPersWebServ400NTW400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

---
layout: page
title: "Q248739: IIS Fails to Run on a Sysprep Cloned System"
permalink: /kb/248/Q248739/
---

## Q248739: IIS Fails to Run on a Sysprep Cloned System

{% raw %}

	Article: Q248739
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Personal Web Server version 4.0 for NT Workstation version 4.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Internet Information Server (IIS) and Personal Web Server (PWS) services fail to
	run on a system that was cloned by using SYSPREP. In addition, one of the
	following error messages may occur when you try to use the IIS or PWS Microsoft
	Management Console (MMC):
	
	  Unable to enumerate files and directories because the following error
	  occurred: The system cannot find the path specified.
	
	-or-
	
	  Invalid configuration error occurred reading or setting configuration
	  parameter.
	
	CAUSE
	=====
	
	Each Windows NT Server 4.0 system that is installed or cloned by using SYSPREP
	has a unique machine key. When the IIS or PWS services are installed, the
	computer-specific entries created in the metabase are encrypted by using a
	session key, which is created from the unique machine key. Therefore, the cloned
	system fails to decrypt certain parts of the cloned metabase, which are
	essential in running the IIS and PWS services.
	
	WORKAROUND
	==========
	
	If you must clone systems with IIS or PWS services installed, perform the
	cloning on the base Windows NT system, and then use the Windows NT Option Pack
	(NTOP) unattended installation as a post-clone activity.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q219717 NTOP Has Not Been Tested with the Current Configuration.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbPersWebServSearch kbZNotKeyword3 kbPersWebServ400NTW400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

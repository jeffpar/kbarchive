---
layout: page
title: "Q130730: Windows NT 3.5 with SP2: Service Fails To Start"
permalink: /kb/130/Q130730/
---

## Q130730: Windows NT 3.5 with SP2: Service Fails To Start

{% raw %}

	Article: Q130730
	Product(s): Microsoft Windows NT
	Version(s): 3.5 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 SP2 
	- Microsoft Windows NT Server version 3.5 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A service immediately fails when it is started. The following event is logged in
	the system log:
	
	  The <name_of_service> service failed to start with the following error:
	  The system cannot find the file specified.
	
	If you start the service by running Control Panel and choosing Services, one of
	the following message boxes appears:
	
	- Could not start the <name_of_service> service on
	  \\<computer_name>. Error 0123: The <file_name>,
	  <directory_name>, or <volume_label> syntax is incorrect.
	
	  -or-
	
	- Could not start the <name_of_service> service on
	  \\<computer_name>. Error 0002: The system cannot find the file
	  specified.
	
	These symptoms occur only if Windows NT Service Pack 2 (SP2) is installed on your
	computer running Windows NT 3.5.
	
	NOTE: If the ErrorControl registry parameter for this service is set to zero, an
	event is not logged (because that parameter causes errors during service start
	to be ignored).
	
	CAUSE
	=====
	
	On a computer running Windows NT 3.5 with SP2 installed, the service controller
	does not parse the command line correctly if the command line for a service
	contains multiple parameters, and the service logs on under an account other
	than LocalSystem.
	
	RESOLUTION
	==========
	
	To work around this problem, reinstall Windows NT 3.5, but do not reinstall
	Service Pack 2.
	
	NOTE: If you do this, you will lose all fixes supplied in Service Pack 2.
	
	To resolve this problem, upgrade to Windows NT version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	
	Additional query words: prodnt 3.50 3.51 stops aborts event viewer
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350search kbWinNTSsearch kbWinNTS350search kbWinNTW350SP2 kbWinNTS350SP2
	Version           : :3.5 SP2
	
	=============================================================================
	

{% endraw %}

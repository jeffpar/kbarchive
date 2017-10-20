---
layout: page
title: "Q132155: Sybase SQLServer Services Fail to Start"
permalink: /kb/132/Q132155/
---

## Q132155: Sybase SQLServer Services Fail to Start

{% raw %}

	Article: Q132155
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT 3.5 Service Pack 2, one or all of the following
	error messages appear when you attempt to start Sybase SQLServer Services with a
	user account that has the "Log on as a service" user right:
	
	  Stop: Could not start the Sybase SQLServer_COMPUTERNAME service on
	  \\COMPUTERNAME.
	
	  Error 0002: The system cannot find the file specified.
	
	  Stop: Could not start the Sybase MONServer_COMPUTERNAME_MS service on
	  \\COMPUTERNAME.
	
	  Error 0002: The system cannot find the file specified.
	
	  Stop: Could not start the Sybase BCKServer_COMPUTERNAME_BS service on
	  \\COMPUTERNAME.
	
	  Error 0002: The system cannot find the file specified.
	
	The following events may appear in the system log:
	
	  Event ID: 7000
	  Source: Service Control Manager
	  Type: Error
	  Description: The Sybase SQLServer_COMPUTERNAME service failed to start
	  due to the following error: The system cannot find the file specified.
	
	  Event ID: 7000
	  Source: Service Control Manager
	  Type: Error
	  Description: The Sybase SQLServer_COMPUTERNAME_MS service failed to
	  start due to the following error: The system cannot find the file specified.
	
	  Event ID: 7000
	  Source: Service Control Manager
	  Type: Error
	  Description: The Sybase SQLServer_COMPUTERNAME_BS service failed to
	  start due to the following error: The system cannot find the file specified.
	
	CAUSE
	=====
	
	If the command string for a service contains multiple words, and the service
	logs on under an account other than LocalSystem, the service controller does not
	parse the command line correctly.
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- Install the latest U.S. Service Pack for Windows NT version 3.5.
	
	- Restore Sybase SQLServer services startup options to log on as the System
	  Account.
	
	- Restore SERVICES.EXE from the original Windows NT 3.5 CD-ROM or floppy disks.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	SQLServer is manufactured by Sybase, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: sql server local system
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}

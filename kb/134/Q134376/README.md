---
layout: page
title: "Q134376: PC NTMMTA: Err Msg: Can't Open Service Control Manager..."
permalink: /kb/134/Q134376/
---

## Q134376: PC NTMMTA: Err Msg: Can't Open Service Control Manager...

	Article: Q134376
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you select the Remote Server in Microsoft Mail Service Manager for the
	Microsoft Mail Multitasking MTA for Windows NT(NT MMTA), it may cause the
	following error:
	
	  Error: Can't open Service Control Manager. Check your access privileges on
	  the specified server.
	
	CAUSE
	=====
	
	The user does not have Administrator privilege on the server where External or
	Dispatch is running.
	
	RESOLUTION
	==========
	
	- Give the user administrative rights to the server or workstation where the NT
	  MMTA is running.
	
	-or-
	
	- Monitor the instance using the command line options.
	
	  Monitor [external/dispatch] <\\computer_name> <instance_name>
	
	  External/Dispatch - The type of service
	  \\computer_name - Name of the Windows NT Server running the service
	  instance_name - Name of the instance that should be monitored
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.5 of Microsoft Mail
	Multitasking MMTA for Windows NT. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Microsoft Mail Service Manager tries to edit the remote server's Registry to
	build a list of External or Dispatch services. To edit the registry the user
	needs to have administrator rights so it fails.
	
	
	Additional query words: 3.50 cannot
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	

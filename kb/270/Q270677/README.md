---
layout: page
title: "Q270677: XADM: Event Service Does Not Start and Error 0x80040154 Appears"
permalink: /kb/270/Q270677/
---

## Q270677: XADM: Event Service Does Not Start and Error 0x80040154 Appears

{% raw %}

	Article: Q270677
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Exchange 5.5 Event Service fails to start.
	
	The following Event ID appears in the application event log:
	
	  Event ID: 5
	  Source: MSExchangeES
	  Type: Error
	  Description: An unexpected MAPI error occurred 0x80040154
	
	CAUSE
	=====
	
	Error 0x80040154 signifies that there is an unregistered .dll file.
	
	RESOLUTION
	==========
	
	To resolve this issue, reregister the Event Service .dll files using regsvr32;
	to do so, follow these steps:
	
	1. Go to the command prompt, and change directories to the Exchsrvr\bin
	  subdirectory.
	
	2. Enter the following command
	
	  regsvr32 <Filename>.dll
	
	  where <Filename> is the name of the .dll file (such as "Scripto.dll").
	
	3. Run the command on the following .dll files:
	
	  Scripto.dll
	  Ss.dll
	  Esconf.dll
	
	WORKAROUND
	==========
	
	When the Event Service fails to start and the error "0x80040154" appears,
	reinstalling the Microsoft Outlook client on the Exchange server allows the
	service to start.
	
	To reinstall the Outlook client on an Exchange server, follow these steps:
	
	1. Stop all the Exchange services, and then set the Exchange System Attendant to
	  Disabled.
	
	2. Stop and disable all third party services such as monitoring agents, backup
	  programs, and antivirus programs.
	
	3. Stop the SNMP service.
	
	4. Close all programs.
	
	5. Restart the server.
	
	6. Reinstall the Outlook client on the server.
	
	7. Change the Exchange System Attendant startup back to Automatic.
	
	8. Start the Exchange Services manually except for the Exchange Event Service.
	
	9. Start the Exchange Event Service manually.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Component         : Admin
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

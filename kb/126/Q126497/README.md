---
layout: page
title: "Q126497: XADM: Limiting the Number of Recipients of a Message"
permalink: /kb/126/Q126497/
---

## Q126497: XADM: Limiting the Number of Recipients of a Message

	Article: Q126497
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	A new registry value has been added to the Microsoft Exchange Information Store
	service that allows an administrator to set a limit on the number of recipients
	that a mail message can have.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	This works with Exchange Server versions 4.0 SP1, 5.0, and 5.5. To set this
	parameter, perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIS\
	  ParametersSystem
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: Max Recipients on Submit
	  Data Type: REG_DWORD
	  String: <A value equal to the max. recipients you wish to allow>
	
	4. Quit Registry Editor.
	
	This limit also applies to messages transferred into the store by the Internet
	Mail Service. An event 4117 is logged and the message is moved to the Archive
	folder. The message is not delivered and it does not send a non-delivery
	report.
	
	
	If a user attempts to send a message to more recipients than is designated by the
	Max Recipients on Submit parameter and the user has the new Emsmdb(32).dll, the
	following error message may be displayed when the user attempts to send the
	message:
	
	  The item could not be sent. The number of recipients on this message exceeds
	  the upper limit configured by the administrator.
	
	If a user attempts to send a message to more recipients than is designated by the
	Max Recipients on Submit parameter and the user DOES NOT have the new
	Emsmdb(32).dll, the following error message may be displayed when the user
	attempts to send the message:
	
	  The item could not be sent. The client operation failed.
	
	Note the following when you add the above registry key:
	
	- You do not have to stop and restart services for this change to take effect.
	
	- The number you choose applies to total recipients associated with a message
	  (To+Cc+Bcc=Total).
	
	- You cannot circumvent the limit by using a personal distribution list; it is
	  evaluated for number of entries before the send.
	
	- Server-based distribution lists allow you to exceed the total number of
	  recipients if you have proper permissions.
	
	NOTE: The new Emsmdb32.dll file referenced in this article is included in
	Exchange Server 4.0 SP2 and all later versions of Exchange Server.
	
	Additional query words: maximum xcln header restrict restrictions bedlam
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

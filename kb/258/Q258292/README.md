---
layout: page
title: "Q258292: XIMS: How to Disable Support for ETRN"
permalink: kb/258/Q258292/
---

## Q258292: XIMS: How to Disable Support for ETRN

	Article: Q258292
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Exchange Server supports the use of a Simple Mail Transfer Protocol (SMTP)
	extension called ETRN for dial-up connections that use Remote Access Service
	(RAS). After the client host submits the ETRN command to the server host, a new
	connection is established from the server host to the client host, and mail to
	the client host domain is retried immediately.
	
	MORE INFORMATION
	================
	
	You can disable ETRN by modifying the registry:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Using RegEdit
	-------------
	
	1. Start Regedit.exe.
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIMC\Parameters
	
	3. Click Edit, and then click New DWORD Value.
	
	4. Type "DisableETRN" (without the quotation marks). Under "Value data", type
	  "1" (without the quotation marks).
	
	Using RegEdt32
	--------------
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIMC\Parameters
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: DisableETRN
	  Data Type: REG_DWORD
	  Value: 1
	
	4. Quit Registry Editor.
	
	For more information about how to use ETRN, see Microsoft Exchange Server
	Concepts and Planning, and Request for Comments (RFC) 1985, "SMTP Service
	Extension for Remote Message Queue Starting."
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

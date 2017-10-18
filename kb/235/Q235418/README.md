---
layout: page
title: "Q235418: XADM: Cannot Apply Service Pack on KM Server"
permalink: kb/235/Q235418/
---

## Q235418: XADM: Cannot Apply Service Pack on KM Server

	Article: Q235418
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to apply a Microsoft Exchange Server 5.5 service pack on a Key
	Management (KM) server, the following error message may be displayed when the
	Update.exe program attempts to determine which version of the Kmserver.exe file
	is installed on the computer:
	
	  The system cannot find the file specified.
	
	CAUSE
	=====
	
	This problem can occur when the KM server password has been added to the
	ImagePath registry value under the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeKMS
	
	WORKAROUND
	==========
	
	Remove the KM server password from the ImagePath registry value. To do so, use
	the following steps.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the ImagePath value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeKMS
	
	3. On the Edit menu, click String, remove the KM server password, and then click
	  OK. When you are finished modifying the value, it should contain the full
	  path to Kmserver.exe file only. By default, the value is set to
	  C:\Exchsrvr\Bin\Kmserver.exe.
	
	4. Quit Registry Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

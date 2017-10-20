---
layout: page
title: "Q285883: XADM: Error Message Occurs When You Install Exchange Server 5.5"
permalink: /kb/285/Q285883/
---

## Q285883: XADM: Error Message Occurs When You Install Exchange Server 5.5

{% raw %}

	Article: Q285883
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you install Exchange Server 5.5 on a server that is running either
	Microsoft Windows 2000 or Microsoft Windows NT 4.0, you may receive the
	following error message:
	
	  You must be logged in to a Windows NT Domain to run Microsoft Exchange Server
	  Setup.
	
	CAUSE
	=====
	
	This issue can occur if the automatic administrative logon functionality is
	enabled. This functionality is enabled if the following if the registry value is
	set to 1:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows
	  NT\CurrentVersion\Winlogon\AutoAdminLogon
	
	Some programs enable this functionality by default to facilitate long or
	complicated installation routines. You can also enable this functionality
	manually.
	
	For additional information about how to enable this functionality manually, click
	the article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q97597 How to Enable Automatic Logon in Windows NT 3.x and 4.0
	
	  Q97597 How to Enable Automatic Logon in Windows 2000
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows
	  NT\CurrentVersion\Winlogon\AutoAdminLogon
	
	3. Double-click AutoAdminLogon, and then type "O" (without the quotation marks)
	  in the Data box.
	
	4. Quit Registry Editor.
	
	5. Log off of the server.
	
	6. Log back on using the appropriate account to install Exchange Server 5.5.
	
	7. Restart Exchange Server 5.5 Setup.
	
	Additional query words: smallbiz exch2kp2w
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q318492: XADM: &quot;Access Denied&quot; Err Msg Occurs Starting Exchange Admin"
permalink: /kb/318/Q318492/
---

## Q318492: XADM: &quot;Access Denied&quot; Err Msg Occurs Starting Exchange Admin

{% raw %}

	Article: Q318492
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you start the Microsoft Exchange Server 5.5 Administrator program, you may
	receive the following error message:
	
	  Window Title: Microsoft Exchange Administrator
	  Access denied.
	  Microsoft Windows NT ID no: 0xc0020005
	
	However, you can start the Exchange Server 5.5 Administrator program from other
	computers on the network.
	
	CAUSE
	=====
	
	This behavior can occur if the account that you are using to run the Exchange
	Server 5.5 Administrator program does not have at least Read permissions on the
	following registry key:
	
	  "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Exchange\Setup"
	
	Microsoft recommends that the Everyone group (or the Authenticated Users group)
	at least have Read permission on all subkeys of the following key:
	
	  "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Exchange"
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this behavior:
	
	1. At a command prompt, start Registry Editor (Regedt32.exe).
	
	2. Locate, and then click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Exchange\Setup
	
	3. On the Security menu, click Permission.
	
	4. Grant Read permission to the account that you want to use to start the
	  Exchange Server 5.5 Administrator program.
	
	To prevent future problems, grant Read access to the Everyone group (or to the
	Authenticated Users group).
	
	MORE INFORMATION
	================
	
	For additional information about the "Access Denied" error message when you
	start the Exchange Server 5.5 Administrator program, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q170472 XADM: Access Denied Error When Starting Exchange Administrator
	
	Additional query words: 0xc0020005 kbexchangesearch exch2kp2w
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q324332: XADM: Error Message: Extension 'SMTP' Could Not Be Loaded"
permalink: /kb/324/Q324332/
---

## Q324332: XADM: Error Message: Extension 'SMTP' Could Not Be Loaded

{% raw %}

	Article: Q324332
	Product(s): Microsoft Exchange
	Version(s): 2000,5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, used with:
	   - Microsoft Windows 2000 Server 
	   - Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to view the Internet Mail Service properties in the Microsoft
	Exchange Server Administrator program, you may receive the following error
	message:
	
	  Extension 'SMTP' could not be loaded. A problem occurred with the extension
	  .DLL file, possibly due to memory shortage. Close some applications or
	  windows, and try again.
	  Microsoft Exchange Administrator.
	  ID no: c10312c6
	
	If you click Ignore in this error message, and then click the Diagnostics Logging
	tab, you may receive the following error message:
	
	  The network path was not found
	
	  Microsoft Windows NT
	  ID no: 0xc0020035
	
	If you try to reapply Service Pack 4 (SP4) for Exchange Server 5.5, you may
	receive the following error message:
	
	  Processing file <Drive>:\Sp4\Eng\Server\Setup\I386\Shared.ins at or
	  near line 7
	  File not found
	  NT ID: 0xC0020035
	
	CAUSE
	=====
	
	This behavior may occur if the Remote Registry service in Windows 2000 is not
	running.
	
	RESOLUTION
	==========
	
	To resolve the behavior, start the Windows 2000 Remote Registry service.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Exchange Server 5.5 must have remote access to the registry even if the
	installation of Exchange Server is local to the server.
	
	For additional information about Exchange Server 5.5 and the Windows 2000 Remote
	Registry service, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q247407 XADM: Error Message Installing Exchange Server on a Computer Running
	  Windows 2000 Server
	
	
	Additional query words: connector
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : :2000,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

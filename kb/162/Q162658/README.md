---
layout: page
title: "Q162658: XCLN: Exchange Setup for Windows NT Fails on Emsmdb32.dll"
permalink: /kb/162/Q162658/
---

## Q162658: XCLN: Exchange Setup for Windows NT Fails on Emsmdb32.dll

{% raw %}

	Article: Q162658
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the Setup program for the Microsoft Exchange Windows NT client, the
	system may hang for a long time and then display the following error message:
	
	  Setup could not remove the file C:\WINDOWS\SYSTEM32\EMSMDB32.DLL
	  This file is currently being used buy another application. Close any
	  open applications.
	
	CAUSE
	=====
	
	Setup.exe for the Windows NT Exchange client runs on the Exchange Server
	computer. The System Attendant service in use by the Microsoft Exchange Server
	computer uses Emsmdb32.dll.
	
	WORKAROUND
	==========
	
	It is recommended to stop the Exchange related services before you attempt to
	run the client Setup.
	
	NOTE: The following steps shut down the Exchange Server computer and all of its
	respective processes.
	
	To shut down the Exchange services:
	
	1. From Control Panel, click Services.
	
	2. Select the Microsoft Exchange System Attendant service.
	
	3. Click the Stop button.
	
	4. When you are prompted to stop the other dependent Exchange services, click
	  OK.
	
	After Setup is complete, the services may be restarted normally.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT
	Version           : WinNT:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

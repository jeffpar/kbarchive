---
layout: page
title: "Q187710: IIS 4.0 Installation Error: CoGetClassObject, 0x80080005 Server"
permalink: /kb/187/Q187710/
---

## Q187710: IIS 4.0 Installation Error: CoGetClassObject, 0x80080005 Server

{% raw %}

	Article: Q187710
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT version 4.0 Option Pack 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Setup program for the Windows NT Option Pack, you may receive
	the following error message:
	
	  CoGetClassObject, 0x80080005 Server Execution Failed.
	
	Also, the event viewer may contain these logs:
	
	  Service Control Manager. Event ID 7003
	  The IIS Admin Service depends on the following non-existent service:
	  Protected Storage
	
	  DCOM Event ID 10005
	  DCOM got error "The Dependency Service does not exist or has been
	  marked for deletion" Attempting to start the service IIS Admin with
	  arguments " " in order to run the server:
	  (a9e69610-b80d-11d0-b9b9-00a0c922e750)
	
	CAUSE
	=====
	
	This problem can occur when the Protected Storage, RPC Configuration, or Windows
	NT LM Security Support Provider is not started, is not installed, or has become
	corrupt.
	
	RESOLUTION
	==========
	
	To resolve the problem, use one of the following methods:
	
	- Start the service that is not started.
	
	  1. In Control Panel, click Services.
	
	  2. Start the Remote Procedure Call (RPC) service.
	
	-or-
	
	- If you cannot start the RPC Service through Control Panel, install and add
	  the RPC Configuration service.
	
	  1. In Control Panel, click Network, and then click Services.
	
	  2. In Services, add the RPC Configuration service.
	
	     NOTE: You will need to use the Windows NT 4.0 compact disc to perform this
	     step.
	
	  3. Reapply the current or latest service pack.
	
	-or-
	
	- Remove and reinstall the corrupted RPC Configuration service.
	
	CAUTION: The Protected Storage service is installed by Internet Explorer 4.01.
	Before reinstalling Internet Explorer 4.01, make the necessary backups to
	services that are dependent on Internet Explorer, such as Internet Information
	Server (IIS), Proxy Server, and Site Server. After reinstalling Internet
	Explorer, reinstall the services that are dependent on Internet Explorer.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q187870 : How to Remove and Reinstall the Windows NT 4.0 Option Pack
	
	Additional query words: IE
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbiisSearch kbiis400 kbWinNT400OptionPack
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q299293: XADM: Entering an OWA Password Invalidates Your Proxy Password"
permalink: /kb/299/Q299293/
---

## Q299293: XADM: Entering an OWA Password Invalidates Your Proxy Password

{% raw %}

	Article: Q299293
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbExchange550
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Exchange Server 5.0, if you are actively running Outlook Web Access (OWA),
	Internet Information Server (IIS) 4.0, or Netscape Proxy server, or a
	combination of these programs, the proxy password may become invalid when you
	try to enter an OWA password to connect to your mailbox.
	
	CAUSE
	=====
	
	This behavior occurs because the proxy server and the OWA server require
	different passwords. Because OWA server and IIS do not specify realms by
	default, entering the OWA password invalidates the proxy password.
	
	RESOLUTION
	==========
	
	To resolve this behavior, set the realm in IIS:
	
	1. Set the realm in IIS by running the following command:
	
	  %systemroot%\system32\cscript.exe
	  %systemroot%\system32\inetsrv\adminsamples\adsutil.vbs set w3svc/realm
	  <realm_name>
	
	Note that you must enter this command all on one line. You can copy this
	information into a .bat file, and then run the command.
	
	2. Make certain that the /Exchange virtual directory is set to basic
	  authentication.
	
	The proxy server will prompt you, and then IIS will prompt you, with the proper
	realm displayed, before loading the Logon.asp file. After you enter your e-mail
	alias and then click click here, the mailbox opens without any more prompts.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

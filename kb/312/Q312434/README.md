---
layout: page
title: "Q312434: XADM: OWA Error When Users Try to Gain Access to Messages"
permalink: /kb/312/Q312434/
---

## Q312434: XADM: OWA Error When Users Try to Gain Access to Messages

{% raw %}

	Article: Q312434
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 09-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Users may receive the following error messages when they attempt to gain access
	to their messages through Outlook Web Access (OWA):
	
	  File /exchange/USA/root.asp Unexpected error.
	
	When you view the Event log on the computer that runs OWA and Microsoft Internet
	Information Server (IIS) version 4.0, Event ID 5 may be reported for Active
	Server Pages.
	
	RESOLUTION
	==========
	
	To resolve this issue, reregister the Asp.dll file:
	
	1. On the computer that runs IIS and OWA, start a command prompt.
	
	2. At the command prompt, change to the %WINNT%\System32\Inetsrv folder.
	
	3. Type the following command, and then press ENTER to reregister the file:
	
	  regsvr32 asp.dll
	
	4. Restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

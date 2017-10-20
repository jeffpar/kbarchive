---
layout: page
title: "Q274442: Windows 95/98/Me Users Cannot Process a Logon Script"
permalink: /kb/274/Q274442/
---

## Q274442: Windows 95/98/Me Users Cannot Process a Logon Script

{% raw %}

	Article: Q274442
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2000,2000 SP1
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 22-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows versions 2000, 2000 SP1 Server 
	- Microsoft Windows 98 
	- Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Users that log on to Microsoft Windows 95-based, Microsoft Windows 98-based, and
	Microsoft Windows Millennium Edition-based clients cannot process the logon
	script assigned to their domain user accounts. However, when the same user logs
	on to the domain from a Microsoft Windows NT 4.0-based or Microsoft Windows
	2000-based computer, the logon script processes properly.
	
	CAUSE
	=====
	
	This behavior can occur because Windows 95, Windows 98, and Windows Millennium
	Edition operating systems cannot process the .cmd extension.
	
	RESOLUTION
	==========
	
	To resolve this behavior, you can use either of the following two methods:
	
	- Change the extension on the file from .cmd to .bat.
	
	-or-
	
	- Associate the .cmd extension with Command.com.
	
	MORE INFORMATION
	================
	
	The preceding clients do not support the use of long file names with logon
	scripts. Use Microsoft MS-DOS version 8.3 naming conventions when you name the
	logon script file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbwin2000ServSearch
	Version           : :2000,2000 SP1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

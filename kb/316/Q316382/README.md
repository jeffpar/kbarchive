---
layout: page
title: "Q316382: The &quot;SNACFG USER&quot; Command Does Not Work for Long User Names"
permalink: /kb/316/Q316382/
---

## Q316382: The &quot;SNACFG USER&quot; Command Does Not Work for Long User Names

{% raw %}

	Article: Q316382
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The user function in Snacfg.exe lists information about a user in the
	configuration file. The syntax of the command is:
	
	  snacfg #com.cfg user <domainname>\<username>
	
	If you use this command with a user name (including the domain name) that is
	longer than 20 characters, one of the following symptoms occurs:
	
	- Snacfg returns a "User not found" error message.
	
	- Snacfg returns information about an incorrect user. This symptom occurs if
	  another user name that is exactly 20 characters long and matches the first 20
	  characters of the requested user name exists in the configuration file.
	
	CAUSE
	=====
	
	These symptoms occur because Snacfg truncates the username parameter after 20
	characters.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in SNA Server 4.0 and Host
	Integration Server 2000.
	
	
	Additional query words: HIS HIS2000
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

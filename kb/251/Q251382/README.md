---
layout: page
title: "Q251382: PPTP Connection Does Not Transfer Any Data over the Connection"
permalink: /kb/251/Q251382/
---

## Q251382: PPTP Connection Does Not Transfer Any Data over the Connection

{% raw %}

	Article: Q251382
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you connect to a PPTP server, you may not be able to transfer any data
	over the connection.
	
	CAUSE
	=====
	
	This issue can occur if all of the following statements are true:
	
	- The PPTP server is running Windows NT 4.0 Service Pack 5 or later.
	- The PPTP client is running Windows NT 4.0 Service Pack 4 or earlier.
	- The client password includes the German "Paragraph" sign (ANSI 167), also
	  referenced as "Section Sign" symbol.
	- You are forcing data encryption over the connection.
	
	RESOLUTION
	==========
	
	To resolve this issue, upgrade the client computer to use Microsoft Windows NT
	4.0 Service Pack 5 or later.
	
	To work around this issue, change the password. Do not use the German "Paragraph"
	sign in your password.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post more information here in the
	Microsoft Knowledge Base when it becomes available.
	
	Additional query words: encryption PPTP
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

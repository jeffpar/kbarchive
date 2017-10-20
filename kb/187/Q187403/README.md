---
layout: page
title: "Q187403: Reinstalling the Client Chooses the Incorrect Path"
permalink: /kb/187/Q187403/
---

## Q187403: Reinstalling the Client Chooses the Incorrect Path

{% raw %}

	Article: Q187403
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are in an environment where the Terminal Server Client might be installed
	from several locations, be aware that, if you choose to reinstall the Terminal
	Server Client, it will try to reinstall from the original Client software
	directory, regardless of from where you want to install.
	
	CAUSE
	=====
	
	This is caused by the software retaining its initial installation path.
	
	RESOLUTION
	==========
	
	To work around the problem, choose to uninstall the Terminal Server Client
	before reinstalling the client.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}

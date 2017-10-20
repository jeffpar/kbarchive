---
layout: page
title: "Q184813: BUG: Windows 95 Clients Cannot View Server Using Net View"
permalink: /kb/184/Q184813/
---

## Q184813: BUG: Windows 95 Clients Cannot View Server Using Net View

{% raw %}

	Article: Q184813
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0,4.0a
	Operating System(s): 
	Keyword(s): sbs
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a Microsoft BackOffice Small Business Server or
	Windows NT Server from a Windows 95 client using Net View \\<servername>,
	the following error occurs:
	
	  Error 234: Additional Data is available.
	
	CAUSE
	=====
	
	This error occurs if there are any share names on the server that are 13 or more
	characters in length and whether the client is connected on the LAN or through
	RAS.
	
	RESOLUTION
	==========
	
	Delete any shares with names of 13 or more characters and recreate them with
	less than 13 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : sbs 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : WinNT:4.0,4.0a
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q152337: Problems Disabling DNS for Windows Resolution"
permalink: kb/152/Q152337/
---

## Q152337: Problems Disabling DNS for Windows Resolution

	Article: Q152337
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you disable the use of DNS for Windows name resolution, you may find that
	DNS is still used to resolve names with more than 15 characters or names that
	contain a '.' (period).
	
	RESOLUTION
	==========
	
	Perform the following steps to successfully disable the use of DNS for Windows
	name resolution:
	
	1. Click the Start button, point to Settings, click Control Panel, and then
	  double-click Network.
	
	2. Click the Protocols tab, click TCP/IP Protocol, and then click Properties.
	
	3. Click the WINS Address tab and then click Enable DNS For Windows Resolution
	  so that it is not selected.
	
	4. Click the DNS tab, remove any servers listed in the DNS Service Search Order
	  dialog box, and then click OK.
	
	5. Shut down and restart the computer.
	
	NOTE: If DNS servers are needed for DNS lookups you can now reenter them in the
	DNS Service Search Order dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 3.51
	
	=============================================================================
	

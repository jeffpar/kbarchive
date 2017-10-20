---
layout: page
title: "Q242153: Canceling SP4 Uninstallation Leaves Terminal Server in Install M"
permalink: /kb/242/Q242153/
---

## Q242153: Canceling SP4 Uninstallation Leaves Terminal Server in Install M

{% raw %}

	Article: Q242153
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbtool
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you uninstall Service Pack 4 (SP4) by using Spuninst.exe, you are prompted
	to confirm that you want to uninstall the service pack. If you click No to
	cancel the uninstallation, the terminal server is left in Install mode.
	
	RESOLUTION
	==========
	
	To work around this problem, use any of the following methods:
	
	- Uninstall the service pack by using the Add/Remove Programs tool in Control
	  Panel. This method places the server back in Execute mode.
	
	- Type "change user /execute" (without the quotation marks) at a command prompt
	  to place the server back in Execute mode.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about the change command, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q186504 Terminal Server Commands: CHANGE
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

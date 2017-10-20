---
layout: page
title: "Q129234: Net Watcher Continues to List Disconnected Client"
permalink: /kb/129/Q129234/
---

## Q129234: Net Watcher Continues to List Disconnected Client

{% raw %}

	Article: Q129234
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running the "File and printer sharing for NetWare Networks" network
	service, Net Watcher reports that another computer is still connected to your
	computer, even though the other computer has disconnected from your computer.
	Quitting and restarting Net Watcher, or pressing the F5 key to refresh the
	display, does not eliminate the problem.
	
	CAUSE
	=====
	
	Even after the other computer has disconnected, a low-level connection exists
	between the two computers. Net Watcher is reporting that this low- level
	connection exists.
	
	RESOLUTION
	==========
	
	To completely disconnect the other computer from your computer so that the
	connection is not shown in Net Watcher, use either of the following methods:
	
	- In Net Watcher, click the computer you want to disconnect, then click
	  Disconnect User on the Administer menu.
	
	- Quit and then restart Windows 95.
	
	MORE INFORMATION
	================
	
	A client computer connected to a Windows 95 computer that is running the "File
	and printer sharing for NetWare Networks" network service generally uses the
	same connection for all processes that need access to the Windows 95 computer.
	Therefore, disconnecting a single network drive does not break this single
	connection to the remote server. The connection remains and is visible in Net
	Watcher until the local connection table on the remote server is full.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}

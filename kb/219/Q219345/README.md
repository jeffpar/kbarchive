---
layout: page
title: "Q219345: CSNW May Connect to Multiple Servers When Logging On to NDS Tree"
permalink: /kb/219/Q219345/
---

## Q219345: CSNW May Connect to Multiple Servers When Logging On to NDS Tree

	Article: Q219345
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you configure Microsoft Gateway (and Client) Services for NetWare
	(GSNW/CSNW) to use the Default Tree and Context logon option, your computer may
	connect to multiple servers in different contexts.
	
	CAUSE
	=====
	
	This problem occurs when you log on through a Novell NetWare Directory Services
	(NDS) tree containing more than one NetWare server. You may not be able to
	establish a connection to the server that responds to the GSNW/CSNW client's
	GetNearestServer (GNS) request. It is possible to use a connection to one server
	for authentication and logon, while using other licensed connections to other
	servers for mapped resources. This may create redundant licensed connections to
	multiple servers and has the potential to more than double the required number
	of licensed connections.
	
	RESOLUTION
	==========
	
	To resolve this issue, apply the hotfix listed below to your computer. This fix
	allows you to specify which server you run your authentication credentials
	against, giving you the ability to use the same computer for authentication and
	resource usage.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Then perform the following steps to modify the Windows NT registry:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. On the Windows menu, click "HKEY_LOCAL_ MACHINE on Local Machine".
	
	3. Double-click \System\CurrentControlSet\Services\NWCWorkstation\
	  Parameters\Option\<user's sid>.
	
	4. Double-click NDSPreferredServer, type the name of the preferred NetWare
	  server to log on to for your default connection to the Novell network, and
	  then click OK.
	
	5. Quit Registry Editor, and then restart the computer.
	
	NOTE: This setting is not available for use until the GSNW/CSNW user profile has
	been created after the first logon using CSNW.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT Server 4.0. This
	problem was first corrected in Windows NT version 4.0 Service Pack 5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

---
layout: page
title: "Q280323: Encryption Level Is Displayed as &quot;N/A&quot; on RDP Clients"
permalink: kb/280/Q280323/
---

## Q280323: Encryption Level Is Displayed as &quot;N/A&quot; on RDP Clients

	Article: Q280323
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbTermServ kbWin2000FixNoSP
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view connection information by using Terminal Server Administrator, the
	encryption level setting is displayed as N/A even though the encryption levels
	on the Remote Desktop Protocol (RDP) client are set to either Low, Medium, or
	High.
	
	RESOLUTION
	==========
	
	This issue has been fixed in Microsoft Windows 2000 Terminal Services which is
	included in Windows 2000 Server Family of Products.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	To verify the current encryption level of the server, check the
	MinEncryptionLevel value data in the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Terminal
	  Server\WinStations\rdp-tcp\
	
	The MinEncryptionLevel value can have any of the following settings:
	
	- 1 = Low
	
	- 2 = Medium
	
	- 3 = High
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q186602 Terminal Server's Three Levels of Security
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbTermServ kbWin2000FixNoSP 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	

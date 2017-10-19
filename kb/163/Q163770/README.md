---
layout: page
title: "Q163770: Cannot Log On to Windows NT Domain w/ DNS Name Resolution Only"
permalink: /kb/163/Q163770/
---

## Q163770: Cannot Log On to Windows NT Domain w/ DNS Name Resolution Only

	Article: Q163770
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork osr2 win95
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Windows 95 TCP/IP client without WINS or LMHOSTS entries tries to log on to
	a Windows NT domain over a routed IP network, the logon may not succeed and you
	may receive an error message similar to the following message:
	
	  No domain server was available to validate your password. You may not be able
	  to gain access to some network resources.
	
	CAUSE
	=====
	
	To log on to a Windows NT domain, clients must be able to resolve the
	domain<1C> NetBIOS name. Windows 95 clients can resolve only NetBIOS names
	ending in <00> and <20> when using DNS.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	If you receive this error message when you dial into a remote network, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q154434 Err Msg: No Domain Controller Was Available to Validate...
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	Issue type        : kbprb
	
	=============================================================================
	

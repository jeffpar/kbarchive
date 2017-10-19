---
layout: page
title: "Q240365: W32time Does Not Clean and Modify Registry After Changing Role"
permalink: /kb/240/Q240365/
---

## Q240365: W32time Does Not Clean and Modify Registry After Changing Role

	Article: Q240365
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The W32time tool from the Microsoft Windows NT 4.0 does not clean and modify the
	registry after it is changed from a master to a primary role. This causes excess
	traffic on the network and requires manual editing to set the proper timer
	server.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	it has not been fully regression tested and should be applied only to computers
	that are experiencing this specific problem.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Version      Size    File name   Platform
	  -----------------------------------------------------------
	  07/08/99  04:58p  5.0.2092.1  35,840  W32time.doc  Intel
	  07/07/99  01:40p  5.0.2092.1   2,451  W32time.ini  Intel
	  08/17/99  09:59a  5.0.2092.1  72,704  W32time.exe  Intel
	  07/08/99  04:58p  5.0.2092.1  35,840  W32time.doc  Alpha 
	  07/07/99  01:40p  5.0.2092.1   2,451  W32time.ini  Alpha
	  08/16/99  04:37p  5.0.2092.1  78,848  W32time.exe  Alpha
	
	
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this behavior, manually edit the Time Server values in the
	registry and remove the old keys.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	NOTE: This article provides information about a tool that is not supported by
	Microsoft. All Resource Kits utilities are provided AS-IS unless specifically
	noted otherwise. This article is provided for informational purposes only;
	Microsoft makes no guarantee that this tool functions properly.
	
	The updated W32Time utility for Windows NT that is available for download should
	only be deployed if you are already using W32Time with Windows NT. If you have
	not deployed W32Time on Windows NT please use the TimeServ utility that is
	available with the Windows NT 4.0, Supplement 4 Resource Kit. If you are using
	Windows 2000 please use W32Time that is included with the Windows 2000 operating
	system.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

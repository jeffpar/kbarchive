---
layout: page
title: "Q242118: Connection Issues with Seagate Backup Exec Version 7.0 Build 719"
permalink: kb/242/Q242118/
---

## Q242118: Connection Issues with Seagate Backup Exec Version 7.0 Build 719

	Article: Q242118
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kberrmsg kbui
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you use the Messenger service after upgrading to Seagate Backup Exec
	version 7.0 (build 719, shipped in March 1998), you may experience one or more
	of the following symptoms:
	
	- Your remote connections may be disconnected.
	
	- You may receive a message that prompts you to re-establish your remote
	  connections.
	
	- Your computer may stop responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur because of a problem in Seagate Backup Exec version 7.0,
	build 719, that was corrected in Seagate Backup Exec version 7.0, build 719.2,
	released in April 1998. When you install this specific build, the installation
	process deletes the MaxRequestThreads=16 value data from the registry.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, upgrade to Seagate Backup Exec version 7.0, build 719.2 or
	later, or contact VERITAS Software (merged with Seagate Software NSMG in May
	1999) to inquire about the availability of a fix for this issue:
	
	  http://www.veritas.com/us/ (http://www.veritas.com/us/)
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	To work around this issue, use Registry Editor to add the MaxRequestThreads=16
	value data to the Windows value in the following registry key:
	
	NOTE: If there is other information in the Value Data box, type a space at the
	end of the text, and then type "MaxRequestThreads=16" (without the quotation
	marks).
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager\Subsystems\ 
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: kb3rdparty
	
	======================================================================
	Keywords          : kb3rdparty kbenv kberrmsg kbui 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

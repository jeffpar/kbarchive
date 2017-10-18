---
layout: page
title: "Q148426: Troubleshooting Event ID 3013"
permalink: kb/148/Q148426/
---

## Q148426: Troubleshooting Event ID 3013

	Article: Q148426
	Product(s): Microsoft Windows NT
	Version(s): ; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	Error 3013, "The redirector has timed out to SERVERNAME" usually means that the
	Server that you are attempting to connect to is:
	
	- Either busy and cannot respond before the rdr timeout
	
	- The network could be busy
	
	- Bottleneck in the network
	
	As to troubleshooting this problem, you may want to exhaust all means before
	deciding to increase the amount of time before the redirector stops
	(SESSTIMEOUT). The SESSTIMEOUT parm can be set in the following registry
	location:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LanmanWorkstation\Parameters
	
	Some things you can try are to obtain a trace of the packets on the network. You
	want to zoom in on the amount of time it takes for the Server to respond back to
	the workstation.
	
	Another idea is to perform what ever operations that was done backwards. If you
	were connecting to ServerA from ServerB, try connecting to ServerB from ServerA.
	Also have another client attempt to connect to the same server to see if both
	redirectors have the same problem connecting to the same server.
	
	You may also want to check the following items:
	
	- Check to see that the latest network driver is installed.
	
	- Check to determine whether the network adapter has a configuration utility
	  that allows tuning parameters. If so, try maximizing the network performance.
	
	MORE INFORMATION
	================
	
	Valid values for the SessTimeout registry key are:
	
	  SessTimeout   REG_DWORD
	  Range: 10 - 65535 seconds
	  Default: 45
	
	Additional query words: event id
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :; winnt:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

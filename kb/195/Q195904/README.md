---
layout: page
title: "Q195904: NTVDM Is Not Initialized After TCP/IP Removal"
permalink: /kb/195/Q195904/
---

## Q195904: NTVDM Is Not Initialized After TCP/IP Removal

{% raw %}

	Article: Q195904
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork 3rdpartynet kb3rdPartyNetClient
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After you remove TCP/IP from a computer that has the Novell Intranetware Client
	4.11 software installed, you may receive the following error message:
	
	  NTVDM.EXE dll initialization failed
	  Vwipxspx.dll failed
	  The process is terminating abnormally
	
	CAUSE
	=====
	
	This behavior can occur if the registry entries for the IPX and TCP/IP protocols
	bound to the network adapter are incorrect or damaged.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	To resolve this issue, delete all TCP/IP keys in the registry and then reinstall
	the Novell client software. To remove the TCP/IP registry keys, see the
	following article in the Microsoft Knowledge Base.
	
	  Q151237 Error Message When Installing TCP/IP or Adding TCP/IP Service
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed above.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: netware
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 3rdpartynet kb3rdPartyNetClient 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

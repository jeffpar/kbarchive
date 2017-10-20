---
layout: page
title: "Q168231: System Policies Are Not Applied in Windows NT"
permalink: /kb/168/Q168231/
---

## Q168231: System Policies Are Not Applied in Windows NT

{% raw %}

	Article: Q168231
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	System policies may not be applied on Microsoft Windows NT-based computers or
	Microsoft Windows 95 client computers.
	
	CAUSE
	=====
	
	This behavior can occur if you set the value of the UpdateMode DWORD value in
	the registry to "0." This setting disables the use of system policies.
	
	In addition, if you set the same value to "0" on a Windows 2000 computer, then
	the NT 4.0 domain-based system policies are not applied.
	
	This setting may be set to a default value of zero on some Original Equipment
	Manufacturer (OEM) versions of Windows NT.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Change the data value of the UpdateMode value to 1. This value is located in the
	following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Update
	
	The following table lists valid settings for the UpdateMode DWORD value.
	
	  Setting   Description
	  ----------------------------------------------------------------------
	  0         System policies are disabled.
	  1         Automatic mode. Search for a system policy file named
	            Ntconfig.pol in the authenticating server's Netlogon share.
	            This is the default value.
	  2         Manual mode: Search for the specified system policy file in
	            the location specified by the optional NetworkPath SZ value.
	
	An UpdateMode data value of 2 requires an additional SZ value called NetworkPath
	that specifies a local or network system policy path and file name.
	
	The following samples demonstrate valid entries for the NetworkPath value:
	
	  \\<Servername>\<Sharename>\<Filename>
	
	  C:\<Directoryname>\<Filename>
	
	The file name does not require a .pol extension, although you may want to do so
	for file identification.
	
	Additional query words: updated
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

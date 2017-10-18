---
layout: page
title: "Q321316: BUG: The EnableDNS Method May Return Error Code 94"
permalink: kb/321/Q321316/
---

## Q321316: BUG: The EnableDNS Method May Return Error Code 94

	Article: Q321316
	Product(s): Miscellaneous Software Development Kits
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Software Development Kit, used with:
	   - the operating system: Microsoft Windows XP 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If you use Windows Management Instrumentation (WMI) on a new (or "clean")
	installation of Windows XP to turn on Domain Name System (DNS), calling the
	EnableDNS method of the Win32_NetworkAdapterConfiguration class may generate
	return code 94 ("Path, file, or object not found").
	
	CAUSE
	=====
	
	This behavior occurs if the Windows XP-based computer does not contain a
	NetCfgInstanceId string value under the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Class\{4D36E972-E325-11CE-BFC1-08002bE10318}\0000
	
	If this string value does not exist, the EnableDNS method stops processing
	prematurely.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this problem, create a NetCfgInstanceID string value under the
	registry key that is mentioned earlier in this article. You can leave the data
	value of the new string value blank, or set it to any value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows XP.
	
	REFERENCES
	==========
	
	For more information about the EnableDNS method, see the MSDN library
	documentation about WMI and the Win32_NetworkAdapterConfiguration class. To do
	so, visit the following Microsoft Web site:
	
	  http://msdn.microsoft.com/library/default.asp
	
	Additional query words: WBEM Winmgmt SWbemServices IWbemServices ExecMethod ExecMethodAsync
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbAudDeveloper kbSDKSearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
